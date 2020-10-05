const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const fs = require('fs');

const Proyecto = require('../models/proyecto');

router.get('/', async (req, res) => {
    const proyectos = await Proyecto.find().lean();
    res.render('proyectos/index', { proyectos });
});

router.get('/new', async (req, res) => {
    res.render('proyectos/formulario');
});

router.get('/edit/:proyectoId', async (req, res) => {
    //TODO hacer try catch
    const proyecto = await Proyecto.findById(req.params.proyectoId).lean();
    res.render('proyectos/formEdit', { proy: proyecto });
}
)

router.post('/create', upload.single('imagen'), async (req, res) => {

    const finalPath = req.file.path + '.' + mimeTypeExtension(req.file.mimetype);
    fs.renameSync(req.file.path, finalPath);

    req.body.imagen = finalPath;
    try {
        const proyecto = await Proyecto.create(req.body);
        res.redirect('/proyectos');
    } catch (err) {
        res.json({ error: err })
    }

});

router.post('/update', upload.single('imagen'), async (req, res) => {
    //TODO obtener categoria (helpers handlebars)    
    const finalPath = req.file.path + '.' + mimeTypeExtension(req.file.mimetype);
    fs.renameSync(req.file.path, finalPath);
    console.log(req.file);

    req.body.imagen = finalPath;
    try {
        await Proyecto.findByIdAndUpdate(req.body.proyectoId, req.body);
        res.redirect('/proyectos');
    } catch (err) {
        res.json({ error: err });
    }
});


function mimeTypeExtension(mimeType) {
    return mimeType.split('/')[1];
}

module.exports = router;