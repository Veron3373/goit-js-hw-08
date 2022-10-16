import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}






//!Коротший але видає помилку (працює)

//player.on('timeupdate', throttle(onPlay, 500));

//function onPlay({ seconds }) {
//  localStorage.setItem(lastViewTime, seconds);
//}

//player.setCurrentTime(localStorage.getItem(lastViewTime));

