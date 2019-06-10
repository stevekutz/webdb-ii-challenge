const dbStretch = require('../data/dbConfig');

// These resolve to a promise
module.exports = {
    findBears,
    findBearsById,
    addBears,
    changeBear,
}

function findBears() {
    return dbStretch('bears');
}

function findBearsById(id) {
    return dbStretch('bears')
        .where('id', id);
}


function addBears (newBear) {
    return dbStretch('bears')
        .insert(newBear);
}

function changeBear(id, bearUpdate) {
    return dbStretch('bears')
        .where({id})
        .update(bearUpdate);
}