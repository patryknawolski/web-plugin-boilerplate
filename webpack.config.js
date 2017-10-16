const env = process.env.NODE_ENV
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const pluginConfig = {
  entry: [
    './src/plugin.js'
  ],
  output: {
    filename: 'plugin.js',
    path: path.resolve(__dirname, 'demo'),
    library: 'MyPlugin'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'demo'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

const demoConfig = {
  entry: [
    './src/demo.js'
  ],
  output: {
    filename: 'demo.js',
    path: path.resolve(__dirname, 'demo')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'demo'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

const buildConfig = {
  entry: [
    './src/plugin.js'
  ],
  output: {
    filename: 'plugin.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'MyPlugin'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                sourceMap: true
              }
          }, {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('plugin.css')
  ]
};

if (env === 'production') {
  module.exports = buildConfig;
} else {
  module.exports = [pluginConfig, demoConfig];
}
