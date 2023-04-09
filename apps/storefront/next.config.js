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
    output: 'standalone',
    generateEtags: false,
    pageExtensions: ['tsx', 'ts'],
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: false,
    transpilePackages: ['@ocloud/ui'],
    compiler: {
      emotion: true,
      reactRemoveProperties: isProd,
      removeConsole: isProd
    },

    eslint: {
      ignoreDuringBuilds: isProd
    },
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}'
      }
    },
    typescript: {
      ignoreBuildErrors: isProd
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**'
        }
      ]
    },
    webpack: (config) => {
      // Important: svg resource as component
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      })

      return config
    }
  }

  const plugins = []

  if (isAnalyzer)
    plugins.push(
      require('@next/bundle-analyzer')({
        enabled: true
      })
    )

  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
