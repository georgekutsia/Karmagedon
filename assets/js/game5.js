class Game5 {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);
    this.token = new Token(ctx);
    this.line = new Line(ctx);
    this.healing = new HealingPlace(ctx);
    this.water = new Water(ctx)
    this.score = new Score(ctx);

    this.walls = [
      new Wall(ctx, 60, 50, 20, 70),
      new Wall(ctx, 60, 110, 20, 70),
      new Wall(ctx, 60, 170, 20, 70),

      new Wall(ctx, 285, 170, 20, 70),
      new Wall(ctx, 285, 110, 20, 70),
      new Wall(ctx, 285, 50, 20, 70),

      new Wall(ctx, 380, 170, 25, 70),
      new Wall(ctx, 380, 110, 25, 70),
      new Wall(ctx, 380, 50, 25, 70),

      new Wall(ctx, 610, 170, 25, 70),
      new Wall(ctx, 610, 110, 25, 70),
      new Wall(ctx, 610, 50, 25, 70),

      new Wall(ctx, 700, 50, 25, 70),
      new Wall(ctx, 700, 110, 25, 70),
      new Wall(ctx, 700, 170, 25, 70),

      new Wall(ctx, 925, 50, 25, 70),
      new Wall(ctx, 925, 110, 25, 70),
      new Wall(ctx, 925, 170, 25, 70),
      new Wall(ctx, 800, 170, 50, 50),

      new Wall(ctx, 90, 50, 50, 25),
      new Wall(ctx, 240, 50, 50, 25),
      new Wall(ctx, 410, 205, 50, 25),
      new Wall(ctx, 560, 205, 50, 25),
      new Wall(ctx, 482, 130, 60, 60),
      new Wall(ctx, 490, 80, 40, 40),
      new Wall(ctx, 730, 50, 50, 25),
      new Wall(ctx, 870, 50, 50, 25),

      new Wall(ctx, 60, 320, 25, 70),
      new Wall(ctx, 60, 380, 25, 70),
      new Wall(ctx, 60, 440, 25, 70),

      new Wall(ctx, 285, 320, 25, 70),
      new Wall(ctx, 285, 380, 25, 70),
      new Wall(ctx, 285, 440, 25, 70),
      new Wall(ctx, 180, 380, 40, 40),

      new Wall(ctx, 380, 320, 25, 70),
      new Wall(ctx, 380, 380, 25, 70),
      new Wall(ctx, 380, 440, 25, 70),

      new Wall(ctx, 610, 320, 25, 70),
      new Wall(ctx, 610, 380, 25, 70),
      new Wall(ctx, 610, 440, 25, 70),

      new Wall(ctx, 700, 320, 25, 70),
      new Wall(ctx, 700, 380, 25, 70),
      new Wall(ctx, 700, 440, 25, 70),

      new Wall(ctx, 925, 320, 25, 70),
      new Wall(ctx, 925, 380, 25, 70),
      new Wall(ctx, 925, 440, 25, 70),

      new Wall(ctx, 90, 320, 50, 25),
      new Wall(ctx, 240, 320, 50, 25),
      new Wall(ctx, 90, 480, 50, 25),
      new Wall(ctx, 240, 480, 50, 25),
      new Wall(ctx, 170, 110, 40, 40),
      new Wall(ctx, 80, 200, 40, 40),
      new Wall(ctx, 830, 330, 20, 70),

      new Wall(ctx, 410, 320, 50, 25),
      new Wall(ctx, 560, 320, 50, 25),
      new Wall(ctx, 465, 450, 50, 25),
      new Wall(ctx, 500, 450, 50, 25),

      new Wall(ctx, 880, 320, 50, 25),
      new Wall(ctx, 830, 320, 50, 25),
      new Wall(ctx, 730, 480, 50, 25),
      new Wall(ctx, 780, 480, 50, 25),
    ];

    this.puddleTime = 700 ; //puddle
    this.fireTime = 800; //fire
    this.babyTime = 0; //baby
    this.customerTime = 4500; //baby
    this.bossTime = 0; //boss
    this.winTime = 0;
    this.interval = null;

    this.customers = [];
    this.puddles = [];
    this.fires = [];
    this.bosss = [];
    this.babys = [];
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
      this.puddleTime++; //puddle
      this.fireTime++;
      this.babyTime++;
      this.customerTime++;
      this.bossTime++;
      this.winTime++;
      this.checkCollisions();
      // if (this.winTime >= 81100) {
      //   this.gameWin();
      // } // acaba a las 17:00     //121600 acaba a las 21:00:15
      if (this.winTime >= 121534.2) {
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


      if (this.puddleTime > Math.random() * 1000 + 239) {
        //puddle
        this.puddleTime = 0;
        this.waterAlert();
        this.addPuddle();
      }
      if (this.fireTime > Math.random() * 1000 + 239) {
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
      if (this.customerTime > Math.random() * 1000 + 500099) {
        //customer
        this.customerTime = 0;
        this.addCustomer();
      }
      if (this.cartTime > Math.random() * 100 + 350099) {
        //cart
        this.cartTime = 0;
        this.addCart();
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
    this.babys = this.babys.filter((e) => e.isVisible());
    this.customers = this.customers.filter((e) => e.isVisible());
    this.bosss = this.bosss.filter((e) => e.isVisible());
    this.puddles = this.puddles.filter((e) => e.isVisible());
    this.fires = this.fires.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());


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
    if (
      this.bosss.length <= 0 &&
      this.fires.length <= 0 &&
      this.puddles.length <= 0 &&
      this.babys.length <= 0 
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
    this.puddles.forEach((e) => e.draw());
    this.fires.forEach((e) => e.draw());
    this.bosss.forEach((e) => e.draw());
    this.babys.forEach((e) => e.draw());
    this.customers.forEach((e) => e.draw());
    this.player.draw();
    this.walls.forEach((e) => e.draw());
    this.token.draw();
    this.line.draw();
    if (this.winTime > 600) {
      this.healing.draw();
    }
    this.score.draw();
  }
  move() {
    this.player.move();
    this.token.move();
    this.babys.forEach((e) => e.move());
    this.customers.forEach((e) => e.move());
    this.bosss.forEach((e) => e.move(this.player));
    this.puddles.forEach((e) => e.move());
    this.fires.forEach((e) => e.move());
    this.line.move();
    this.healing.move();
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
  //Colisiones start
  checkCollisions() {
    this.winTime++;
    this.puddle = new Puddle(ctx); //que el fuego mate al agua

    this.puddles.forEach((puddle) => {
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(puddle)) {
          this.player.heats.splice(0, 1);
          puddle.increase();
          puddle.increase();
          puddle.dicrease();
          puddle.dicrease();
          puddle.dicrease();
          if(puddle.x < this.player.x){
            puddle.vx = 0.3
          }
          if(puddle.x > this.player.x){
            puddle.vx = -0.3
          }
          if(puddle.y < this.player.y){
            puddle.vy = 0.3
          }
          if(puddle.y > this.player.y){
            puddle.vy = -0.3
          }
          if (puddle.h <= 20) {
            puddle.vx = 500;
            const waterAlert = document.getElementById("water-alert");
            waterAlert.style.display = "none";
            if (this.winTime > 40000) {
              this.addPuddle();
            } //  el intervalo en el que aparecen mas charcos cada vez que los borras
          }
          return false;
        } else return true;
      });
    });

    this.player.waters.forEach((water) => {
      //que el agua con agua lo aumente
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
          fire.dicrease();
          fire.increase();
          if(fire.x < this.player.x){
            fire.vx = 0.3
          }
          if(fire.x > this.player.x){
            fire.vx = -0.3
          }
          if(fire.y < this.player.y){
            fire.vy = 0.3
          }
          if(fire.y > this.player.y){
            fire.vy = -0.3
          }
          if (fire.h <= 5) {
            fire.vx = 500;
            const fireAlert = document.getElementById("fire-alert");
            fireAlert.style.display = "none";
            if (this.winTime > 40000) {
              this.addPuddle();
            } //  el intervalo en el que aparecen mas charcos cada vez que los borras
          }
          return false;
        } else return true;
      });
    });


    this.player.heats.forEach((heat) => {
      //que el fuego con fuego lo aumente
      this.fires.forEach((fire) => {
        heat.collides(fire);
        if (heat.collides(fire)) {
          this.player.heats.splice(0, 1);
          fire.increase();
        }
      });
    });



    //baby collisions
    this.babys = this.babys.filter((baby) => {
      if (baby.collides(this.player)) {
        this.player.heal();
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

    
    //customers collisions
    this.customers = this.customers.filter((customer) => {
      if (customer.collides(this.player)) {
        this.player.heal();
        waterDistance += 20;
        heatDistance +=20;
        return false;
      }
      return true;
    });

    this.puddles.forEach((puddle) => {
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

    this.fires.forEach((fire) => {
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


    this.bosss = this.bosss.filter((boss) => {
      if (boss.collides(this.player)) {
        this.player.hit();
        this.player.hit();
        this.player.boost -= 2;
        C = 0;
        V = 0;
        return false;
      }
      return true;
    });
    this.boss = new Boss(ctx); //impacto de agua a boss
    this.bosss.forEach((boss) => {
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
          return false;
        } else return true;
      });
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(boss)) {
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
          return false;
        } else return true;
      });
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

    // evento que se dispara al perder toda la vida, morir clientes y perder hjas de reclamaciones
    if (!this.player.isAlive() || this.score.score >= 10 || forms.length < 1) {
      this.gameWin();
    }
  }
  //Colisiones end

  gameOver() {
    this.stop();

    this.babys = [];
    this.customers = [];
    this.fires = [];
    this.puddles = [];
    this.bosss = [];
    const lose = document.getElementById("lose");
    lose.style.display = "block"
    this.winMus = new Audio("/assets/audios ad/losemusic.mp3");
    this.winMus.volume = 0.1;
    this.winMus.play();
  }
  gameWin() {
    this.stop();
    this.babys = [];
    this.customers = [];
    this.karens = [];
    this.boss = [];
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
