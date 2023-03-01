import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

/**
 * @type {import('rollup').RollupOptions}
 */
export default defineConfig({
  input: 'index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [typescript()],
  external: ['react', 'react-intl', 'react-redux']
})
