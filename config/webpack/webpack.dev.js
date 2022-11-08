const path = require('path')
const { ROOT_PATH, SERVER_PORT } = require('../constant')

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
    port: SERVER_PORT,
    compress: true,
    hot: false
  }
}
