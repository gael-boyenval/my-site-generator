const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.alias = Object.assign({}, storybookBaseConfig.resolve.alias, {
    Assets: path.resolve(__dirname, '../src/assets'),
    Utils: path.resolve(__dirname, '../src/components/utils'),
    Layout: path.resolve(__dirname, '../src/components/layout'),
    Atoms: path.resolve(__dirname, '../src/components/atoms'),
    Molecules: path.resolve(__dirname, '../src/components/molecules'),
    Organisms: path.resolve(__dirname, '../src/components/organisms'),
    Styles: path.resolve(__dirname, '../src/styles'),
  });

  storybookBaseConfig.module.rules.push({
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader',
  });

  return storybookBaseConfig;
};
