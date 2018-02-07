
module.exports.Index = class Index {
  constructor(socket, arduino) {
    this.socket = socket
    this.arduino = arduino

    this.socket.setObserver({
      notifyConnected: data => this.connected(data),
      notifyMessage: data => this.message(data),
      notifyDisconnected: data => this.disconnected(data)
    })
  }

  /* Socket connected */
  connected() {
    // todo
  }

  /* Socket message */
  message() {
    // todo
  }

  /* Socket disconnected*/
  disconncted() {
    // todo
  }


}

