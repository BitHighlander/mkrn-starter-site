const serverConfig = require('./server')();
const databaseConfig = require('./database')();
const emailConfig = require('./email')();
const authConfig = require('./auth');
const billingConfig = require('./billing');
const yubikey = require('./yubikey.js');

module.exports = {
  server: serverConfig,
  database: databaseConfig,
  passport: authConfig.passport(),
  email: emailConfig,
  yubikey,
  auth: {
    secret: authConfig.opts.secret,
    jwtExpiration: authConfig.opts.expiration,
  },
  billing: billingConfig,
};
