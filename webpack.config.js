const path = require('path');

module.exports = {
  context: __dirname + '/src/pages/',

  entry: {
    app: "./app",
    mint: "./mint"
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};

    