import YTPlayer from 'yt-player';

class YouTubePlayerAPIAdapter {
  constructor() {
    this.api = new YTPlayer('#app');
  }

  load(videoId) {
    if (!videoId)
      throw new Error('YouTubePlayerAPIAdapter.constructor: invalid params');

    this.videoId = videoId;

    this.api.load(videoId, true);
    console.log(`YouTubePlayerAPIAdapter.load: ${this.videoId}`);

    return new Promise(resolve => {
      this.api.once('playing', () => {
        this.api.seek(0);
        this.api.pause();
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    });
  }

  play() {
    console.log(`YouTubePlayerAPIAdapter.play: play video`);
    this.api.play();
  }
}

export default YouTubePlayerAPIAdapter;
