const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);
const game2 = new Game2(ctx)
const game3 = new Game3(ctx)
const game4 = new Game4(ctx)
const game5 = new Game5(ctx)
// const game3 = new Game3(ctx)


const begin = document.querySelector(".neon-button");
const btn = document.querySelector(".neon-butt");
const btneasy = document.querySelector(".neon-butteasy");
const btnnormal = document.querySelector(".neon-buttnormal");
const btnhard = document.querySelector(".neon-butthard");
const btnsuperhard = document.querySelector(".neon-buttSuperhard");
const restart = document.querySelector(".neon-bu")
const info = document.getElementById("intro-canvas");
const manager = document.getElementById("info-manager");
const displ = document.getElementById("main-canvas");
const cheat = document.getElementById("info-cheatsheet")
const can = document.getElementById("canvas")
const easy = document.getElementById("neon-easy")
const normal = document.getElementById("neon-normal")
const hard = document.getElementById("neon-hard")
const superhard = document.getElementById("neon-superhard")
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

const allButtonsGone = [easy, normal, hard, superhard, info, manager, begin]


const in1 = document.getElementById("info1")
const in2 = document.getElementById("info2")
const in3 = document.getElementById("info3")
const in4 = document.getElementById("info4")
const infocheat = document.getElementById("info-cheatsheet")




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
    allButtonsGone.forEach((button) => button.style.display = "none")
    cheat.style.display = "inline-block"
    restart.style.display = "flex"
    demo.style.display = "inline-block";
    this.musicStart = new Audio("/assets/audios ad/clic future.wav");
    this.musicStart.volume = 0.05;
    this.musicStart.play()
  });


  //  GAME 2 RAT INVASION START
easy.addEventListener("click", function () {
    // game2.start();
    // displ.style.display = "block"
    // allButtonsGone.forEach((button) => button.style.display = "none")
    // cheat.style.display = "inline-block";
    // restart.style.display = "flex"
    // btn.style.display = "none";
    // btneasy.style.display = "flex"
  });
  
  btneasy.addEventListener("click", function () {
    if (game2.interval) {
      game2.stop();
      btneasy.innerText = "Go...";
    } else {
      game2.start();
      btneasy.innerText = "Rest...";
    }
    this.clicking = new Audio("/assets/audios ad/clic future.wav");
    this.clicking.volume = 0.05;
    this.clicking.play()
  });

    //  GAME 2 END
  //  GAME 3 STRUCTURAL DAMAGE START
normal.addEventListener("click", function () {
    // game3.start();
    // displ.style.display = "block"

    // cheat.style.display = "inline-block";
    // restart.style.display = "flex"
    // allButtonsGone.forEach((button) => button.style.display = "none")
    // btn.style.display = "none";
    // btnnormal.style.display = "flex"
  });
  btnnormal.addEventListener("click", function () {
    if (game3.interval) {
      game3.stop();
      btnnormal.innerText = "Hey..play..";
    } else {
      game3.start();
      btnnormal.innerText = "Coffee?";
    }
    this.clicking = new Audio("/assets/audios ad/clic future.wav");
    this.clicking.volume = 0.05;
    this.clicking.play()
  });

    //  GAME 3 END
  //  GAME 4 GEESE INFERNO START
hard.addEventListener("click", function () {
    // game4.start();
    // displ.style.display = "block"
    // allButtonsGone.forEach((button) => button.style.display = "none")
    // cheat.style.display = "inline-block";
    // restart.style.display = "flex"
    // btn.style.display = "none";
    // btnhard.style.display = "flex"
  });
  btnhard.addEventListener("click", function () {
    if (game4.interval) {
      game4.stop();
      btnhard.innerText = "Don`t be afraid";
    } else {
      game4.start();
      btnhard.innerText = "Go to pee";
    }
    this.clicking = new Audio("/assets/audios ad/clic future.wav");
    this.clicking.volume = 0.05;
    this.clicking.play()
  });

    //  GAME 4 END
  //  GAME 5 SURVIVE THE IMPOSIBLE START
superhard.addEventListener("click", function () {
    // game5.start();
    // displ.style.display = "block"

    // cheat.style.display = "inline-block";
    // restart.style.display = "flex"
    // allButtonsGone.forEach((button) => button.style.display = "none")
    // btn.style.display = "none";
    // btnsuperhard.style.display = "flex"
  });
  btnsuperhard.addEventListener("click", function () {
    if (game5.interval) {
      game5.stop();
      btnsuperhard.innerText = "Too much?";
    } else {
      game5.start();
      btnsuperhard.innerText = "Come on!!";
    }
    this.clicking = new Audio("/assets/audios ad/clic future.wav");
    this.clicking.volume = 0.05;
    this.clicking.play()
  });

    //  GAME 34 EASY EASY DE CODE END





    
  //el botón de reinicio
restart.addEventListener("click", function () {
  window.location.reload();
  this.clicking = new Audio("/assets/audios ad/clic future.wav");
  this.clicking.volume = 0.05;
  this.clicking.play()
  });


//el botón de inicio
  begin.addEventListener("click", function(){
    info.style.display = "block"
    begin.style.display = "none"
    manager.style.display = "none"
    cheat.style.display = "inline-block"
    restart.style.display = "flex"
    this.clicklaser = new Audio("/assets/audios ad/click laser.mp3");
    this.clicklaser.volume = 0.05;
    this.clicklaser.play()
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



//sonidos para hover sobre las cosas

const hoverSoundButtons1 = [begin, btn, restart, btneasy, btnnormal, btnhard, btnsuperhard, easy, normal, hard, superhard]

hoverSoundButtons1.forEach((button) => button.addEventListener("mouseover", function(){
  this.musicStart = new Audio("/assets/audio/lzr.mp3");
  this.musicStart.volume = 0.05;
  this.musicStart.play()
}))
const hoverSoundButtons2 = [in1, in2, in3, in4]

hoverSoundButtons2.forEach((button) => button.addEventListener("mouseover", function(){
  this.musicStart = new Audio("/assets/audio/pageturn.mp3");
  this.musicStart.volume = 0.05;
  this.musicStart.play()
}))

// infocheat.addEventListener("mouseover", function(){
//   this.musicStart = new Audio("/assets/audios ad/vibrsa.mp3");
//   this.musicStart.volume = 0.1;
//   this.musicStart.play()
// })

