// const isWeb = process.env.TS_NODE_PROJECT

module.exports = api => {
  api.cache(true)

  const presets = []
  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
  ]
  // if (isWeb) {
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
