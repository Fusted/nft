const path = require('path');

module.exports = {
  entry: {
    index: './src/app.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  entry: {
    mint: './src/mint.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle2.js'
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

    