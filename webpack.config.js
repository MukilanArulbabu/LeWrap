// const path = require('path');

// const BUILD_DIR = path.resolve(__dirname, '../DominoCode/WebContent/js');
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js',
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(css|sass|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};

