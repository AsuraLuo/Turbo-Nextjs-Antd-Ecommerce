const withBundleAnalyzer = require('@next/bundle-analyzer')

const isProd = process.env.NODE_ENV === 'production'
const isAnalyzer = process.env.REACT_APP_BUNDLE_VISUALIZE === '1'

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    basePath: '',
    compress: false,
    distDir: '.next',
    generateEtags: false,
    pageExtensions: ['tsx', 'ts'],
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: false,
    compiler: {
      emotion: true,
      reactRemoveProperties: isProd,
      removeConsole: isProd
    },
    transpilePackages: ['@ecommerce/ui'],
    webpack: (config) => {
      // Important: return the modified config
      return config
    }
  }

  const plugins = []

  if (isAnalyzer)
    plugins.push(
      withBundleAnalyzer({
        enabled: true
      })
    )

  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
