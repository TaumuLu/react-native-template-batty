import path from 'path'
import glob from 'glob'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import HtmlWebpackIncludeAssetsPlugin from 'html-webpack-include-assets-plugin'
import autoprefixer from 'autoprefixer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import CopyWebpackPlugin from 'copy-webpack-plugin'
// import HappyPack from 'happypack'
// import WebpackBuildDllPlugin from 'webpack-build-dll-plugin'

import commonConfig from './common.config'

// const happyThreadPool = HappyPack.ThreadPool({ size: 2 })

const { isDev, outputPath, ...config } = commonConfig
const { context } = config

// 从dll包的原始位置（webpack/build目录下）匹配要插入html的dll文件
const globOptions = { cwd: outputPath }
const vendorAssets = glob.sync('./dll/vendor*.dll.js', globOptions)
const hasDll = vendorAssets.length > 0

const compassMixinsPath = path.join(require.resolve('compass-mixins'), '..')

export default {
  ...config,
  entry: './index.js',
  output: {
    path: outputPath,
    filename: isDev
      ? 'assets/scripts/[name].js'
      : 'assets/scripts/[name]-[chunkhash].js',
    chunkFilename: isDev
      ? 'assets/scripts/[name].chunk.js'
      : 'assets/scripts/[name]-[chunkhash].chunk.js',
    publicPath: '/',
    // libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(context, './webpack/tsconfig.json'),
              transpileOnly: true,
              // happyPackMode: true,
              // allowTsInNodeModules: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [compassMixinsPath],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
    // compress: true,
    host: '127.0.0.1',
    port: 9966,
    historyApiFallback: true,
    open: true,
    // watchContentBase: true,
    // public: 'frame.terminus.io:80',
  },
  plugins: [
    !isDev &&
      new MiniCssExtractPlugin({
        filename: 'assets/styles/[name].css',
        chunkFilename: 'assets/styles/[id].css',
      }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      // template: '../public/index.html',
      // hash: true,
      inject: true,
    }),

    isDev &&
      hasDll && [
        new webpack.DllReferencePlugin({
          context,
          manifest: path.join(outputPath, './dll/manifest.json'),
        }),
        new HtmlWebpackIncludeAssetsPlugin({
          assets: vendorAssets,
          append: false,
        }),
      ],
    // new CopyWebpackPlugin([
    //   {
    //     from: path.join(__dirname, '../public'),
    //     to: outputPath,
    //     ignore: ['*.html'],
    //   },
    // ]),
    // new HappyPack({
    //   id: 'babel',
    //   loaders: babelLoaders,
    //   threadPool: happyThreadPool,
    //   cache: true,
    //   verbose: true,
    // }),
  ].reduce(
    (p, c) => {
      if (Array.isArray(c)) {
        p.push(...c)
      } else if (c) {
        p.push(c)
      }
      return p
    },
    [] as any
  ),
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common',
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
}
