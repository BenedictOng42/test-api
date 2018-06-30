import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './graphql/mongoDB/connection';
import graphqlapi from './graphql';

// ===================
// SET UP EXPRESS APP
// ===================

// set up dotenv to read env file
dotenv.config();

console.log('\n** STARTING SERVER **');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

// create express app
const app = express();

//= =================
// MIDDLEWARE
//= =================

// Connect to mongodb
connect();

// logger middleware
console.log('>> Using morgan');
app.use(morgan('dev'));

// Busboy body parser middleware
const busboyBodyParser = require('busboy-body-parser');

app.use(busboyBodyParser());

// Serve static files
app.use(express.static('public'));

// Allow CORS
app.use(cors());

// ===========
// ROUTING
// ===========

app.use('/', graphqlapi);

// ===================
// SERVER
// ===================

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Test server should start at port: ${PORT}`);
});
