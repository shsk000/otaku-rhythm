class User {
  constructor(socketId, name) {
    if (!socketId) throw new Error('User.constructor: invalid params');

    this.name = name;
    this.socketId = socketId;
    this.isPlayableVideoStatus = false;
  }

  changePlayableVideoStatus(status) {
    this.isPlayableVideoStatus = status;
  }
}

module.exports = User;
