import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import banner from 'vite-plugin-banner'

import { httpProxy } from './plugin'
import pkg from './package.json'

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), 'REACT_') }

  const isProd: boolean = mode === 'production'

  return defineConfig({
    envPrefix: 'REACT_',
    // optimizeDeps: {
    //   exclude: ['@ecommerce/ui']
    // },
    build: {
      reportCompressedSize: !isProd,
      sourcemap: !isProd
    },
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
      process.env.REACT_APP_BUNDLE_VISUALIZE === '1' &&
        require('rollup-plugin-visualizer').visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true
        })
    ],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './components/'),
        '@config': path.resolve(__dirname, './config/'),
        '@hooks': path.resolve(__dirname, './hooks/'),
        '@pages': path.resolve(__dirname, './pages/'),
        '@plugin': path.resolve(__dirname, './plugin/'),
        '@provider': path.resolve(__dirname, './provider/'),
        '@store': path.resolve(__dirname, './store/')
      }
    },
    server: {
      host: 'localhost',
      port: 3000,
      https: false,
      cors: true,
      hmr: true
    }
  })
}
