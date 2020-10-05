const express = require('express');
const cors = require('cors');
const hbs = require('express-handlebars');
const app = express();

require('dotenv').config();
require('./db');

const apiRouter = require('./routes/api');
const proyectosRouter = require('./routes/proyectos');

//Template Engine Setup
app.engine('.hbs', hbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use('/proyectos', proyectosRouter);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});