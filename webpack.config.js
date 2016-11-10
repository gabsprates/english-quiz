module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "assets/js/App.js"
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
  }
}
