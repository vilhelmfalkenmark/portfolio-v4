const webpack = require("webpack");
const path = require("path");

const {
  entry,
  target,
  externals,
  resolve,
  modules,
  node,
  plugins
} = require("./webpack.server.shared");

module.exports = {
  entry,
  target,
  externals,
  resolve,
  module: modules,
  // plugins: [
  //   ...plugins,
  //   new webpack.NamedModulesPlugin(), // Webpack plugin for module friendly names
  //   new webpack.NoEmitOnErrorsPlugin(),
  //   new webpack.DefinePlugin({
  //     "process.env": {
  //       NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  //       PORT: JSON.stringify(process.env.PORT || 5000),
  //       HOST: JSON.stringify(process.env.HOST)
  //     }
  //   })
  // ],
  plugins: plugins.concat([
    new webpack.NamedModulesPlugin(), // Webpack plugin for module friendly names
    new webpack.NoEmitOnErrorsPlugin()
  ]),
  output: {
    path: path.join(__dirname, "../dev_server"),
    filename: "index.js"
  },
  node
};
