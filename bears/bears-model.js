const dbStretch = require('../data/dbConfig');

// These resolve to a promise
module.exports = {
    findBears,
    addBears,
}

function findBears() {
    return dbStretch('bears');
}

function addBears (newBear) {
    return dbStretch('bears')
        .insert(newBear);
}