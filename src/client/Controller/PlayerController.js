import createSocket from '../lib/createSocket';

const socket = createSocket();

class PlayerController {
  constructor() {
    this.isPlayableVideo = false;
    // this.player = new Player()

    this.onSocketEvent();
  }

  onSocketEvent() {
    this.onServerPlayVideo();
    this.onServerLoadVideo();
    this.onServerStopVideo();
  }

  onServerPlayVideo() {
    socket.on('ServerPlay', () => {
      // Playerに通知して動画を再生する
    });
  }
  onServerLoadVideo() {
    socket.on('ServerLoad', () => {
      // Playerに通知して動画を読み込む
    });
  }
  onServerStopVideo() {
    socket.on('ServerStop', () => {
      // Playerに通知して動画を停止する
    });
  }
  emitPlayVideo() {
    socket.emit('ClientPlay');
  }
  emitPlayVideoStatus() {
    socket.emit('ClientPlayableVideoStatus');
  }
}

export default PlayerController;
