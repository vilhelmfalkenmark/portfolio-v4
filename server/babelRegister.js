require("ignore-styles");

require("babel-register")({
  ignore: [/(node_modules)/],
  presets: ["es2015", "react-app"],
  plugins: [
    "syntax-dynamic-import",
    "dynamic-import-node",
    "react-loadable/babel",
    // [
    //   "import-inspector",
    //   {
    //     webpackRequireWeakId: true,
    //     serverSideRequirePath: true
    //   }
    // ],
    [
      "module-resolver",
      {
        root: ["../src"],
        alias: {
          actions: "./src/actions",
          components: "./src/components",
          reducers: "./src/reducers",
          utils: "./src/utils",
          layout: "./src/layout",
          styles: "./src/styles",
          entrypoints: "./src/entrypoints"
        }
      }
    ],
    [
      "css-modules-transform",
      {
        generateScopedName: "[name]_[local]",
        extensions: [".css"]
      }
    ]
  ]
});

require("./index");
