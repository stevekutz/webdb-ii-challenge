/*
const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
*/



// endpoints here
const server = require('./server.js');

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
