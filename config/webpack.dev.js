const commonConfig = require('./webpack.common'),
  path = require('path'),
  ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// modify error log so vscode can enable quick peak
const logError = str => console.log(str.replace("(", " (").replace(__dirname, ".") + "\n")

module.exports = {
  ...commonConfig,
  output: {
    ...commonConfig.output,
    publicPath: "/",
  },
  plugins: [
    ...commonConfig.plugins,
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, "../", "tsconfig.json"),
      async: true,
      logger: {
        error: (message) => logError(message),
        warn: (message) => console.log(message),
        info: (message) => console.log(message),
      }
    })
  ],
  devServer: {
    contentBase: [
      path.join(__dirname, "../", "dist"),
      path.join(__dirname, "../", "public")
    ],
    hot: true,
    compress: true,
    port: 9000
  },
  mode: "development",
  devtool: "source-map"
}