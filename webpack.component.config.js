const path = require('path');
const webpack = require('webpack');
let config = {
  entry: ['./client/index-component.js'],
  output: {
    path: path.resolve(__dirname,'./lib'),
    library: 'reactcomponent',
    umdNamedDefine: true,
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      cmp: path.resolve(__dirname,'./client/componentes')
    }
  },
  externals : {
    react : {
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      root: "React"
    },
    "prop-types" : 'propTypes',
    'react-dom' : {
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      root: "ReactDOM"
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
        test: /\.(woff|png|gif|svg)$/,
        loader: 'url-loader',
      }
    ]
  },
  plugins: []
}
module.exports = config
