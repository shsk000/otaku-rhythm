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

    const promise = this.api.loadVideoById(videoId);
    this.api.stopVideo();

    console.log(`YouTubePlayerAPIAdapter.load: ${this.videoId}`);

    return promise;
  }

  play() {
    this.api.playVideo();
  }
}

export default YouTubePlayerAPIAdapter;
