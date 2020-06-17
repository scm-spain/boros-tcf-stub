const path = require('path')

if (!process.env.DEPLOY_ENV) {
  throw new Error('DEPLOY_ENV is required')
}

const deployEnv = process.env.DEPLOY_ENV.replace(/"/g, '')
const distMinified = deployEnv === 'pro'

module.exports = [
  {
    devtool: distMinified ? false : 'inline-source-map',
    entry: {
      BorosTcfStub: './src/main/index.js'
    },
    output: {
      path: path.resolve(path.join(__dirname, '/../../', 'deploy')),
      filename: '[name].' + deployEnv + '.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|src\/webpack)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    mode: distMinified ? 'production' : 'development'
  }
]
