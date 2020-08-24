const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// mysql
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: '3306',
    database: 'givemephoto',
});

// Route
app.get('/', (req, res) => {
    res.send('welcome to my api');
});

// All products
app.get('/productos', (req, res) => {
    const sql = 'SELECT * FROM productos';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

// Product for id
app.get('/productos/:id', (req, res) => {
    res.send('Producto por id');
});

// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running');
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})