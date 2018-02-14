require('dotenv').config()

const server = require('./server/server')

const arduino = require('./services/arduino')
const socket = require('./services/socket')

const options = {
  ...process.env, // secure :P
  arduino: arduino,
  socket: socket
}

/* Catch em all */
process.on('uncaughtException', (err) => { console.error('Exception', err), process.exit(1) })
process.on('unhandledRejection', (err) => { console.error('Rejection', err) })

const init = async () => {
  await arduino.connect(options), console.log('arduino connected')
  await socket.connect(options), console.log('socket connceted')
  await server.start(options)
}

init().then(e => console.log('Server started')).catch(e => console.log('error', e))
