const knex = require('knex');

// ALWAYS keep knexfile in ROOT
const configOptions = require('../knexfile').development;

module.exports = knex(configOptions);