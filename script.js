// script.js
function playAudio() {
    var audio = document.querySelector('audio');
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  