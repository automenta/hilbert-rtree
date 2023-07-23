const path = require('path');

module.exports = {
  entry: './build/index.js', // Replace this with the path to your main TypeScript file
  output: {
    filename: 'rtree.min.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
