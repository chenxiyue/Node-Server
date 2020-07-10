const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/', require('./server/routers/home.router'))
app.use('/getFlutterData', require('./server/routers/flutter-test.router'))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running @http://localhost:${port}`)
})

module.exports = app