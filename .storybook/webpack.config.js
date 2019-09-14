
const commonConfig = require('../config/webpack.common'),
  path = require('path'),
  ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// modify error log so vscode can enable quick peak
const logError = str => console.log(str.replace("(", " (").replace(__dirname, ".") + "\n")

// module.exports = {
//   ...commonConfig,
//   plugins: [
//     ...commonConfig.plugins,
//     new ForkTsCheckerWebpackPlugin({
//       tsconfig: path.resolve(__dirname, "../", "tsconfig.json"),
//       async: true,
//       logger: {
//         error: (message) => logError(message),
//         warn: (message) => console.log(message),
//         info: (message) => console.log(message),
//       }
//     })
//   ],
//   devServer: {
//     contentBase: [
//       path.join(__dirname, "../", "dist"),
//       path.join(__dirname, "../", "public")
//     ],
//     hot: true,
//     compress: true,
//     port: 9000
//   },
//   mode: "development",
//   devtool: "source-map"
// }

module.exports = ({ config }) => {

  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   use: [
  //     {
  //       loader: require.resolve('awesome-typescript-loader'),
  //     },
  //     // Optional
  //     {
  //       loader: require.resolve('react-docgen-typescript-loader'),
  //     },
  //   ],
  // });

  

  commonConfig.module.rules.forEach(rule => 
    config.module.rules.push(rule)
  )

  commonConfig.resolve.extensions.forEach(ext =>
    config.resolve.extensions.push(ext)
  )


  return config

  // return {
  //   ...commonConfig,
  //   ...config
  // };
};