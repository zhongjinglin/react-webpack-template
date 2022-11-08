const path = require('path')
const { ROOT_PATH } = require('../constant')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(ROOT_PATH, './src/index.tsx')
  },
  resolve: {
    alias: {
      src: path.resolve(ROOT_PATH, './src'),
      pages: path.resolve(ROOT_PATH, './src/pages'),
      components: path.resolve(ROOT_PATH, './src/components'),
      layouts: path.resolve(ROOT_PATH, './src/layouts')
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, './public/index.html')
    })
  ]
}
