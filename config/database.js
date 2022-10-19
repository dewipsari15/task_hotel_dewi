const mysql = require('mysql');

//konfigurasi koneksi
const koneksi =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_hotel',
    multipleStatements: true
});
//koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('mySql Connected...');
});
module.exports = koneksi;