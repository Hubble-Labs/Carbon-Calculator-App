//This file starts the express server, and gives it the tools it will need. Morgan is used during development to monitor api calls, bodyparser lets the backend read json files, path lets the server easily find the frontend, and express is the server
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const express = require('express');

const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(bodyparser.json());
server.use(express.static(path.join(__dirname, '../public')));

server.listen(port, ()=> console.log (`listening on port ${port}`))

module.exports = server;