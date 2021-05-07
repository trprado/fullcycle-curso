const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const mysql_conf = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio'
};

exports.query = function(sql, callback) {
    const conn = mysql.createConnection(mysql_conf)
    conn.query(sql, function (err, rows) {
        if (err) throw err
        conn.end()
        callback(err, rows)
    });
};

const sql_insert = `INSERT INTO people(name) Value('Thiago Prado');`;
const sql_select = `SELECT * FROM people;`;

exports.query(sql_insert, function(err, rows){});

app.get('/', (req, res) => {
    exports.query(sql_select, function(err, rows) {
        res.send(`<h1>Full Cycle Rocks!</h1>
                <ul>
                    <li>${rows[0].name}</li>
                </ul>`)
    });
});

app.listen(port, () => {
    console.log(`Server na porta ${port}`)
});
