const Koa = require('koa');
const mongoose = require('mongoose');
const logger = require('koa-logger');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes');
const config = require('./config');

// Make mongoose use native ES6 promises
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(config.database.url, config.database.opts);

const app = new Koa()
app.use(cors())
app.use(logger())
app.use(bodyParser())

// console.log("routes: ",routes.routes())
app.use(routes.routes())
app.use(routes.allowedMethods());

const server = app.listen(config.server.port);

module.exports = server;
