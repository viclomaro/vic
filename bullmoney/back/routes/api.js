const router = require('express').Router();

// Importamos el fichero manejador
const apiRouterInversiones = require('./api/valores.js');

// Cualquier petición que entre sobre /api/inversiones lo redirijo a valores.js
router.use('/inversiones', apiRouterInversiones);

module.exports = router;