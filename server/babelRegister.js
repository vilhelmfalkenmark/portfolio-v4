require('ignore-styles');

require('babel-register')({
  ignore: [/(node_modules)/],
  presets: ['es2015', 'react-app'],
  plugins: [
    'syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel',
    [
      'import-inspector',
      {
        webpackRequireWeakId: true,
        serverSideRequirePath: true
      }
    ],
    [
      'module-resolver',
      {
        root: ['../src'],
        alias: {
          store: './src/store',
          components: './src/components',
          utils: './src/utils',
          layout: './src/layout',
          styles: './src/styles',
          entrypoints: './src/entrypoints',
          router: './src/router',
          build: './build',
          renderer: './server/ssr/renderer',
          controllers: './server/ssr/controllers',
          api: './server/api',
          assets: './src/assets'
        }
      }
    ],
    [
      'css-modules-transform',
      {
        generateScopedName: '[name]_[local]',
        extensions: ['.scss']
      }
    ]
  ]
});

require('./index');
