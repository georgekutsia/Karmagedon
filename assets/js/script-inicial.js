const introCanvas = document.getElementById('intro-canvas');
const introContext = introCanvas.getContext('2d');

const btn = document.getElementById("intro-button");
btn.addEventListener("click", function () {
    if (game.interval) {
      game.stop();
      btn.innerText = "START";
      
    } else {
      game.start();
      btn.innerText = "STOP";
    }
  });