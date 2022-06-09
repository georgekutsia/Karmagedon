const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

const begin = document.querySelector(".neon-button");
const info = document.getElementById("intro-canvas");
const manager = document.getElementById("info-manager");
const btn = document.querySelector(".neon-butt");
const displ = document.getElementById("main-canvas");
const cheat = document.getElementById("info-cheatsheet")
btn.addEventListener("click", function () {
  
    if (game.interval) {
      game.stop();
      console.log(game.stop)
      btn.innerText = "START";
    } else {
      game.start();
      btn.innerText = "STOP";
    }
    displ.style.display = "block"
    info.style.display = "none"
    manager.style.display = "none"
    begin.style.display = "none"
    cheat.style.display = "inline-block"
  });


  begin.addEventListener("click", function(){
    info.style.display = "block"
    begin.style.display = "none"
    manager.style.display = "none"
    cheat.style.display = "inline-block"
    cheat.style.opacity = "1"
  })