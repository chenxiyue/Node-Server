const express = require('express')
const Router = express()

const flutterTestController = require('../controllers/flutter-test.controller')

Router.get('/getFlutterData', flutterTestController.getFlutterData)

module.exports = Router