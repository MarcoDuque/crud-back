const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')

const { MONGOURI, PORT } = require('./keys')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:4200'}));

app.use(require('./routes/index'));

mongoose.connect(MONGOURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if (err) throw err;
        console.log('BD READY');
    })

app.listen(PORT, () => {
    console.log('escuchando puerto', PORT);
});