const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);


// const infoDataAll = document.getElementById("display-all");
// const infoData = document.getElementById("display-info");
// const infoData1 = document.getElementById("display-info1");
// const infoData2 = document.getElementById("display-info2");
const begin = document.querySelector(".neon-button");
const btn = document.querySelector(".neon-butt-play");
const btnTrain = document.querySelector(".neon-butt-training");
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
const zleveling= document.getElementById("add-leveling")
const warnings = document.querySelector(".warnings-css")

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
const askTrim = document.getElementById("ask-trim")

const megaHide = document.getElementById("mega-coins")
const megaShotgun = document.getElementById("mega-shotgun")
const megaMine = document.getElementById("mega-mine")
const megaHook = document.getElementById("mega-hook")
const megaLife = document.getElementById("mega-life")
const megaAreaDamage = document.getElementById("mega-areaDamage")

  const openBtn = document.getElementById('choose-options-open');
  const modal = document.getElementById('optionsModal');
  const overlay = document.getElementById('modal-overlay');

const allBuys = [buyRockets, buyMine, buyMines, buyHooks, buyDiscounts, buyTimeShield, buyBlaster]
const allSells = [sellRockets, sellMines, sellMine, sellHooks, sellDiscounts]
const allAsks = [askFood, askDrug, askTrim]
const allMegas = [megaShotgun, megaMine, megaHook, megaLife, megaAreaDamage]

const allButtonsGone = [easy, normal, hard, superhard, info, manager, begin, btnTrain]
const allAddButtons = [zkaren, zrat, zfat, zpuddle, zfire, zboss, zgoose, zdiscount, zcart, zbaby, zkoren, zcustomer, zupgrade, zupbullet, zleveling, zfood, ]


const in1 = document.getElementById("info1")
const in2 = document.getElementById("info2")
const in3 = document.getElementById("info3")
const in4 = document.getElementById("info4")


buyHide.addEventListener('click', function () {
  if (buyRockets.style.display === 'inline') {
    allBuys.forEach((dis) => (dis.style.display = 'none'))
  } else {
    allBuys.forEach((dis) => (dis.style.display = 'inline'))
    allMegas.forEach((dis) => (dis.style.display = 'none'))
    allSells.forEach((dis) => (dis.style.display = 'none'))
    allAsks.forEach((dis) => (dis.style.display = 'none'))
  }
})
sellHide.addEventListener('click', function () {
  if (sellRockets.style.display === 'inline') {
    allSells.forEach((dis) => (dis.style.display = 'none'))
  } else {
    allSells.forEach((dis) => (dis.style.display = 'inline'))
    allBuys.forEach((dis) => (dis.style.display = 'none'))
    allMegas.forEach((dis) => (dis.style.display = 'none'))
    allAsks.forEach((dis) => (dis.style.display = 'none'))
  }
})

askHide.addEventListener('click', function () {
  if (askFood.style.display === 'inline') {
    allAsks.forEach((dis) => (dis.style.display = 'none'))
  } else {
    allAsks.forEach((dis) => (dis.style.display = 'inline'))
    allBuys.forEach((dis) => (dis.style.display = 'none'))
    allMegas.forEach((dis) => (dis.style.display = 'none'))
    allSells.forEach((dis) => (dis.style.display = 'none'))
  }
})

megaHide.addEventListener('click', function () {
  if (megaShotgun.style.display === 'inline') {
    allMegas.forEach((dis) => (dis.style.display = 'none'))
  } else {
    allMegas.forEach((dis) => (dis.style.display = 'inline'))
    allBuys.forEach((dis) => (dis.style.display = 'none'))
    allSells.forEach((dis) => (dis.style.display = 'none'))
    allAsks.forEach((dis) => (dis.style.display = 'none'))
  }
})




