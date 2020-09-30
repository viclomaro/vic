const router = require('express').Router();
const Proyecto = require('../../models/proyecto');

router.get('/', (req, res) => {
    let proyecto = new Proyecto();
    proyecto.titulo = 'Proyecto de prueba';
    proyecto.save().then((p) => {
        console.log(p);
    }).catch(error=> {
        console.log(error)
    })
    res.send('Hola estás dentro de la api');
})

module.exports = router;