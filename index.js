const server = require('express-graphql');
const microCors = require('./cors');
const mongoose = require('mongoose');
const models = require('./models');
const schema = require('./schema/');
const { MONGO_URI } = require('./config');

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

const CORS = microCors({ allowedOrigins: ['https://bittersweet.io', 'https://www.bittersweet.io', 'http://localhost:3000'] });

module.exports = CORS(server({ schema, graphiql: true }))