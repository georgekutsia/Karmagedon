const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    if (game.interval) {
      game.stop();
      btn.innerText = "START";
    } else {
      game.start();
      btn.innerText = "STOP";
    }
  });
  
  const btnGame = document.getElementById("btn-game");
  btn.addEventListener("click", function () {
    
    });
    