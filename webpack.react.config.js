const webpack = require('webpack');

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
   }
}