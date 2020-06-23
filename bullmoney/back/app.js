// Cargar módulos de node para crear servidor
const express = require('express');

// Ejecutar express 
const app = express();

// Requerimos dotenv
require('dotenv').config();

// Requerimos el punto de entrada db.js
require('./db');

// Requerimos body-parser incluido en express.js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para usar la API
const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

// Indicamos el puerto que vamos a escuchar
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

// Exportar módulo (fichero actual)
module.exports = app;