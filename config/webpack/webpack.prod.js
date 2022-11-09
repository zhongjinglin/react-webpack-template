const path = require('path')
const { ROOT_PATH } = require('../constant')

module.exports = {
  mode: 'production',
  devtool: false,
  output: {
    clean: true,
    path: path.resolve(ROOT_PATH, './dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    publicPath: '/'
  }
}
