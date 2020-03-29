const isWeb = process.env.TS_NODE_PROJECT

module.exports = (api) => {
  api.cache(true)

  const presets = []
  const plugins = [['@babel/plugin-proposal-decorators', { legacy: true }]]

  if (isWeb) {
    plugins.push(['@babel/plugin-proposal-class-properties', { loose: false }])
  }
  //   presets.push(
  //     [
  //       '@babel/preset-env',
  //       {
  //         modules: false,
  //       },
  //     ],
  //     '@babel/preset-react',
  //     '@babel/preset-typescript'
  //   )
  //   plugins.push('@babel/plugin-proposal-export-default-from')
  // } else {
  presets.push('module:metro-react-native-babel-preset')
  // }

  return {
    presets,
    plugins,
  }
}
