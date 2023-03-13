import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import banner from 'vite-plugin-banner'
import svgr from 'vite-plugin-svgr'

import { httpProxy, svgBuilder } from './plugin'
import pkg from './package.json'

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), 'REACT_') }

  const isProd: boolean = mode === 'production'

  return defineConfig({
    envPrefix: 'REACT_',
    optimizeDeps: {
      include: ['@ocloud/ui']
    },
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
      svgBuilder('svgs/'),
      svgr({
        exportAsDefault: true,
        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: {},
        // esbuild options, to transform jsx to js
        esbuildOptions: {},
        //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
        include: 'svgs/*.svg',
        //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
        exclude: ''
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
        '@store': path.resolve(__dirname, './store/'),
        '@svgs': path.resolve(__dirname, './svgs/')
      }
    },
    server: {
      cors: true,
      port: 3000,
      host: 'localhost',
      hmr: true,
      https: {
        // SSL certificate config
        key: fs.readFileSync('keys/ocloud-key.pem'),
        cert: fs.readFileSync('keys/ocloud-cert.pem')
      }
    }
  })
}
