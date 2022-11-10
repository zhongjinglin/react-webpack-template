const path = require('path')
const { ROOT_PATH } = require('../constant')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(ROOT_PATH, './dist'),
    publicPath: '/'
  },
  stats: 'errors-only',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: false
  }
}
