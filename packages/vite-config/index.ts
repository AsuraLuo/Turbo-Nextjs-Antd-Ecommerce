import { UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import banner from 'vite-plugin-banner'
import compression from 'vite-plugin-compression'
import importCDN, { autoComplete } from 'vite-plugin-cdn-import'

import { httpProxy, svgBuilder } from './plugin'

export const baseConfig = (mode: string, pkg: any = {}) => {
  const isProd: boolean = mode === 'production'

  const config: UserConfigExport = {
    base: './',
    envPrefix: 'REACT_',
    plugins: [
      banner(
        `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: ${pkg.author}\n * version: ${pkg.version}\n * copyright: ${pkg.copyright}\n */`
      ),
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
          rewrite: (url: string) => url.replace(/^\/api/, '')
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
  }

  return config
}
