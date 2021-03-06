// next.config.js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withSass = require('@zeit/next-sass')
const { ANALYZE } = process.env

module.exports = withSass({
  cssModules: true,
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config
  }
})