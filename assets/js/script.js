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
const easy = document.getElementById("neon-easy")
const hard = document.getElementById("neon-normal")
const normal = document.getElementById("neon-hard")
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
    easy.style.display = "none";
    normal.style.display = "none";
    hard.style.display = "none";
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