// KEEP this in the ROOT


// configuration object
module.exports = {
    development: {
        client: 'sqlite3', // what type of db we translate
        connection: {
            filename: './data/lambda.db3',
        },
        useNullAsDefault: true, // OBNLY needed for sqlite
    }
}


/*
// configuration object
module.exports = {
    production: {
        client: 'sqlite3', // what type of db we translate
        connection: {
            filename: './data/lambda.db3',
        },
        useNullAsDefault: true, // OBNLY needed for sqlite
    }
}
*/