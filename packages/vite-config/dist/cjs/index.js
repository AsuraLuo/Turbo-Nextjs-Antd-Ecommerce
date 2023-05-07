"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseConfig = void 0;
const plugin_react_swc_1 = __importDefault(require("@vitejs/plugin-react-swc"));
const plugin_legacy_1 = __importDefault(require("@vitejs/plugin-legacy"));
const vite_plugin_banner_1 = __importDefault(require("vite-plugin-banner"));
const vite_plugin_compression_1 = __importDefault(require("vite-plugin-compression"));
const vite_plugin_cdn_import_1 = __importStar(require("vite-plugin-cdn-import"));
const plugin_1 = require("./plugin");
const baseConfig = (mode, pkg = {}) => {
    const isProd = mode === 'production';
    const config = {
        base: './',
        envPrefix: 'REACT_',
        plugins: [
            (0, vite_plugin_banner_1.default)(`/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: ${pkg.author}\n * version: ${pkg.version}\n * copyright: ${pkg.copyright}\n */`),
            (0, plugin_legacy_1.default)({
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
            (0, plugin_react_swc_1.default)(),
            (0, plugin_1.httpProxy)({
                '/api': {
                    target: process.env.REACT_APP_API_URL,
                    changeOrigin: true,
                    secure: false,
                    rewrite: (url) => url.replace(/^\/api/, '')
                }
            }),
            (0, plugin_1.svgBuilder)('svgs/'),
            (0, vite_plugin_compression_1.default)({
                verbose: true,
                disable: false,
                deleteOriginFile: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz'
            }),
            (0, vite_plugin_cdn_import_1.default)({
                modules: [(0, vite_plugin_cdn_import_1.autoComplete)('react'), (0, vite_plugin_cdn_import_1.autoComplete)('react-dom')],
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
exports.baseConfig = baseConfig;
