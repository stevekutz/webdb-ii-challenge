// KEEP this in the ROOT
module.exports = {
    development: {
        client: 'sqlite3', // what type of db we translate
        connection: {
            filename: './data/lambda.db3',
        },
        useNullAsDefault: true, // OBNLY needed for sqlite
    }
}