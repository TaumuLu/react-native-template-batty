import path from 'path'

const isDev = process.env.NODE_ENV !== 'production'
const context = process.cwd()
const folderName = './build'
const outputPath = path.join(context, folderName)

export default {
  isDev,
  context,
  outputPath,
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  // mode: 'none',
  // devtool: 'source-map',
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      // '@react-navigation/native': '@react-navigation/web',
    },
    modules: [
      path.join(context, 'web_modules/node_modules'),
      path.join(context, 'node_modules'),
    ],
    extensions: [
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',
      '.web.js',
      '.web.jsx',
      '.js',
      '.jsx',
      '.json',
    ],
  },
}
