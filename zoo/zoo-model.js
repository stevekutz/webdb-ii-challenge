/*   MOVED THIS to dbConfig & knexfile

// >>>> went to dbConfig.js
const knex = require('knex'); 

// THIS installs knex and specific driver needed
//  >>>> went to knexfile
const knexConfig = {
    client: 'sqlite3',    // this would change if we were connecting to MySQL, etc.
    connection: {
      filename: './data/lambda.db3',
    },
    useNullAsDefault: true,   // only neede for sqlite3
    debug: true,
  }
  
  const db = knex(knexConfig);
*/
const db = require('../data/dbConfig');

  module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('zoos'); 
}

function findById(id) {
    return db('zoos')
        .where({id})
        .first();
}

async function add(newZooItem){
    const [id] = await db('zoos').insert(newZooItem);
    return findById(id);
}

function update(id, changedZooName) {
    return db('zoos')
        .where({id})
        .update(changedZooName, '*');
}

function remove(id) {
    return db('zoos')
        .where({id})
        .del();
}