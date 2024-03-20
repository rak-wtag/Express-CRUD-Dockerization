const mysql = require('mysql2/promise')

// const mysqlPool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'Asdrt325698dsa',
//     database:'employeeDB'
// })
const mysqlPool = mysql.createPool({
    host: process.env.DATABASE_HOST, // Use the host from environment variable
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

module.exports = mysqlPool