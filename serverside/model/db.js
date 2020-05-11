const mysql = require('mysql');
const dbConfig = require('./../config.js');

//create connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//open connection
connection.connect( ( err ) => {
    if ( err ) {
        console.log("Error: ",err);
        throw err;
    }
    console.log(" Successfully connect to database! ");
} )

module.exports = connection;
