const router = require('express').Router();
const moment = require('moment');
const jwt = require('jwt-simple');

const apiRouterProyectos = require('./api/proyectos');
const middlewares = require('./middlewares');

router.use('/proyectos', middlewares.checkToken, apiRouterProyectos);

router.get('/token', (req, res) => {
    let payload = {
        usuario: 'Victor',
        createdAt: moment().unix(),
        expiredAt: moment().add(30, 'minutes').unix()
    };
    const token = jwt.encode(payload, process.env.SECRET_KEY);
    res.json({ token });
});

module.exports = router;