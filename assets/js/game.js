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
    this.saved = new Saved(ctx);

    this.walls = [
      new Bushes(ctx, 60, 50, 20, 70),
      new Bushes(ctx, 60, 110, 20, 70),
      new Bushes(ctx, 60, 170, 20, 70),

      new Bushes(ctx, 285, 170, 20, 70),
      new Bushes(ctx, 285, 110, 20, 70),
      new Bushes(ctx, 285, 50, 20, 70),

      new Bushes(ctx, 380, 170, 25, 70),
      new Bushes(ctx, 380, 110, 25, 70),
      new Bushes(ctx, 380, 50, 25, 70),

      new Bushes(ctx, 610, 170, 25, 70),
      new Bushes(ctx, 610, 110, 25, 70),
      new Bushes(ctx, 610, 50, 25, 70),

      new Bushes(ctx, 700, 50, 25, 70),
      new Bushes(ctx, 700, 110, 25, 70),
      new Bushes(ctx, 700, 170, 25, 70),

      new Bushes(ctx, 925, 50, 25, 70),
      new Bushes(ctx, 925, 110, 25, 70),
      new Bushes(ctx, 925, 170, 25, 70),
      new Bushes(ctx, 800, 170, 50, 50),

      new Bushes(ctx, 90, 50, 50, 25),
      new Bushes(ctx, 240, 50, 50, 25),
      new Bushes(ctx, 410, 205, 50, 25),
      new Bushes(ctx, 560, 205, 50, 25),
      new Bushes(ctx, 482, 130, 60, 60),
      new Bushes(ctx, 490, 80, 40, 40),
      new Bushes(ctx, 730, 50, 50, 25),
      new Bushes(ctx, 870, 50, 50, 25),

      new Bushes(ctx, 60, 320, 25, 70),
      new Bushes(ctx, 60, 380, 25, 70),
      new Bushes(ctx, 60, 440, 25, 70),

      new Bushes(ctx, 285, 320, 25, 70),
      new Bushes(ctx, 285, 380, 25, 70),
      new Bushes(ctx, 285, 440, 25, 70),
      new Bushes(ctx, 180, 380, 40, 40),

      new Bushes(ctx, 380, 320, 25, 70),
      new Bushes(ctx, 380, 380, 25, 70),
      new Bushes(ctx, 380, 440, 25, 70),

      new Bushes(ctx, 610, 320, 25, 70),
      new Bushes(ctx, 610, 380, 25, 70),
      new Bushes(ctx, 610, 440, 25, 70),

      new Bushes(ctx, 700, 320, 25, 70),
      new Bushes(ctx, 700, 380, 25, 70),
      new Bushes(ctx, 700, 440, 25, 70),

      new Bushes(ctx, 925, 320, 25, 70),
      new Bushes(ctx, 925, 380, 25, 70),
      new Bushes(ctx, 925, 440, 25, 70),

      new Bushes(ctx, 90, 320, 50, 25),
      new Bushes(ctx, 240, 320, 50, 25),
      new Bushes(ctx, 90, 480, 50, 25),
      new Bushes(ctx, 240, 480, 50, 25),
      new Bushes(ctx, 170, 110, 40, 40),
      new Bushes(ctx, 80, 200, 40, 40),
      new Bushes(ctx, 830, 330, 20, 70),

      new Bushes(ctx, 410, 320, 50, 25),
      new Bushes(ctx, 560, 320, 50, 25),
      new Bushes(ctx, 465, 450, 50, 25),
      new Bushes(ctx, 500, 450, 50, 25),

      new Bushes(ctx, 880, 320, 50, 25),
      new Bushes(ctx, 830, 320, 50, 25),
      new Bushes(ctx, 730, 480, 50, 25),
      new Bushes(ctx, 780, 480, 50, 25),
    ];

    this.karenTime = 0; //karen
    this.ratTime = 0; // rat
    this.fatTime = 0; //fat
    this.puddleTime = 700 ; //puddle
    this.fireTime = 800; //fire
    this.gooseTime = 0; //goose
    this.babyTime = 0; //baby
    this.customerTime = 4500; //baby
    this.bossTime = 0; //boss
    this.korenTime = 0; //koren
    this.cartTime = 3450;
    this.foodTime = 0;
    this.discountTime = 3700;
    this.winTime = 0;
    this.interval = null;

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
    this.discounts = [];

    this.listOfEvents = [this.karens, this.rats, this.babys, 
                        this.customers, this.fats, this.puddles,
                        this.fires, this.geese, this.bosss, this.korens, 
                        this.carts, this.discounts]

    this.setListeners();

    this.musicStart = new Audio("/assets/audio/valse.mp3");
    this.musicStart.volume = 0.02;
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
      this.karenTime++; //karen
      this.ratTime++; //rat
      this.fatTime++; //fat
      this.puddleTime++; //puddle
      this.fireTime++;
      this.gooseTime++;
      this.babyTime++;
      this.customerTime++;
      this.bossTime++;
      this.korenTime++;
      this.winTime++;
      this.cartTime++;
      this.foodTime++;
      this.discountTime++;
      this.checkCollisions();
      if (this.winTime >= 121534.2) {
        this.gameWin();
      }   //acaba a las 21 con tick del tiempo en 15

      if (this.winTime % 55000 === 0) {
        this.almostOver = new Audio("/assets/audio/It???s almost over.mp3");
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

      if (this.karenTime > Math.random() * 100 + 3500) {
        //karen  tarda mucho en salir pero luego sale cada 3000
        this.karenTime = 0;
        this.karensAlert();
        this.addKaren();
        if(this.winTime >= 20000){
          this.karenTime = 3000
        }
      }
      if (this.ratTime > Math.random() * 600 + 100099) {
        //rat
        this.ratTime = 0;
        this.ratAlert();
        this.addRat();
      }
      if (this.fatTime > Math.random() * 100 + 203099) {
        //fat
        this.fatTime = 0;
        this.fatAlert();
        this.addFat();
        if(this.winTime >= 30000){
          this.fatTime = 1000
        }
      }
      if (this.puddleTime > Math.random() * 1000 + 100099) {
        //puddle
        this.puddleTime = 0;
        this.waterAlert();
        this.addPuddle();
      }
      if (this.fireTime > Math.random() * 1000 + 100099) {
        //fire
        this.fireTime = 0;
        this.fireAlert();
        this.addFire();
      }
      if (this.gooseTime > Math.random() * 100 + 400099) {
        //goose
        this.gooseTime = 0;
        this.gooseAlert();
        this.addGoose();
        if(this.winTime >= 30000){
          this.gooseTime = 2000
        }
      }
      if (this.babyTime > Math.random() * 100 + 400099) {
        //baby
        this.babyTime = 0;
        this.babyAlert();
        this.addBaby();
      }
      if (this.customerTime > Math.random() * 1000 + 500009) {
        //customer
        this.customerTime = 0;
        this.addCustomer();
      }
      if (this.cartTime > Math.random() * 100 + 350099) {
        //cart
        this.cartTime = 0;
        this.addCart();
      }
      if (this.foodTime > Math.random() * 100 + 2259) {
        //food
        this.foodTime = 0;
        this.addFood();
      }
      if (this.discountTime > Math.random() * 100 + 380099) {
        //discount
        this.discountTime = 0;
        this.addDiscount();
      }
      if (this.bossTime > Math.random() * 100 + 1000099) {
        //boss
        this.bossTime = 5000;
        this.bossAlert();
        this.addBoss();
      }
      if (this.korenTime > Math.random() * 100 + 20099) {
        //koren
        this.korenTime = 0;
        this.addKoren();
        this.korenAlert()
      }

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
    this.puddles = this.puddles.filter((e) => e.isVisible());
    this.fires = this.fires.filter((e) => e.isVisible());
    this.discounts = this.discounts.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());

    if (this.karens.length <= 0) {
      const alert = document.getElementById("karens-alert");
      alert.style.display = "none";
    }
    if (this.rats.length <= 0) {
      const alert = document.getElementById("rat-alert");
      alert.style.display = "none";
    }
    if (this.fats.length <= 0) {
      const alert = document.getElementById("fat-alert");
      alert.style.display = "none";
    }
    if (this.geese.length <= 0) {
      const alert = document.getElementById("goose-alert");
      alert.style.display = "none";
    }
    if (this.babys.length <= 0) {
      const alert = document.getElementById("baby-alert");
      alert.style.display = "none";
    }
    if (this.puddles.length <= 0) {
      const alert = document.getElementById("water-alert");
      alert.style.display = "none";
    }
    if (this.fires.length <= 0) {
      const alert = document.getElementById("fire-alert");
      alert.style.display = "none";
    }
    if (this.bosss.length <= 0) {
      const alert = document.getElementById("boss-alert");
      alert.style.display = "none";
    }
    if (this.korens.length <= 0) {
      const alert = document.getElementById("koren-alert");
      alert.style.display = "none";
    }
    if (
      this.bosss.length <= 0 &&
      this.korens.length <= 0 &&
      this.fires.length <= 0 &&
      this.puddles.length <= 0 &&
      this.babys.length <= 0 &&
      this.geese.length <= 0 &&
      this.fats.length <= 0 &&
      this.rats.length <= 0 &&
      this.karens.length <= 0
    ) {
      const nothingToWorrie = document.getElementById("ok");
      nothingToWorrie.style.display = "inline-block";
      const statusOk = document.getElementById("status");
      statusOk.style.backgroundColor = "rgb(0, 128, 0)";
      statusOk.style.color = "white";
      statusOk.style.border = "3px solid rgb(0, 0, 255)";
    }
  }

  draw() {
    this.winTime++;

    // this.listOfEvents.forEach((event) => event.forEach((e) => e.draw()))
    this.puddles.forEach((e) => e.draw());
    this.fires.forEach((e) => e.draw());
    this.bosss.forEach((e) => e.draw());
    this.korens.forEach((e) => e.draw());
    this.babys.forEach((e) => e.draw());
    this.customers.forEach((e) => e.draw());
    this.player.draw();
    this.walls.forEach((e) => e.draw());
    this.token.draw();
    this.karens.forEach((e) => e.draw());
    this.rats.forEach((e) => e.draw());
    this.fats.forEach((e) => e.draw());
    this.geese.forEach((e) => e.draw());
    this.carts.forEach((e) => e.draw());
    this.foods.forEach((e) => e.draw());
    this.discounts.forEach((e) => e.draw());
    this.line.draw();

    if (this.winTime > 600) {
      this.healing.draw();
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
  addDiscount() {
    const discount = new Discount(ctx);
    this.discounts.push(discount);
    this.disco = new Audio("/assets/audio/Discounts.mp3");
    this.disco.volume = 0.2;
    this.disco.play()
  }

  karensAlert() {
    const karensAlert = document.getElementById("karens-alert");
    karensAlert.style.display = "inline-flex";

    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  ratAlert() {
    const ratAlert = document.getElementById("rat-alert");
    ratAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  fatAlert() {
    const fatAlert = document.getElementById("fat-alert");
    fatAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  gooseAlert() {
    const gooseAlert = document.getElementById("goose-alert");
    gooseAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  waterAlert() {
    const waterAlert = document.getElementById("water-alert");
    waterAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  fireAlert() {
    const fireAlert = document.getElementById("fire-alert");
    fireAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  babyAlert() {
    const babyAlert = document.getElementById("baby-alert");
    babyAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  bossAlert() {
    const crazyKaren = document.getElementById("boss-alert");
    crazyKaren.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  korenAlert() {
    const korenAlert = document.getElementById("koren-alert");
    korenAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  //Colisiones start


  checkCollisions() {
    this.winTime++;
    this.puddle = new Puddle(ctx); //que el fuego mate al agua

    this.puddles.forEach((puddle) => {
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(puddle)) {
          this.player.heats.splice(0, 1);
          puddle.dicrease();
          if (puddle.h <= 20) {
            puddle.vx = 500;
            const waterAlert = document.getElementById("water-alert");
            waterAlert.style.display = "none";
            if (this.winTime > 40000) {
              this.addPuddle();
            }
          }
          return false;
        } else return true;
      });
    });

    this.player.waters.forEach((water) => {  //que el agua aumente el agua
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

    this.fire = new Fire(ctx); //gue el agua mate al fuego
    this.fires.forEach((fire) => {
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(fire)) {
          this.player.waters.splice(0, 1);
          fire.dicrease();
          if (fire.h <= 20) {
            fire.vx = 500;
            const fireAlert = document.getElementById("fire-alert");
            fireAlert.style.display = "none";
            if (this.winTime > 40000) {
              this.addPuddle();
            }
          }
          return false;
        } else return true;
      });
    });


    this.player.heats.forEach((heat) => { //que el fuego aumente al fuego
      this.fires.forEach((fire) => {
        heat.collides(fire);
        if (heat.collides(fire)) {
          this.player.heats.splice(0, 1);
          fire.increase();
        }
      });
    });
    //colisiones con obst??culos End     ::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<

        //colisiones con karens start     ::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<
    this.karens = this.karens.filter((karen) => {
      if (karen.collides(this.player)) {
        if (this.line.check == 1) {
          return false;
        }
      }
      return true;
    });
        //colisiones con obst??culos End    ::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<

    //impacto ratas al jugador
    this.rats = this.rats.filter((rat) => {
      if (rat.collides(this.player)) {
        this.player.hit();
        this.player.vy = -1;
        this.player.vx = -1;
        return false;
      }
      return true;
    });
    //impacto balas a las ratas
    this.rat = new Rats(ctx);
    this.rats.forEach((rat) => {
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(rat)) {
          this.player.waters.splice(0, 1);
          rat.vx += 2;
          this.player.coolDownWater -= 20;
          return false;
        } else return true;
      });
    });
    this.rats.forEach((rat) => {
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(rat)) {
          this.player.heats.splice(0, 1);
          rat.vx += 2;
          this.player.coolDownFire -= 20;
          return false;
        } else return true;
      });
    });
    //colisiones con fat Start    ::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<
    this.fats.forEach((fat) => {    //agua al fat
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(fat)) {
          this.player.waters.splice(0, 1);
          this.player.coolDownWater = 20;
        } else return true;
      });
    });
    this.fats.forEach((fat) => {  //fuego al fat
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(fat)) {
          this.player.heats.splice(0, 1);
          this.player.coolDownFire = 20;
        } else return true;
      });
    });

    this.fats = this.fats.filter((fat) => { //jugador al fat
      if (fat.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0;
      }
      return true;
    });

        //colisiones con fat End     ::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<


    this.geese = this.geese.filter((goose) => {
      if (goose.collides(this.player)) {
        this.player.hit();
        this.player.hit();
        this.player.coolDownWater += 200;
        this.player.coolDownFire += 200;

        return false;
      }
      return true;
    });
    this.goose = new Goose(ctx); //que el fuego mate al agua

    this.geese.forEach((goose) => {
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(goose)) {
          this.player.heats.splice(0, 1);
          this.player.coolDownFire -= 20;
          if (goose.x < this.player.x) {
            goose.x -= 50;
          }
          if (goose.x > this.player.x) {
            goose.x += 50;
          }
          if (goose.y < this.player.y) {
            goose.y -= 50;
          }
          if (goose.y > this.player.y) {
            goose.y += 50;
          }
        } else return true;
      });
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(goose)) {
          this.player.waters.splice(0, 1);
          this.player.coolDownFire -= 20;
          if (goose.x < this.player.x) {
            goose.x -= 50;
          }
          if (goose.x > this.player.x) {
            goose.x += 50;
          }
          if (goose.y < this.player.y) {
            goose.y -= 50;
          }
          if (goose.y > this.player.y) {
            goose.y += 50;
          }
        } else return true;
      });
    });


    //baby collisions Start
    this.babys = this.babys.filter((baby) => {
      if (baby.collides(this.player)) {
        this.saved.addSave()
        if(this.saved.save % 3 === 0){
          this.addFood()
          this.player.coolDownWater -= 200;
          this.player.coolDownFire -= 200;
        }
        return false;
      }
      return true;
    });

    this.puddles.forEach((puddle) => {
      this.babys = this.babys.filter((baby) => {
        if (baby.collides(puddle)) {
          this.babys.splice(0, 1);
          puddle.vx = 500;
          this.player.hit()
          this.score.addScore()
          return false;
        } else return true;
      });
    });

    this.fires.forEach((fire) => {
      this.babys = this.babys.filter((heat) => {
        if (heat.collides(fire)) {
          this.babys.splice(0, 1);
          fire.vx = 500;
          this.player.hit()
          this.score.addScore()
          return false;
        } else return true;
      });
    });
    //baby collisions End
    
    //customers collisions Start    ::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<
    this.customers = this.customers.filter((customer) => {
      if (customer.collides(this.player)) {
        this.saved.addSave()
        if(this.saved.save % 3 === 0){
          this.addFood()
          this.player.coolDownWater -= 200;
          this.player.coolDownFire -= 200;
        }
        return false;
      }
      return true;
    });

    this.puddles.forEach((puddle) => {    //customer con agua
      this.customers = this.customers.filter((customer) => {
        if (customer.collides(puddle)) {
          this.customers.splice(0, 1);
          puddle.vx = 500;
          this.player.hit()
          this.score.addScore()
          return false;
        } else return true;
      });
    });

    this.fires.forEach((fire) => {  //customer con fuego
      this.customers = this.customers.filter((heat) => {
        if (heat.collides(fire)) {
          this.customers.splice(0, 1);
          fire.vx = 500;
          this.player.hit()
          this.score.addScore()
          return false;
        } else return true;
      });
    });
    //colisiones con customer End     ::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<

    this.bosss = this.bosss.filter((boss) => {
      if (boss.collides(this.player)) {
        this.player.hit();
        this.player.hit();
        this.player.boost -= 1;
        C = 0;
        V = 0;

        return false;
      }
      return true;
    });

    this.boss = new Boss(ctx); 
    this.bosss.forEach((boss) => {      //impacto de agua a boss
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(boss)) {
          this.player.waters.splice(0, 1);
          if (boss.x < this.player.x) {
            boss.x -= 40;
          }
          if (boss.x > this.player.x) {
            boss.x += 40;
          }
          if (boss.y < this.player.y) {
            boss.y -= 40;
          }
          if (boss.y > this.player.y) {
            boss.y += 40;
          }
          const koren = new Koren(ctx);
          this.korens.push(koren);
          this.korenAlert()
          this.line.b -= 0.2;
          this.line.a += 0.2;
            return false;
        } else return true;
      });
      
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(boss)) {    //impacto de guego a boss
          this.player.heats.splice(0, 1);
          if (boss.x < this.player.x) {
            boss.x -= 40;
            
          }
          if (boss.x > this.player.x) {
            boss.x += 40;
          }
          if (boss.y < this.player.y) {
            boss.y -= 40;
          }
          if (boss.y > this.player.y) {
            boss.y += 40;
          }
          const koren = new Koren(ctx);
          this.korens.push(koren);
          this.line.b -= 0.2;
          this.line.a += 0.2;
          return false;
        } else return true;
      });
    });

    this.koren = new Koren(ctx)
    this.korens = this.korens.filter((koren) => {
      if (koren.collides(this.player)) {
        this.player.hit();
        this.player.boost -= 0.5;
        return false;
      }
      return true;
    });
    // colisiones con las paredes y los charcos que retrasan al jugador
    this.walls.forEach((wall) => {
      if (wall.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0;
      }
    });

    this.puddles.forEach((puddle) => {
      if (puddle.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0;
      }
    });
    this.fires.forEach((fire) => {
      if (fire.collides(this.player)) {
        this.player.fireHit();
        this.player.vy = 0;
        this.player.vx = 0;
      }
    });
    //impacto cart
    this.carts = this.carts.filter((cart) => {
      if (cart.collides(this.player)) {
        this.newShoes = new Audio("/assets/audios ad/Faster running.mp3");
        this.newShoes.volume = 0.1;
        this.newShoes.play()
        this.player.boost += 0.5;
        distance +=10
        return false;
      }
      return true;
    });
    //impacto food
    this.foods = this.foods.filter((food) => {
      if (food.collides(this.player)) {
        // this.newShoes = new Audio("/assets/audios ad/Faster running.mp3");
        // this.newShoes.volume = 0.1;
        // this.newShoes.play()
        this.player.wSpeed += 1
        this.player.hSpeed += 1
        waterDistance += 10;
        heatDistance += 10;
        this.player.heal()
        return false;
      }
      return true;
    });
    //impacto discount
    this.discounts = this.discounts.filter((discount) => {
      if (discount.collides(this.player)) {
        this.line.b -= 0.5;
        this.line.a += 0.5;
        return false;
      }
      return true;
    });
    //fin de las colisiones

    // evento que se dispara al perder toda la vida, morir clientes y perder hjas de reclamaciones
    if (!this.player.isAlive() || this.score.score >= 10 || forms.length < 1) {
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
