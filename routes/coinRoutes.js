const express = require('express')
const coinController = require('../controllers/coinsController')

const api = express.Router()

api.post('/coin/:country', coinController.AddCoin)

module.exports = api