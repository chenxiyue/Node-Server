const express = require('express')
const path = require('path')
const app = express()

// 处理跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/', require('./server/routers/home.router'))
app.use('/getFlutterData', require('./server/routers/flutter-test.router'))
app.use('/getCommentList', require('./server/routers/manage-react/comment.router'))

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server running @http://localhost:${port}`)
})

module.exports = app