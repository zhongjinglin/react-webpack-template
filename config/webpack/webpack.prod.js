const path = require('path')
const { ROOT_PATH } = require('../constant')

module.exports = {
  mode: 'production',
  devtool: false,
  output: {
    clean: true,
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(ROOT_PATH, './dist'),
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]',
    publicPath: '/'
  }
}
