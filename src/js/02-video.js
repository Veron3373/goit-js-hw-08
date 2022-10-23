import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const videoTime = localStorage.getItem(STORAGE_KEY)
timeConversion(videoTime)

function startVideo() {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0)
}

player.on('timeupdate', throttle(onPlay, 500));

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

function timeConversion(videoTime) {

  if (videoTime === null) {
    startVideo()
  } else {
    if (confirm("Продовжити перегляд відео?")) {
      startVideo()
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }
}