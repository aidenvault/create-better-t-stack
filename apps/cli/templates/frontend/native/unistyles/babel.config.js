module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  plugins.push([
    'react-native-unistyles/plugin',
    {
      autoProcessRoot: 'app',
      autoProcessImports: ['@/components'],
      root: "src"
    },
  ]);

  plugins.push('react-native-reanimated/plugin');

  return {
    presets: ['babel-preset-expo'],

    plugins,
  };
};
