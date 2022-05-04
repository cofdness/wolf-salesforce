/* eslint-disable no-unused-vars */
import path from 'path'
import merge from 'lodash/merge'

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv-safe')
  dotenv.config({
    path: path.join(__dirname, '../.env'),
    example: path.join(__dirname, '../.env.example')
  })
}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || '',
    masterKey: requireProcessEnv('MASTER_KEY'),
    mongo: {
      options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
      }
    },
    salesforceUser: requireProcessEnv('SALESFORCE_USER'),
    salesforcePassword: requireProcessEnv('SALESFORCE_PASSWORD'),
    salesforceClientId: requireProcessEnv('SALESFORCE_CLIENT_ID'),
    salesforceClientSecret: requireProcessEnv('SALESFORCE_CLIENT_SECRET')
  },
  test: { },
  development: {
    mongo: {
      uri: 'mongodb+srv://phungAdmin:yswnZfH6dyaPSVh5@locallib.fttrc.mongodb.net/local_library?authSource=admin&replicaSet=atlas-1p3w7f-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true',
      options: {
        debug: true
      }
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/wolf-salesforce'
    }
  }
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports
