module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            features: './features',
            screens: './screens',
            ui: './features/ui',
          },
          extensions: ['.js', '.ts', '.jsx', '.tsx'],
        },
      ],
    ],
  };
};
