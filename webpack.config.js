const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: ['./src/client/app.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build/client'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 8080,
    host: `localhost`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/client/index.html',
    }),
  ],
};
