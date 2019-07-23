const User = require('./User');

class Room {
  constructor(roomName = '') {
    this.roomName = roomName;
    this.users = {};
    this.isAllUserPlayableVideoStatus = false;
  }

  joinUser(socketId, name = 'default_user') {
    if (!socketId) throw new Error('Room.joinUser: invalid params');
    this.users[socketId] = new User(socketId, name);

    console.log('Room.joinUser', this.users);

    return this.users[socketId];
  }

  withdrawalUser(socketId) {
    if (socketId in this.users) {
      delete this.users[socketId];

      console.log('Room.withdrawalUser', this.users);

      return true;
    }

    return false;
  }
  emitVideoLoad() {}
  emitVideoPlay() {}
  emitVideoStop() {}
  onPlayableVideoStatus() {}
  onVideoPlay() {}

  changePlayableVideoStatus(socketId, status) {
    if (!socketId)
      throw new Error('Room.changePlayableVideoStatus: invalid params');

    if (socketId in this.users) {
      this.users[socketId].changePlayableVideoStatus(status);

      const keys = Object.keys(this.users);
      let flag = false;
      keys.forEach(socketId => {
        flag = this.users[socketId].isPlayableVideoStatus;
      });

      this.isAllUserPlayableVideoStatus = flag;
    }
  }
}

module.exports = Room;
