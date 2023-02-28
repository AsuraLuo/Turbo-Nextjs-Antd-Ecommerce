import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

/**
 * @type {import('rollup').RollupOptions}
 */
export default defineConfig({
  input: 'index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [typescript()]
})
