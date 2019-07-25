const User = require('./User');
const io = require('./lib/createIo')();

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

  emitVideoLoad(videoId) {
    io.emit('ServerLoad', videoId);
  }
  emitVideoPlay() {
    io.emit('ServerPlay');
  }
  emitVideoStop() {}

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

      if (this.isAllUserPlayableVideoStatus) {
        this.changeAllUserPlayableVideoStatus(false);
        this.emitVideoPlay();
      }
    }
  }

  changeAllUserPlayableVideoStatus(status) {
    const keys = Object.keys(this.users);
    keys.forEach(socketId => {
      this.users[socketId].isPlayableVideoStatus = status;
    });

    console.log('Room.changePlayableVideoStatus', this.users);

    this.isAllUserPlayableVideoStatus = status;
  }
}

module.exports = Room;
