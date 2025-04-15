const express = require('express');
const itemRouter = require('./routes/itemRouter');

const app = express();

app.use(express.json());

app.use('/api/items', itemRouter);

module.exports = app;
