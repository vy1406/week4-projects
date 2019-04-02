const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
