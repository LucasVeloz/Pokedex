module.exports = {
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [ 'babel-loader', 'pug-as-jsx-loader' ]
        }
      ]
    }
  }