buyRockets.addEventListener("click", function(){
  if(money >= 100){
    money -= 100;
    rocketCount += 1;
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
    mineCount += 1
    this.sandShootAudio = new Audio("/assets/audios ad/buy.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
buyHooks.addEventListener("click", function(){
  if(money >= 40){
    money -= 40
    hookCounter += 1
    this.sandShootAudio = new Audio("/assets/audios ad/buy.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})

buyDiscounts.addEventListener("click", function(){
  if(money >= 80){
    money -= 80
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
  if(rocketCount >=1){
    money += 50;
    rocketCount -= 1;
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
    mineCount -= 1
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
sellHooks.addEventListener("click", function(){
  if(hookCounter >=1){
    money += 20
    hookCounter -= 1
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
  }
})
sellDiscounts.addEventListener("click", function(){
  if(discounting >=5){
    money += 20
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
askTrim.addEventListener("click", function(){
  if(money >= 1500 && cactusCanCollide){
    money -= 1500
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
    this.buyBig = new Audio("/assets/audios ad/buyBigStuff.mp3")
    this.buyBig.volume = 0.2;
    this.buyBig.play();
      setTimeout(() => {
    cactusCanCollide = false;
  }, 3000);
  }
})

megaShotgun.addEventListener("click", function(){
  if(money >= 1800 && !extraShotgun){
    money -= 1800
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
megaMine.addEventListener("click", function(){
  if(money >= 2300 && !extraMine ){
    money -= 2300
    extraMine = true
    extraShot = 1
    megaMine.innerText = "This item is already in your power"
    megaMine.style.backgroundColor = "grey"
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
    this.buyBig = new Audio("/assets/audios ad/buyBigStuff.mp3")
    this.buyBig.volume = 0.2;
    this.buyBig.play();
  }
})
megaHook.addEventListener("click", function(){
  if(money >= 1500 && !extraHooker){
    money -= 1500
    extraHooker = true
    megaHook.innerText = "This item is already in your power"
    megaHook.style.backgroundColor = "grey"
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
    this.buyBig = new Audio("/assets/audios ad/buyBigStuff.mp3")
    this.buyBig.volume = 0.2;
    this.buyBig.play();
  }
})
megaLife.addEventListener("click", function(){
  if(money >= 1000){
    money -= 1000
    lifeTotal += 5
    game.player.heal(30)
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
    this.buyBig = new Audio("/assets/audios ad/buyBigStuff.mp3")
    this.buyBig.volume = 0.2;
    this.buyBig.play();
  } else {
    this.buyBig = new Audio("/assets/audios ad/needMoreMoney.m4a")
    this.buyBig.volume = 0.1;
    this.buyBig.play();
  }
})
megaAreaDamage.addEventListener("click", function(){
  if(money >= 2000 && !extraAreaDamage){
    money -= 2000;
    areaDamage = false;
    extraAreaDamage = true;
    megaAreaDamage.innerText = "This item is already in your power"
    megaAreaDamage.style.backgroundColor = "grey"
    this.sandShootAudio = new Audio("/assets/audios ad/sell.wav")
    this.sandShootAudio.volume = 0.4;
    this.sandShootAudio.play();
    this.buyBig = new Audio("/assets/audios ad/buyBigStuff.mp3")
    this.buyBig.volume = 0.2;
    this.buyBig.play();
  } else {
    this.buyBig = new Audio("/assets/audios ad/needMoreMoney.m4a")
    this.buyBig.volume = 0.1;
    this.buyBig.play();
  }
})



//botón del juego
btn.addEventListener("click", function () {
    if (game.interval) {
      game.stop();
      btn.innerText = "START";
    } else {
      game.start();
      btn.innerText = `STOP`;
    }
      allAddButtons.forEach((button) => button.style.display = "inline-block")
  allAddButtons.forEach((button) => button.style.zIndex = "90")
    displ.style.display = "block"
    allButtonsGone.forEach((button) => button.style.display = "none")
    cheat.style.display = "inline-block"
    warnings.style.display = "flex"
    restart.style.display = "flex"
    demo.style.display = "inline-block";
    buyButtons.style.display = "block"
    openBtn.style.display = "none"
    // infoData.style.display = "block"
    // infoData1.style.display = "block"
    this.musicStart = new Audio("/assets/audios ad/clic future.wav");
    this.musicStart.volume = 0.05;
    this.musicStart.play()
  });



//botón del entrenamiento
btnTrain.addEventListener("click", function () {
    if (practiceGame.interval) {
      practiceGame.stop();
      btnTrain.innerText = "START";
    } else {
      practiceGame.start();
      btnTrain.innerText = `STOP`;
    }
    displ.style.display = "block"
    allButtonsGone.forEach((button) => button.style.display = "none")
    cheat.style.display = "inline-block"
    // warnings.style.display = "flex"
    restart.style.display = "flex"
    demo.style.display = "inline-block";
    buyButtons.style.display = "block"
    // infoData.style.display = "block"
    // infoData1.style.display = "block"
    this.musicStart = new Audio("/assets/audios ad/clic future.wav");
    this.musicStart.volume = 0.05;
    this.musicStart.play()
  });

    
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
  if (game.bosss.length > 0) {
    game.fires = []; game.puddles = [];
    game.bosss = []; game.geese = []; game.fats = [];
    game.rats = []; game.karens = []; game.discounts = [];
    game.carts = []; game.babys = []; game.korens = [];
    demo.innerText = "Add it->";
  } 
  demo.style.color = "green"
  demo.style.backgroundColor = "grey"
  allAddButtons.forEach((button) => button.style.display = "inline-block")
  allAddButtons.forEach((button) => button.style.zIndex = "90")
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
zleveling.addEventListener("click", function(){
  leveler = true;
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


  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
  });


  // Opcional: cerrar al hacer clic fuera del modal
  overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });

  let hoveredLife = false;
  let hoveredReputation = false;
  let hoveredComplaints = false;
  let hoveredCustomers = false;
 let hoveredOffice = false;
 let hoveredSpecialWeapons = false;
 let hoveredEquipment = false;
 let hoveredBody = false;
 let hoveredMind = false;
 can.addEventListener("mousemove", function (e) {
  const rect = can.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

hoveredLife = (
  mouseX >= 1220 &&
  mouseX <= ctx.canvas.width &&
  mouseY >= 50 &&
  mouseY <= 78
);
hoveredReputation= (
  mouseX >= 1220 &&
  mouseX <= ctx.canvas.width &&
  mouseY >= 85 &&
  mouseY <= 113
);
hoveredComplaints= (
  mouseX >= 1220 &&
  mouseX <= ctx.canvas.width &&
  mouseY >= 118 &&
  mouseY <= 150
);
hoveredCustomers= (
  mouseX >= 1220 &&
  mouseX <= ctx.canvas.width &&
  mouseY >= 160 &&
  mouseY <= 220
);
hoveredOffice= (
  mouseX >= 1220 &&
  mouseX <= ctx.canvas.width &&
  mouseY >= 220 &&
  mouseY <= 340
);
hoveredSpecialWeapons= (
  showPlayerJoBStats &&
  mouseX >= 1220 &&
  mouseX <= ctx.canvas.width &&
  mouseY >= 600 &&
  mouseY <= ctx.canvas.height
);
hoveredEquipment= (
  showPlayerPhysicalStats &&
  mouseX >= 100 &&
  mouseX <= 480 &&
  mouseY >= 840 &&
  mouseY <= ctx.canvas.height
);
hoveredBody= (
  showPlayerPhysicalStats &&
  mouseX >= 500 &&
  mouseX <= 730 &&
  mouseY >= 840 &&
  mouseY <= ctx.canvas.height
);
hoveredMind= (
  showPlayerPhysicalStats &&
  mouseX >= 760 &&
  mouseX <= 940 &&
  mouseY >= 840 &&
  mouseY <= ctx.canvas.height
);
});
