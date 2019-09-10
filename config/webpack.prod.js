const commonConfig = require('./webpack.common'),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  CompressionPlugin = require("compression-webpack-plugin"),
  BrotliPlugin = require("brotli-webpack-plugin"),
  OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  ...commonConfig,
  output: {
    ...commonConfig.output,
    publicPath: "/",
  },
  plugins: [
    ...commonConfig.plugins,
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      cache: true
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.js$|\.css$|\.html$/,
      minRatio: 1
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({ sourceMap: true, cache: true })]
  },
  mode: "production",
}