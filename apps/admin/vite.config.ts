import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), 'REACT_') }

  return defineConfig({
    envPrefix: 'REACT_',
    // optimizeDeps: {
    //   include: ['@ecommerce/ui']
    // },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '~': path.resolve(__dirname, './')
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
