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
      this.player.play();
    });
  }

  onServerLoadVideo() {
    socket.on('ServerLoad', videoId => {
      const promise = this.player.load(videoId);
      promise.then(() => {
        this.emitPlayableVideoStatus(true);
      });
    });
  }

  onServerStopVideo() {
    socket.on('ServerStop', () => {
      // Playerに通知して動画を停止する
    });
  }

  emitPlayVideo(videoId) {
    socket.emit('ClientPlay', videoId);
  }

  emitPlayableVideoStatus(status) {
    socket.emit('ClientPlayableVideoStatus', status);
  }
}

export default PlayerController;
