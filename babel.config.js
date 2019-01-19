/* eslint-disable func-names */
module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-class-properties'],
    env: {
      test: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
      'dev:e2e': {
        presets: ['@babel/preset-env', { modules: 'commonjs' }, '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  }
}