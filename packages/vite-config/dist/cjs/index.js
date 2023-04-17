'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.baseConfig = void 0
const plugin_react_swc_1 = __importDefault(require('@vitejs/plugin-react-swc'))
const plugin_legacy_1 = __importDefault(require('@vitejs/plugin-legacy'))
const vite_plugin_banner_1 = __importDefault(require('vite-plugin-banner'))
const plugin_1 = require('./plugin')
const baseConfig = (mode, pkg = {}) => {
  const isProd = mode === 'production'
  const config = {
    envPrefix: 'REACT_',
    optimizeDeps: {
      include: isProd ? ['@ocloud/ui'] : []
    },
    build: {
      reportCompressedSize: !isProd,
      sourcemap: !isProd
    },
    plugins: [
      (0, vite_plugin_banner_1.default)(
        `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: ${pkg.author}\n * version: ${pkg.version}\n * copyright: ${pkg.copyright}\n */`
      ),
      (0, plugin_legacy_1.default)({
        targets: ['defaults', 'not IE 11']
      }),
      (0, plugin_react_swc_1.default)(),
      (0, plugin_1.httpProxy)({
        '/api': {
          target: process.env.REACT_APP_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (url) => url.replace(/^\/api/, '')
        }
      }),
      (0, plugin_1.svgBuilder)('svgs/'),
      process.env.REACT_APP_BUNDLE_VISUALIZE === '1' &&
        require('rollup-plugin-visualizer').visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true
        })
    ]
  }
  return config
}
exports.baseConfig = baseConfig
