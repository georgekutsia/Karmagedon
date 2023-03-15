const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);
const game2 = new Game2(ctx)
const game3 = new Game3(ctx)
const game4 = new Game4(ctx)
const game5 = new Game5(ctx)

// const infoDataAll = document.getElementById("display-all");
const infoData = document.getElementById("display-info");
const infoData1 = document.getElementById("display-info1");
const infoData2 = document.getElementById("display-info2");
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
const zkoren = document.getElementById("add-koren")
const zcustomer = document.getElementById("add-customer")
const zfood = document.getElementById("add-food")
const zupgrade = document.getElementById("add-upgrade")
const zupbullet = document.getElementById("add-upbullet")
const wornings = document.querySelector(".wornings-css")

const buyButtons = document.getElementById("buy-buttons")
const buyHide = document.getElementById("money-coins")
const buyBlaster = document.getElementById("buy-blaster")
const buyRockets = document.getElementById("buy-rockets")
const buyMines = document.getElementById("buy-mines")
const buyMine = document.getElementById("buy-mine")
const buyHooks = document.getElementById("buy-hooks")
const buyDiscounts = document.getElementById("buy-discounts")
const buyTimeShield = document.getElementById("buy-timeShield")

const sellHide = document.getElementById("sell-coins")
const sellRockets = document.getElementById("sell-rockets")
const sellMines = document.getElementById("sell-mines")
const sellMine = document.getElementById("sell-mine")
const sellHooks = document.getElementById("sell-hooks")
const sellDiscounts = document.getElementById("sell-discounts")

const askHide = document.getElementById("ask-coins")
const askFood = document.getElementById("ask-food")
const askDrug = document.getElementById("ask-drugs")

const megaHide = document.getElementById("mega-coins")
const megaShotgun = document.getElementById("mega-shotgun")

const allBuys = [buyRockets, buyMine, buyMines, buyHooks, buyDiscounts, buyTimeShield, buyBlaster]
const allSells = [sellRockets, sellMines, sellMine, sellHooks, sellDiscounts]
const allAsks = [askFood, askDrug]
const allMegas = [megaShotgun]

const allButtonsGone = [easy, normal, hard, superhard, info, manager, begin]


const in1 = document.getElementById("info1")
const in2 = document.getElementById("info2")
const in3 = document.getElementById("info3")
const in4 = document.getElementById("info4")


buyHide.addEventListener("click", function(){
    if(buyRockets.style.display === "inline")
    {      
      allBuys.forEach((dis) => dis.style.display = "none")
    } else {
      allBuys.forEach((dis) => dis.style.display = "inline")
    }
    
})
sellHide.addEventListener("click", function(){
    if(sellRockets.style.display === "inline")
    {      
      allSells.forEach((dis) => dis.style.display = "none")
    } else {
      allSells.forEach((dis) => dis.style.display = "inline")
    }
})

askHide.addEventListener("click", function(){
    if(askFood.style.display === "inline")
    {      
      allAsks.forEach((dis) => dis.style.display = "none")
    } else {
      allAsks.forEach((dis) => dis.style.display = "inline")
    }
})

megaHide.addEventListener("click", function(){
    if(megaShotgun.style.display === "inline")
    {      
      allMegas.forEach((dis) => dis.style.display = "none")
    } else {
      allMegas.forEach((dis) => dis.style.display = "inline")
    }
})




