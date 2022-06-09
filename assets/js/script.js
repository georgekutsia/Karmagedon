const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  
    if (game.interval) {
      game.stop();
      console.log(game.stop)
      btn.innerText = "START";
    } else {
      game.start();
      btn.innerText = "STOP";
    }
    const displ = document.getElementById("main-canvas")
    displ.style.display = "block"
    info.style.display = "none"
  });


  const bodyChange = document.getElementById("cursor")
  const begin = document.querySelector(".neon-button");
  const info = document.getElementById("intro-canvas");
  const neon = document.getElementById("body-intro");
  const btnGame = document.getElementById("btn")
  begin.addEventListener("click", function(){
    bodyChange.style.backgroundImage = "/assets/images/fondos/dados.jpeg"
    info.style.display = "block"
    btnGame.style.display = "inline-flex"
    begin.style.display = "none"
    neon.style.display = "none"
  })