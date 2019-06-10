const express = require('express');
const helmet = require('helmet');


//define routers
const zoosRouter = require('./zoo/zoo-router.js');
const bearsRouter = require('./bears/bears-router.js');


const server = express();

server.use(express.json());
server.use(helmet());

// add router here
server.use('/api/zoos', zoosRouter);
server.use('/api/bears', bearsRouter);
// server.use('/api/bears', bearsRouter);

module.exports = server;