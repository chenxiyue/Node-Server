const express = require('express')
const Router = express()

const homeController = require('../controllers/home.controller')

Router.get('/', homeController.getHomeData)

module.exports = Router