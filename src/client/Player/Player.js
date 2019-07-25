import YouTubePlayerAPIAdapter from '../YouTubePlayerAPI/Adapter';

class Player {
  constructor() {
    this.apiAdapter = new YouTubePlayerAPIAdapter();
  }

  play() {
    console.log(`Player.play: play video`);
    this.apiAdapter.play();
  }

  load(videoId) {
    if (!videoId) throw new Error('Player.load: invalid params');

    console.log(`Player.load: start load video`);

    const promise = this.apiAdapter.load(videoId);
    promise.then(() => {
      console.log(`Player.load: loaded video`);
    });

    return promise;
  }

  stop() {}
}

export default Player;
