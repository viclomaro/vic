const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// mysql
/*
const connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bfb0b353b31d76',
    password: '0edcf1c2',
    database: 'heroku_909f062706268e3',

    /* host: '127.0.0.1',
     user: 'root',
     password: '',
     port: '3306',
     database: 'givemephoto' 
});
*/

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bfb0b353b31d76',
    password: '0edcf1c2',
    database: 'heroku_909f062706268e3'
});

/* pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT * from productos', function (err, rows) {
        // And done with the connection.
        if (rows.length > 0) {
            connection.json(rows);
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
    });
}); */


// Route
app.get('/', (req, res) => {
    res.send('welcome to my api');
});

// All products
app.get('/productos', (req, res) => {
    const sql = 'SELECT * FROM productos';
    pool.getConnection(function (err, connection) {
        connection.query(sql, (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                res.json(results);
            } else {
                res.send('No hay resultados');
            }
        });
    })
});

// Product for id
app.get('/productos/:id', (req, res) => {
    res.send('Producto por id');
});

// Check connect
/* connection.connect(error => {
    if (error) throw error;
    console.log('Database server running');
}) */

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})