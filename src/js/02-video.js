import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_PLAY = 'videoplayer-current-time';
const timeUpdate = function (time) {
  const currTime = time;
  localStorage.setItem(CURRENT_PLAY, JSON.stringify(currTime));
};
player.on('timeupdate', throttle(timeUpdate, 1000));

const currentTime = localStorage.getItem(CURRENT_PLAY);
const timeSt = JSON.parse(currentTime);
if (currentTime) {
  console.log(timeSt);
  player
    .setCurrentTime(timeSt.seconds || 0)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

// try {
//   setCurrentTime(timeSt.seconds || 0);
// } catch (error) {
//   console.log(error.message);
// }
