const dbStretch = require('../data/dbConfig');

// These resolve to a promise
module.exports = {
    findBears,
    findBearsById,
    addBears,
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