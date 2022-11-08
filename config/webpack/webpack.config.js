const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const { isDev } = require('../env')

const config = isDev ? require('./webpack.dev') : require('./webpack.prod')
module.exports = merge(common, config)
