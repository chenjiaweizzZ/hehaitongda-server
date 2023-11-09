const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    host: '8.130.71.244',
    port: '3306',
    user: 'root',
    password: 'Cc258258258!',
    database: 'hhtd1',
    connectionLimit: 5,
})

// connectionPool.getConnection((err, connection) => {
//     if (err) {
//         console.log('Error connecting to Db')
//         return
//     }
//     connection.connect(err => {
//         if(err) {
//         console.log('Error connecting to Db2')
//         }else {
//             console.log('Sucess connecting to Db')
//         }
//     })
// })

const connection = connectionPool.promise()

module.export = connection