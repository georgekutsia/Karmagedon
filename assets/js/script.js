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
const demo = document.getElementById("display-adds")
const zkaren = document.getElementById("add-karen")
const zrat = document.getElementById("add-rat")
const zfat = document.getElementById("add-fat")
const zpuddle = document.getElementById("add-puddle")
const zfire = document.getElementById("add-fire")
const zboss = document.getElementById("add-boss")
const zgoose = document.getElementById("add-goose")
const zdiscount = document.getElementById("add-discount")
const zcart = document.getElementById("add-cart")
const zbaby = document.getElementById("add-baby")
// const zall = document.querySelectorAll(".demo")
// const zall = document.querySelector(".demo")
//
// const zall = [zbaby,  zboss, zcart, zdiscount, 
// zfat, zfire, zgoose, zkaren, zpuddle, zrat ]

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
    demo.style.display = "inline-block";
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

//democosas
  demo.addEventListener("click", function () {
    if (game.bosss.length > 0 || game.fires.length > 0 || 
      game.puddles.length > 0 || game.babys.length > 0 || 
      game.geese.length > 0 || game.fats.length > 0 || 
      game.rats.length > 0 || game.karens.length > 0 ||
      game.discounts > 0 || game.carts.length > 0) {
      game.fires = []; game.puddles = [];
      game.bosss = []; game.geese = []; game.fats = [];
      game.rats = []; game.karens = []; game.discounts = [];
      game.carts = []; game.babys = [];
            demo.innerText = "Add it->";
    } 
    zkaren.style.display = "inline-block"
    zrat.style.display = "inline-block"
    zfat.style.display = "inline-block"
    zpuddle.style.display = "inline-block"
    zfire.style.display = "inline-block"
    zboss.style.display = "inline-block"
    zgoose.style.display = "inline-block"
    zdiscount.style.display = "inline-block"
    zcart.style.display = "inline-block"
    zbaby.style.display = "inline-block"

})
zkaren.addEventListener("click", function(){
  game.addKaren()
  game.karensAlert()
  demo.innerText = "Clean"
})
zrat.addEventListener("click", function(){
  game.addRat()
  game.ratAlert()
  demo.innerText = "Clean"
})
zfat.addEventListener("click", function(){
  game.addFat()
  game.fatAlert()
  demo.innerText = "Clean"
})
zpuddle.addEventListener("click", function(){
  game.addPuddle()
  game.waterAlert()
  demo.innerText = "Clean"
})
zfire.addEventListener("click", function(){
  game.addFire()
  game.fireAlert()
  demo.innerText = "Clean"
})
zboss.addEventListener("click", function(){
  game.addBoss()
  game.bossAlert()
  demo.innerText = "Clean"
})
zgoose.addEventListener("click", function(){
  game.addGoose()
  game.gooseAlert()
  demo.innerText = "Clean"
})
zdiscount.addEventListener("click", function(){
  game.addDiscount()
  demo.innerText = "Clean"
})
zcart.addEventListener("click", function(){
  game.addCart()
  demo.innerText = "Clean"
})
zbaby.addEventListener("click", function(){
  game.addBaby()
  game.babyAlert()
  demo.innerText = "Clean"
})
