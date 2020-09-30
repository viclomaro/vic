const mongoose = require('mongoose');

const urlMongo = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.pkuzs.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(urlMongo, config);

