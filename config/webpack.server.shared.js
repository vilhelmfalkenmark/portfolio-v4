const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const paths = require("./paths");

module.exports = {
  entry: ["./server/babelRegister"],
  target: "node",
  resolve: {
    extensions: [".js"],
    alias: {
      app: path.resolve(__dirname, "src"),
      build: path.resolve(__dirname, "build"),
      // client
      actions: path.resolve(paths.appSrc, "actions"),
      assets: path.resolve(paths.appSrc, "assets"),
      reducers: path.resolve(paths.appSrc, "reducers"),
      store: path.resolve(paths.appSrc, "store"),
      entrypoints: path.resolve(paths.appSrc, "entrypoints"),
      components: path.resolve(paths.appSrc, "components"),
      utils: path.resolve(paths.appSrc, "utils"),
      layout: path.resolve(paths.appSrc, "layout"),
      router: path.resolve(paths.appSrc, "router"),
      fonts: path.resolve(paths.appSrc, "styles/fonts")
    }
  },
  modules: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-inline-import-loader",
          {
            loader: "babel-loader",
            options: {
              plugins: [
                "transform-object-rest-spread",
                ["inline-import"]
                // [
                //   "css-modules-transform",
                //   {
                //     generateScopedName: "[name]_[local]",
                //     extensions: [".css"]
                //   }
                // ]
              ],
              // Make sure cacheDirectory is disabled so that Babel
              // always rebuilds dependent modules
              cacheDirectory: false // default
            }
          }
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
    new Dotenv(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.PORT": JSON.stringify(process.env.PORT),
      "process.env.HOST": JSON.stringify(process.env.HOST)
    })
  ],
  // externals: nodeModules, // ignore node_modules directory
  externals: [nodeExternals()], // ignore node_modules directory
  node: {
    __filename: true,
    __dirname: true
  }
};
