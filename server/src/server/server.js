const path = require('path')
const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

const api = require('../api/index')

const start = (options) => {
  const { PORT } = options
  return new Promise((resolve, reject) => {

    const app = express()

    /* Configuration */
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false}))

    app.use(express.static(path.join(__dirname, '../../public')))

    /* API */
    api(app, options)

    /* Start Express server */
    const server = http.createServer(app)
    server.listen(PORT, () => resolve())
  })
}

module.exports = Object.assign({}, {start})
