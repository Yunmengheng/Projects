document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video');
  var playPauseBtn = document.getElementById('playPause');
  var volumeControl = document.getElementById('volumeControl');
  var fullScreenBtn = document.getElementById('fullScreen');


  playPauseBtn.addEventListener('click', function() {
      if (video.paused) {
          video.play();
          playPauseBtn.textContent = 'Pause';
      } else {
          video.pause();
          playPauseBtn.textContent = 'Play';
      }
  });
  volumeControl.addEventListener('input', function() {
      video.volume = volumeControl.value;
  });

  fullScreenBtn.addEventListener('click', function() {
      if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { 
          video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { 
          video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { 
          video.msRequestFullscreen();
      }
  });
});
