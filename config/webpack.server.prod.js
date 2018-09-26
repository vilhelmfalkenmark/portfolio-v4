const webpack = require("webpack");
const path = require("path");
const paths = require("./paths");

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const {
  // entry,
  // target,
  externals,
  // resolve,
  modules,
  node
} = require("./webpack.server.shared");

module.exports = {
	entry: ["./server/babelRegister"],
  target: "node",
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      build: path.resolve(paths.appBuild),
      actions: path.resolve(paths.appSrc, "actions"),
      assets: path.resolve(paths.appSrc, "assets"),
      reducers: path.resolve(paths.appSrc, "reducers"),
      store: path.resolve(paths.appSrc, "store"),
      entrypoints: path.resolve(paths.appSrc, "entrypoints"),
      components: path.resolve(paths.appSrc, "components"),
      utils: path.resolve(paths.appSrc, "utils"),
      layout: path.resolve(paths.appSrc, "layout"),
      router: path.resolve(paths.appSrc, "router"),
      fonts: path.resolve(paths.appSrc, "styles/fonts"),
    }
  },
  externals,
	module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
					// "babel-inline-import-loader",
					"babel-loader"
          // {
          //   loader: "babel-loader",
          //   options: {
          //     plugins: [
          //       "transform-object-rest-spread",
          //       ["inline-import"]
          //       // [
          //       //   "css-modules-transform",
          //       //   {
          //       //     generateScopedName: "[name]_[local]",
          //       //     extensions: [".css"]
          //       //   }
          //       // ]
          //     ],
          //     // Make sure cacheDirectory is disabled so that Babel
          //     // always rebuilds dependent modules
          //     cacheDirectory: false // default
          //   }
          // }
        ]
      },
      {
        test: /\.json$/,
        use: "json-loader"
      },
      { test: /\.css$/, use: "ignore-loader" }
    ]
  },
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
