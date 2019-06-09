const knex = require('knex');

// 
const configOptions = require('../zoo/knexfile').development;

module.exports = knex(configOptions);