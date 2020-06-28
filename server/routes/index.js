const express = require('express');
const app = express();

app.use(require('./sign-up'));
app.use(require('./sign-in'));
app.use(require('./task'));

module.exports = app;