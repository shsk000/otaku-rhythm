import YouTubePlayer from 'youtube-player';

class YouTubePlayerAPIAdapter {
  constructor() {
    this.api = new YouTubePlayer('app', {
      playerVars: {
        autoplay: 0,
      },
    });
  }

  load(videoId) {
    if (!videoId)
      throw new Error('YouTubePlayerAPIAdapter.constructor: invalid params');

    this.videoId = videoId;
    // TODO: データロードまで進んでいない
    const promise = this.api.loadVideoById(videoId);
    this.api.stopVideo();

    console.log(`YouTubePlayerAPIAdapter.load: ${this.videoId}`);

    return new Promise(resolve => {
      promise.then(() => {
        // TODO: 検証のためsetTimeout追加
        setTimeout(() => {
          resolve();
        }, 5000);
      });
    });
  }

  play() {
    this.api.playVideo();
  }
}

export default YouTubePlayerAPIAdapter;
