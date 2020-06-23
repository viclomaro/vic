const router = require('express').Router();
const { check, validationResult } = require('express-validator');

// Requerimos el modelo
const Valor = require('../../models/valor');

router.get('/', async (req, res) => {
    try {
        // Usamos el método "find" que incorpora mongoose para devolver todos los datos de la bbdd
        const valores = await Valor.find();
        res.json(valores);
    } catch{
        res.json({ 'error': err });
    }
});

router.post('/', [
    // Definimos los check
    check('anoCompra', 'El año de compra debe incluirse en la petición y debe expresarse con 4 dígitos')
        .exists()
        .notEmpty()
        .isNumeric()
        .isLength(4),
    check('mesCompra', 'El mes de compra debe incluirse en la petición y debe expresarse en caracteres')
        .exists()
        .notEmpty()
        .isAlpha()
        .isLength({ max: 10 }),
    check('accion', 'La accion debe incluirse en la petición y debe expresarse en caracteres')
        .exists()
        .notEmpty()
        .isAlpha()
        .isLength({ max: 20 }),
    check('precioAccionCompra', 'El precio de compra de la acción debe incluirse en la petición y debe ser numérico')
        .exists()
        .notEmpty()
        .isNumeric(),
    check('totalCompra', 'El total de la compra debe incluirse en la petición y debe ser numérico')
        .exists()
        .notEmpty()
        .isNumeric(),
    check('comisionCompra', 'La comisión de compra debe incluirse en la petición y debe ser numérico')
        .exists()
        .notEmpty()
        .isNumeric(),
    check('anoVenta', 'El año de venta debe incluirse en la petición y debe expresarse con 4 dígitos')
        .exists()
        .notEmpty()
        .isNumeric()
        .isLength(4),
    check('mesVenta', 'El mes de venta debe incluirse en la petición y debe expresarse en caracteres')
        .exists()
        .notEmpty()
        .isAlpha()
        .isLength({ max: 10 }),
    check('precioAccionVenta', 'El precio de venta de la acción debe incluirse en la petición y debe ser numérico')
        .exists()
        .notEmpty()
        .isNumeric(),
    check('totalVenta', 'El total de la venta  debe incluirse en la petición y debe ser numérico')
        .exists()
        .notEmpty()
        .isNumeric(),
    check('comisionVenta', 'La comisión de venta debe incluirse en la petición y debe ser numérico')
        .exists()
        .notEmpty()
        .isNumeric(),
    check('dividendoBruto', 'El dividendo bruto debe incluirse en la petición y debe ser numérico')
        .exists()
        .notEmpty()
        .isNumeric(),
], async (req, res) => {
    // Comprobamos que se validen, si no lo hacen nos devuelve un array con los errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    // Si se valida nos hace la petición
    try {
        // Usamos el método "create" que incorpora mongoose pasando el req.body con la cabecera de los datos
        const nuevoValor = await Valor.create(req.body);
        // Como respuesta obtenemos el valor que hemos creado
        res.json(nuevoValor);
    } catch (err) {
        res.status(503).json({ 'error': err });
    }
})

module.exports = router;