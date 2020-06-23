// Requerimos mongoose
const mongoose = require('mongoose');

// Guardamos la url de Heroku
const urlMongo = 'mongodb://heroku_w4pjjw3m:p566fslcbinkpijieltdfiknc@ds153003.mlab.com:53003/heroku_w4pjjw3m';

// Definimos la configuración de las opciones
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// Conectamos mongoose con la BBDD
mongoose.connect(urlMongo, config);