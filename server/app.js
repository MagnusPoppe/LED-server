const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()

const api = require('./api/routes/index')
const web = require('./api/services/web')
const bus = require('./api/services/arduino')

const controller = require('./api/controllers/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', api)

const server = http.createServer(app).listen(3000, () => console.log('Server running'))
const socket = new web.Socket(server) // attach socket functionality
const arduino = new bus.Arduino()

module.exports = server