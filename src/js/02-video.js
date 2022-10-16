import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const lastViewTime = 'videoplayer-current-time'


function onPlay({ seconds }) {
  localStorage.setItem(lastViewTime, seconds);
}

player.on('timeupdate', throttle(onPlay, 500));

player.setCurrentTime(localStorage.getItem(lastViewTime));

