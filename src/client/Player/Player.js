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

    this.apiAdapter.load(videoId);
  }
}

export default Player;
