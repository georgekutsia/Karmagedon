const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);
const game2 = new Game2(ctx)
// const game3 = new Game3(ctx)


const begin = document.querySelector(".neon-button");
const btn = document.querySelector(".neon-butt");
const restart = document.querySelector(".neon-bu")
const info = document.getElementById("intro-canvas");
const manager = document.getElementById("info-manager");
const displ = document.getElementById("main-canvas");
const cheat = document.getElementById("info-cheatsheet")
const can = document.getElementById("canvas")
//botón del juego
btn.addEventListener("click", function () {
    if (game.interval) {
      game.stop();
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
    restart.style.display = "flex"
  });

  //el botón de reinicio
restart.addEventListener("click", function () {
  window.location.reload();
  });


//el botón de inicio
  begin.addEventListener("click", function(){
    info.style.display = "block"
    begin.style.display = "none"
    manager.style.display = "none"
    cheat.style.display = "inline-block"
  })