var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var browserTargets = [
  '> 1%',
  'iOS >= 8.0',
  'Android >= 4.4',
  'Chrome >= 30',
  'Safari >= 9',
  'Firefox ESR',
  'Opera 12.1'
];

var babelOptions = {
  babelrc: false,
  presets: [ ['env', { browsers: browserTargets }] ]
};

module.exports = {
  watch: process.env.WEBPACK_WATCH === 'true',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './www'),
    publicPath: '',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: {
              loader: 'babel-loader',
              options: babelOptions
            }
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: babelOptions
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-smart-import')(),
                  require('postcss-url')(),
                  require('postcss-base64')({ extensions: ['.svg'], root: 'src' }),
                  require('postcss-cssnext')({ browsers: browserTargets })
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'static/'
    }])
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      //// For development:
      // 'vue-onsenui/esm': path.join(__dirname, '..', 'OnsenUI', 'bindings', 'vue', 'esm'),
      // 'vue-onsenui$': path.join(__dirname, '..', 'OnsenUI', 'bindings', 'vue', 'dist', 'vue-onsenui'),
      // 'onsenui$': path.join(__dirname, '..', 'OnsenUI', 'build', 'js', 'onsenui'),
      // 'onsenui': path.join(__dirname, '..', 'OnsenUI', 'build'),
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
