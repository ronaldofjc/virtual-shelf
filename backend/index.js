require('dotenv').config();

const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');
const Sentry = require('@sentry/node');
const sentryConfig = require('./config/sentry');

Sentry.init({ dsn: sentryConfig.sentryDSN });

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url, { useNewUrlParser: true });
requireDir(dbConfig.modelsPath);

app.use(bodyParser.json());

app.use(Sentry.Handlers.requestHandler());

app.use('/api', require('./app/routes'));

app.use(Sentry.Handlers.errorHandler());

app.listen(3000);
