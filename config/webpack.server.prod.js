const webpack = require("webpack");
const path = require("path");

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const {
  entry,
  target,
  externals,
  resolve,
  modules,
  node
  // plugins
} = require("./webpack.server.shared");

module.exports = {
  entry,
  target,
  externals,
  resolve,
  module: modules,
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: false,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })
  ],
  output: {
    path: path.join(__dirname, "../prod_server"),
    filename: "index.js"
  },
  node
};
