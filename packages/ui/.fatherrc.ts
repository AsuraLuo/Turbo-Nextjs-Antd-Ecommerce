import { defineConfig } from 'father'

export default defineConfig({
  sourcemap: false,
  cjs: {
    input: 'components',
    output: 'dist/cjs'
  },
  esm: {
    input: 'components',
    output: 'dist/es'
  }
})
