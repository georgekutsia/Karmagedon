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
  });



  const begin = document.getElementById("begin");
  const intro = document.getElementById("intro");
  const info = document.getElementById("intro-canvas");
  begin.addEventListener("click", function(){
    info.style.display = "block"
    begin.style.display = "none"
    intro.style.direction = "none"

  })