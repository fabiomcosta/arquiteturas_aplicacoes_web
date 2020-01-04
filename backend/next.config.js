const path = require('path');
const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new RelayCompilerWebpackPlugin({
        schema: path.resolve(__dirname, './data/schema.graphql'),
        src: path.resolve(__dirname, './src')
      })
    );
    return config;
  }
};
