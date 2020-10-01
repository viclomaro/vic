const router = require('express').Router();
const { check, validationResult } = require('express-validator');

const Proyecto = require('../../models/proyecto');

router.get('/', async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        res.json(proyectos);
    } catch (err) {
        res.status(503).json({ 'err': err });
    }
});

router.post('/', [
    check('titulo', 'El titulo debe incluirse en la petición')
        .exists(),
    check('descripcion', 'La descripción debe incluirse en la petición con un máximo de 300 caracteres')
        .exists()
        .isLength({ max: 300 }),
    check('url', 'La url del proyecto debe ser correcta')
        .isURL()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const nuevoProyecto = await Proyecto.create(req.body)
        res.json(nuevoProyecto);
    } catch (err) {
        res.status(503).json({ 'error': err });
    }
});

router.put('/:proyectoId', async (req, res) => {
    try {
        const proyectoEditado = await Proyecto.findByIdAndUpdate(req.params.proyectoId, req.body, { new: true });
        res.json(proyectoEditado);
    } catch (err) {
        res.status(503).json({ 'err': err })
    }

})

router.delete('/:proyectoId', async (req, res) => {
    try {
        const proyectoBorrado = await Proyecto.findByIdAndDelete(req.params.proyectoId);
        res.json(proyectoBorrado);
    } catch (err) {
        res.status(503).json({ 'error': err });
    }
})

module.exports = router;