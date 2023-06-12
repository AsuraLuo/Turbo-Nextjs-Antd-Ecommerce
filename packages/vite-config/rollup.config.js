import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

/**
 * @type {import('rollup').RollupOptions}
 */
export default defineConfig({
  input: 'index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/esm/index.mjs',
      format: 'esm'
    }
  ],
  plugins: [typescript()],
  external: []
})
