const express = require('express');
const app = express();

const port = 3000;
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send('Mi respuesta desde express');
});

app.get('/servicios', (req, res) => {
    res.send('Estás en la página de servicios');
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log('Escuchando peticiones del servidor en el puerto', port);
});