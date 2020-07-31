const express = require('express')
const Router = express()
const bodyParser = require('body-parser')
// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const flutterTestController = require('../controllers/flutter-test.controller')

Router.post('/', urlencodedParser, flutterTestController.getFlutterData)

module.exports = Router