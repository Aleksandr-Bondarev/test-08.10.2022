const video = document.getElementById('video-sample');
const timer = document.getElementById('video-sample-timer');

let typeOfAction = 'play';

function getCurrentVideoTime() {
    const date = new Date(null);
    date.setSeconds(video.currentTime);
    const currentVideoTime = date.toISOString().slice(11, 19);
    return currentVideoTime;
}

window.onload = () => {
  timer.textContent = getCurrentVideoTime();
};

video.addEventListener('click', () => {
  if (typeOfAction === 'play') {
    video.play();
    typeOfAction = 'pause';
  } else if (typeOfAction === 'pause') {
    video.pause();
    typeOfAction = 'play';
  }
});

video.addEventListener('ended', () => {
  video.load();
});

video.addEventListener('timeupdate', () => {
  timer.textContent = getCurrentVideoTime();
});
