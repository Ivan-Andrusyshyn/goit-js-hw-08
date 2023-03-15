import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeUpdate = function (time) {
  const currTime = time;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currTime));
};
player.on('timeupdate', throttle(timeUpdate, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
const timeSt = JSON.parse(currentTime);
console.log(timeSt);
if (!timeSt) {
  return;
}
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

// try {
//   setCurrentTime(timeSt.seconds || 0);
// } catch (error) {
//   console.log(error.message);
// }
