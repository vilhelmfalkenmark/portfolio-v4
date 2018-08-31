const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./server"],
  target: "node",
  resolve: {
    extensions: [".js"],
    alias: {
      entities: path.resolve(__dirname, "src/entities/"),
      server: path.resolve(__dirname, "src/server/"),
      test: path.resolve(__dirname, "src/test/"),
      connector: path.resolve(__dirname, "src/connector"),
      utils: path.resolve(__dirname, "src/utils/"),
      app: path.resolve(__dirname)
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
              plugins: ["transform-object-rest-spread", ["inline-import"]],
              // Make sure cacheDirectory is disabled so that Babel
              // always rebuilds dependent modules
              cacheDirectory: false // default
            }
          }
        ]
      }
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
