import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import banner from 'vite-plugin-banner';
import compression from 'vite-plugin-compression';
import importCDN, { autoComplete } from 'vite-plugin-cdn-import';
import * as proxy from 'http2-proxy';
import { readdirSync, readFileSync } from 'fs';

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
                    proxy.web(req, res, {
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
    const dirents = readdirSync(dir, {
        withFileTypes: true
    });
    for (const dirent of dirents) {
        const path = dir + dirent.name;
        if (dirent.isDirectory()) {
            svgRes.push(...findSvgFile(`${path}/`));
        }
        else {
            const svg = readFileSync(path)
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
            banner(`/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: ${pkg.author}\n * version: ${pkg.version}\n * copyright: ${pkg.copyright}\n */`),
            legacy({
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
            react(),
            httpProxy({
                '/api': {
                    target: process.env.REACT_APP_API_URL,
                    changeOrigin: true,
                    secure: false,
                    rewrite: (url) => url.replace(/^\/api/, '')
                }
            }),
            svgBuilder('svgs/'),
            compression({
                verbose: true,
                disable: false,
                deleteOriginFile: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz'
            }),
            importCDN({
                modules: [autoComplete('react'), autoComplete('react-dom')],
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
                            '@emotion/react',
                            '@emotion/styled',
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

export { baseConfig };
