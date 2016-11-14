var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: "./app/Quiz.js",
  output: {
    filename: "assets/js/Quiz.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
}
