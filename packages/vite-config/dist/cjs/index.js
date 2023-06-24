'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@vitejs/plugin-react-swc');
var legacy = require('@vitejs/plugin-legacy');
var banner = require('vite-plugin-banner');
var compression = require('vite-plugin-compression');
var importCDN = require('vite-plugin-cdn-import');
var proxy = require('http2-proxy');
var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var react__default = /*#__PURE__*/_interopDefaultLegacy(react);
var legacy__default = /*#__PURE__*/_interopDefaultLegacy(legacy);
var banner__default = /*#__PURE__*/_interopDefaultLegacy(banner);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var importCDN__default = /*#__PURE__*/_interopDefaultLegacy(importCDN);
var proxy__namespace = /*#__PURE__*/_interopNamespace(proxy);

const error = (message) => {
    throw new Error(message);
};
const httpProxy = (configOptions) => {
    const configure = ({ middlewares }) => {
        const result = Object.entries(configOptions);
        for (const [regexp, { target, rewrite, headers, secure = true }] of result) {
            const re = new RegExp(regexp);
            const tu = new URL(target);
            if (!tu.pathname.endsWith('/')) {
                tu.pathname += '/';
            }
            const protocol = /^https?:$/.test(tu.protocol)
                ? tu.protocol.slice(0, -1)
                : error(`Invalid protocol: ${tu.href}`);
            const port = 
            // eslint-disable-next-line no-nested-ternary
            tu.port === ''
                ? { https: 443, http: 80 }[protocol]
                : /^\d+$/.test(tu.port)
                    ? Number(tu.port)
                    : error(`Invalid port: ${tu.href}`);
            middlewares.use((req, res, next) => {
                if (req.url && re.test(req.url)) {
                    const url = (rewrite?.(req.url) ?? req.url).replace(/^\/+/, '');
                    const { pathname, search } = new URL(url, tu);
                    proxy__namespace.web(req, res, {
                        protocol,
                        port,
                        hostname: tu.hostname,
                        path: pathname + search,
                        onReq: async (_, options) => {
                            options.headers = {
                                ...options.headers,
                                ...headers
                            };
                        },
                        ['rejectUnauthorized']: secure
                    }, (err) => err && next(err));
                }
                else {
                    next();
                }
            });
        }
    };
    return {
        name: 'http2-proxy',
        configureServer: configure,
        configurePreviewServer: configure
    };
};

const findSvgFile = (dir) => {
    // 识别svg标签的属性
    const svgTitle = /<svg([^>+].*?)>/;
    // 有一些svg文件的属性会定义height和width，要把它清除掉
    const clearHeightWidth = /(width|height)="([^>+].*?)"/g;
    // 没有viewBox的话就利用height和width来新建一个viewBox
    const hasViewBox = /(viewBox="[^>+].*?")/g;
    // 清除换行符
    const clearReturn = /(\r)|(\n)/g;
    const svgRes = [];
    const dirents = fs.readdirSync(dir, {
        withFileTypes: true
    });
    for (const dirent of dirents) {
        const path = dir + dirent.name;
        if (dirent.isDirectory()) {
            svgRes.push(...findSvgFile(`${path}/`));
        }
        else {
            const svg = fs.readFileSync(path)
                .toString()
                .replace(clearReturn, '')
                .replace(svgTitle, (_$1, $2) => {
                let width = 0;
                let height = 0;
                let content = $2.replace(clearHeightWidth, (_s1, s2, s3) => {
                    s3 = s3.replace('px', '');
                    if (s2 === 'width') {
                        width = s3;
                    }
                    else if (s2 === 'height') {
                        height = s3;
                    }
                    return '';
                });
                if (!hasViewBox.test($2)) {
                    content += `viewBox="0 0 ${width} ${height}"`;
                }
                return `<symbol id="${dirent.name.replace('.svg', '')}" ${content}>`;
            })
                .replace('</svg>', '</symbol>');
            svgRes.push(svg);
        }
    }
    return svgRes;
};
const svgBuilder = (path) => {
    if (path === '')
        return;
    const result = findSvgFile(path);
    return {
        name: 'svg-transform',
        transformIndexHtml: (html) => {
            return html.replace('<body>', `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${result.join('')}
            </svg>
            <script>
              !(function(t) {
                function e() {
                  var e = this || self;
                  (e.globalThis = e), delete t.prototype._T_;
                }
                "object" !== typeof globalThis &&
                (this
                    ? e()
                    : (t.defineProperty(t.prototype, '_T_', {
                      configurable: !0,
                      get: e,
                    }),
                    _T_));
              })(Object);
            </script>
        `);
        }
    };
};

const baseConfig = (mode, pkg = {}) => {
    const isProd = mode === 'production';
    const config = {
        base: './',
        envPrefix: 'REACT_',
        plugins: [
            banner__default["default"](`/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: ${pkg.author}\n * version: ${pkg.version}\n * copyright: ${pkg.copyright}\n */`),
            legacy__default["default"]({
                targets: ['defaults', 'ie >= 9', 'chrome 52'],
                additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
                renderLegacyChunks: true,
                polyfills: [
                    'es.symbol',
                    'es.promise',
                    'es.promise.finally',
                    'es/map',
                    'es/set',
                    'es.array.filter',
                    'es.array.for-each',
                    'es.object.define-properties',
                    'es.object.define-property',
                    'es.object.get-own-property-descriptors',
                    'es.object.get-own-property-descriptor',
                    'es.object.keys',
                    'es.object.to-string',
                    'web.dom-collections.for-each',
                    'esnext.global-this',
                    'esnext.string.match-all'
                ]
            }),
            react__default["default"]({
                jsxImportSource: '@emotion/react',
                // babel: {
                //   plugins: ['@emotion/babel-plugin']
                // }
                plugins: [
                    [
                        '@swc/plugin-emotion',
                        {
                            sourceMap: true,
                            autoLabel: 'dev-only'
                        }
                    ]
                ]
            }),
            httpProxy({
                '/api': {
                    target: process.env.REACT_APP_API_URL,
                    changeOrigin: true,
                    secure: false,
                    rewrite: (url) => url.replace(/^\/api/, '')
                }
            }),
            svgBuilder('svgs/'),
            compression__default["default"]({
                verbose: true,
                disable: false,
                deleteOriginFile: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz'
            }),
            importCDN__default["default"]({
                modules: [importCDN.autoComplete('react'), importCDN.autoComplete('react-dom')],
                prodUrl: 'https://cdn.bootcdn.net/ajax/libs/{name}/{version}/{path}'
            }),
            process.env.REACT_APP_BUNDLE_VISUALIZE === '1' &&
                require('rollup-plugin-visualizer').visualizer({
                    open: true,
                    gzipSize: true,
                    brotliSize: true
                })
        ],
        build: {
            cssMinify: isProd,
            reportCompressedSize: !isProd,
            sourcemap: !isProd,
            rollupOptions: {
                output: {
                    manualChunks: {
                        runtime: [
                            'react-router-dom',
                            // '@emotion/react',
                            // '@emotion/styled',
                            '@reduxjs/toolkit',
                            'react-redux',
                            'redux-logger',
                            'use-http'
                        ],
                        intl: ['react-intl']
                    }
                }
            }
        }
    };
    return config;
};

exports.baseConfig = baseConfig;
