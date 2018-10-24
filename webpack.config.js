const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
let config = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    proxy: {
      '/tabit':{
        target: "http://tabit-epd.cm.es/api/1.0/sap/tabit/",
        pathRewrite: {"^/tabit" : ""}
      },
      '/api': {
        target: "http://iob.ms.epd.bankia.int:41180",
      },
      '/tas':{
        target: "http://tasap-epd.ms.bankia.int:8080/",
        pathRewrite: {"^/tas" : ""}
      }
    },
    host: "0.0.0.0"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      cmp: path.resolve(__dirname,'./client/componentes')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, 
        use: [
            {loader:'style-loader'},
            {loader: 'css-loader', options: {modules: true, localIdentName: '[name]__[local]___[hash:base64:5]', sourceMap: true}},
            {loader: 'sass-loader', options: {/*sourceMap: true*/}}
          ]
      },
      { test: /\.css$/, 
        use: [
            {loader:'style-loader'},
            {loader: 'css-loader', options: {modules: true, localIdentName: '[name]__[local]___[hash:base64:5]', sourceMap: true}}
        ]
      },
      {
        test: /\.(woff|png|gif)$/,
        loader: 'url-loader',
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
module.exports = config
