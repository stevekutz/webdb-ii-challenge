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

// ALL of these methods resolve to a promise
  module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

// like saying SELECT * from zoos
function find() {
 return db('zoos'); 
 // return knex.select().table('zoos');   ;  // Does not work
 // return knex('zoos');
}

// like saying SELECT * from zoos where id  = id
function findById(id) {
     return db('zoos')
        //.where({id});  //.where('id', id)   also works
        .where('id', id);
        //  WHY is first() needed? WORKS without
        //.first();   // Sets the column to be inserted on the first position, only used in MySQL alter tables.
}


//  !!!!!!  add always puts in  messsageL
//      .returning() is not supported by sqlite3



// INSERT INTO zoos (newZewItem) VALUES ('newZewItem');
/*
async function add(newZooItem){
    const [id] = await db('zoos').insert(newZooItem);
    return findById(id);
}
*/

 // Another way to add
function add(newZooItem) {
    return db('zoos')
        .insert(newZooItem);
        //.into('roles');   // WHY is this needed ?
}

// like saying 
//  UPDATE zoos set name = "changed whatever" where id = id
function update(id, changedZooName) {
    return db('zoos')
        .where({id})  //.where('id', id)
       // .update(changedZooName, '*');
        .update(changedZooName);  // what does * do?
}

// like saying DELETE from zoos where id = id
/*
function remove(id) {
    return db('zoos')
        .where({id})
        .del();
}
*/

// THIS WORKS !!
function remove(id){
    return knex
    .where({id})
    .del();
}