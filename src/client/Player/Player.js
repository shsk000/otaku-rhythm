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
    const loadPromise = this.apiAdapter.load(videoId);
    loadPromise.then(() => {
      console.log(`Player.load: loaded video`);
    });
  }
}

export default Player;
