const express = requiere('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + 'dist/ng-givemephoto'));
app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname + 'dist/ng-givemephoto/index.hmtl'));
})


