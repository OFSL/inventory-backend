const express = require('express')
const setupDatabase = require('./models/index')

const app = express()

app.use(express.json())

module.exports = app