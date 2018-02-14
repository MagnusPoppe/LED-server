
const connect = (options) => {
  const { port } = options
  return new Promise((resolve, reject) => {
    // connect
    resolve()
  })
}

const test = () => {
  return 'YAY'
}

module.exports = Object.assign({}, { connect, test })
