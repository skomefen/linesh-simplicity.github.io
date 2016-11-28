const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
   template: __dirname + '/app/react/index.html',
   filename: 'index.html',
   inject: 'body'
})

module.exports = {
   entry: './app/react/bundle.js',
   module: {
      loaders: [
         {
            test: /\.(js|jsx)$/,
            exclude: ['node_modules'],
            loader: 'babel-loader'
         }
      ]
   },
   output: {
      path: __dirname + 'dist/react',
      filename: 'bundle.js'
   },
   plugins: [
      HTMLWebpackPluginConfig
   ]

}