buyRockets.addEventListener("click", function(){
  if(money >= 100){
    money -= 100
    rocketCount += 5
    this.sandShootAudio = new Audio("/assets/audios ad/buy.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})

buyMines.addEventListener("click", function(){
  if(money >= 50){
    money -= 50
    elementalMineCount += 1
    this.sandShootAudio = new Audio("/assets/audios ad/buy.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})

buyMine.addEventListener("click", function(){
  if(money >= 30){
    money -= 30
    mineCount += 5
    this.sandShootAudio = new Audio("/assets/audios ad/buy.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
buyHooks.addEventListener("click", function(){
  if(money >= 20){
    money -= 20
    hookCount += 1
    this.sandShootAudio = new Audio("/assets/audios ad/buy.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})

buyDiscounts.addEventListener("click", function(){
  if(money >= 20){
    money -= 20
    discounting += 5
    this.sandShootAudio = new Audio("/assets/audios ad/buy.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
buyTimeShield.addEventListener("click", function(){
  if(money >= 250){
  money -= 250
  T = 84
  this.sandShootAudio = new Audio("/assets/audios ad/buy.wav")
  this.sandShootAudio.volume = 0.4;
  this.sandShootAudio.play();
  }
})

sellRockets.addEventListener("click", function(){
  if(rocketCount >=5){
    money += 50
    rocketCount -= 5
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
sellMines.addEventListener("click", function(){
  if(elementalMineCount >=1){
    money += 25
    elementalMineCount -= 1
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
sellMine.addEventListener("click", function(){
  if(mineCount >=1){
    money += 15
    mineCount -= 5
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
sellHooks.addEventListener("click", function(){
  if(hookCount >=1){
    money += 10
    hookCount -= 1
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
sellDiscounts.addEventListener("click", function(){
  if(discounting >=5){
    money += 10
    discounting -= 5
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})


askFood.addEventListener("click", function(){
  game.addFood()
  
})
askDrug.addEventListener("click", function(){
  game.addDrug()
  
})


megaShotgun.addEventListener("click", function(){
  if(money >= 2000 && extraShotgun === false){
    money -= 2000
    extraShotgun = true
    extraShot = 1
    megaShotgun.innerText = "This item is already in your power"
    megaShotgun.style.backgroundColor = "grey"
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
    this.buyBig = new Audio("/assets/audios ad/buyBigStuff.mp3")
    this.buyBig.volume = 0.2;
    this.buyBig.play();
  }
})
// infoDataAll.addEventListener("click", function(){
//   if (infoDataAll.style.opacity === "0.5") {
//     infoDataAll.innerText = "Show All";
//     infoDataAll.style.opacity = "1"
//     infoData.style.opacity = "1"
//     infoData1.style.opacity = "1"
//     infoData2.style.opacity = "1"
//   } else {
//     infoDataAll.innerText = `Hide all`;
//     infoDataAll.style.opacity = "0.5"
//     infoData.style.opacity = "0.01"
//     infoData1.style.opacity = "0.01"
//     infoData2.style.opacity = "0.01"
//   }
// })

infoData.addEventListener("click", function(){
  if (infoData.style.opacity === "0.01") {
    infoData.innerText = "Show Stats and Activations";
    infoData.style.opacity = "1"
  } else {
    infoData.innerText = `Hide Information`;
    infoData.style.opacity = "0.01"
  }
})

infoData1.addEventListener("click", function(){
  if (infoData1.style.opacity === "0.01") {
    infoData1.innerText = "Show Progress";
    infoData1.style.opacity = "1"
  } else {
    infoData1.innerText = `Hide Progress`;
    infoData1.style.opacity = "0.01"
  }
})
// infoData2.addEventListener("click", function(){
//   if (infoData2.style.opacity === "0.01") {
//     infoData2.innerText = "Show Mall Status";
//     infoData2.style.opacity = "1"
//   } else {
//     infoData2.innerText = `Hide Mall Status`;
//     infoData2.style.opacity = "0.01"
//   }
// })

//botón del juego
btn.addEventListener("click", function () {
    if (game.interval) {
      game.stop();
console.log("sss",game.winTime)
      btn.innerText = "START";
    } else {
      game.start();
console.log("sss",game.winTime)

      btn.innerText = `STOP`;
    }
    displ.style.display = "block"
    allButtonsGone.forEach((button) => button.style.display = "none")
    cheat.style.display = "inline-block"
    wornings.style.display = "flex"
    restart.style.display = "flex"
    demo.style.display = "inline-block";
    buyButtons.style.display = "block"
    infoData.style.display = "block"
    infoData1.style.display = "block"
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
      game.carts = []; game.babys = []; game.korens = [];
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
    zkoren.style.display = "inline-block"
    zcustomer.style.display = "inline-block"
    zupgrade.style.display = "inline-block"
    zupbullet.style.display = "inline-block"
    zfood.style.display = "inline-block"

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
zgoose.addEventListener("click", function(){
  game.addGoose()
  game.upBulletAlert()
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
zkoren.addEventListener("click", function(){
  game.addKoren()
  game.korenAlert()
  demo.innerText = "Clean"
})
zcustomer.addEventListener("click", function(){
  game.addCustomer()
  demo.innerText = "Clean"
})
zfood.addEventListener("click", function(){
  game.addFood()
  demo.innerText = "Clean"
})
zupgrade.addEventListener("click", function(){
  game.addUpgrade()
  game.upgradeAlert()
  demo.innerText = "Clean"
})
zupbullet.addEventListener("click", function(){
  game.addUpBullet()
  game.upBulletAlert()
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

