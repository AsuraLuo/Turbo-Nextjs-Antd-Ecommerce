import { UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import banner from 'vite-plugin-banner'

import { httpProxy, svgBuilder } from './plugin'

export const baseConfig = (mode: string, pkg: any = {}) => {
  const isProd: boolean = mode === 'production'

  const config: UserConfigExport = {
    envPrefix: 'REACT_',
    plugins: [
      banner(
        `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: ${pkg.author}\n * version: ${pkg.version}\n * copyright: ${pkg.copyright}\n */`
      ),
      legacy({
        targets: ['defaults', 'not IE 11']
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
            // lodash: ['lodash']
          }
        }
      }
    }
  }

  return config
}
