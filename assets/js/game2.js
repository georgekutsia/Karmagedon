class Game2 {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);
    this.token = new Token(ctx);
    this.line = new Line(ctx);
    this.healing = new HealingPlace(ctx);
    this.water = new Water(ctx);
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

    this.ratTime = 0; // rat
    this.fatTime = 0; //fat
    this.bossTime = 0; //boss
    this.cartTime = 1400;
    this.discountTime = 0;
    this.winTime = 0;
    this.interval = null;

    this.rats = [];
    this.fats = [];
    this.bosss = [];
    this.carts = [];
    this.discounts = [];
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
      console.log(this.rats)
      this.clear();
      this.draw();
      this.move();
      this.ratTime++; //rat
      this.fatTime++; //fat
      this.bossTime++;
      this.winTime++;
      this.cartTime++;
      this.discountTime++;
      this.checkCollisions();
      // if (this.winTime >= 81100) {
      //   this.gameWin();
      // } // acaba a las 17:00     //121600 acaba a las 21:00:15
      // if (this.winTime >= 121534.2) {
      //   this.gameWin();
      // }   //acaba a las 21 con tick del tiempo en 15
      if (this.winTime >= 60500) {   //sobrevive hasta las 15:00
        this.gameWin();
      }
      if (this.winTime % 55000 === 0) {
        this.almostOver = new Audio("/assets/audio/It’s almost over.mp3");
        this.almostOver.volume = 0.3;
        this.almostOver.play();
      }
      if (this.winTime % 45000 === 0) {
        this.littleMore = new Audio("/assets/audio/Just a little more.mp3");
        this.littleMore.volume = 0.3;
        this.littleMore.play();
      }
      if (this.winTime % 40000 === 0) {
        this.soTired = new Audio("/assets/audio/Tired.mp3");
        this.soTired.volume = 0.3;
        this.soTired.play();
      }
      if (this.winTime % 35000 === 0) {
        this.candyShop = new Audio("/assets/audios ad/Candy shop.mp3");
        this.candyShop.volume = 0.3;
        this.candyShop.play();
      }
      if (this.winTime % 30200 === 0) {
        this.needCoffee = new Audio("/assets/audios ad/Need coffee.mp3");
        this.needCoffee.volume = 0.3;
        this.needCoffee.play();
      }
      if (this.winTime % 30000 === 0) {
        this.pizzaPlace = new Audio("/assets/audios ad/Pizza place.mp3");
        this.pizzaPlace.volume = 0.3;
        this.pizzaPlace.play();
      }
      if (this.winTime % 25000 === 0) {
        this.moreIShoot = new Audio("/assets/audios ad/More I shoot.mp3");
        this.moreIShoot.volume = 0.3;
        this.moreIShoot.play();
      }
      if (this.winTime % 8000 === 0) {
        this.getsSiri = new Audio("/assets/audio/Gets serious.mp3");
        this.getsSiri.volume = 0.2;
        this.getsSiri.play();
      }

      if (this.ratTime > Math.random() * 600 + 200) {
        //rat
        this.ratTime = 0;
        this.ratAlert();
        this.addRat();
        if(this.winTime >= 20000){
          this.addRat()
        }
      }
      if (this.fatTime > Math.random() * 100 + 2000) {
        //fat
        this.fatTime = 0;
        this.fatAlert();
        this.addFat();
        if (this.winTime >= 30000) {
          this.fatTime = 500;
        }
      }
      if (this.cartTime > Math.random() * 400 + 1500) {
        //cart
        this.cartTime = 400;
        this.addCart();
        this.addCart();
      }
      if (this.discountTime > Math.random() * 100 + 380099) {
        //discount
        this.discountTime = 0;
        this.addDiscount();
      }
      if (this.bossTime > Math.random() * 100 + 50000) {
        //boss
        this.bossTime = 3000;
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
    this.rats = this.rats.filter((e) => e.isVisible());
    this.fats = this.fats.filter((e) => e.isVisible());
    this.discounts = this.discounts.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());

    if (this.rats.length <= 0) {
      const alert = document.getElementById("rat-alert");
      alert.style.display = "none";
    }
    if (this.fats.length <= 0) {
      const alert = document.getElementById("fat-alert");
      alert.style.display = "none";
    }
    if (this.bosss.length <= 0) {
      const alert = document.getElementById("boss-alert");
      alert.style.display = "none";
    }
    if (
      this.bosss.length <= 0 &&
      this.fats.length <= 0 &&
      this.rats.length <= 0
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
    this.bosss.forEach((e) => e.draw());
    this.player.draw();
    this.walls.forEach((e) => e.draw());
    this.token.draw();
    this.rats.forEach((e) => e.draw());
    this.fats.forEach((e) => e.draw());

    this.line.draw();
    this.carts.forEach((e) => e.draw());
    this.discounts.forEach((e) => e.draw());
    if (this.winTime > 600) {
      this.healing.draw();
    }
    this.score.draw();
  }
  move() {
    this.player.move();
    this.token.move();
    this.rats.forEach((e) => e.move());
    this.fats.forEach((e) => e.move());
    this.bosss.forEach((e) => e.move(this.player));
    this.line.move();
    this.healing.move();
    this.carts.forEach((e) => e.move());
    this.discounts.forEach((e) => e.move());
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
  addCart() {
    const cart = new Cart(ctx);
    this.carts.push(cart);
  }
  addDiscount() {
    const discount = new Discount(ctx);
    this.discounts.push(discount);
    this.disco = new Audio("/assets/audio/Discounts.mp3");
    this.disco.volume = 0.2;
    this.disco.play();
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
    // this.rats = this.rats.filter((rat) => {
    //   if (rat.x <=0) {
    //     this.gameOver()
    //   }
    //   return true;
    // });
    //impacto balas a las ratas
    this.rat = new Rats(ctx);
    this.rats.forEach((rat) => {
      this.winTime++
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(rat)) {
          this.player.waters.splice(0, 1);
          rat.vx += 2;
          this.player.coolDownWater -= 300;
          if(this.winTime >= 30000){
            this.addRat()
          }
          return false;
        } else return true;
      });
    }); 
    this.rats.forEach((rat) => {
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(rat)) {
          this.player.heats.splice(0, 1);
          rat.vx += 2;
          this.player.coolDownFire -= 300;
          return false;
        } else return true;
      });
    });

    this.fats.forEach((fat) => {
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(fat)) {
          this.player.waters.splice(0, 1);
          this.player.coolDownWater = 30;
        } else return true;
      });
    });
    this.fats.forEach((fat) => {
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(fat)) {
          this.player.heats.splice(0, 1);
          this.player.coolDownFire = 30;
        } else return true;
      });
    });

    this.fats = this.fats.filter((fat) => {
      if (fat.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0;
      }
      return true;
    });

    if (this.healing.collides(this.player) && this.winTime >= 550) {
      this.player.healslow();
    }

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
    //impacto cart
    this.carts = this.carts.filter((cart) => {
      if (cart.collides(this.player)) {
        this.newShoes = new Audio("/assets/audios ad/Faster running.mp3");
        this.newShoes.volume = 0.1;
        this.newShoes.play();
        this.player.boost += 1;
        waterDistance += 20;
        heatDistance +=20;
        this.player.heal();
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
    this.rat = new Rats(ctx);
    // evento que se dispara al perder toda la vida, morir clientes y perder hjas de reclamaciones
    if (!this.player.isAlive() || this.score.score >= 10 || forms.length < 1 || this.rats.length >= 10) {
      this.gameOver();
    }
  }
  //Colisiones end

  gameOver() {
    this.stop();
    this.rats = [];
    this.fats = [];
    this.bosss = [];
    this.carts = [];
    this.dicounts = [];
    const lose = document.getElementById("lose");
    lose.style.display = "block";
    this.winMus = new Audio("/assets/audios ad/losemusic.mp3");
    this.winMus.volume = 0.1;
    this.winMus.play();
  }
  gameWin() {
    this.stop();
    this.rats = [];
    this.fats = [];
    this.boss = [];
    this.carts = [];
    this.dicounts = [];
    const wincon = document.getElementById("win");
    wincon.style.display = "block";
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
