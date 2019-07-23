import createSocket from '../lib/createSocket';
import Player from '../Player/Player';

const socket = createSocket();

class PlayerController {
  constructor() {
    this.isPlayableVideo = false;
    this.player = new Player();

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
      this.player.play();
    });
  }

  onServerLoadVideo() {
    socket.on('ServerLoad', videoId => {
      // Playerに通知して動画を読み込む
      const promise = this.player.load(videoId);
      promise.then(() => {
        this.emitPlayVideoStatus(true);
      });
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

  emitPlayVideoStatus(status) {
    socket.emit('ClientPlayableVideoStatus', status);
  }
}

export default PlayerController;
