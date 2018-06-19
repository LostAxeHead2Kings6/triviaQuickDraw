var path = require('path');
var SRC_DIR = path.join(__dirname, '/components');
var DIST_DIR = path.join(__dirname, '/dist');


module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.jpg$/,
        use: [
                {
                    loader: 'url-loader'
                },
            ]
      }
    ]
  }
};
