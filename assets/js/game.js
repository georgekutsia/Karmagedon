class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);
    this.token = new Token(ctx);
    this.healing = new HealingPlace(ctx);
    // this.water = new Water(ctx)
    this.score = new Score(ctx);
    this.line = new Line(ctx, this.player, this.player.x, this.player.y);
    this.food = new Food(ctx);
    this.upgrade = new Upgrade(ctx);
    this.upBullet = new Upbullet(ctx);
    this.saved = new Saved(ctx);
    this.helper1 = new Image();
    this.helper1.src = "/assets/images/pj/helper1.png"
    this.helper2 = new Image();
    this.helper2.src = "/assets/images/pj/helper2.png"
    this.helper3 = new Image();
    this.helper3.src = "/assets/images/pj/helper3.png"
    this.helper4 = new Image();
    this.helper4.src = "/assets/images/pj/helper4.png"
    this.bodyImg = new Image();
    this.bodyImg.src = "/assets/images/elements/body.png"
    this.backPack = new Image();
    this.backPack.src = "/assets/images/elements/backpack.png"
    this.brain = new Image();
    this.brain.src = "/assets/images/elements/brain.png"
    this.mainOffice = new Image();
    this.mainOffice.src = "/assets/images/fondos/mainOffice.png"
    this.levelupImg1 = new Image();
    this.levelupImg1.src = "/assets/images/infos/hookUpgrade1.png"
    this.levelupImg2 = new Image();
    this.levelupImg2.src = "/assets/images/infos/machinegunUpgrade1.png"
    this.levelupImg3 = new Image();
    this.levelupImg3.src = "/assets/images/infos/elementUpgrade.png"
    this.levelupElement = new Image();
    this.levelupElement.src = "/assets/images/munición/elementUpgrade.png"
    this.levelupMachinegun = new Image();
    this.levelupMachinegun.src = "/assets/images/munición/upgradeMachinegun.png"
    this.levelupHook = new Image();
    this.levelupHook.src = "/assets/images/munición/hookUpgrade.png"
    this.weird1 = 0
    this.iceCurePoison = 0
    this.ratTick = 0;
    this.ratTickIs = false;
    this.upBulletTick = 0
    this.upBulletIs = false
    this.upgradeTick = 0
    this.upgradeIs = false
    this.customerTick = 0
    this.customerIs = false
    this.perjudiceTick = 0
    this.perjudiceIs = false
    this.bossPerjTick = 0
    this.bossPerjIs = false
    this.lampTick = 0
    this.wider = 1
    this.lampOff = "/assets/images/elements/lampOfff.png"
    this.hitOnKarenCounter = 0
    this.poisonedTime = 3000 - chance * 300
    this.tick = 0;
    this.chargeTick = 0
    this.cactus = [
      new Cactus(ctx, 375, 200, 40, 40, "/assets/images/fondos/cact1.png"), new Cactus(ctx, 600, 190, 50, 50, "/assets/images/fondos/cact3.png"),
      new Cactus(ctx, 820, 320, 30, 40, "/assets/images/fondos/cact5.png"), new Cactus(ctx, 780, 440, 40, 40, "/assets/images/fondos/cact4.png"),
      new Cactus(ctx, 387, 548, 25, 25), new Cactus(ctx, 287, 548, 25, 25), new Cactus(ctx, 387, 548, 25, 25), new Cactus(ctx, 460, 548, 25, 25),
      new Cactus(ctx, 450, 548, 25, 25), new Cactus(ctx, 520, 548, 25, 25), new Cactus(ctx, 265, 731, 25, 25),  new Cactus(ctx, 115, 731, 25, 25), 
      new Cactus(ctx, 710, 542, 70, 18, "/assets/images/fondos/cact5a.png"), new Cactus(ctx, 750, 542, 70, 18, "/assets/images/fondos/cact5a.png"),
      new Cactus(ctx, 800, 542, 60, 18, "/assets/images/fondos/cact5b.png"), new Cactus(ctx, 938, 630, 23, 23, "/assets/images/fondos/arb4.png"),new Cactus(ctx, 735, 725, 23, 23, "/assets/images/fondos/arb4.png"),
      new Cactus(ctx, 740, 536, 35, 35, "/assets/images/fondos/arb10.png"), new Cactus(ctx, 790, 536, 30, 30, "/assets/images/fondos/arb9.png"),
      new Cactus(ctx, 700, 536, 30, 30, "/assets/images/fondos/arb2.png"), new Cactus(ctx, 840, 536, 30, 30, "/assets/images/fondos/arb2.png"),
      new Cactus(ctx, 945, 630, 10, 80, "/assets/images/fondos/cact5b.png"), new Cactus(ctx, 945, 670, 10, 80, "/assets/images/fondos/cact5b.png"),
      new Cactus(ctx, 875, 733, 80, 10, "/assets/images/fondos/cact5b.png"), new Cactus(ctx, 815, 733, 80, 10, "/assets/images/fondos/cact5b.png"), new Cactus(ctx, 750, 733, 80, 10, "/assets/images/fondos/cact5b.png"),
    ]
    this.pfront = [
      new People(ctx, 90, 360, 80, 80, "/assets/images/people/pep10.png"), new People(ctx, 250, 350, 40, 60, "/assets/images/people/pep3.png"),
      new People(ctx, 730, 90, 40, 40, "/assets/images/people/pep5.png"), new People(ctx, 850, 80, 80, 80, "/assets/images/people/pep8.png"),
      new People(ctx, 860, 350, 40, 40, "/assets/images/people/pep11.png"), new People(ctx, 160, 590, 30, 30, "/assets/images/people/pep22.png"),
      new People(ctx, 200, 590, 30, 30, "/assets/images/people/pep23.png"), new People(ctx, 430, 12, 50, 30, "/assets/images/people/pep25.png"),
      new People(ctx, 800, 12, 60, 35, "/assets/images/people/pep20.png"), new People(ctx, 600, 280, 60, 35, "/assets/images/people/pep24.png"),
      new People(ctx, 400, 350, 80, 45, "/assets/images/people/pep30.png"), new People(ctx, 835, 575, 80, 45, "/assets/images/people/pep31.png"),
      new People(ctx, 235, 275, 50, 30, "/assets/images/people/pep32.png"), new People(ctx, 385, 575, 50, 30, "/assets/images/people/pep33.png"),
    ]
    this.pback = [
      new People(ctx, 250, 420, 40, 60, "/assets/images/people/pep2.png"), new People(ctx, 480, 430, 40, 40, "/assets/images/people/pep.png"),
      new People(ctx, 730, 400, 80, 50, "/assets/images/people/pep7.png"), new People(ctx, 95, 160, 70, 40, "/assets/images/people/pep1.png"),
      new People(ctx, 560, 150, 50, 50, "/assets/images/people/pep6.png"), new People(ctx, 410, 160, 40, 40, "/assets/images/people/pep14.png"),
      new People(ctx, 520, 570, 50, 50, "/assets/images/people/pep15.png"), new People(ctx, 9, 100, 40, 100, "/assets/images/people/pep27.png"),
      new People(ctx, 940, 350, 40, 90, "/assets/images/people/peop72.png"), new People(ctx, 1060, 600, 30, 60, "/assets/images/people/peop77.png"),
      new People(ctx, 1060, 470, 60, 30, "/assets/images/people/peop71.png"), new People(ctx, 490, 640, 30, 50, "/assets/images/people/peop70.png"),
      new People(ctx, 1075, 80, 40, 40, "/assets/images/people/peop74.png"), new People(ctx, 1075, 120, 40, 40, "/assets/images/people/peop75.png"),
      new People(ctx, 1115, 380, 20, 50, "/assets/images/people/peop76.png"), new People(ctx, 730, 670, 60, 40, "/assets/images/people/peop78.png"),
      new People(ctx, 1055, 380, 30, 60, "/assets/images/people/peop77.png"), new People(ctx, 730, 670, 60, 40, "/assets/images/people/peop78.png"),
    ]
    this.bushesover = [
      // weaponizer
      new Fence(ctx, 1050, 440, 100, 30, "/assets/images/elements/fence5.png"), new Fence(ctx, 1050, 435, 100, 30, "/assets/images/elements/fence5.png"), new Fence(ctx, 1053, 450, 100, 20, "/assets/images/elements/fence3.png"),
      new Fence(ctx, 1050, 340, 100, 30, "/assets/images/elements/fence5.png"), new Fence(ctx, 1050, 335, 100, 30, "/assets/images/elements/fence5.png"), new Fence(ctx, 1053, 350, 100, 20, "/assets/images/elements/fence3.png"),
      new Fence(ctx, 1130, 340, 20, 130, "/assets/images/elements/fence5.png"), new Fence(ctx, 1130, 335, 20, 130, "/assets/images/elements/fence5.png"), new Fence(ctx, 1140, 350, 10, 120, "/assets/images/elements/fence3.png"),
      // warhouse
      new Fence(ctx, 1040, 200, 105, 30, "/assets/images/elements/fence5.png"), new Fence(ctx, 1040, 202, 105, 30, "/assets/images/elements/fence5.png"), new Fence(ctx, 1050, 204, 80, 30, "/assets/images/elements/fence7.png"),
      new Fence(ctx, 1040, 70, 105, 30, "/assets/images/elements/fence5.png"), new Fence(ctx, 1040, 72, 105, 30, "/assets/images/elements/fence5.png"), new Fence(ctx, 1045, 74, 80, 30, "/assets/images/elements/fence7.png"),
      new Fence(ctx, 1045, 70, 10, 160, "/assets/images/elements/fence5.png"), new Fence(ctx, 1045, 72, 10, 160, "/assets/images/elements/fence5.png"), new Fence(ctx, 1045, 74, 10, 160, "/assets/images/elements/fence5.png"),
      
      // vertical bushes start
      new Bush1(ctx, 57, 60, 20, 100), new Bush1(ctx, 287, 60, 20, 170), new Bush3(ctx, 385, 60, 20, 170), new Bush3(ctx, 607, 60, 20, 170),
      new Bush2(ctx, 705, 60, 20, 170), new Bush2(ctx, 921, 60, 20, 170), new Bush1(ctx, 57, 330, 20, 120), new Bush1(ctx, 287, 330, 20, 150),
      new Bush3(ctx, 385, 330, 20, 150), new Bush3(ctx, 607, 330, 20, 150), new Bush2(ctx, 705, 330, 20, 150), new Bush2(ctx, 921, 330, 20, 150),
      new Bush1(ctx, 57, 560, 20, 120), new Bush1(ctx, 385, 560, 20, 120),  new Bush1(ctx, 67, 550, 90, 20),  new Bush2(ctx, 97, 550, 90, 20),  new Bush1(ctx, 287, 550, 20, 75),
      new Bush2(ctx, 450, 550, 90, 20), new Bush3(ctx, 387, 550, 90, 20), new Bush2(ctx, 610, 660, 20, 95), new Bush2(ctx, 540, 737, 90, 15), new Bush1(ctx, 1040, 630, 20, 75),
      new Bush2(ctx, 700, 550, 20, 75), new Fence(ctx, 60, 420, 60, 40), new Bush2(ctx, 480, 737, 90, 15), new Bush2(ctx, 200, 737, 90, 15),new Bush2(ctx, 130, 737, 90, 15),
    // vertical bushes end
    ]
    this.lamps = [
      new Bushes(ctx, 160, -2, 40, 40, this.lampOff), new Bushes(ctx, 650, -2, 40, 40, this.lampOff), 
      new Bushes(ctx, 270, 200, 40, 40, this.lampOff), new Bushes(ctx, 910, 200, 40, 40, this.lampOff), 
      new Bushes(ctx, 270, 450, 40, 40, this.lampOff), new Bushes(ctx, 1120, 370, 40, 40, this.lampOff), 
      new Bushes(ctx, -9, 100, 40, 40, this.lampOff), new Bushes(ctx, 595, 310, 40, 40, this.lampOff), 
      new Bushes(ctx, 40, 540, 40, 40, this.lampOff), new Bushes(ctx, 690, 450, 40, 40, this.lampOff),
      new Bushes(ctx, 595, 640, 40, 40, this.lampOff), new Bushes(ctx, 1180, 490, 40, 40, this.lampOff),
      new Bushes(ctx, 820, 780, 40, 40, this.lampOff), new Bushes(ctx, 320, 780, 40, 40, this.lampOff),
    ]
    this.walls = [
      new Fence(ctx, 51, 50, 80, 40), new Fence(ctx, 220, 50, 80, 40), new Fence(ctx, 51, 320, 80, 40), new Fence(ctx, 220, 320, 80, 40),
      new Fence(ctx, 880, 320, 60, 40), new Fence(ctx, 830, 320, 80, 40), new Fence(ctx, 390, 320, 80, 40), new Fence(ctx, 560, 320, 70, 40),
      new Fence(ctx, 700, 50, 80, 40), new Fence(ctx, 870, 50, 70, 40), new Fence(ctx, 1050, 690, 100, 30), new Fence(ctx, 1050, 550, 100, 30), 
// round bushes
      new Bushes(ctx, 160, 410, 40, 40, "/assets/images/fondos/arb11.png"),  new Bushes(ctx, 170, 130, 40, 40, "/assets/images/fondos/arb9.png"),
      new Bushes(ctx, 490, 110, 40, 40, "/assets/images/fondos/arbusto1.png"), new Bushes(ctx, 482, 60, 60, 60, "/assets/images/fondos/arbusto1.png"),
      new Bushes(ctx, 800, 170, 40, 40, "/assets/images/fondos/arb1.png"), new Bushes(ctx, 380, 710, 40, 40, "/assets/images/fondos/arb9.png"),
      new Fence(ctx, 90, 190, 80, 40), new Fence(ctx, 470, 130, 80, 40), new Fence(ctx, 465, 450, 60, 40), new Fence(ctx, 1040, 210, 100, 20),new Fence(ctx, 1040, 70, 100, 20),
    ];
    this.portals = [new Portal (ctx, 200, 770, 50, 50 )]   
    this.portals2 = [new Portal (ctx, 800, 5, 50, 50)]
    this.levelUps1 = new Bushes(ctx, 140, 250, 80, 60, "/assets/images/munición/hookUpgrade.png")
    this.levelUps2 = new Bushes(ctx, 440, 250, 100, 70, "/assets/images/munición/upgradeMachinegun.png")
    this.levelUps3 = new Bushes(ctx, 780, 250, 80, 80, "/assets/images/munición/elementUpgrade.png")
    this.karenTime = 0;
    this.ratTime = 1600;
    this.fatTime = 100; 
    this.winTime = 0;
    this.machinganTime = 1000
    this.machinganRestore = 400
    this.levelMessage1 = false
    this.interval = null;
    this.puddleTime =this.fireTime =this.gooseTime =this.babyTime =this.customerTime =this.bossTime =this.korenTime =this.cartTime =this.foodTime =this.upgradeTime =this.upBulletTime =this.discountTime =this.deadGoose = 0
    this.karens = this.rats = this.babys = this.customers = this.fats = this.puddles = this.fires = this.geese = this.bosss = this.korens = this.carts = this.drugs = this.foods = this.upgrades = this.upBullets = this.discounts = [];
    this.allOfThem = [this.rats, this.geese, this.bosss]
    this.setListeners();
    this.musicStart = new Audio("/assets/audio/valse.mp3");
    this.musicStart.volume = 0.002;
    this.musicStart.loop = true;

    this.karens.src = "/assets/images/karens/karen1.png";
    this.bossSound1 = new Audio("/assets/audios ad/bossOuch1.m4a");
    this.bossSound1.volume = 0.1;
    this.bossSound2 = new Audio("/assets/audios ad/bossOuch2.m4a");
    this.bossSound2.volume = 0.1;
    this.bossSound3 = new Audio("/assets/audios ad/bossOuch3.m4a");
    this.bossSound3.volume = 0.1;
    this.bossSound4 = new Audio("/assets/audios ad/bossOuch4.m4a");
    this.bossSound4.volume = 0.1;
    this.bossSound5 = new Audio("/assets/audios ad/bossOuch5.m4a");
    this.bossSound5.volume = 0.1;
    this.karenSounds = [this.bossSound1,this.bossSound2,this.bossSound3,this.bossSound4,this.bossSound5];
  }
  start() {
    this.so = new Audio("/assets/audio/So1.mp3");
    this.so.volume = 0.08;
    this.so.play();
    // this.musicStart.play();
    myFunction();
    this.interval = setInterval(() => {
    this.endGame = document.getElementById("time");
    this.clear();
    this.draw();
    this.move();
    this.karenTime++; this.ratTime++; this.fatTime++; this.puddleTime++;  this.fireTime++; this.gooseTime++; this.babyTime++; this.customerTime++; this.bossTime++; this.korenTime++; this.winTime++; this.cartTime++; this.foodTime++; this.upgradeTime++; this.upBulletTime++; this.discountTime++;
    this.checkCollisions();
      if (this.karenTime > 37000) {     // karen
        this.karenTime = 0;
        this.karensAlert();
        this.addKaren();
        if(this.winTime >= 68500){
          this.karenTime = 2000
        }
      }
      if (this.ratTime > Math.random() * 100 + 200000) { //rat
        this.ratTime = 0;
        this.ratAlert();
        this.addDrug()
        this.addRat();
        if(this.winTime >= 48500){
          this.ratTime = 700
          this.addRat();
        }
      }
      if (this.fatTime > Math.random() * 400 + 19000) { //fat
        this.fatTime = 0;
        this.fatAlert();
        this.addFat();
        if(this.winTime >= 68500){
          this.fatTime = 500
        }
      }
      if (this.puddleTime > Math.random() * 400 + 20000) { //puddle
        this.puddleTime = 0;
        this.waterAlert();
        this.addPuddle();
        if(this.winTime >= 80000){
          this.puddleTime = 400
        }
      }
      if (this.fireTime > Math.random() * 400 + 20000) { //fire
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
      if (this.customerTime > Math.random() * 100 + 40000) { //customer
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
      if (this.upgradeTime > Math.random() * 100 + 7400 - chance * 300) {   //upgrade
        this.upgradeTime = 0;
        this.upgradeAlert()
        this.addUpgrade();
      }
      if (this.upBulletTime > Math.random() * 100 + 6000 - chance * 200) {   //upbullet
        this.upBulletTime = 0;
        this.upBulletAlert()
        this.addUpBullet();
      }
      if (this.bossTime > Math.random() * 100 + 14800) {   //boss
        this.bossTime = 5000;
        this.bossAlert();
        this.addBoss();
      }
      if (this.korenTime > Math.random() * 100 + 22500) {   //koren
        this.korenTime = 100;
        this.addKoren();
        this.korenAlert()
      } 
// win time game start -----------------------
      if (this.winTime >= 137800) {
        this.gameWin();
      } 
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
      if(this.winTime >= 12500 && this.winTime <=13999){
        extraLife = 2
      } 
      if(this.winTime >=24000){
        extraLife = 3
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
    this.ctx.clearRect(this.weird1, 0, this.ctx.canvas.width, this.ctx.canvas.height);
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
    this.drugs = this.drugs.filter((e) => e.isVisible());
    this.fires = this.fires.filter((e) => e.isVisible());
    this.discounts = this.discounts.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.shotguns = this.player.shotguns.filter((e) => e.isVisible());
    this.player.hooks = this.player.hooks.filter((e) => e.isVisible());
    this.player.toxics = this.player.toxics.filter((e) => e.isVisible());
    this.player.blasters = this.player.blasters.filter((e) => e.isVisible());
    this.player.auras = this.player.auras.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());
    this.player.sanders = this.player.sanders.filter((e) => e.isVisible());
    mineria=mineria.filter((e) =>e.isVisible())
    this.player.discountings = this.player.discountings.filter((e) => e.isVisible());
    this.lampTick++
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
    this.upgrades.forEach((e) => e.draw());
    this.upBullets.forEach((e) => e.draw());
    if(this.upgrades.length <= 0 && this.upBullets.length <=0 && this.carts.length <= 0){
      this.ctx.drawImage(
        this.mainOffice, 1200, 200, 190, 130
      ) 
    } else {
      ctx.globalAlpha = 0.2
      this.ctx.drawImage(
        this.mainOffice, 1200, 200, 190, 130
        ) 
      ctx.globalAlpha = 1
    }
    this.ctx.drawImage(
      this.backPack, 100, 825, 70, 60
    )
    this.ctx.drawImage(
      this.bodyImg, 580, 820, 70, 70
    )
    this.ctx.drawImage(
      this.brain, 900, 825, 50, 60
    )
    if(this.player.respect.total <= 0.3 && this.player.life.total <=3){
      this.player.sandstate = true
    }
    if(this.player.respect.total >= 0.7 || this.player.life.total >=8){
      this.player.sandstate = false
    }
    if(this.ratTickIs){
      this.ratTick++
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`Poisoned ${venom} times. Icecream can help!`, this.player.x - 29, this.player.y-16);
      this.ctx.fillStyle = "tomato";
      this.ctx.fillText(`Poisoned ${venom} times. Icecream can help!`, this.player.x - 26, this.player.y-14);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Poisoned ${venom} times. Icecream can help!`, this.player.x - 28, this.player.y - 15);
      if(this.ratTick >= 400){
        this.ratTick = 0
        this.ratTickIs = false
      }
    }

    if(this.upBullets.length >= 1){
      this.ctx.font = "23px Sans";
      ctx.fillStyle = "black";
      ctx.globalAlpha = 0.5
      ctx.fillRect(1210, 215, 177, 88);
      ctx.globalAlpha = 1
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Hey boss! `, 1272, 235);
      this.ctx.font = "18px Sans";
      this.ctx.fillText(`Get upgrated`, 1280, 260);
      this.ctx.fillText(`powerful ammo`, 1270, 278);
      this.ctx.fillText(`at Weaponizzer! `, 1260, 296);
      this.ctx.drawImage(
        this.helper1, 1220, 215, 40, 60
      )
    }
    if(this.upgrades.length >= 1){
      this.ctx.font = "20px Sans";
      ctx.fillStyle = "black";
      ctx.globalAlpha = 0.5
      ctx.fillRect(1210, 210, 177, 130);
      ctx.globalAlpha = 1
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`New Upgrades!`, 1258, 235);
      this.ctx.font = "18px Sans";
      this.ctx.fillText(`There are some`, 1270, 260);
      this.ctx.fillText(`upgrades at the`, 1270, 278);
      this.ctx.fillText(`Army Surpluss Store`, 1220, 296);
      this.ctx.drawImage(
        this.helper3, 1220, 215, 40, 60
      )
    }

    if(this.upgrades.length <= 0 && this.upBullets.length <=0 && this.carts.length >= 1){
      this.ctx.font = "19px Sans";
      ctx.fillStyle = "black";
      ctx.globalAlpha = 0.5
      ctx.fillRect(1210, 215, 177, 88);
      ctx.globalAlpha = 1
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Get the cart!`, 1282, 235);
      this.ctx.fillText(`Need more items`, 1260, 260);
      this.ctx.fillText(`to improve your`, 1260, 278);
      this.ctx.fillText(`equippment boss! `, 1260, 296);
      this.ctx.drawImage(
        this.helper4, 1220, 215, 40, 60
      )
    }
    this.chargedDisc = discounting / 5
    this.curePoisonTimer = 300 - chance * 50
    this.bosss.forEach((e) => e.draw());
    this.korens.forEach((e) => e.draw());
    this.babys.forEach((e) => e.draw());
    this.customers.forEach((e) => e.draw());
    if(this.winTime >= 0){
      this.pback.forEach((e) => e.draw());
    }
    this.walls.forEach((e) => e.draw());


    // se dibuja tras 5 horas
    if(this.winTime >= 500){ //14 de la tarde 57500
      this.portals.forEach((e) => e.draw());
      this.portals2.forEach((e) => e.draw());
    }
    if(this.winTime >=100 && this.winTime <= 150){
      this.karens = this.rats = this.babys = this.customers = this.fats = this.puddles = this.fires = this.geese = this.bosss = this.korens = this.carts = this.foods = this.upgrades = this.upBullets = this.discounts = [];
      leveler = true
      this.player.x = 500
      this.player.y = 400
    }
    if(this.winTime >= 0){
      this.pfront.forEach((e) => e.draw());
    }
    this.puddles.forEach((e) => e.draw());
    this.fires.forEach((e) => e.draw());
    this.player.draw();
    this.bushesover.forEach((e) => e.draw());
    this.karens.forEach((e) => e.draw());
    if(this.winTime >= 0){
      this.cactus.forEach((e) => e.draw());
    }
    this.fats.forEach((e) => e.draw());
    this.rats.forEach((e) => e.draw());
    this.carts.forEach((e) => e.draw());
    this.drugs.forEach((e) => e.draw());
    this.foods.forEach((e) => e.draw());
    this.discounts.forEach((e) => e.draw());
    this.geese.forEach((e) => e.draw());
    this.token.draw();
    this.lamps.forEach((e) => e.draw());
        if(this.lampTick >= 7640 ){
          // se reinicia cada 2 horas
          this.lamps.forEach((lamp) =>lamp.img.src = "/assets/images/elements/lampOfff.png")
          this.lamps.forEach((lamp) =>lamp.lights = false)
          this.alertingSound = new Audio("/assets/audios ad/lampOff.wav");
          this.alertingSound.volume = 0.05;
          this.alertingSound.play()
          this.lampTick = 0
          lampOn = 0
    }
    // CTX data statistics
    // CTX data statistics
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.save();
    ctx.fillStyle = "rgb(1, 2, 2)";
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.restore();
    this.ctx.fillText(`Bullet Speed: ${this.player.speed.toString()}`, 190, 860);
    this.ctx.fillText(`Shooting Range: ${bulletDistance.toString()}`, 190, 884);
    this.ctx.fillText(`Recharge Time: ${this.player.cooldownBullet.toString()}`, 190, 836);
    if(this.upgradeIs === true) {
      this.upgradeTick++
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Bullet Speed: ${this.player.speed.toString()}`, 190, 860);
      this.ctx.fillText(`Shooting Range: ${bulletDistance.toString()}`, 190, 884);
      this.ctx.fillText(`Recharge Time: ${this.player.cooldownBullet.toString()}`, 190, 836);
      this.ctx.fillStyle = "white";
      if(this.upgradeTick >=150){
        this.upgradeIs = false
        this.upgradeTick = 0
      }
    }
    this.ctx.fillText(`After Growth: ${afterSize.toString()}`, 410, 875);
    this.ctx.fillText(`Ammo size: ${bulletSize.toString()}`, 410, 845);
      if(this.upBulletIs === true){
        this.upBulletTick++
        this.ctx.fillStyle = "aqua";
        this.ctx.fillText(`After Growth: ${afterSize.toString()}`, 410, 875);
        this.ctx.fillText(`Ammo size: ${bulletSize.toString()}`, 410, 845);
        this.ctx.fillStyle = "white";
        if(this.upBulletTick >=150){
          this.upBulletIs = false
          this.upBulletTick = 0
        }
      }
    this.ctx.fillText(`Jump distance: ${distance.toFixed(1).toString()}ft`, 640, 860);
    this.ctx.fillText(`Jump cooldown: ${this.player.cooldownJump.toFixed(1)}`, 640, 836);
    this.ctx.fillText(`Walk Speed: ${this.player.boost.toFixed(1)}`, 640, 884);
    if(this.customerIs === true){
      this.customerTick++
      this.ctx.fillStyle = "aqua"; 
      this.ctx.fillText(`Jump distance: ${distance.toFixed(1).toString()}ft`, 640, 860);
      this.ctx.fillText(`Jump cooldown: ${this.player.cooldownJump.toFixed(1)}`, 640, 836);
      this.ctx.fillText(`Walk Speed: ${this.player.boost.toFixed(1)}`, 640, 884);
      this.ctx.fillStyle = "white";
      if(this.customerTick >= 150){
        this.customerTick = 0
        this.customerIs = false
      }
    } 
    if(this.perjudiceIs === true){
      this.perjudiceTick++
      this.ctx.fillStyle = "tomato"; 
      this.ctx.fillText(`Jump distance: ${distance.toFixed(1).toString()}ft`, 640, 860);
      this.ctx.fillText(`Jump cooldown: ${this.player.cooldownJump.toFixed(1)}`, 640, 836);
      this.ctx.fillText(`Walk Speed: ${this.player.boost.toFixed(1)}`, 640, 884);
      this.ctx.fillStyle = "white";
      if(this.perjudiceTick >= 150){
        this.perjudiceTick = 0
        this.perjudiceIs = false
      }
    }
    if(this.bossPerjIs === true){
      this.bossPerjTick++
      this.ctx.fillStyle = "tomato"; 
      this.ctx.fillText(`After Growth: ${afterSize.toString()}`, 410, 875);
      this.ctx.fillText(`Ammo size: ${bulletSize.toString()}`, 410, 845);
      this.ctx.fillText(`Recharge Time: ${this.player.cooldownBullet.toString()}`, 190, 836);
      this.ctx.fillText(`Bullet Speed: ${this.player.speed.toString()}`, 190, 860);
      this.ctx.fillStyle = "white";
      if(this.bossPerjTick >= 150){
        this.bossPerjTick = 0
        this.bossPerjIs = false
      }
    }
    if (machinegunBoost === true) {
      this.machinganTime--
        C = 67;
        V = 86;
        if(this.machinganTime <= 0){
          C = 0;
          V = 0;
          this.machinganTime = 0
          this.machinganRestore --
          if(this.machinganRestore <= 0){
            this.machinganTime = 800
            this.machinganRestore = 600
            C = 67;
            V = 86;
            this.alertingSound = new Audio("/assets/audios ad/reloadMachinegun.mp3");
            this.alertingSound.volume = 0.05;
            this.alertingSound.play()
          }
        }
    }
    if (discounting >= 1 ){
      R = 82
    }
    if (discounting <= 1 ){
      R = 0
    }
    if(this.weird1 === 1010){
      const poison = document.getElementById("poisoned");
      poison.style.display = "inline-block";
      this.poisonedTime--
      this.ctx.font = "23px Sans";
      ctx.fillStyle = "green";
      ctx.fillRect(1220, 30, 155, 28);
      this.ctx.fillStyle = "purple";
      this.ctx.fillText(`Poisoned ${this.poisonedTime.toString()}`, 1235, 52);
      if(this.poisonedTime <= 0){
        this.weird1 = 0
      this.poisonedTime = 1000
      }
    }

      // this.machinganTimeLeft = parseInt(this.machinganTime/10)
      //   this.ctx.font = "21px Arial";
        // this.ctx.save();
        // this.ctx.fillStyle = "white";
        // this.ctx.fillText(`Special Weapons`, 1218, 680);
        // this.ctx.restore();
    // if (C === 67){
    //   this.machinganTimeLeft = parseInt(this.machinganTime/10)
    //     this.ctx.font = "15.5px Arial";
    //     this.ctx.save();
    //     ctx.fillStyle = "lime";
    //     ctx.fillRect(1215, 815, 170, 23);
    //     this.ctx.fillStyle = "black";
    //     this.ctx.fillText(`Machinegun on: ${this.machinganTimeLeft.toString()} C/V`, 1218, 832);
    //     this.ctx.restore();
    // }
    // if (C === 0 && this.score.total >= 50){
    //     this.machinganRestoreLeft = parseInt(this.machinganRestore/10)
    //     this.ctx.font = "16px Arial";
    //     this.ctx.save();
    //     ctx.fillStyle = "rgb(255, 80, 0)";
    //     ctx.fillRect(1230, 815, 150, 23);
    //     this.ctx.fillStyle = "black";
    //     this.ctx.fillText(`Machinegun Off: ${this.machinganRestoreLeft.toString()} `, 1233, 832);
    //     this.ctx.restore();
    // }
    // if(this.score.total <= 49){
    //   this.machinganRestoreLeft = parseInt(this.machinganRestore/10)
    //   this.ctx.font = "16px Arial";
    //   this.ctx.save();
    //   ctx.fillStyle = "rgb(86, 6, 6)";
    //   ctx.fillRect(1215, 815, 250, 23);
    //   this.ctx.fillStyle = "white";
    //   this.ctx.fillText(`Machingan is being designed`, 1218, 832);
    //   this.ctx.restore();
    // }
    // if (T === 84){
    //     this.ctx.font = "16px Arial";
    //     this.ctx.save();
    //     ctx.fillStyle = "rgb(21, 209, 209)";
    //     ctx.fillRect(1230, 693, 140, 23);
    //     this.ctx.fillStyle = "black";
    //     this.ctx.fillText(`Timeshield ON: T`, 1235, 710);
    //     this.ctx.restore();
    // }
    // if (T === 0){
    //     this.ctx.font = "16px Arial";
    //     this.ctx.save();
    //     ctx.fillStyle = "rgb(86, 6, 6)";
    //     ctx.fillRect(1215, 693, 165, 23);
    //     this.ctx.fillStyle = "white";
    //     this.ctx.fillText(`Timeshield: pending...`, 1215, 710);
    //     this.ctx.restore();
    // }
    // if (M === 77 && this.score.total >= 20){
    //   this.ctx.font = "17px Arial";
    //   this.ctx.save();
    //   ctx.fillStyle = "lime";
    //   ctx.fillRect(1215, 724, 168, 23);
    //   this.ctx.fillStyle = "black";
    //   this.ctx.fillText(`Sandblaster ready: M `, 1218, 741);
    //   this.ctx.restore();
    // } 
    // if (this.score.total <= 19){
    //   this.ctx.font = "18px Arial";
    //   this.ctx.save();
    //   ctx.fillStyle = "rgb(86, 6, 6)";
    //   ctx.fillRect(1215, 724, 190, 23);
    //   this.ctx.fillStyle = "white";
    //   this.ctx.fillText(`Sandblaster: pending.. `, 1218, 741);
    //   this.ctx.restore();
    // } 
    // if (R === 82){
    //   this.ctx.font = "18px Arial";
    //   this.ctx.save();
    //   ctx.fillStyle = "lime";
    //   ctx.fillRect(1221, 755, 155, 23);
    //   this.ctx.fillStyle = "black";
    //   this.ctx.fillText(`Discounters: ${this.chargedDisc.toString()} -R- `, 1224, 773);
    //   this.ctx.restore();
    // }
    // if (this.chargedDisc <= 0){
    //   this.ctx.font = "15px Arial";
    //   this.ctx.save();
    //   ctx.fillStyle = "rgb(86, 6, 6)";
    //   ctx.fillRect(1218, 755, 157, 23);
    //   this.ctx.fillStyle = "white";
    //   this.ctx.fillText(`No discounts avaliable`, 1221, 773);
    //   this.ctx.restore();
    // }
    // if (B === 66){
    //   this.ctx.font = "18px Arial";
    //   this.ctx.save();
    //   ctx.fillStyle = "lime";
    //   ctx.fillRect(1248, 785, 105, 23);
    //   this.ctx.fillStyle = "black";
    //   this.ctx.fillText(`Hooks: ${hookCount.toString()} B `, 1252, 803);
    //   this.ctx.restore();
    // }
    // if (B === 0){
    //   this.ctx.font = "18px Arial";
    //   this.ctx.save();
    //   ctx.fillStyle = "rgb(86, 6, 6)";
    //   ctx.fillRect(1230, 785, 138, 23);
    //   this.ctx.fillStyle = "white";
    //   this.ctx.fillText(`Hook: pending...`, 1233, 803);
    //   this.ctx.restore();
    // }
    // if (B === 66 && hookCount === 0){
    //   this.ctx.font = "18px Arial";
    //   this.ctx.save();
    //   ctx.fillStyle = "rgb(255, 80, 0)";
    //   ctx.fillRect(1230, 785, 138, 23);
    //   this.ctx.fillStyle = "black";
    //   this.ctx.fillText(`No Hook ammo`, 1233, 803);
    //   this.ctx.restore();
    // }
    
    // levelup messages..levelup messages..levelup messages..levelup messages..levelup messages..
    // levelup messages..levelup messages..levelup messages..levelup messages..levelup messages..
      if(hookBoost || machinegunBoost || elementBoost){
        this.ctx.save();
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`Special Weapons`, 1218, 680);
        this.ctx.font = "15px Arial";
        if(hookBoost){this.ctx.drawImage( this.levelupHook, 1212, 695, 60 , 45 ) 
          this.ctx.fillText(`G=>teleport to `, 1277, 715);
          this.ctx.fillText(`hook position`, 1277, 735);
          this.ctx.fillText(`3 hooks every 15 seconds`, 1212, 755);
          ;}
        if(machinegunBoost){this.ctx.drawImage( 
          this.levelupMachinegun, 1210, 695, 60 , 45 );
          this.ctx.fillText(`C=>fire-machine`, 1266, 715);
          this.ctx.fillText(`V=>water-machine`, 1258, 735);
        }
        if(elementBoost){this.ctx.drawImage( 
          this.levelupElement, 1218, 695, 45 , 45); 
          this.ctx.fillText(`N=> Sandstorm +`, 1263, 715);
          this.ctx.fillText(`elemental shield`, 1263, 735);
        }
        this.ctx.restore();
      }
    if(this.levelMessage1){
      this.tick++
      this.ctx.drawImage(
        this.levelupHook, 140 - this.tick/4, 250 - this.tick/4, 80 + this.tick/2 , 60 + this.tick/2 
      )
      this.ctx.drawImage(
        this.levelupImg1, 35, 30, 300, 200 
      )
        this.ctx.font = "25px Arial";
        this.ctx.save();
        this.ctx.fillStyle = "black";
        this.ctx.fillText(`Hook-master`, this.player.x - 55 -this, this.player.y - 30);
        this.ctx.fillText(`Hook-master`, this.player.x - 56, this.player.y - 31);
        this.ctx.font = "25px Arial";
        this.ctx.fillStyle = "aqua";
        if(this.tick >= 20 && this.tick <= 39){
          this.ctx.fillStyle = "rgb(100, 245, 100)"
        } else if(this.tick >= 40 &&this.tick <= 59){
          this.ctx.fillStyle = "rgb(75, 245, 75)"
        } else if(this.tick >= 60 &&this.tick <= 89){
          this.ctx.fillStyle = "rgb(0, 245, 0)"
        }
      this.ctx.fillText(`Hook-master`, this.player.x - 54, this.player.y - 29);
      this.ctx.restore();
      if(this.tick >= 150){
        this.levelMessage1 = false
        this.tick = 0
      }
    }
    if(this.levelMessage2){
      this.tick++
      this.ctx.drawImage(
        this.levelupMachinegun, 440 - this.tick/4, 250 - this.tick/4, 100 + this.tick/2 , 70 + this.tick/2 
      )
      this.ctx.drawImage(
        this.levelupImg2, 355, 30, 300, 200 
      )
        this.ctx.font = "25px Arial";
        this.ctx.save();
        this.ctx.fillStyle = "black";
        this.ctx.fillText(`Destroyer`, this.player.x - 45 -this, this.player.y - 30);
        this.ctx.fillText(`Destroyer`, this.player.x - 46, this.player.y - 31);
        this.ctx.font = "25px Arial";
        this.ctx.fillStyle = "yellow";
        if(this.tick >= 20 && this.tick <= 39){
          this.ctx.fillStyle = "rgb(100, 245, 100)"
        } else if(this.tick >= 40 &&this.tick <= 59){
          this.ctx.fillStyle = "rgb(75, 245, 75)"
        } else if(this.tick >= 60 &&this.tick <= 89){
          this.ctx.fillStyle = "rgb(0, 245, 0)"
        }
      this.ctx.fillText(`Destroyer`, this.player.x - 44, this.player.y - 29);
      this.ctx.restore();
      if(this.tick >= 150){
        this.levelMessage2 = false
        this.tick = 0
      }
    }
    if(this.levelMessage3){
      this.tick++
      this.ctx.drawImage(
        this.levelupImg3, 675 , 30 , 300 , 200 
      )
      this.ctx.drawImage(
        this.levelupElement, 780 - this.tick/4, 250 - this.tick/4, 80 + this.tick/2 , 80 + this.tick/2 
      )
      this.ctx.font = "25px Arial";
      this.ctx.save();
      this.ctx.fillStyle = "black";
      this.ctx.fillText(`Elementalist`, this.player.x - 55 -this, this.player.y - 30);
      this.ctx.fillText(`Elementalist`, this.player.x - 56, this.player.y - 31);
      this.ctx.font = "25px Arial";
      this.ctx.fillStyle = "rgb(200, 245, 200)";
      if(this.tick >= 20 && this.tick <= 39){
        this.ctx.fillStyle = "rgb(100, 245, 100)"
      } else if(this.tick >= 40 &&this.tick <= 59){
        this.ctx.fillStyle = "rgb(75, 245, 75)"
      } else if(this.tick >= 60 &&this.tick <= 89){
        this.ctx.fillStyle = "rgb(0, 245, 0)"
      }
      this.ctx.fillText(`Elementalist`, this.player.x - 54, this.player.y - 29);
      this.ctx.restore();
      if(this.tick >= 150){
        this.levelMessage3 = false
        this.tick = 0
      }
    }
    // levelup messages..levelup messages..levelup messages..levelup messages..levelup messages..
    // levelup messages..levelup messages..levelup messages..levelup messages..levelup messages..
    if (chargingTrue){
      this.chargeTick++
      if(this.chargeTick >= 50){
        chargingTrue = false
        this.chargeTick = 0
      }
      if(charging !== 0){
        this.ctx.font = "16px Arial";
        this.ctx.save();
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`Blaster 20/${charging.toString()}`, this.player.x - 20, this.player.y + 70);
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "blue";
        this.ctx.fillText(`Blaster 20/${charging.toString()}`, this.player.x - 19, this.player.y + 69);
        this.ctx.restore();
      }
      if(charging === 0 ){
        this.ctx.font = "16px Arial";
        this.ctx.save();
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`Megablaster Charged!`, this.player.x - 20, this.player.y + 70);
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "blue";
        this.ctx.fillText(`Megablaster Charged!`, this.player.x - 19, this.player.y + 69);
        this.ctx.restore();
      }
    }
    if(this.puddles.length + this.fires.length >= 9){
      this.player.loseRespect()
    }
    // CTX data statistics
    // CTX data statistics
    if (this.winTime >= 960) {
      this.healing.draw();
      this.iceCreamAlert()
    }
    if (this.winTime >= 961 && this.winTime <= 964) {
      this.alertingSound = new Audio("/assets/audios ad/alerting.wav");
      this.alertingSound.volume = 0.05;
      this.alertingSound.play()
    }
    if(this.player.sandstate === true){
      this.player.sandAlterImg = "/assets/images/munición/hurricanestorm2.png"
      this.player.imgSand.src = "/assets/images/elements/sandballHeal.png"
      } else {
        this.player.sandAlterImg = ""
        this.player.imgSand.src = "/assets/images/elements/sandball.png"
      }
    this.score.draw();
    this.saved.draw();
    if(hookBoost === true){
      if(this.winTime % 1333 === 0){ //cada 20 segundos recarga 3 contadores de hook
        hookCount +=3
      }
    }
    if(leveler === true){
      this.ctx.font = "20px Sans";
      ctx.fillStyle = "black";
      ctx.globalAlpha = 0.8
      ctx.fillRect(1210, 210, 177, 130);
      ctx.globalAlpha = 1
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Level Ups Boss`, 1258, 235);
      this.ctx.font = "18px Sans";
      this.ctx.fillText(`Choose one...`, 1270, 260);
      this.ctx.fillText(`I'll improve your`, 1265, 278);
      this.ctx.fillText(`weapon of choice soon`, 1220, 296);
      this.ctx.drawImage(
        this.helper2, 1220, 215, 40, 60
      )
      this.ctx.drawImage(
        this.levelupImg1, 35, 30, 300, 200
      )
      this.ctx.drawImage(
        this.levelupImg2, 355, 30, 300, 200
      )
      this.ctx.drawImage(
        this.levelupImg3, 675, 30, 300, 200
      )
    this.levelUps1.draw();
    this.levelUps2.draw();
    this.levelUps3.draw();
}
  }
  move() {
    this.player.move();
    this.token.move();
    this.karens.forEach((e) => e.move());
    this.portals.forEach((e) => e.move());
    this.portals2.forEach((e) => e.move());
    this.rats.forEach((e) => e.move());
    this.fats.forEach((e) => e.move());
    this.geese.forEach((e) => e.move());
    this.babys.forEach((e) => e.move());
    this.customers.forEach((e) => e.move());
    this.bosss.forEach((e) => e.move(this.player));
    this.korens.forEach((e) => e.move(this.player));
    this.puddles.forEach((e) => e.move());
    this.fires.forEach((e) => e.move());
    this.healing.move();
    this.carts.forEach((e) => e.move(this.player));
    this.drugs.forEach((e) => e.move(this.player));
    this.foods.forEach((e) => e.move(this.player));
    this.upgrades.forEach((e) => e.move(this.player));
    this.upBullets.forEach((e) => e.move(this.player));
    this.discounts.forEach((e) => e.move(this.player));
  }
  addKaren() {
    const karen = new Karens(ctx);
    this.karens.push(karen);
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
  }
  addGoose() {
    const goose = new Goose(ctx);
    this.geese.push(goose);
    this.thisAudio = new Audio("/assets/audio/angryGoose.mp3");
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
  }
  addPuddle() {
    const puddle = new Puddle(ctx);
    this.puddles.push(puddle);
    this.puddleBeginAudio = new Audio("/assets/audio/puddleBegin.mp3");
    this.puddleBeginAudio.volume = 0.5;
    this.puddleBeginAudio.play();
  }
  addFire() {
    const fire = new Fire(ctx);
    this.fires.push(fire);
    this.puddleBeginAudio = new Audio("/assets/audio/fireBegin.wav");
    this.puddleBeginAudio.volume = 0.02;
    this.puddleBeginAudio.play();
  }
  addCart() {
    const cart = new Cart(ctx);
    this.carts.push(cart);
    this.luzOnAudio = new Audio("/assets/audios ad/cartLeft2.wav")
    this.luzOnAudio.volume = 0.07;
    this.luzOnAudio.play();
  }
  addDrug() {
    const drug = new Drugs(ctx);
    this.drugs.push(drug);
    this.luzOnAudio = new Audio("/assets/audios ad/cartLeft2.wav")
    this.luzOnAudio.volume = 0.07;
    this.luzOnAudio.play();
  }
  
  addFood() {
    const food = new Food(ctx);
    this.foods.push(food);
    this.disco = new Audio("/assets/audios ad/food.wav");
    this.disco.volume = 0.01;
    this.disco.play()
  }
  addUpgrade() {
    const upgrade = new Upgrade(ctx);
    this.upgrades.push(upgrade);
    this.luzOnAudio = new Audio("/assets/audios ad/upgrades.m4a")
    this.luzOnAudio.volume = 0.03;
    this.luzOnAudio.play();
    this.luzOnAudio = new Audio("/assets/audios ad/upgradeSound.wav")
    this.luzOnAudio.volume = 0.03;
    this.luzOnAudio.play();
  }
  addUpBullet() {
    const upBullet = new Upbullet(ctx);
    this.upBullets.push(upBullet);
    this.luzOnAudio = new Audio("/assets/audios ad/upgradeForBullets.m4a")
    this.luzOnAudio.volume = 0.03;
    this.luzOnAudio.play();
    this.luzOnAudio = new Audio("/assets/audios ad/upgradeSound.wav")
    this.luzOnAudio.volume = 0.03;
    this.luzOnAudio.play();
  }
  addDiscount() {
    const discount = new Discount(ctx);
    this.discounts.push(discount);
    this.disco = new Audio("/assets/audio/discount.wav");
    this.disco.volume = 0.01;
    this.disco.play()
  }
  // alerts start !!!!!! 
  // alerts start !!!!!! 
  alerting(){
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.border = "5px solid rgb(99, 5, 5)";
    statusOk.style.color = "white";
    this.disco = new Audio("/assets/audios ad/alerting.wav");
    this.disco.volume = 0.05;
    this.disco.play()
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
  iceCreamAlert(){
    const iceWorning = document.getElementById("ice");
    iceWorning.style.display = "inline-block";
      
  }
  // alerts end !!!!!! 

  
  
  saving(){
    this.saved.addSave()
    distance += 10
    this.player.booster += 0.5
    this.player.cooldownJump += 100
    this.player.getBigRespect()
    this.customerIs = true
  }
  dying(){
    this.player.loseBigRespect()
    this.score.addScore()
    distance -= 10
    this.player.booster -= 0.5
    this.player.cooldownJump -= 100
    this.perjudiceIs = true
  }
  dyingCus(){
    this.player.loseCustomerRespect()
    distance -= 0.05
    this.player.booster -= 0.010
    this.player.cooldownJump += 5
    this.perjudiceIs = true
  }
  timeDamage(koren){
    if (koren.x < this.player.x) {
      koren.x -= 30;
      koren.h += (6-extraLife)
      koren.w += (6-extraLife)
    }
    if (koren.x > this.player.x) {
      koren.x += 30;
      koren.h += (6-extraLife)
      koren.w += (6-extraLife)
    }
    if (koren.y < this.player.y) {
      koren.y -= 30;
      koren.h += (6-extraLife)
      koren.w += (6-extraLife)
    }
    if (koren.y > this.player.y) {
      koren.y += 30;
      koren.h += (6-extraLife)
      koren.w += (6-extraLife)
    }
  }
  
  //Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..
  //Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..
  checkCharger(){
    if(M === 0){
      charging+=1
      chargingTrue = true
      if(charging >= 20 && this.score.total >= 20){
        M = 77
        charging = 0
        this.luzOnAudio = new Audio("/assets/audios ad/reloadBlaster.wav")
        this.luzOnAudio.volume = 0.1;
        this.luzOnAudio.play();
      }
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
            puddle.puddleIsOn = false
            puddle.puffIsOn = true
            puddle.h = 30
            puddle.w = 30
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
            puddle.puddleIsOn = false
            puddle.puffIsOn = true
            puddle.h = 30
            puddle.w = 30
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
          this.checkCharger()
            puddle.dicrease();
          if(bulletSize >= 40){
            puddle.dicrease();
          } else if( bulletSize >= 60){
            puddle.dicrease();
          }
          if (puddle.h <= 20) {
            puddle.puddleIsOn = false
            puddle.puffIsOn = true
            puddle.h = 30
            puddle.w = 30
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
    this.player.hooks.forEach((hook) => { //hook con agua
      this.puddles.forEach((puddle) => {
        hook.collides(puddle);
        if (hook.collides(puddle)) {
          this.luzOnAudio = new Audio("/assets/audio/evap.mp3")
          this.luzOnAudio.volume = 0.07;
          this.luzOnAudio.play();
            if(puddle.x < this.player.x){
              puddle.x = puddle.x + 40
            } else if (puddle.x > this.player.x){
              puddle.x = puddle.x - 40
            } 
            if(puddle.y < this.player.y){
              puddle.y = puddle.y +40
            } else if(puddle.y > this.player.y){
              puddle.y = puddle.y - 40
            }
            if(puddle.x < this.player.x){
              puddle.x = puddle.x + 40
            } else if (puddle.x > this.player.x){
              puddle.x = puddle.x - 40
            } 
            if(puddle.y < this.player.y){
              puddle.y = puddle.y +40
            } else if(puddle.y > this.player.y){
              puddle.y = puddle.y - 40
            }
            hook.dispose = true
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
            fire.fireIsOn = false
            fire.puffIsOn = true
            fire.h = 40
            fire.w = 40
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
            fire.fireIsOn = false
            fire.puffIsOn = true
            fire.h = 40
            fire.w = 40
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
          this.checkCharger()
          fire.dicrease();
          if(bulletSize >= 40){
            fire.dicrease();
          } else if( bulletSize >= 60){
            fire.dicrease();
          }
          if (fire.h <= 20) {
            fire.fireIsOn = false
            fire.puffIsOn = true
            fire.h = 40
            fire.w = 40
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
    this.player.hooks.forEach((hook) => { //fuego con hook
      this.fires.forEach((fire) => {
        hook.collides(fire);
        if (hook.collides(fire)) {
          this.luzOnAudio = new Audio("/assets/audio/evap.mp3")
          this.luzOnAudio.volume = 0.07;
          this.luzOnAudio.play();
            if(fire.x < this.player.x){
              fire.x = fire.x + 40
            } else if (fire.x > this.player.x){
              fire.x = fire.x - 40
            } 
            if(fire.y < this.player.y){
              fire.y = fire.y +40
            } else if(fire.y > this.player.y){
              fire.y = fire.y - 40
            }
            if(fire.x < this.player.x){
              fire.x = fire.x + 40
            } else if (fire.x > this.player.x){
              fire.x = fire.x - 40
            } 
            if(fire.y < this.player.y){
              fire.y = fire.y +40
            } else if(fire.y > this.player.y){
              fire.y = fire.y - 40
            }
            hook.dispose = true
        }
      });
    });


// karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. 
// karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. karen.. 
    this.karens = this.karens.filter((karen) => {  //karen con player
      if (karen.collides(this.player)) {     
        this.line.draw()
        this.line.move()
        if(this.line.y < this.player.y - 10 || this.line.y > this.player.y + 180){
          this.line.y = this.player.y + 25
        }
        if (this.line.check === 1) {
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
    this.karens.forEach((karen) => {//karens con toxics
      this.player.toxics.filter((sand) => {
        if (sand.collides(karen)) {
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "red";
          this.ctx.fillText(`Im going nowhere!`, karen.x - 49, karen.y-26);
          this.ctx.fillStyle = "tomato";
          this.ctx.fillText(`Im going nowhere!`, karen.x - 46, karen.y-24);
          this.ctx.fillStyle = "white";
          this.ctx.fillText(`Im going nowhere!`, karen.x - 48, karen.y - 25);
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
        this.weird1 = 1010
        venom += 1
        this.ratTickIs = true
        if(venom >= 5){
          P = 80
        }
        if(this.poisonedTime <= 0){
          this.weird = 1
        }
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
          const discRandom = Math.floor(Math.random() * 14 - chance)
          const foodRandom = Math.floor(Math.random() * 9 - chance)
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
          const discRandom = Math.floor(Math.random() * 12 - chance)
          const foodRandom = Math.floor(Math.random() * 9 - chance)
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
    this.rats.forEach((rat) => { //rat con hook
      this.player.hooks = this.player.hooks.filter((heat) => {
        if (heat.collides(rat)) {
          this.player.hooks.splice(0, 1);
          rat.vx = 0;
          rat.cage = true
          this.checkCharger()
          this.luzOnAudio = new Audio("/assets/audios ad/ratHook.mp3")
          this.luzOnAudio.volume = 0.07;
          this.luzOnAudio.play();
          return false;
        } else return true;
      });
    });
    if(this.player.cageDamage === true ){
      this.geese.forEach((goose) => (goose.cage = true))
      this.geese.forEach((goose) => (goose.vx = 0))
      this.geese.forEach((goose) => (goose.moveY = 0))
      this.rats.forEach((rat) => (rat.cage = true))
      this.rats.forEach((rat) => (rat.vx = 0))

    }
    this.rats.forEach((rat) => { //rat con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(rat)) {
          blast.rocketDetonation = true
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
          sand.activated = true
          rat.lifeleft -= sand.damage;
          rat.lifeleft -= sand.damage;
          rat.vx += 0.02
          if(rat.lifeleft === 0){
            this.score.addkrat()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
    this.rats.forEach((rat) => {//rat con toxics
      this.player.toxics.filter((sand) => {
        if (sand.collides(rat)) {
          rat.lifeleft -= 0.005;
          rat.vx += 0.003
          if(rat.vx >= 0){
            rat.vx = 0
          }
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "red";
          this.ctx.fillText(`Scared rat noises:`, rat.x - 29, rat.y-16);
          this.ctx.fillStyle = "tomato";
          this.ctx.fillText(`Scared rat noises:`, rat.x - 26, rat.y-14);
          this.ctx.fillStyle = "white";
          this.ctx.fillText(`Scared rat noises:`, rat.x - 28, rat.y - 15);
          if(rat.lifeleft >= 0 && rat.lifeleft <= 0.001 ){
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
          const foodRandom = Math.floor(Math.random() * 11 - chance)
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
            const foodRandom = Math.floor(Math.random() * 11 - chance)
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
    this.fats.forEach((fat) => { //fat con toxic
      this.player.toxics.filter((tox) => {
        if (tox.collides(fat)) {
          fat.vy -= 0.001
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "red";
          this.ctx.fillText(`Can't breath!`, fat.x - 29, fat.y-16);
          this.ctx.fillStyle = "tomato";
          this.ctx.fillText(`Can't breath!`, fat.x - 26, fat.y-14);
          this.ctx.fillStyle = "white";
          this.ctx.fillText(`Can't breath!`, fat.x - 28, fat.y - 15);
          return false;
        } else return true;
      });
    });

    this.fats.forEach((fat) => { //fat con blasters
      this.player.blasters.filter((blast) => {
        if (blast.collides(fat)) {
          blast.rocketDetonation = true
          fat.vy -= 0.05
          return false;
        } else return true;
      });
    });
    this.fats.forEach((fat) => {//hook con fats
      this.player.hooks.filter((hook) => {
        if (hook.collides(fat)) {
        this.hookShootAudio = new Audio("/assets/audios ad/fatImpact.mp3")
        this.hookShootAudio.volume = 0.07;
        this.hookShootAudio.play();
        this.hookShootAudio = new Audio("/assets/audios ad/fatHookImpact.m4a")
        this.hookShootAudio.volume = 0.07;
        this.hookShootAudio.play();
        this.player.x = fat.x + 20
        this.player.y = fat.y + 40
        hook.dispose = true
          return false;
        } else return true;
      });
    });
// koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...
// koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...koren...
      this.korens = this.korens.filter((koren) => {
        if (koren.collides(this.player)) {
          this.player.fireHit();
          this.player.fireHit();
          this.player.extraBoost -= 0.005;
        }
        return true;
      });
    this.korens.forEach((koren) => {   //koren con heat
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(koren)) {
          this.player.heats.splice(0, 1);
          this.timeDamage(koren)
          this.checkCharger()
          if(koren.h >= 121 && !koren.truth){
            this.score.addkkorens()
            this.score.addktotal1()
            koren.truth = true
          }
        } else return true;
      });
    })
    this.korens.forEach((koren) => {   //koren con hook
      this.player.hooks = this.player.hooks.filter((hook) => {
        if (hook.collides(koren)) {
          this.atraer = new Audio("/assets/audios ad/jaula.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          this.player.hooks.splice(0, 1);
          koren.vNegative = 0
          koren.v = 0
          koren.cage = true
        } else return true;
      });
    })
    this.korens.forEach((koren) => { //koren con waters
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(koren)) {
          this.player.waters.splice(0, 1);
          this.timeDamage(koren)
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
          sand.activated = true
          koren.h += sand.damage + 1;
          koren.w += sand.damage + 1;
          if(!sand.activated){
            this.timeDamage(koren)
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
          blast.rocketDetonation = true
          this.timeDamage(koren)
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
// goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...
// goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...goose...
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
          const foodRandom = Math.floor(Math.random() * 14 - chance)
          if(goose.lifeleft <= 0){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          this.player.heats.splice(0, 1);
          if (goose.x < this.player.x) {
            goose.x -= 20;
            if(foodRandom === 1){
              const food = new Food(ctx, goose.x - 80, goose.y);
              this.foods.push(food);
            }
          }
          if (goose.x > this.player.x) {
            goose.x += 20;
          }
          if (goose.y < this.player.y) {
            goose.y -= 20;
          }
          if (goose.y > this.player.y) {
            goose.y += 20;
            if(foodRandom === 1){
              const food = new Food(ctx, goose.x, goose.y + 80);
              this.foods.push(food);
            }
          }
        this.checkCharger()
        } else return true;
      });
      this.player.waters = this.player.waters.filter((water) => {// goose con water
        if (water.collides(goose)) {
          this.player.waters.splice(0, 1);
          goose.lifeleft -= 1 
          const foodRandom = Math.floor(Math.random() * 10 - chance)
          if(goose.lifeleft <= 0){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          this.player.heats.splice(0, 1);
          if (goose.x < this.player.x) {
            goose.x -= 20;
            if(foodRandom === 1){
              const food = new Food(ctx, goose.x - 80, goose.y);
              this.foods.push(food);
            }
          }
          if (goose.x > this.player.x) {
            goose.x += 20;
          }
          if (goose.y < this.player.y) {
            goose.y -= 20;
          }
          if (goose.y > this.player.y) {
            goose.y += 20;
            if(foodRandom === 1){
              const food = new Food(ctx, goose.x, goose.y + 80);
              this.foods.push(food);checkcha
            }
          }
        this.checkCharger()
        } else return true;
      });
      
        this.player.hooks.filter((hook) => {// goose con hook
        if (hook.collides(goose)) {
          this.player.hooks.splice(0, 1);
          goose.cage = true
          hookImpact = true
          const foodRandom = Math.floor(Math.random() * 10 - chance)
          if(goose.lifeleft <= 0){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          this.luzOnAudio = new Audio("/assets/audios ad/gooseHook.mp3")
          this.luzOnAudio.volume = 0.07;
          this.luzOnAudio.play();
          goose.moveY = 0
          goose.vx = 0
          this.player.heats.splice(0, 1);
        this.checkCharger()
        } else return true;
      });
    });
    this.geese.forEach((goose) => { // goose con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(goose)) {
          blast.rocketDetonation = true
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
          sand.activated = true 
          goose.lifeleft -= sand.damage;
          if(goose.lifeleft === 0){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });

    this.geese.forEach((goose) => { // goose con toxic
      this.player.toxics.filter((tox) => {
        if (tox.collides(goose)) {
          goose.lifeleft -= 0.005;
          if(goose.vx > 0){
            goose.vx -= 0.0005
          } else if(goose.vx < 0 ){
            goose.vx += 0.0005
          }
          if(goose.vy > 0){
            goose.vy = 0.005
          } else if (goose.vy < 0){
            goose.vy = 0.005
          }
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "red";
          this.ctx.fillText(`Weird goose noises`, goose.x - 29, goose.y-16);
          this.ctx.fillStyle = "tomato";
          this.ctx.fillText(`Weird goose noises`, goose.x - 26, goose.y-14);
          this.ctx.fillStyle = "peachpuff";
          this.ctx.fillText(`Weird goose noises`, goose.x - 28, goose.y - 15);
          if(goose.lifeleft >= 0 && goose.lifeleft <= 0.001){
            this.score.addkgoose()
            this.score.addktotal1()
          }
          return false;
        } else return true;
      });
    });
//minas...minas...minasminas...minas...minasminas...minas...minasminas...minas...minasminas...minas...minas
//minas...minas...minasminas...minas...minasminas...minas...minasminas...minas...minasminas...minas...minas

this.geese.forEach((goose) => { // goose con mineReps
  mineria.filter((mineRep) => {
    if (mineRep.collides(goose)) {
      mineRep.activated = true
      goose.lifeleft -= mineRep.damage;
      if(goose.lifeleft === 0){
        this.score.addkgoose()
        this.score.addktotal1()
      }
      return false;
    } else return true;
  });
});
this.rats.forEach((rat) => { // rat con mineReps
  mineria.filter((mineRep) => {
    if (mineRep.collides(rat)) {
      mineRep.activated = true
      rat.lifeleft -= mineRep.damage;
      if(rat.lifeleft === 0){
        this.score.addkgoose()
        this.score.addktotal1()
      }
      return false;
    } else return true;
  });
});
this.bosss.forEach((boss) => { // boss con mineReps
  mineria.filter((mineRep) => {
    if (mineRep.collides(boss)) {
      mineRep.activated = true
      boss.lifeleft -= mineRep.damage;
      if(rat.lifeleft === 0){
        this.score.addkgoose()
        this.score.addktotal1()
      }
      return false;
    } else return true;
  });
});

this.korens.forEach((koren) => { // koren con mineReps
  mineria.filter((mineRep) => {
    if (mineRep.collides(koren)) {
      mineRep.activated = true
      koren.h += mineRep.damage + 1;
      koren.w += mineRep.damage + 1;
      if(rat.lifeleft === 0){
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
          this.player.loseRespect()
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
    this.babys.forEach((baby) => { //baby con hooks
      this.player.hooks.filter((hook) => {
        if (hook.collides(baby)) {
          this.atraer = new Audio("/assets/audios ad/jaula.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          baby.vx = 0
          baby.moveY = 0
          baby.cage = true
          hook.dispose = true
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
    this.babys.forEach((baby) => { //baby con toxic
      this.player.toxics.filter((tox) => {
        if (tox.collides(baby)) {
          baby.babyLife -= 0.005
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "red";
          this.ctx.fillText(`Gugu gaga! blah!:`, baby.x - 39, baby.y-16);
          this.ctx.fillStyle = "tomato";
          this.ctx.fillText(`Gugu gaga! blah!:`, baby.x - 36, baby.y-14);
          this.ctx.fillStyle = "white";
          this.ctx.fillText(`Gugu gaga! blah!:`, baby.x - 38, baby.y - 15);
          if(baby.babyLife <= 1){
            baby.babyImg.src = "/assets/images/elements/blood.png"
            baby.babyFrame = 1
            baby.vx = 0
            baby.vy = 0
            if(baby.babyLife <= -1){
              baby.x = 1800
            }
          }
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
    this.customers.forEach((cust) => {//cust con discounting
      this.player.discountings = this.player.discountings.filter((disc) => {
        if (disc.collides(cust)) {
          this.player.discountings.splice(0, 1);
          this.saving()
          cust.x = 1130
          cust.y = 280
          cust.vx = 19
          cust.say = "Thanx! Bye!"
          return false;
        } else return true;
      });
    });
    this.customers.forEach((cus) => { //customer con heat del player
      this.player.heats.filter((heat) => {
        if (heat.collides(cus)) {
          this.dyingCus()
          cus.lifeleft -=1
          if(cus.dead >= 50){
            this.atraer = new Audio("/assets/audios ad/dustBite.m4a")
            this.atraer.volume = 0.07;
            this.atraer.play();
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
            this.atraer = new Audio("/assets/audios ad/dustBite.m4a")
            this.atraer.volume = 0.07;
            this.atraer.play();
            this.score.score += 1
          }
          return true;
        } else return true;
      });
    });
    this.customers.forEach((cus) => {//customer con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(cus)) {
          this.player.loseRespect()
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
            this.atraer = new Audio("/assets/audios ad/dustBite.m4a")
            this.atraer.volume = 0.07;
            this.atraer.play();
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
            this.atraer = new Audio("/assets/audios ad/dustBite.m4a")
            this.atraer.volume = 0.07;
            this.atraer.play();
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
              this.atraer = new Audio("/assets/audios ad/dustBite.m4a")
              this.atraer.volume = 0.07;
              this.atraer.play();
              this.score.score += 1
            }
            return true;
          } else return true;
        });
      });
      this.customers.forEach((customer) => { //customer con toxic
        this.player.toxics.filter((tox) => {
          if (tox.collides(customer)) {
            customer.lifeleft -= 0.005;
            customer.vy -= 0.0001;
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = "red";
            this.ctx.fillText(`Gugu gaga! blah!:`, customer.x - 39, customer.y-16);
            this.ctx.fillStyle = "tomato";
            this.ctx.fillText(`Gugu gaga! blah!:`, customer.x - 36, customer.y-14);
            this.ctx.fillStyle = "white";
            this.ctx.fillText(`Gugu gaga! blah!:`, customer.x - 38, customer.y - 15);
            if(customer.lifeleft <= 0.3){
              customer.customImg.src = "/assets/images/elements/blood.png"
              customer.customFrame = 1
              customer.vx = 0;
              customer.vy = 0;
            }
            if(customer.lifeleft <= 0.1 && customer.lifeleft >= 0.09  ){
              this.dyingCus()
              this.score.score += 0.5
            }
            return false;
          } else return true;
        });
      });
      this.customers.forEach((customer) => { //customer con hooks
        this.player.hooks.filter((hook) => {
          if (hook.collides(customer)) {
            this.atraer = new Audio("/assets/audios ad/jaula.mp3")
            this.atraer.volume = 0.07;
            this.atraer.play();
            customer.vy = 0
            customer.moveX = 0
            customer.cage = true
            hook.dispose = true
            return false;
          } else return true;
        });
      });
// boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..
// boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..boss..
    this.bosss = this.bosss.filter((boss) => {     //boss con player
      this.player.hooks = this.player.hooks.filter((hook) => {
        if (hook.collides(boss)) {        //boss con hook
          this.karenSounds[Math.floor(Math.random() * this.karenSounds.length)].play();
          this.player.hooks.splice(0, 1);
          this.atraer = new Audio("/assets/audios ad/jaula.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          boss.cage = true
            if(boss.x < this.player.x){
              boss.x = boss.x - 20
            } else if (boss.x > this.player.x){
              boss.x = boss.x + 20
            } 
            if(boss.y < this.player.y){
              boss.y = boss.y -20
            } else if(boss.y > this.player.y){
              boss.y = boss.y + 20
            }
            if(boss.x < this.player.x){
              boss.x = boss.x - 20
            } else if (boss.x > this.player.x){
              boss.x = boss.x + 20
            } 
            if(boss.y < this.player.y){
              boss.y = boss.y - 20
            } else if(boss.y > this.player.y){
              boss.y = boss.y + 20
            }
          boss.v = 0
          boss.vNegative = 0
          charging+=3
          if(charging >= 20 && this.score.total >= 20){
              M = 77
              charging = 0
          }
          return false;
        } else return true;
      });
      if (boss.collides(this.player)) {
        this.player.speed -= 1;
        this.player.cooldownBullet += 600;
        afterSize -=5
        bulletSize -=5
        bulletSizeExtra +=5
        this.bossPerjIs = true
        this.player.hit();
        this.player.hit();
        return false;
      }
      return true;
    });
    this.bosss.forEach((boss) => {      //boss con agua
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(boss)) {
          this.karenSounds[Math.floor(Math.random() * this.karenSounds.length)].play();
          this.player.waters.splice(0, 1);
            boss.lifeleft -= 1;
            this.checkCharger()
          if(boss.lifeleft <= 0){
            boss.y = 2000;
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
          this.hitOnKarenCounter++
          if(this.hitOnKarenCounter % 3 === 0){
            this.addKoren()
          }
          this.korenAlert()
          this.line.b -= 0.2;
          this.line.a += 0.2;
            return false;
        } else return true;
      });
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(boss)) {        //boss con fuego
          this.player.heats.splice(0, 1);
          this.karenSounds[Math.floor(Math.random() * this.karenSounds.length)].play();
          boss.lifeleft -= 1;
          this.checkCharger()
          if(boss.lifeleft <= 0){
            boss.y = 2000;
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
          if(this.hitOnKarenCounter % 3 === 0){
            this.addKoren()
          }
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
            blast.rocketDetonation = true
            boss.lifeleft -= 0.2;
          if(boss.lifeleft <= 0.1){
            boss.y = 2000;
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
          sand.activated = true
          boss.lifeleft -= sand.damage;
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
this.pfront.forEach((peop) => {     //PFront con blaster
  this.player.blasters.filter((blast) => {
    if (blast.collides(peop)) {
      this.player.loseRespect()
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`Hey!!`, peop.x, peop.y);
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`Hey!!`, peop.x-1, peop.y-1);
      this.ctx.fillStyle = "black";
      this.ctx.fillText(`Hey!!`, peop.x+1, peop.y+1);
      return false;
    } else return true;
  });
});
this.pback.forEach((peop) => { //PBack con blaster
  this.player.blasters.filter((blast) => {
    if (blast.collides(peop)) {
      this.player.loseRespect()
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`Ouch!!:`, peop.x, peop.y);
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`Ouch!!:`, peop.x-1, peop.y-1);
      this.ctx.fillStyle = "black";
      this.ctx.fillText(`Ouch!!:`, peop.x+1, peop.y+1);
      return false;
    } else return true;
  });
});
this.pfront.forEach((peop) => {     //PFront
  this.player.discountings.filter((disc) => {
    if (disc.collides(peop)) {
      this.player.getSmallestRespect()
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "blue";
      this.ctx.fillText(`Ouch!!:`, peop.x, peop.y);
      this.ctx.fillStyle = "blue";
      this.ctx.fillText(`Ouch!!:`, peop.x-1, peop.y-1);
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Ouch!!:`, peop.x+1, peop.y+1);
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
        if (this.player.y < wall.y) {
          this.player.y = wall.y - this.player.h;
          this.vy = wall.y;
        }
        if (this.player.y + this.player.h > wall.y + wall.h) {
          this.player.y = wall.y + wall.h;
          this.player.vy = 0;
        }
        if (this.player.x + this.player.w > wall.x + wall.w) {
          this.player.x = wall.x + wall.w;
          this.vx = 0;
        }
        if (this.player.x < wall.x) {
          this.player.x = wall.x - this.player.w;
          this.vx = wall.x;
        }
      }
    });
    this.walls.forEach((wall) => { // walls
      if (wall.collides(this.player)) {
        this.ad
        this.player.vy = 0;
        this.player.vx = 0;
      }
    });
  if(this.winTime >= 500){ //esto abarca desde los hooks al jugador
    this.portals.forEach((port) => {//hook con portal hooktal
      this.player.hooks.filter((hook) => {
              if (hook.collides(port)) {
                this.portals2.forEach((pro) => {
                  //horizontal impact
                  if(pro.vx === -1 && hook.vx <=0 ){
                    hook.x = pro.x - 30;
                    hook.y = pro.y;
                  }
                  if(pro.vx === -1 && hook.vx >=0 ){
                    hook.x = pro.x + 52;
                    hook.y = pro.y;
                  }
                  if(pro.vx === 1 && hook.vx <=0){
                    hook.x = pro.x - 30;
                    hook.y = pro.y;
                  }
                  if(pro.vx === 1 && hook.vx >=0){
                    hook.x = pro.x + 52;
                    hook.y = pro.y;
                  }
                  if(pro.vy === -1&& hook.vy <= 0){
                    hook.x = pro.x;
                    hook.y = pro.y - 30;
                  }
                  if(pro.vy === -1 && hook.vy >= 0){
                    hook.x = pro.x;
                    hook.y = pro.y + 52;
                  }
                  if(pro.vy === 1 && hook.vy >= 0){
                    hook.x = pro.x;
                    hook.y = pro.y + 52;
                  }
                  if(pro.vy === 1 && hook.vy <= 0){
                    hook.x = pro.x;
                    hook.y = pro.y - 30;
                  }
                })
              
            return false;
        } else return true;
      });
    });
    this.portals2.forEach((port) => {//hook con portal
      this.player.hooks.filter((hook) => {
            if (hook.collides(port)) {
              this.portals.forEach((pro) => {
                //horizontal impact
                if(pro.vx === -1 && hook.vx <=0 ){
                  hook.x = pro.x - 30;
                  hook.y = pro.y;
                }
                if(pro.vx === -1 && hook.vx >=0 ){
                  hook.x = pro.x + 52;
                  hook.y = pro.y;
                }
                if(pro.vx === 1 && hook.vx <=0){
                  hook.x = pro.x - 30;
                  hook.y = pro.y;
                }
                if(pro.vx === 1 && hook.vx >=0){
                  hook.x = pro.x + 52;
                  hook.y = pro.y;
                }
                if(pro.vy === -1&& hook.vy <= 0){
                  hook.x = pro.x;
                  hook.y = pro.y - 30;
                }
                if(pro.vy === -1 && hook.vy >= 0){
                  hook.x = pro.x;
                  hook.y = pro.y + 52;
                }
                if(pro.vy === 1 && hook.vy >= 0){
                  hook.x = pro.x;
                  hook.y = pro.y + 52;
                }
                if(pro.vy === 1 && hook.vy <= 0){
                  hook.x = pro.x;
                  hook.y = pro.y - 30;
                }
              })
          return false;
        } else return true;
      });
    });
  this.portals.forEach((port) => {
    if (port.collides(this.player)) {
      this.portals2.forEach((pro) => {
        if(pro.vx === -1){
          this.player.x = pro.x + 40;
          this.player.y = pro.y;
        }
        if(pro.vx === 1){
          this.player.x = pro.x - 40;
          this.player.y = pro.y;
        }
        if(pro.vy === -1){
          this.player.x = pro.x;
          this.player.y = pro.y + 40;
        }
        if(pro.vy === 1){
          this.player.x = pro.x;
          this.player.y = pro.y - 40;
        }
      })
    }
  });
  this.portals2.forEach((port) => {
    if (port.collides(this.player)) {
      this.portals.forEach((pro) => {
        if(pro.vx === -1){
          this.player.x = pro.x + 40;
          this.player.y = pro.y;
        }
        if(pro.vx === 1){
          this.player.x = pro.x - 40;
          this.player.y = pro.y;
        }
        if(pro.vy === -1){
          this.player.x = pro.x;
          this.player.y = pro.y + 40;
        }
        if(pro.vy === 1){
          this.player.x = pro.x;
          this.player.y = pro.y - 40;
        }
      })
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
//carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...
//carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...carts...
    this.carts = this.carts.filter((cart) => {
      if (cart.collides(this.player)) {
        this.shielOn = new Audio("/assets/audios ad/shieldActivated.wav");
        this.shielOn.volume = 0.05;
        this.shielOn.play()
        hookCount+=3 + chance*2
        this.atraer = new Audio("/assets/audios ad/bonus.mp3")
        this.atraer.volume = 0.03;
        this.atraer.play();
        if(this.score.total >= 35){
          T = 84
        }
        this.player.getSmallRespect()
        return false;
      }
      return true;
    });
    
    this.drugs = this.drugs.filter((drug) => {  //drugs con player
      if (drug.collides(this.player)) {
        // this.shielOn = new Audio("/assets/audios ad/shieldActivated.wav");
        // this.shielOn.volume = 0.05;
        // this.shielOn.play()
        // this.atraer = new Audio("/assets/audios ad/bonus.mp3")
        // this.atraer.volume = 0.03;
        // this.atraer.play();
        fireDrug = true
        waterDrug = true
        // this.player.extraBoostState = true
        // this.player.extraSizeState = true
        // this.player.lesserSizeState = true
        return false;
      }
      return true;
    });


    this.carts.forEach((cart) => {//hook con carts
      this.player.hooks.filter((hook) => {
        if (hook.collides(cart)) {
          this.atraer = new Audio("/assets/audio/atraer2.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          cart.v = 2.4
          cart.vNegative = 7.2
          hook.dispose = true
          return false;
        } else return true;
      });
    });
// foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..
// foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..foods..
    this.foods = this.foods.filter((food) => {
      if (food.collides(this.player)) {
        this.atraer = new Audio("/assets/audios ad/bonus.mp3")
        this.atraer.volume = 0.03;
        this.atraer.play();
        this.player.heal(2)
        return false;
      }
      return true;
    });
    this.foods.forEach((food) => {//hook con foods
      this.player.hooks.filter((hook) => {
        if (hook.collides(food)) {
          this.atraer = new Audio("/assets/audio/atraer2.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          hook.dispose = true
          food.v = 2.4
          food.vNegative = 7.2
          return false;
        } else return true;
      });
    });
// upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...
// upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...
    this.upgrades = this.upgrades.filter((up) => {
      if (up.collides(this.player)) {
        this.player.speed += 2;
        bulletDistance += 50;
        bulletDistanceExtra -= 50
        this.player.cooldownBullet -= 600;
        B = 66
        this.atraer = new Audio("/assets/audios ad/bonus.mp3")
        this.atraer.volume = 0.03;
        this.atraer.play();
        this.upgradeIs = true
        if(this.upgrades.length === 0){
          const upAlert = document.getElementById("upgrade-alert");
          upAlert.style.display = "none";
        }
        return false;
      }
      return true;
    });
    this.upBullets = this.upBullets.filter((up) => {
      if (up.collides(this.player)) {
        afterSize +=20
        bulletSize +=10
        bulletSizeExtra -=10
        B = 66
        this.atraer = new Audio("/assets/audios ad/bonus.mp3")
        this.atraer.volume = 0.03;
        this.atraer.play();
        this.upBulletIs = true
        if(this.upBullets.length === 0){
          const upgAlert = document.getElementById("upBullet-alert");
          upgAlert.style.display = "none";
        }
        return false;
      }
      return true;
    });
    const ya = [this.upBullet, this.upgrade]
    
    this.upBullets.forEach((upbullet) => {//hook con upbullets
      this.player.hooks.filter((hook) => {
        if (hook.collides(upbullet)) {
          this.atraer = new Audio("/assets/audio/atraer2.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          upbullet.v = 1
          upbullet.vNegative = 7.2
          hook.dispose = true
          if(this.upBullets.length === 0){
            const upgAlert = document.getElementById("upBullet-alert");
            upgAlert.style.display = "none";
          }
          return false;
        } else return true;
      });
    });
    this.upgrades.forEach((upgrade) => {//hook con upgrades
      this.player.hooks.filter((hook) => {
        if (hook.collides(upgrade)) {
          this.atraer = new Audio("/assets/audio/atraer2.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          upgrade.v = 1
          upgrade.vNegative = 7.2
          hook.dispose = true
          if(this.upgrades.length === 0){
            const upAlert = document.getElementById("upgrade-alert");
            upAlert.style.display = "none";
          }
          return false;
        } else return true;
      });
    });
    this.drugs.forEach((drug) => {//hook con drugs
      this.player.hooks.filter((hook) => {
        if (hook.collides(drug)) {
          this.atraer = new Audio("/assets/audio/atraer2.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          drug.v = 1
          drug.vNegative = 7.2
          hook.dispose = true
          if(this.drugs.length === 0){
            const upAlert = document.getElementById("upgrade-alert");
            upAlert.style.display = "none";
          }
          return false;
        } else return true;
      });
    });
    this.lamps.forEach((lamp) => {//hook con lamps
      this.player.hooks.filter((hook) => {
        if (hook.collides(lamp)) {
          if( lamp.lights === false){
            lamp.lights = true
            this.luzOnAudio = new Audio("/assets/audios ad/luzOn.mp3")
            this.luzOnAudio.volume = 0.07;
            this.luzOnAudio.play();
            lampOn+=1
            if(lampOn === 14){
              pImage += 1
              lamp.lights = false
            }
            lamp.img.src = "/assets/images/elements/lamp.png"
        }
        this.hookShootAudio = new Audio("/assets/audios ad/impactoHook.mp3")
        this.hookShootAudio.volume = 0.07;
        this.hookShootAudio.play();
        this.player.x = lamp.x
        this.player.y = lamp.y
        hook.dispose = true
          return false;
        } else return true;
      });
    });
//discount...discount...discount...discount...discount...discount...discount...discount...discount...
//discount...discount...discount...discount...discount...discount...discount...discount...discount...
    this.discounts = this.discounts.filter((discount) => {
      if (discount.collides(this.player)) {
        this.line.b -= 0.5;
        this.line.a += 0.5;
        discounting += 5
        this.atraer = new Audio("/assets/audios ad/bonus.mp3")
        this.atraer.volume = 0.03;
        this.atraer.play();
        return false;
      }
      return true;
    });
    this.discounts.forEach((discount) => {//hook con discounts
      this.player.hooks.filter((hook) => {
        if (hook.collides(discount)) {
          this.atraer = new Audio("/assets/audio/atraer2.mp3")
          this.atraer.volume = 0.07;
          this.atraer.play();
          discount.v = 2.4
          discount.vNegative = 7.2
          hook.dispose = true
          return false;
        } else return true;
      });
    });
    this.player.toxics = this.player.toxics.filter((tox) => {
      if (tox.collides(this.player)) {
          this.player.dieSlower()
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "red";
          this.ctx.fillText("My skin burns!", this.player.x - 40, this.player.y - 28);
          this.ctx.fillStyle = "red";
          this.ctx.fillText("My skin burns!", this.player.x - 36, this.player.y-24);
          this.ctx.fillStyle = "white";
          this.ctx.fillText("My skin burns!", this.player.x - 38, this.player.y-26);
        }
      return true;
    });

    this.player.sanders = this.player.sanders.filter((sand) => { //sandheal con player
      if (sand.collides(this.player)) {
        if(this.player.sandstate === true){
          this.player.healSlow(0.004)
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "blue";
          this.ctx.fillText("Healing!", this.player.x - 40, this.player.y - 28);
          this.ctx.fillStyle = "ble";
          this.ctx.fillText("Healing!", this.player.x - 36, this.player.y-24);
          this.ctx.fillStyle = "aqua";
          this.ctx.fillText("Healing!", this.player.x - 38, this.player.y-26);
        }
      }
      return true;
    });
    this.pfront.forEach((pfro) => {//pfro con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(pfro)) {
          if(this.player.sandstate === true){
            this.player.getSmallestRespect()
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = "blue";
            this.ctx.fillText(pfro.complainOne, pfro.x - 40, pfro.y - 28);
            this.ctx.fillStyle = "ble";
            this.ctx.fillText(pfro.complainOne, pfro.x - 36, pfro.y-24);
            this.ctx.fillStyle = "aqua";
            this.ctx.fillText(pfro.complainOne, pfro.x - 38, pfro.y-26);
          }
          return false;
        } else return true;
      });
    });
    this.pback.forEach((pfro) => {//pfro con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(pfro)) {
          if(this.player.sandstate === true){
            this.player.getSmallestRespect()
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = "blue";
            this.ctx.fillText(pfro.complainOne, pfro.x - 40, pfro.y - 28);
            this.ctx.fillStyle = "ble";
            this.ctx.fillText(pfro.complainOne, pfro.x - 36, pfro.y-24);
            this.ctx.fillStyle = "aqua";
            this.ctx.fillText(pfro.complainOne, pfro.x - 38, pfro.y-26);
          }
          return false;
        } else return true;
      });
    });
    this.player.blasters.forEach((blast) => {// con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(blast)) {
          this.tick++ 
          if (this.tick % 45 === 0 && this.player.blasters.length <= 20 && hookCount === 0){
            this.player.megablaster()
          }
          return false;
        } else return true;
      });
    });

// levelups...levelups...levelups...levelups...levelups...levelups...levelups...levelups...levelups...
// levelups...levelups...levelups...levelups...levelups...levelups...levelups...levelups...levelups...
if(leveler){
// levels
    if (this.levelUps1.collides(this.player)) {
      G = 71
      B = 66
      hookCount += 5
      hookBoost = true
      this.levelupSound = new Audio("/assets/audios ad/levelupHookSound.mp3");
      this.levelupSound.volume = 0.05;
      this.levelupSound.play()
      this.levelMessage1 = true
      leveler = false
    };
    if (this.levelUps2.collides(this.player)) {
      machinegunBoost = true
      rocketCount += 20

      H = 72
      this.levelupSound = new Audio("/assets/audios ad/reloadMachinegun.mp3");
      this.levelupSound.volume = 0.05;
      this.levelupSound.play()
      this.levelMessage2 = true
      leveler = false
    }
    if (this.levelUps3.collides(this.player)) {
      N = 78
      K = 75
      elementalMineCount += 5;
      mineCount += 25;
      elementBoost = true
      this.levelupSound = new Audio("/assets/audios ad/levelupElementalSound.mp3");
      this.levelupSound.volume = 0.05;
      this.levelupSound.play()
      this.levelMessage3 = true
      leveler = false
    }
}
  
// collision end... collision end... collision end... collision end... collision end... collision end... collision end...
// collision end... collision end... collision end... collision end... collision end... collision end... collision end...
// collision end... collision end... collision end... collision end... collision end... collision end... collision end...



    // evento que se dispara al perder toda la vida, morir clientes, perder el respeto y perder hjas de reclamaciones
    if (!this.player.isRespected()) {
      this.gameOver();
      const lose = document.getElementById("loseRespect");
      lose.style.display = "flex"
    } 
    if (forms.length < 1) {
      this.gameOver();
      const lose = document.getElementById("loseClaim");
      lose.style.display = "flex"
    } 
    if (this.score.score >= 10) {
      this.gameOver();
      const lose = document.getElementById("loseDead");
      lose.style.display = "flex"
    } 
    if(!this.player.isAlive()){
      this.gameOver()
      const lose = document.getElementById("loseDied");
      lose.style.display = "flex"
    }
      if (this.healing.collides(this.player) && this.winTime >= 350) {
      this.player.healslow(0.004);
      this.iceCurePoison++
      if(this.iceCurePoison >= this.curePoisonTimer ){
        this.weird1 = 0
        this.iceCurePoison = 0
        const poison = document.getElementById("poisoned");
        poison.style.display = "none";
      }
    }
  }  
  //Colisiones end
  gameOver() {
    this.stop();
    this.karens = [];
    this.rats = [];
    this.babys = [];
    this.customers = [];
    this.fats = [];
    this.puddles = [];
    this.fires = [];
    this.geese = [];
    this.bosss = [];
    this.korens = [];
    this.carts = [];
    this.foods = [];
    this.korens = [];
    this.upgrades = [];
    this.upBullet = [];
    this.dicounts = [];
    this.winMus = new Audio("/assets/audios ad/losemusic.mp3");
    this.winMus.volume = 0.1;
    this.winMus.play();
  }
  gameWin() {
    this.stop();
    this.karens = [];
    this.rats = [];
    this.babys = [];
    this.customers = [];
    this.fats = [];
    this.puddles = [];
    this.fires = [];
    this.geese = [];
    this.bosss = [];
    this.korens = [];
    this.carts = [];
    this.foods = [];
    this.korens = [];
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
    });
  }
}
