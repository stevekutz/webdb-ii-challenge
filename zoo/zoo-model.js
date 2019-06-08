const knex = require('knex'); 

// THIS installs knex and specific driver needed
const knexConfig = {
    client: 'sqlite3',    // this would change if we were connecting to MySQL, etc.
    connection: {
      filename: './data/lambda.db3',
    },
    useNullAsDefault: true,   // only neede for sqlite3
    debug: true,
  }
  
  const db = knex(knexConfig);

  module.exports = {
    find,
    findById,
    add,
 //   update,
 //   remove,
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