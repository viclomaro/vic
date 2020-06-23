const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let valorSchema = new Schema({
    anoCompra: Number,
    mesCompra: String,
    accion: String,
    precioAccionCompra: Number,
    totalCompra: Number,
    comisionCompra: Number,
    anoVenta: Number,
    mesVenta: String,
    precioAccionVenta: Number,
    totalVenta: Number,
    comisionVenta: Number,
    dividendoBruto: Number,
})

// Exportamos el modelo pasando como parámetro el nombre de la colección y el modelo que usará 
module.exports = mongoose.model('valor', valorSchema);