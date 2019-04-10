const express = require('express')
const coinsRoutes = require('./routes/coinRoutes')
const bodyParser = require('body-parser')

app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api', coinsRoutes)

module.exports = app