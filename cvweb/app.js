const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hola servidor');
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});