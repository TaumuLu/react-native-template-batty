import path from 'path'
import webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import commonConfig from './common.config'

const { isDev, outputPath, ...config } = commonConfig
// const { context } = config

module.exports = {
  ...config,
  entry: {
    vendor: ['react', 'react-native'],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       loader: 'babel-loader',
  //     },
  //   ],
  // },
  output: {
    path: path.join(outputPath, './dll'),
    filename: isDev ? '[name].dll.js' : '[name]-[chunkhash].dll.js',
    library: isDev ? '[name]_library' : '[name]_[chunkhash]_library', // vendor.dll.js中暴露出的全局变量名
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new webpack.DllPlugin({
      name: isDev ? '[name]_library' : '[name]_[chunkhash]_library',
      path: path.join(outputPath, './dll/manifest.json'),
    }),
  ],
}
