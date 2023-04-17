import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import { baseConfig } from '@ocloud/vite-config'

import pkg from './package.json'

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), 'REACT_') }
  const isProd: boolean = mode === 'production'

  return defineConfig({
    ...baseConfig(mode, pkg),
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
    server: isProd
      ? {}
      : {
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
