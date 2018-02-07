const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()

const api = require('./api/routes/index')
const web = require('./api/services/web')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', api)

const server = http.createServer(app).listen(3000, () => console.log('Server running'))
const socket = new web.Socket(server)

module.exports = server