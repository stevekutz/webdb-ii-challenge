const express = require('express');
const helmet = require('helmet');


//define routers
const zoosRouter = require('./zoo/zoo-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

// add router here
server.use('/api/zoos', zoosRouter);


module.exports = server;