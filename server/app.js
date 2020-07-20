const express = require('express');
const router = require('./controller');
const { join } = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
	res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
