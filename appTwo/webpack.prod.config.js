const _ = require('lodash');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config');

const envVariables = {};

module.exports = merge(config, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': _.assign({}, {
        NODE_ENV: 'production',
      }, envVariables),
    }),
  ],
});

