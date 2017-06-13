 /**
 *
 * Vue-Video-Player
 * Adapted from Videojs (https://github.com/videojs/video.js)
 *
 */

window.videojs = require('video.js')

var playerComponent = require('./player.vue')
var videoPlayer = {
  videojs: videojs,
  videoPlayer: playerComponent,
  install: function(Vue) {
    Vue.component('video-player', playerComponent)
  }
}

module.exports = videoPlayer
