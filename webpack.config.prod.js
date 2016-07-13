var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var devPort = 3001;

module.exports = {
  env : process.env.NODE_ENV,
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  resolve:{
    root:path.join(__dirname, 'src')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: [
            path.join(__dirname, 'src'),
        ]
      },{
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader','postcss-loader'].join('!'),
      },{
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?outputStyle=expanded'].join('!')
      },{
          test: /\.(png|jpg)$/, 
          loader: 'url-loader?limit=8192'// inline base64 URLs for <=8k images, direct URLs for the rest
      },{
        test:/\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer({
      browsers: ['last 2 versions']
    })];
  },
};
