const CracoAlias = require('craco-alias');
const CracoEsbuildPlugin = require("craco-esbuild");
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.base.json',
      },
    },
    {
      plugin: CracoEsbuildPlugin,
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#0096BB',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
