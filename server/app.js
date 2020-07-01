const express = require('express');
const router = require('./controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.set('port', process.env.PORT || 4000);

module.exports = app;
