import YouTubePlayerAPIAdapter from '../YouTubePlayerAPI/Adapter';

class Player {
  constructor() {
    this.isPlayable = false;
    this.apiAdapter = new YouTubePlayerAPIAdapter();
  }

  play() {
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
}

export default Player;
