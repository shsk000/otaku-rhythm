class YouTubePlayerAPIAdapter {
  load(videoId) {
    if (!videoId)
      throw new Error('YouTubePlayerAPIAdapter.constructor: invalid params');

    this.videoId = videoId;

    console.log(`YouTubePlayerAPIAdapter.load: ${this.videoId}`);
  }

  play() {}
}

export default YouTubePlayerAPIAdapter;
