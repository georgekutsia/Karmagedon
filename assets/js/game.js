class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);
    this.token = new Token(ctx);
    this.line = new Line(ctx);
    this.healing = new HealingPlace(ctx);
    this.water = new Water(ctx)
    this.score = new Score(ctx);
    this.food = new Food(ctx);
    this.upgrade = new Upgrade(ctx);
    this.upBullet = new Upbullet(ctx);
    this.saved = new Saved(ctx);
    this.cactus = [
      new Cactus(ctx, 370, 210, 40, 40, "/assets/images/fondos/cact1.png"), new Cactus(ctx, 600, 200, 50, 50, "/assets/images/fondos/cact3.png"),
      new Cactus(ctx, 820, 320, 30, 40, "/assets/images/fondos/cact5.png"), new Cactus(ctx, 780, 440, 40, 40, "/assets/images/fondos/cact4.png"),
      new Cactus(ctx, 57, 548, 25, 25),  new Cactus(ctx, 167, 548, 25, 25), new Cactus(ctx, 460, 548, 25, 25),
      new Cactus(ctx, 387, 548, 25, 25), new Cactus(ctx, 287, 548, 25, 25), new Cactus(ctx, 387, 548, 25, 25),
      new Cactus(ctx, 450, 548, 25, 25), new Cactus(ctx, 520, 548, 25, 25), new Cactus(ctx, 610, 548, 25, 25),


      new Cactus(ctx, 710, 542, 70, 18, "/assets/images/fondos/cact5a.png"), new Cactus(ctx, 750, 542, 70, 18, "/assets/images/fondos/cact5a.png"),
      new Cactus(ctx, 800, 542, 70, 18, "/assets/images/fondos/cact5b.png"), new Cactus(ctx, 933, 553, 10, 80, "/assets/images/fondos/cact5b.png"),
      new Cactus(ctx, 740, 536, 35, 35, "/assets/images/fondos/arb10.png"),  new Cactus(ctx, 790, 536, 30, 30, "/assets/images/fondos/arb9.png"),
      new Cactus(ctx, 690, 536, 30, 30, "/assets/images/fondos/arb2.png"),   new Cactus(ctx, 850, 536, 30, 30, "/assets/images/fondos/arb2.png"),
      new Cactus(ctx, 928, 555, 23, 23, "/assets/images/fondos/arb4.png"),

    ]
    this.pfront = [
      new People(ctx, 90, 360, 80, 80, "/assets/images/people/pep10.png"), new People(ctx, 250, 350, 40, 60, "/assets/images/people/pep3.png"),
      new People(ctx, 730, 90, 40, 40, "/assets/images/people/pep5.png"), new People(ctx, 850, 80, 80, 80, "/assets/images/people/pep8.png"),
      new People(ctx, 860, 350, 40, 40, "/assets/images/people/pep11.png"), new People(ctx, 160, 590, 30, 30, "/assets/images/people/pep22.png"),
      new People(ctx, 200, 590, 30, 30, "/assets/images/people/pep23.png"), new People(ctx, 430, 12, 50, 30, "/assets/images/people/pep25.png"),
      new People(ctx, 800, 12, 60, 35, "/assets/images/people/pep20.png"), new People(ctx, 600, 280, 60, 35, "/assets/images/people/pep24.png"),
      new People(ctx, 400, 350, 80, 45, "/assets/images/people/pep30.png"), new People(ctx, 835, 575, 80, 45, "/assets/images/people/pep31.png"),
      new People(ctx, 235, 275, 50, 30, "/assets/images/people/pep32.png"),
    ]
    this.pback = [
      new People(ctx, 250, 420, 40, 60, "/assets/images/people/pep2.png"), new People(ctx, 480, 430, 40, 40, "/assets/images/people/pep.png"),
      new People(ctx, 730, 400, 80, 50, "/assets/images/people/pep7.png"), new People(ctx, 95, 160, 70, 40, "/assets/images/people/pep1.png"),
      new People(ctx, 560, 150, 50, 50, "/assets/images/people/pep6.png"), new People(ctx, 410, 160, 40, 40, "/assets/images/people/pep14.png"),
      new People(ctx, 520, 570, 50, 50, "/assets/images/people/pep15.png"), new People(ctx, 9, 100, 40, 100, "/assets/images/people/pep27.png"),
    ]
    this.bushesover = [
      // vertical bushes start
      new Bush1(ctx, 57, 60, 30, 170), new Bush1(ctx, 287, 60, 30, 170), new Bush3(ctx, 377, 60, 30, 170), new Bush3(ctx, 607, 60, 30, 170),
      new Bush2(ctx, 697, 60, 30, 170), new Bush2(ctx, 921, 60, 30, 170), new Bush1(ctx, 57, 330, 30, 120), new Bush1(ctx, 287, 330, 30, 150),
      new Bush3(ctx, 377, 330, 30, 150), new Bush3(ctx, 607, 330, 30, 150), new Bush2(ctx, 697, 330, 30, 150), new Bush2(ctx, 921, 330, 30, 150),
      new Bush1(ctx, 57, 560, 30, 64),  new Bush1(ctx, 67, 550, 90, 20),  new Bush2(ctx, 97, 550, 90, 20),  new Bush1(ctx, 287, 550, 20, 75),
      new Bush1(ctx, 387, 550, 20, 75), new Bush2(ctx, 450, 550, 90, 20), new Bush3(ctx, 387, 550, 90, 20), new Bush2(ctx, 610, 550, 20, 75),
      new Bush2(ctx, 700, 550, 20, 75), new Fence(ctx, 60, 420, 60, 40),

// vertical bushes end
    ]
    this.walls = [
      new Fence(ctx, 51, 50, 80, 40), new Fence(ctx, 240, 50, 80, 40), new Fence(ctx, 51, 320, 80, 40), new Fence(ctx, 240, 320, 80, 40),
      new Fence(ctx, 880, 320, 80, 40), new Fence(ctx, 830, 320, 80, 40), new Fence(ctx, 370, 320, 80, 40), new Fence(ctx, 560, 320, 80, 40),
      new Fence(ctx, 700, 50, 80, 40), new Fence(ctx, 870, 50, 80, 40),
// round bushes
      new Bushes(ctx, 160, 410, 40, 40, "/assets/images/fondos/arb11.png"),  new Bushes(ctx, 170, 130, 40, 40, "/assets/images/fondos/arb9.png"),
      new Bushes(ctx, 490, 110, 40, 40, "/assets/images/fondos/arbusto1.png"), new Bushes(ctx, 482, 60, 60, 60, "/assets/images/fondos/arbusto1.png"),
      new Bushes(ctx, 800, 170, 40, 40, "/assets/images/fondos/arb1.png"),
// round bushes
      new Fence(ctx, 90, 190, 80, 40), new Fence(ctx, 470, 130, 80, 40), new Fence(ctx, 465, 450, 60, 40), new Fence(ctx, 720, 440, 80, 40),
    ];
    this.portals = [new Portal (ctx, 10, 300, 30, 30)]   
    this.portals2 = [new Portal (ctx, 490, 590, 30, 30)]
    this.karenTime = 0;
    this.ratTime = 1600;
    this.fatTime = 1300; 
    this.winTime = 0;
    this.machinganTime = 1000
    this.machinganRestore = 400
    this.interval = null;
    this.puddleTime =this.fireTime =this.gooseTime =this.babyTime =this.customerTime =this.bossTime =this.korenTime =this.cartTime =this.foodTime =this.upgradeTime =this.upBulletTime =this.discountTime =this.deadGoose = 0
    this.karens = this.rats = this.babys = this.customers = this.fats = this.puddles = this.fires = this.geese = this.bosss = this.korens = this.carts = this.foods = this.upgrades = this.upBullets = this.discounts = [];
    this.setListeners();
    this.musicStart = new Audio("/assets/audio/valse.mp3");
    this.musicStart.volume = 0.002;
    this.musicStart.loop = true;
  }
  start() {
    this.so = new Audio("/assets/audio/So1.mp3");
    this.so.volume = 0.08;
    this.so.play();
    this.musicStart.play();
    myFunction();
    this.interval = setInterval(() => {
    this.endGame = document.getElementById("time");
    this.clear();
    this.draw();
    this.move();
    this.karenTime++; this.ratTime++; this.fatTime++; this.puddleTime++;  this.fireTime++; this.gooseTime++; this.babyTime++; this.customerTime++; this.bossTime++; this.korenTime++; this.winTime++; this.cartTime++; this.foodTime++; this.upgradeTime++; this.upBulletTime++; this.discountTime++;
    this.checkCollisions();
      if (this.karenTime > 3700) {     // karen
        this.karenTime = 0;
        this.karensAlert();
        this.addKaren();
        if(this.winTime >= 68500){
          this.karenTime = 2000
        }
      }
      if (this.ratTime > Math.random() * 100 + 2000) { //rat
        this.ratTime = 0;
        this.ratAlert();
        this.addRat();
        if(this.winTime >= 48500){
          this.ratTime = 700
        }
      }
      if (this.fatTime > Math.random() * 400 + 1900) { //fat
        console.log("ya")
        this.fatTime = 0;
        this.fatAlert();
        this.addFat();
        if(this.winTime >= 68500){
          this.fatTime = 500
        }
      }
      if (this.puddleTime > Math.random() * 400 + 2000) { //puddle
        this.puddleTime = 0;
        this.waterAlert();
        this.addPuddle();
        if(this.winTime >= 80000){
          this.puddleTime = 400
        }
      }
      if (this.fireTime > Math.random() * 400 + 2000) { //fire
        this.fireTime = 0;
        this.fireAlert();
        this.addFire();
        if(this.winTime >= 80000){
          this.fireTime = 400
        }
      }
      if (this.gooseTime > Math.random() * 100 + 11100) { //goose a las 3 horas mas o menos
        this.gooseTime = 9000;
        this.gooseAlert();
        this.addGoose();
      }
      if (this.babyTime > Math.random() * 2000 + 14800) {  //baby
        this.babyTime = 11000;
        this.babyAlert();
        this.addBaby();
      }
      if (this.customerTime > Math.random() * 100 + 2500) { //customer
        this.customerTime = 0;
        this.addCustomer();
      }
      if (this.cartTime > Math.random() * 100 + 10000) { //cart
        this.cartTime = 0;
        this.addCart();
      }
      if (this.foodTime > Math.random() * 100 + 20000) {  //food
        this.foodTime = 0;
        this.addFood();
      }
      if (this.discountTime > Math.random() * 900 + 6000) {   //discount
        this.discountTime = 3000;
        this.addDiscount();
      }
      if (this.upgradeTime > Math.random() * 100 + 7400) {   //upgrade
        this.upgradeTime = 0;
        this.upgradeAlert()
        this.addUpgrade();
      }
      if (this.upBulletTime > Math.random() * 100 + 50000) {   //upgrade
        this.upBulletTime = 0;
        this.upBulletAlert()
        this.addUpBullet();
      }
      if (this.bossTime > Math.random() * 100 + 14800) {   //boss
        this.bossTime = 5000;
        this.bossAlert();
        this.addBoss();
      }
      if (this.korenTime > Math.random() * 100 + 15000) {   //koren
        this.korenTime = 13500;
        this.addKoren();
        this.korenAlert()
      } //15000            13500
// win time game start -----------------------
      if (this.winTime >= 137800) {
        this.gameWin();
      }   //acaba a las 21 con tick del tiempo en 15
      if (this.winTime % 55000 === 0) {
        this.almostOver = new Audio("/assets/audio/It’s almost over.mp3");
        this.almostOver.volume = 0.3;
        this.almostOver.play()
      }
      if (this.winTime % 45000 === 0) {
        this.littleMore = new Audio("/assets/audio/Just a little more.mp3");
        this.littleMore.volume = 0.3;
        this.littleMore.play()
      }
      if (this.winTime % 40000 === 0) {
        this.soTired = new Audio("/assets/audio/Tired.mp3");
        this.soTired.volume = 0.3;
        this.soTired.play()
      }
      if (this.winTime % 35000 === 0) {
        this.candyShop = new Audio("/assets/audios ad/Candy shop.mp3");
        this.candyShop.volume = 0.3;
        this.candyShop.play()
      }
      if (this.winTime % 30200 === 0) {
        this.needCoffee = new Audio("/assets/audios ad/Need coffee.mp3");
        this.needCoffee.volume = 0.3;
        this.needCoffee.play()
      }
      if (this.winTime % 30000 === 0) {
        this.pizzaPlace = new Audio("/assets/audios ad/Pizza place.mp3");
        this.pizzaPlace.volume = 0.3;
        this.pizzaPlace.play()
      }
      if (this.winTime % 25000 === 0) {
        this.moreIShoot = new Audio("/assets/audios ad/More I shoot.mp3");
        this.moreIShoot.volume = 0.3;
        this.moreIShoot.play()
      }
      if (this.winTime % 8000 === 0) {
        this.getsSiri = new Audio("/assets/audio/Gets serious.mp3");
        this.getsSiri.volume = 0.2;
        this.getsSiri.play();
      }
// win time game end -----------------------

    }, 1000 / 60);
  }
  stop() {
    this.musicStart.pause();
    clearInterval(this.interval);
    this.interval = null;
    clearInterval(window.timerInterval);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.karens = this.karens.filter((e) => e.isVisible());
    this.rats = this.rats.filter((e) => e.isVisible());
    this.fats = this.fats.filter((e) => e.isVisible());
    this.geese = this.geese.filter((e) => e.isVisible());
    this.babys = this.babys.filter((e) => e.isVisible());
    this.customers = this.customers.filter((e) => e.isVisible());
    this.bosss = this.bosss.filter((e) => e.isVisible());
    this.korens = this.korens.filter((e) => e.isVisible());
    this.foods = this.foods.filter((e) => e.isVisible());
    this.puddles = this.puddles.filter((e) => e.isVisible());
    this.upgrades = this.upgrades.filter((e) => e.isVisible());
    this.upBullets = this.upBullets.filter((e) => e.isVisible());
    this.carts = this.carts.filter((e) => e.isVisible());
    this.fires = this.fires.filter((e) => e.isVisible());
    this.discounts = this.discounts.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.blasters = this.player.blasters.filter((e) => e.isVisible());
    this.player.auras = this.player.auras.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());
    this.player.sanders = this.player.sanders.filter((e) => e.isVisible());
    this.player.discountings = this.player.discountings.filter((e) => e.isVisible());

    if (this.karens.length <= 0) { const alert = document.getElementById("karens-alert"); alert.style.display = "none";}
    if (this.rats.length <= 0) { const alert = document.getElementById("rat-alert"); alert.style.display = "none";}
    if (this.fats.length <= 0) { const alert = document.getElementById("fat-alert"); alert.style.display = "none";}
    if (this.geese.length <= 0) { const alert = document.getElementById("goose-alert"); alert.style.display = "none";}
    if (this.babys.length <= 0) { const alert = document.getElementById("baby-alert"); alert.style.display = "none";}
    if (this.puddles.length <= 0) { const alert = document.getElementById("water-alert"); alert.style.display = "none";}
    if (this.fires.length <= 0) { const alert = document.getElementById("fire-alert"); alert.style.display = "none";}
    if (this.upgrades.length <= 0) { const alert = document.getElementById("upgrade-alert"); alert.style.display = "none";}
    if (this.upBullets.length <= 0) { const alert = document.getElementById("upBullet-alert"); alert.style.display = "none";}
    if (this.bosss.length <= 0) { const alert = document.getElementById("boss-alert"); alert.style.display = "none";}
    if (this.korens.length <= 0) { const alert = document.getElementById("koren-alert"); alert.style.display = "none";}
    if (this.bosss.length <= 0 &&this.korens.length <= 0 &&this.fires.length <= 0 &&this.puddles.length <= 0 &&this.babys.length <= 0 &&this.geese.length <= 0 &&this.fats.length <= 0 &&this.rats.length <= 0 &&this.karens.length <= 0
    ) {
      const nothingToWorrie = document.getElementById("ok");
      nothingToWorrie.style.display = "inline-block";
      const statusOk = document.getElementById("status");
      statusOk.style.backgroundColor = "rgb(0, 128, 0)";
      statusOk.style.color = "white";
      statusOk.style.border = "3px solid rgb(3, 59, 3)";
      statusOk.style.padding = "2px 20px";
      statusOk.style.marginBottom = "2px";
    }
  }

  draw() {
    this.winTime++;
    this.chargedDisc = discounting / 5
    this.bosss.forEach((e) => e.draw());
    this.korens.forEach((e) => e.draw());
    this.babys.forEach((e) => e.draw());
    this.customers.forEach((e) => e.draw());
    if(this.winTime >= 100){
      this.pback.forEach((e) => e.draw());
    }
    this.walls.forEach((e) => e.draw());
    if(this.winTime >= 200){
      this.portals.forEach((e) => e.draw());
    }
    if(this.winTime >= 200){
      this.portals2.forEach((e) => e.draw());
    }
    if(this.winTime >= 100){
    this.pfront.forEach((e) => e.draw());
    }
    this.puddles.forEach((e) => e.draw());
    this.fires.forEach((e) => e.draw());
    this.player.draw();
    this.bushesover.forEach((e) => e.draw());
    this.karens.forEach((e) => e.draw());
    if(this.winTime >= 10){
      this.cactus.forEach((e) => e.draw());
    }
    this.rats.forEach((e) => e.draw());
    this.fats.forEach((e) => e.draw());
    this.carts.forEach((e) => e.draw());
    this.foods.forEach((e) => e.draw());
    this.upgrades.forEach((e) => e.draw());
    this.upBullets.forEach((e) => e.draw());
    this.discounts.forEach((e) => e.draw());
    this.geese.forEach((e) => e.draw());
    this.token.draw();
    this.line.draw();
// CTX data statistics
// CTX data statistics
this.bodyImg = new Image();
this.bodyImg.src = "/assets/images/elements/body.png"
this.thrower = new Image();
this.thrower.src = "/assets/images/elements/.png"
this.ctx.font = "20px Arial";
this.ctx.fillStyle = "silver";
this.ctx.save();
ctx.fillStyle = "rgb(1, 2, 2)";
this.ctx.font = "30px Arial";
this.ctx.fillStyle = "white";
this.ctx.restore();
this.ctx.fillText(`Cooldown: ${this.player.cooldownBullet.toString()}`, 450, 704);
this.ctx.fillText(`Distance: ${bulletDistance.toString()}`, 310, 704);
this.ctx.fillText(`Speed: ${this.player.speed.toString()}`, 310, 681);
this.ctx.fillText(`Size: ${bulletSize.toString()}`, 405, 681);
this.ctx.fillText(`Growth: ${afterSize.toString()}`, 495, 681);
this.ctx.fillText(`Jump: ${distance.toFixed(1).toString()}ft`, 640, 681);
this.ctx.fillText(`Jump cooldown: ${this.player.cooldownJump.toFixed(1)}`, 760, 681);
this.ctx.fillText(`Speed: ${this.player.boost.toFixed(1)}`, 640, 704);
if (this.score.total >= 50) {
  this.machinganTime--
    C = 67;
    V = 86;
    if(this.machinganTime <= 0){
      C = 0;
      V = 0;
      this.machinganTime = 0
      this.machinganRestore --
      if(this.machinganRestore <= 0){
        this.machinganTime = 300
        this.machinganRestore = 600
        C = 67;
        V = 86;
      }
    }
}

if (discounting >= 1 ){
  R = 82
}
if (discounting <= 1 ){
  R = 0
}
if (C === 67){
  this.machinganTimeLeft = parseInt(this.machinganTime/10)
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillStyle = "green";
    ctx.fillRect(748, 638, 260, 23);
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Machinegun Active for ${this.machinganTimeLeft.toString()}: -C/V- `, 750, 655);
    this.ctx.restore();
}
if (C === 0 && this.score.total >= 50){
    this.machinganRestoreLeft = parseInt(this.machinganRestore/10)
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillStyle = "indianred";
    ctx.fillRect(755, 638, 250, 23);
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Machinegun Reactivated in ${this.machinganRestoreLeft.toString()} `, 760, 655);
    this.ctx.restore();

}
if (T === 84){
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillStyle = "rgb(21, 209, 209)";
    ctx.fillRect(85, 638, 150, 23);
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Timeshield on: -T-`, 90, 655);
    this.ctx.restore();
}
if (M === 77 && this.score.total >= 20){
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillStyle = "rgb(255, 149, 0)";
  ctx.fillRect(245, 638, 190, 23);
  this.ctx.fillStyle = "black";
  this.ctx.fillText(`Sandblaster ready: -M- `, 250, 655);
  this.ctx.restore();
} 
if (this.score.total <= 19){
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillStyle = "rgb(86, 6, 6)";
  ctx.fillRect(245, 638, 190, 23);
  this.ctx.fillStyle = "white";
  this.ctx.fillText(`Megablaster: pending.. `, 250, 655);
  this.ctx.restore();
} 
if (M !== 77 && this.score.total >= 20){
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillStyle = "rgb(255, 149, 0)";
  ctx.fillRect(240, 638, 200, 23);
  this.ctx.fillStyle = "black";
  this.ctx.fillText(`Charge blaster to 20 : ${charging.toString()}`, 242, 655);
  this.ctx.restore();
}
if (R === 82){
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillStyle = "rgb(255, 149, 0)";
  ctx.fillRect(445, 638, 300, 23);
  this.ctx.fillStyle = "black";
  this.ctx.fillText(`Diagonal dispenser charged : ${this.chargedDisc.toString()} -R- `, 450, 655);
  this.ctx.restore();
}

if(this.puddles.length + this.fires.length >= 9){
  this.player.loseRespect()
}

// CTX data statistics
// CTX data statistics


    if (this.winTime > 600) {
      this.healing.draw();
      const iceWorning = document.getElementById("ice");
      iceWorning.style.display = "inline-block";
    }
    this.score.draw();
    this.saved.draw();
  }
  move() {
    this.player.move();
    this.token.move();
    this.karens.forEach((e) => e.move());
    this.rats.forEach((e) => e.move());
    this.fats.forEach((e) => e.move());
    this.geese.forEach((e) => e.move());
    this.babys.forEach((e) => e.move());
    this.customers.forEach((e) => e.move());
    this.bosss.forEach((e) => e.move(this.player));
    this.korens.forEach((e) => e.move(this.player));
    this.puddles.forEach((e) => e.move());
    this.fires.forEach((e) => e.move());
    this.line.move();
    this.healing.move();
    this.carts.forEach((e) => e.move());
    this.foods.forEach((e) => e.move());
    this.upgrades.forEach((e) => e.move());
    this.upBullets.forEach((e) => e.move());
    this.discounts.forEach((e) => e.move());
  }
  addKaren() {
    const karen = new Karens(ctx);
    this.karens.push(karen);
    this.thisAudio = new Audio("/assets/audio/Karen.mp3");
    this.thisAudio.volume = 0.06;
    this.thisAudio.play();
  }
  addRat() {
    const rat = new Rats(ctx);
    this.rats.push(rat);
    this.thisAudio = new Audio("/assets/audio/Comemos.mp3");
    this.thisAudio.volume = 0.2;
    this.thisAudio.play();
    this.thisAudio = new Audio("/assets/audios ad/Ratas.mp3");
    this.thisAudio.volume = 0.03;
    this.thisAudio.play();

  }
  addFat() {
    const fat = new Fat(ctx);
    this.fats.push(fat);
    this.thisAudio = new Audio("/assets/audio/Oh fuck.mp3");
    this.thisAudio.volume = 0.2;
    this.thisAudio.play();
  }
  addGoose() {
    const goose = new Goose(ctx);
    this.geese.push(goose);
    this.thisAudio = new Audio("/assets/audio/Goose.mp3");
    this.thisAudio.volume = 0.1;
    this.thisAudio.play();
    this.thisAudio = new Audio("/assets/audio/geese.mp3");
    this.thisAudio.volume = 0.02;
    this.thisAudio.play();
  }
  addBaby() {
    const baby = new Baby(ctx);
    this.babys.push(baby);
    this.newShoes = new Audio("/assets/audio/Los baby.mp3");
    this.newShoes.volume = 0.2;
    this.newShoes.play()
    this.newShoes = new Audio("/assets/audios ad/Baby.mp3");
    this.newShoes.volume = 0.07;
    this.newShoes.play()
  }
  addCustomer() {
    const customer = new Customer (ctx);
    this.customers.push(customer);
  }
  addBoss() {
    const boss = new Boss(ctx);
    this.bosss.push(boss);
    this.thisAudio = new Audio("/assets/audio/Nonono.mp3");
    this.thisAudio.volume = 0.2;
    this.thisAudio.play();
    this.thisAudio = new Audio("/assets/audios ad/Karen loca.mp3");
    this.thisAudio.volume = 0.1;
    this.thisAudio.play();
  }
  addKoren() {
    const koren = new Koren(ctx);
    this.korens.push(koren);
    // this.thisAudio = new Audio("/assets/audio/Nonono.mp3");
    // this.thisAudio.volume = 0.2;
    // this.thisAudio.play();
    // this.thisAudio = new Audio("/assets/audios ad/Karen loca.mp3");
    // this.thisAudio.volume = 0.1;
    // this.thisAudio.play();
  }
  addPuddle() {
    const puddle = new Puddle(ctx);
    this.puddles.push(puddle);
    this.puddleBeginAudio = new Audio("/assets/audio/puddleBegin.mp3");
    this.puddleBeginAudio.volume = 0.5;
    this.puddleBeginAudio.play();
    this.thisAudio = new Audio("/assets/audio/Now what.mp3");
    this.thisAudio.volume = 0.08;
    this.thisAudio.play();
  }
  addFire() {
    const fire = new Fire(ctx);
    this.fires.push(fire);
    this.puddleBeginAudio = new Audio("/assets/audio/fireBegin.wav");
    this.puddleBeginAudio.volume = 0.2;
    this.puddleBeginAudio.play();
    this.thisAudio = new Audio("/assets/audio/Oh fuck.mp3");
    this.thisAudio.volume = 0.2;
    this.thisAudio.play();
  }
  addCart() {
    const cart = new Cart(ctx);
    this.carts.push(cart);
  }
  addFood() {
    const food = new Food(ctx);
    this.foods.push(food);
  }
  addUpgrade() {
    const upgrade = new Upgrade(ctx);
    this.upgrades.push(upgrade);
  }
  addUpBullet() {
    const upBullet = new Upbullet(ctx);
    this.upBullets.push(upBullet);
  }
  addDiscount() {
    const discount = new Discount(ctx);
    this.discounts.push(discount);
    this.disco = new Audio("/assets/audio/Discounts.mp3");
    this.disco.volume = 0.2;
    this.disco.play()
  }
  // alerts start !!!!!! 
  alerting(){
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.border = "5px solid rgb(99, 5, 5)";
    statusOk.style.color = "white";
  }
  karensAlert() {
    const karensAlert = document.getElementById("karens-alert");
    karensAlert.style.display = "inline-flex";
    this.alerting()
  }
  ratAlert() {
    const ratAlert = document.getElementById("rat-alert");
    ratAlert.style.display = "inline-flex";
    this.alerting()

  }
  fatAlert() {
    const fatAlert = document.getElementById("fat-alert");
    fatAlert.style.display = "inline-flex";
    this.alerting()

  }
  gooseAlert() {
    const gooseAlert = document.getElementById("goose-alert");
    gooseAlert.style.display = "inline-flex";
    this.alerting()

  }
  waterAlert() {
    const waterAlert = document.getElementById("water-alert");
    waterAlert.style.display = "inline-flex";
    this.alerting()

  }
  fireAlert() {
    const fireAlert = document.getElementById("fire-alert");
    fireAlert.style.display = "inline-flex";
    this.alerting()

  }
  upgradeAlert() {
    const upgradeAlert = document.getElementById("upgrade-alert");
    upgradeAlert.style.display = "inline-flex";
    this.alerting()

  }
  upBulletAlert() {
    const upBulletAlert = document.getElementById("upBullet-alert");
    upBulletAlert.style.display = "inline-flex";
    this.alerting()

  }
  babyAlert() {
    const babyAlert = document.getElementById("baby-alert");
    babyAlert.style.display = "inline-flex";
    this.alerting()

  }
  bossAlert() {
    const crazyKaren = document.getElementById("boss-alert");
    crazyKaren.style.display = "inline-flex";
    this.alerting()

  }
  korenAlert() {
    const korenAlert = document.getElementById("koren-alert");
    korenAlert.style.display = "inline-flex";
    this.alerting()

  }
  // alerts end !!!!!! 

  
  
  saving(){
    this.saved.addSave()
    distance += 10
    this.player.booster += 0.5
    this.player.cooldownJump -= 100
    this.player.getBigRespect()
  }
  dying(){
    this.player.loseBigRespect()
    this.score.addScore()
    distance -= 10
    this.player.booster -= 0.5
    this.player.cooldownJump += 100
  }
  dyingCus(){
    this.player.loseCustomerRespect()
    distance -= 0.05
    this.player.booster -= 0.010
    this.player.cooldownJump += 5
  }
  //Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..
  //Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..
  checkCharger(){
    charging+=1
    if(charging >= 20 && this.score.total >= 20){
        M = 77
        charging = 0
    }
  }
  checkCollisions() {
    this.winTime++;
    // puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..
    // puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..puddle..
    this.puddles.forEach((puddle) => { //agua con blasters
      this.player.blasters.filter((blast) => {
        if (blast.collides(puddle)) {
          puddle.dicreaseSmall();
          if (puddle.h <= 20) {
            puddle.vx = 500;
            this.score.addkobstacle()
            this.score.addktotal1()
            if (this.winTime > 40000) {
              this.addPuddle();
            }
          }
          return false;
        } else return true;
      });
    });
    this.puddles.forEach((puddle) => {//agua con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(puddle)) {
          puddle.dicreaseSmall();
          if (puddle.h <= 20) {
            puddle.vx = 500;
            this.score.addkobstacle()
            this.score.addktotal1()
            if (this.winTime > 120000) {
              this.addPuddle();
            }
          }
          return false;
        } else return true;
      });
    });
    this.puddles.forEach((puddle) => {//agua con fuego
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(puddle)) {
          this.player.heats.splice(0, 1);
          puddle.dicrease();
        this.checkCharger()
          if (puddle.h <= 20) {
            puddle.vx = 500;
            this.score.addkobstacle()
            this.score.addktotal1()
            if (this.winTime > 40000) {
              this.addPuddle();
            }
          }
          return false;
        } else return true;
      });
    });
    this.player.waters.forEach((water) => {  // agua con agua
      this.puddles.forEach((puddle) => {
        water.collides(puddle);
        if (water.collides(puddle)) {
          this.player.waters.splice(0, 1);
          this.puddleBeginAudio = new Audio("/assets/audio/puddleBegin.mp3");
          this.puddleBeginAudio.volume = 0.2;
          this.puddleBeginAudio.play();
          puddle.increase();
        }
      });
    });
// fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..
// fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..fire..
    this.fires.forEach((fire) => {//fuego con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(fire)) {
          fire.dicreaseSmall();
          if (fire.h <= 20) {
            fire.vx = 500;
            this.score.addkobstacle()
            this.score.addktotal1()
            if(this.fires.length <= 0){
              const fireAlert = document.getElementById("fire-alert");
              fireAlert.style.display = "none";
            }
            if (this.winTime > 40000) {
              this.addPuddle();
            }
          }
          return false;
        } else return true;
      });
    });
    this.fires.forEach((fire) => {//fuego con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(fire)) {
          fire.dicreaseSmall();
          if (fire.h <= 20) {
            fire.vx = 500;
            this.score.addkobstacle()
            this.score.addktotal1()
            if(this.fires.length <= 0){
              const fireAlert = document.getElementById("fire-alert");
              fireAlert.style.display = "none";
            }
          }
          return false;
        } else return true;
      });
    });
    this.fires.forEach((fire) => { //fuego con agua
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(fire)) {
          this.player.waters.splice(0, 1);
          fire.dicrease();
        this.checkCharger()
          if (fire.h <= 20) {
            fire.vx = 500;
            this.score.addkobstacle()
            this.score.addktotal1()
            if(this.fires.length <= 0){
              const fireAlert = document.getElementById("fire-alert");
              fireAlert.style.display = "none";
            }
          }
          return false;
        } else return true;
      });
    });
    this.player.heats.forEach((heat) => { //fuego con fuego
      this.fires.forEach((fire) => {
        heat.collides(fire);
        if (heat.collides(fire)) {
          this.player.heats.splice(0, 1);
          fire.increase();
        }
      });
    });
// karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. 
// karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. 
    this.karens = this.karens.filter((karen) => {  //karen con player
      if (karen.collides(this.player)) {
        if (this.line.check == 1) {
          this.score.addkkarens()
          this.score.addktotal1()
          this.score.addktotal1()
          return false;
        }
      }
      return true;
    });
    this.karens.forEach((karen) => {//karen con discounting
      this.player.discountings = this.player.discountings.filter((disc) => {
        if (disc.collides(karen)) {
          this.player.discountings.splice(0, 1);
          karen.w = 60
          this.score.addkkarens()
          this.score.addktotal1()
          this.score.addktotal1()
          return false;
        } else return true;
      });
    });
    //Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..
    //Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..Rats..
    this.rats = this.rats.filter((rat) => { //rat con player
      if (rat.collides(this.player)) {
        this.player.hit();
        this.player.vy = -1;
        this.player.vx = -1;
        return  false;
      }
      return true;
    });
    this.rats.forEach((rat) => {//rat con discount
      this.discounts = this.discounts.filter((disc) => {
        if (disc.collides(rat)) {
          this.discounts.splice(0, 1);
          return false;
        } else return true;
      });
    });
    this.rats.forEach((rat) => {//rat con food
      this.foods = this.foods.filter((food) => {
        if (food.collides(rat)) {
          this.foods.splice(0, 1);
          return false;
        } else return true;
      });
    });
    this.rats.forEach((rat) => {//rat con cart
      this.carts = this.carts.filter((cart) => {
        if (cart.collides(rat)) {
          this.carts.splice(0, 1);
          return false;
        } else return true;
      });
    });
    this.rats.forEach((rat) => {//rat con water
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(rat)) {
          this.player.waters.splice(0, 1);
          rat.lifeleft -= 1;
          rat.vx += 1;
        this.checkCharger()
          const discRandom = Math.floor(Math.random() * 8 - chance)
          const foodRandom = Math.floor(Math.random() * 5 - chance)
          if(foodRandom === 1){
            const food = new Food(ctx, rat.x, rat.y + 40);
            this.foods.push(food);
          }
          if(discRandom == 1){
            this.disImage = new Image()
            this.disImage.src = "/assets/images/elements/disrat.png"
            const discount = new Discount(ctx, rat.x + 80, rat.y - 40, this.disImage);
            this.discounts.push(discount);
          }
          if(rat.lifeleft === 0){
            this.score.addkrat()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
    this.rats.forEach((rat) => { //rat con fire
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(rat)) {
          this.player.heats.splice(0, 1);
          rat.lifeleft -= 1;
          rat.vx += 1;
        this.checkCharger()
          const discRandom = Math.floor(Math.random() * 8 - chance)
          const foodRandom = Math.floor(Math.random() * 5 - chance)
          if(foodRandom === 1){
            const food = new Food(ctx, rat.x, rat.y + 40);
            this.foods.push(food);
          }
          if(discRandom == 1){
            this.disImage = new Image()
            this.disImage.src = "/assets/images/elements/disrat.png"
            const discount = new Discount(ctx, rat.x + 80, rat.y - 40, this.disImage);
            this.discounts.push(discount);
          }
          if(rat.lifeleft === 0){
            this.score.addkrat()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
    this.rats.forEach((rat) => { //rat con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(rat)) {
          rat.lifeleft -= 4;
          if(rat.lifeleft === 0){
            this.score.addkrat()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
    this.rats.forEach((rat) => {//rat con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(rat)) {
          rat.lifeleft -= 4;
          if(rat.lifeleft === 0){
            this.score.addkrat()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
    //fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...
    //fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...fat...
    this.fats = this.fats.filter((fat) => { //fat con jugador
      if (fat.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0;
        this.player.fireHit()
        this.player.drawSmash()
        this.player.loseRespect()
      }
      return true;
    });
    this.fats.forEach((fat) => {    //fat con agua
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(fat)) {
          this.player.waters.splice(0, 1);
        this.checkCharger()
          fat.vy -= 0.3
          const foodRandom = Math.floor(Math.random() * 6 - chance)
          if(foodRandom === 1){
            const food = new Food(ctx, fat.x, fat.y);
            this.foods.push(food);
          }
        } else return true;
      });
    });
    this.fats.forEach((fat) => {  //fat con fuego
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(fat)) {
          this.player.heats.splice(0, 1);
        this.checkCharger()
          fat.vy -= 0.3
            const foodRandom = Math.floor(Math.random() * 6 - chance)
            if(foodRandom === 1){
              const food = new Food(ctx, fat.x, fat.y);
              this.foods.push(food);
          }
        } else return true;
      });
    });
    this.fats.forEach((fat) => { //fat con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(fat)) {
          fat.vy -= 0.04
          return false;
        } else return true;
      });
    });
    this.fats.forEach((fat) => { //fat con blasters
      this.player.blasters.filter((blast) => {
        if (blast.collides(fat)) {
          fat.vy -= 0.05
          return false;
        } else return true;
      });
    });
// koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...
// koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...
      this.korens = this.korens.filter((koren) => {
        if (koren.collides(this.player)) {
          this.player.fireHit();
          this.player.extraBoost -= 0.005;
        }
        return true;
      });
    this.korens.forEach((koren) => {   //koren con heat
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(koren)) {
          this.player.heats.splice(0, 1);
          if (koren.x < this.player.x) {
            koren.x -= 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.x > this.player.x) {
            koren.x += 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.y < this.player.y) {
            koren.y -= 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.y > this.player.y) {
            koren.y += 30;
            koren.h += 5
            koren.w += 5
          }
        this.checkCharger()
          if(koren.h >= 121 && !koren.truth){
            this.score.addkkorens()
            this.score.addktotal1()
            koren.truth = true
          }
        } else return true;
      });
    })
    this.korens.forEach((koren) => { //koren con waters
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(koren)) {
          this.player.waters.splice(0, 1);
          if (koren.x < this.player.x) {
            koren.x -= 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.x > this.player.x) {
            koren.x += 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.y < this.player.y) {
            koren.y -= 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.y > this.player.y) {
            koren.y += 30;
            koren.h += 5
            koren.w += 5
          }
        this.checkCharger()
          if(koren.h >= 121 && !koren.truth){
            this.score.addkkorens()
            this.score.addktotal1()
            koren.truth = true
          }
        } else return true;
      });
    })
    this.korens.forEach((koren) => { //koren con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(koren)) {
          if (koren.x < this.player.x) {
            koren.x -= 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.x > this.player.x) {
            koren.x += 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.y < this.player.y) {
            koren.y -= 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.y > this.player.y) {
            koren.y += 30;
            koren.h += 5
            koren.w += 5
          }
          charging+= 0.1
          if(charging >= 20 && this.score.total >= 20){
              M = 77
              charging = 0
          }
          if(koren.h >= 121 && !koren.truth){
            this.score.addkkorens()
            this.score.addktotal1()
            koren.truth = true
          }
        } else return true;
      });
    })
    this.korens.forEach((koren) => { //koren con blasters
      this.player.blasters.filter((blast) => {
        if (blast.collides(koren)) {
          if (koren.x < this.player.x) {
            koren.x -= 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.x > this.player.x) {
            koren.x += 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.y < this.player.y) {
            koren.y -= 30;
            koren.h += 5
            koren.w += 5
          }
          if (koren.y > this.player.y) {
            koren.y += 30;
            koren.h += 5
            koren.w += 5
          }
          charging+=0.1
          if(charging >= 20 && this.score.total >= 20){
              M = 77
              charging = 0
          }
          if(koren.h >= 121 && !koren.truth){
            this.score.addkkorens()
            this.score.addktotal1()
            koren.truth = true
          }
        } else return true;
      });
    })
// goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...
// goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...
    this.geese = this.geese.filter((goose) => { //goose con player
      if (goose.collides(this.player)) {
        this.player.hit();
        if(discounting >= 5){
          discounting -= 5
        }
        if(goose.lifeleft <= 4){
          this.player.hit();
        }
        if(goose.lifeleft <= 2){
          this.player.hit();
        }
        return false;
      }
      return true;
    });
    this.geese.forEach((goose) => {//goose con discount
      this.discounts = this.discounts.filter((disc) => {
        if (disc.collides(goose)) {
          this.discounts.splice(0, 1);
          return false;
        } else return true;
      });
    });
    this.geese.forEach((goose) => {//goose con food
      this.foods = this.foods.filter((food) => {
        if (food.collides(goose)) {
          this.foods.splice(0, 1);
          return false;
        } else return true;
      });
    });
    this.geese.forEach((goose) => {//goose con cart
      this.carts = this.carts.filter((cart) => {
        if (cart.collides(goose)) {
          this.carts.splice(0, 1);
          return false;
        } else return true;
      });
    });
    this.geese.forEach((goose) => { //goose con fire
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(goose)) {
          goose.lifeleft -= 1 
          if(goose.lifeleft <= 0){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          this.player.heats.splice(0, 1);
          if (goose.x < this.player.x) {
            goose.x -= 20;
          }
          if (goose.x > this.player.x) {
            goose.x += 20;
          }
          if (goose.y < this.player.y) {
            goose.y -= 20;
          }
          if (goose.y > this.player.y) {
            goose.y += 20;
          }
        this.checkCharger()
        } else return true;
      });
      this.player.waters = this.player.waters.filter((water) => {// goose con water
        if (water.collides(goose)) {
          this.player.waters.splice(0, 1);
          goose.lifeleft -= 1 
          if(goose.lifeleft <= 0){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          if (goose.x < this.player.x) {
            goose.x -= 20;
          }
          if (goose.x > this.player.x) {
            goose.x += 20;
          }
          if (goose.y < this.player.y) {
            goose.y -= 20;
          }
          if (goose.y > this.player.y) {
            goose.y += 20;
          }
        this.checkCharger()
        } else return true;
      });
    });
    this.geese.forEach((goose) => { // goose con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(goose)) {
          goose.lifeleft -= 3;
          if(goose.lifeleft === 0){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
    this.geese.forEach((goose) => { // goose con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(goose)) {
          goose.lifeleft -= 3;
          if(goose.lifeleft === 0){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });

//babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...
//babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...
    this.babys = this.babys.filter((baby) => { //baby con player
      if (baby.collides(this.player)) {
        this.saving()
        return false;
      }
      return true;
    });
    this.babys.forEach((baby) => { //baby con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(baby)) {
          this.babys.splice(0,1)
          this.dying()
          return false;
        } else return true;
      });
    });
    this.babys.forEach((baby) => { //baby con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(baby)) {
          this.babys.splice(0,1)
          this.dying()
          return false;
        } else return true;
      });
    });
    this.babys.forEach((baby) => { //baby con waters
      this.player.waters.filter((wat) => {
        if (wat.collides(baby)) {
          this.babys.splice(0,1)
          this.dying()
          return false;
        } else return true;
      });
    });
    this.babys.forEach((baby) => { //baby con heats
      this.player.heats.filter((heat) => {
        if (heat.collides(baby)) {
          this.babys.splice(0,1)
          this.dying()
          return false;
        } else return true;
      });
    });
    this.puddles.forEach((puddle) => { //baby con puddle
      this.babys = this.babys.filter((baby) => {
        if (baby.collides(puddle)) {
          this.babys.splice(0, 1);
          puddle.vx = 500;
          this.dying()
          if(this.score.score % 1 === 0){
            distance -= 30
          }
          return false;
        } else return true;
      });
    });
    this.fires.forEach((fire) => { //baby con fire
      this.babys = this.babys.filter((heat) => {
        if (heat.collides(fire)) {
          this.babys.splice(0, 1);
          fire.vx = 500;
          this.dying()
          return false;
        } else return true;
      });
    });
    this.cactus.forEach((cactu) => { //baby con cactus
      this.babys = this.babys.filter((la) => {
        if (la.collides(cactu)) {
          this.babys.splice(0, 1);
          cactu.vx = 500;
          this.dying()
          return false;
        } else return true;
      });
    });
//customer...customer...customer...customer...customer...customer...customer...customer...customer...customer...
//customer...customer...customer...customer...customer...customer...customer...customer...customer...customer...
    this.customers = this.customers.filter((cus) => { //customer con player
      if (cus.collides(this.player)) {
        this.saving()
        return false;
      }
      return true;
    });
    this.customers.forEach((cus) => { //customer con heat del player
      this.player.heats.filter((heat) => {
        if (heat.collides(cus)) {
          this.dyingCus()
          cus.lifeleft -=1
          if(cus.dead >= 50){
            this.score.score += 1
          }
          return true;
        } else return true;
      });
    });
    this.customers.forEach((cus) => { //customer con water
      this.player.waters.filter((water) => {
        if (water.collides(cus)) {
          this.dyingCus()
          cus.lifeleft -=1
          if(cus.dead >= 50){
            this.score.score += 1
          }
          return true;
        } else return true;
      });
    });
    this.customers.forEach((cus) => {//customer con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(cus)) {
          this.dyingCus()
          cus.lifeleft -=1
          if(cus.dead >= 50){
            this.score.score += 1
          }
          return true;
        } else return true;
      });
    });
    this.customers.forEach((cus) => { //customer con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(cus)) {
          this.dyingCus()
          cus.lifeleft -=1
          if(cus.dead >= 50){
            this.score.score += 1
          }
          return true;
        } else return true;
      });
    });
    this.puddles.forEach((puddle) => { //customer con puddle
      this.customers = this.customers.filter((cus) => {
        if (cus.collides(puddle)) {
          cus.lifeleft -=1
          this.dyingCus()
          if(cus.dead >= 50){
            this.score.score += 1
          }
          return true;
        } else return true;
      });
    });
    this.fires.forEach((fire) => {  //customer con fuego
      this.customers = this.customers.filter((cus) => {
        if (cus.collides(fire)) {
          cus.lifeleft -=1
          this.dyingCus()
          if(cus.dead >= 50){
            this.score.score += 1
          }
          return true;
        } else return true;
      });
    });
      this.cactus.forEach((cactu) => { //customer con cactus
        this.customers = this.customers.filter((cus) => {
          if (cus.collides(cactu)) {
            this.dyingCus()
            cus.lifeleft -=1
            if(cus.dead >= 50){
              this.score.score += 1
            }
            return true;
          } else return true;
        });
      });
// boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..
// boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..
    this.bosss = this.bosss.filter((boss) => {     //boss con player
      if (boss.collides(this.player)) {
        this.player.speed -= 1;
        this.player.cooldownBullet += 600;
        afterSize -=5
        bulletSize -=5
        bulletSizeExtra +=5
        this.player.hit();
        this.player.hit();
        return false;
      }
      return true;
    });
    this.bosss.forEach((boss) => {      //boss con agua
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(boss)) {
          this.player.waters.splice(0, 1);
            boss.lifeleft -= 1;
          if(boss.lifeleft === 0){
            boss.v = 20;
            this.addFire()
            this.addPuddle()
            this.player.getBigRespect()
            this.player.getBigRespect()
            this.score.addkboss()
            this.score.addktotal1()
            this.score.addktotal1()
            this.score.addktotal1()
          }
          if (boss.x < this.player.x) {
            boss.x -= 20;
          }
          if (boss.x > this.player.x) {
            boss.x += 20;
          }
          if (boss.y < this.player.y) {
            boss.y -= 20;
          }
          if (boss.y > this.player.y) {
            boss.y += 20;
          }
          charging+=2
          if(charging >= 20 && this.score.total >= 20){
              M = 77
              charging = 0
          }
          this.addKoren()
          this.korenAlert()
          this.line.b -= 0.2;
          this.line.a += 0.2;
            return false;
        } else return true;
      });
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(boss)) {        //boss con fuego
          this.player.heats.splice(0, 1);
            boss.lifeleft -= 1;
          if(boss.lifeleft === 0){
            boss.v = 20;
            this.addFire()
            this.addPuddle()
            this.player.getBigRespect()
            this.player.getBigRespect()
            this.score.addkboss()
            this.score.addktotal1()
            this.score.addktotal1()
            this.score.addktotal1()
          }
          if (boss.x < this.player.x) {
            boss.x -= 20;
            
          }
          if (boss.x > this.player.x) {
            boss.x += 20;
          }
          if (boss.y < this.player.y) {
            boss.y -= 20;
          }
          if (boss.y > this.player.y) {
            boss.y += 20;
          }
          charging+=2
          if(charging >= 20 && this.score.total >= 20){
              M = 77
              charging = 0
          }
          this.addKoren()
          this.korenAlert()
          this.line.b -= 0.2;
          this.line.a += 0.2;
          
          return false;
        } else return true;
      });
    });
    this.bosss.forEach((boss) => {      //boss con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(boss)) {
            boss.lifeleft -= 0.2;
          if(boss.lifeleft <= 0.1){
            boss.v = 20;
            this.player.getBigRespect()
            this.player.getBigRespect()
            this.addFire()
            this.addPuddle()
            this.score.addkboss()
            this.score.addktotal1()
            this.score.addktotal1()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
    this.bosss.forEach((boss) => {  //boss con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(boss)) {
            boss.lifeleft -= 0.02;
          if(boss.lifeleft <= 0.1){
            boss.v = 20;
            this.player.getBigRespect()
            this.player.getBigRespect()
            this.addFire()
            this.addPuddle()
            this.score.addkboss()
            this.score.addktotal1()
            this.score.addktotal1()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
// Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..
// Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..
this.pfront.forEach((peop) => {     //PFront
  this.player.discountings.filter((disc) => {
    if (disc.collides(peop)) {
      this.player.getSmallestRespect()
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "blue";
      this.ctx.fillText(`Thanx!:`, peop.x, peop.y);
      this.ctx.fillStyle = "blue";
      this.ctx.fillText(`Thanx!:`, peop.x-1, peop.y-1);
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Thanx!:`, peop.x+1, peop.y+1);
      return false;
    } else return true;
  });
});
this.pback.forEach((peop) => { //PBack
  this.player.discountings.filter((disc) => {
    if (disc.collides(peop)) {
      this.player.getSmallestRespect()
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "blue";
      this.ctx.fillText(`Thanx!:`, peop.x, peop.y);
      this.ctx.fillStyle = "blue";
      this.ctx.fillText(`Thanx!:`, peop.x-1, peop.y-1);
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Thanx!:`, peop.x+1, peop.y+1);
      return false;
    } else return true;
  });
});
    this.bushesover.forEach((wall) => { //bushes
      if (wall.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0;
      }
    });
    this.walls.forEach((wall) => { // walls
      if (wall.collides(this.player)) {
        this.ad
        this.player.vy = 0;
        this.player.vx = 0;
      }
    });
    if(this.winTime >= 20000){   //portal
    this.portals.forEach((port) => {
      if (port.collides(this.player)) {
        this.player.y = 300;
        this.player.x = 960;
      }
    });
  }
    if(this.winTime >= 20000){  //portal
    this.portals2.forEach((port) => {
      if (port.collides(this.player)) {
        this.player.y = 280;
        this.player.x = 960;
      }
    });
  }
    this.pback.forEach((wall) => {
      if (wall.collides(this.player)) {
        this.excla = new Image();
        this.excla.src = "/assets/images/elements/exclapep.png"
        this.ctx.drawImage(
          this.excla, wall.x + 10, wall.y - 10, 30,  30
        )
        this.player.loseRespect()
        this.player.drawSorry()
      }
    });
    this.pfront.forEach((wall) => {
      if (wall.collides(this.player)) {
        this.excla = new Image();
        this.excla.src = "/assets/images/elements/exclapep.png"
        this.ctx.drawImage(
          this.excla, wall.x + 10, wall.y - 10, 30,  30
        )
        this.player.loseRespect()
        this.player.drawSorry()
      }
    });
    if(this.winTime >= 10){
    this.cactus.forEach((cact) => {
      if (cact.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0;
        this.player.fireHit()
        this.player.drawOuch()
      }
    });
  }
    this.puddles.forEach((puddle) => {
      if (puddle.collides(this.player)) {
        this.player.drawWater()
        this.player.fireHit();
        this.player.vy = 0;
        this.player.vx = 0;
      }
    });
    this.fires.forEach((fire) => {
      if (fire.collides(this.player)) {
        this.player.fireHit();
        this.player.drawFire()
        this.player.vy = 0;
        this.player.vx = 0;
      }
    });
//carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...
//carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...
    this.carts = this.carts.filter((cart) => {
      if (cart.collides(this.player)) {
        this.newShoes = new Audio("/assets/audios ad/Faster running.mp3");
        this.newShoes.volume = 0.1;
        this.newShoes.play()
        charging+=1
        if(charging >= 20 && this.score.total >= 20){
            M = 77
            charging = 0
        }
        if(this.score.total >= 35){
          T = 84
        }
        this.player.getSmallRespect()
        return false;
      }
      return true;
    });
// foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..
// foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..
    this.foods = this.foods.filter((food) => {
      if (food.collides(this.player)) {
        // this.newShoes = new Audio("/assets/audios ad/Faster running.mp3");
        // this.newShoes.volume = 0.1;
        // this.newShoes.play()
        this.player.heal()
        return false;
      }
      return true;
    });
// upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...
// upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...
    this.upgrades = this.upgrades.filter((up) => {
      if (up.collides(this.player)) {
        this.player.speed += 2;
        bulletDistance += 50;
        bulletDistanceExtra -= 50
        this.player.cooldownBullet -= 600;
        const fireAlert = document.getElementById("upgrade-alert");
        fireAlert.style.display = "none";
        return false;
      }
      return true;
    });
    this.upBullets = this.upBullets.filter((up) => {
      if (up.collides(this.player)) {
        afterSize +=10
        bulletSize +=10
        bulletSizeExtra -=10
        const fireAlert = document.getElementById("upgrade-alert");
        fireAlert.style.display = "none";
        return false;
      }
      return true;
    });
//discount...discount...discount...discount...discount...discount...discount...discount...discount...discount...discount...
//discount...discount...discount...discount...discount...discount...discount...discount...discount...discount...discount...
    this.discounts = this.discounts.filter((discount) => {
      if (discount.collides(this.player)) {
        this.line.b -= 0.5;
        this.line.a += 0.5;
        discounting += 5
        return false;
      }
      return true;
    });
// collision end... collision end... collision end... collision end... collision end... collision end... collision end...
// collision end... collision end... collision end... collision end... collision end... collision end... collision end...
// collision end... collision end... collision end... collision end... collision end... collision end... collision end...



    // evento que se dispara al perder toda la vida, morir clientes, perder el respeto y perder hjas de reclamaciones
    if (!this.player.isAlive() || this.score.score >= 10 || forms.length < 1 || !this.player.isRespected()) {
      this.gameOver();
    } 
      if (this.healing.collides(this.player) && this.winTime >= 550) {
      this.player.healslow();
    }
  }  
  //Colisiones end
  gameOver() {
    this.stop();
    this.rats = [];
    this.fats = [];
    this.geese = [];
    this.babys = [];
    this.customers = [];
    this.karens = [];
    this.fires = [];
    this.puddles = [];
    this.bosss = [];
    this.korens = [];
    this.carts = [];
    this.foods = [];
    this.upgrades = [];
    this.upBullet = [];
    this.dicounts = [];
    const lose = document.getElementById("lose");
    lose.style.display = "block"
    this.winMus = new Audio("/assets/audios ad/losemusic.mp3");
    this.winMus.volume = 0.1;
    this.winMus.play();
  }
  gameWin() {
    this.stop();
    this.rats = [];
    this.fats = [];
    this.geese = [];
    this.babys = [];
    this.customers = [];
    this.karens = [];
    this.boss = [];
    this.korens = [];
    this.carts = [];
    this.foods = [];
    this.upgrades = [];
    this.upBullet = [];
    this.dicounts = [];
    const wincon = document.getElementById("win");
    wincon.style.display = "block"
    this.winMus = new Audio("/assets/audios ad/winmusic.mp3");
    this.winMus.volume = 0.1;
    this.winMus.play();
  }
  setListeners() {
    document.addEventListener("keydown", (e) => {
      this.player.keyDown(e.keyCode);
      this.line.keyDown(e.keyCode);
    });
    document.addEventListener("keyup", (e) => {
      this.player.keyUp(e.keyCode);
      // this.line.keyUp(e.keyCode);      no necesito
    });
  }
}
