class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.player = new Player(ctx);
    this.token = new Token(ctx);
    this.line = new Line(ctx);
    this.healing = new HealingPlace(ctx)
  
    this.walls = [
      new Wall(ctx, 60, 50, 20, 70),
      new Wall(ctx, 60, 110, 20, 70),
      new Wall(ctx, 60, 170, 20, 70),

      new Wall(ctx, 285, 170, 20, 70),
      new Wall(ctx, 175, 130, 70,25),
      new Wall(ctx, 285, 50,25, 70),

      new Wall(ctx, 380, 170,25, 70),
      new Wall(ctx, 380, 110,25, 70),
      new Wall(ctx, 380, 50,25, 70),

      new Wall(ctx, 610, 170,25, 70),
      new Wall(ctx, 610, 110,25, 70),
      new Wall(ctx, 610, 50,25, 70),

      new Wall(ctx, 700, 50,25, 70),
      new Wall(ctx, 700, 110,25, 70),
      new Wall(ctx, 700, 170,25, 70),

      new Wall(ctx, 925, 50,25, 70),
      new Wall(ctx, 925, 110,25, 70),
      new Wall(ctx, 925, 170,25, 70),
      new Wall(ctx, 800, 170,25, 70),

      new Wall(ctx, 90, 50, 50,25),
      new Wall(ctx, 240, 50, 50,25),
      new Wall(ctx, 410, 205, 50,25),
      new Wall(ctx, 560, 205, 50,25),
      new Wall(ctx, 490, 130,25, 50),
      new Wall(ctx, 490, 80,25, 50),
      new Wall(ctx, 730, 50, 50,25),
      new Wall(ctx, 870, 50, 50,25),

      new Wall(ctx, 60, 320,25, 70),
      new Wall(ctx, 60, 380,25, 70),
      new Wall(ctx, 60, 440,25, 70),

      new Wall(ctx, 285, 320,25, 70),
      new Wall(ctx, 285, 380,25, 70),
      new Wall(ctx, 285, 440,25, 70),
      new Wall(ctx, 200, 380,25, 70),

      new Wall(ctx, 380, 320,25, 70),
      new Wall(ctx, 380, 380,25, 70),
      new Wall(ctx, 380, 440,25, 70),

      new Wall(ctx, 610, 320,25, 70),
      new Wall(ctx, 610, 380,25, 70),
      new Wall(ctx, 610, 440,25, 70),

      new Wall(ctx, 700, 320,25, 70),
      new Wall(ctx, 700, 380,25, 70),
      new Wall(ctx, 700, 440,25, 70),

      new Wall(ctx, 925, 320,25, 70),
      new Wall(ctx, 925, 380,25, 70),
      new Wall(ctx, 925, 440,25, 70),

      new Wall(ctx, 90, 320, 50,25),
      new Wall(ctx, 240, 320, 50,25),
      new Wall(ctx, 90, 480, 50,25),
      new Wall(ctx, 240, 480, 50,25),

      new Wall(ctx, 410, 320, 50,25),
      new Wall(ctx, 560, 320, 50,25),
      new Wall(ctx, 465, 450, 50,25),
      new Wall(ctx, 500, 450, 50,25),

      new Wall(ctx, 880, 320, 50,25),
      new Wall(ctx, 830, 320, 50,25),
      new Wall(ctx, 730, 480, 50,25),
      new Wall(ctx, 780, 480, 50,25),
    ];

    this.karenTime = 0; //karen
    this.ratTime = 0; // rat
    this.fatTime= 0; //fat
    this.puddleTime = 500; //puddle
    this.fireTime = 500; //fire
    this.gooseTime = 0; //goose
    this.babyTime = 0; //baby
    this.bossTime = 0;//boss
    this.cartTime = 0; 
    this.discountTime = 0;
    this.winTime = 0;
    this.interval = null;

    
    this.karens = [];
    this.rats = [];
    this.babys = [];
    this.fats = [];
    this.puddles = [];
    this.fires = [];
    this.geese = [];
    this.bosss = [];
    this.carts = [];
    this.discounts = [];
    this.setListeners();

    this.musicStart = new Audio("/assets/audio/valse.mp3");
    this.musicStart.volume = 0.1;
    this.musicStart.loop = true;
  }
  start() {
    this.walkPuddleAudio = new Audio("/assets/audio/So1.mp3")
    this.walkPuddleAudio.volume = 0.2;
    this.walkPuddleAudio.play();
    this.musicStart.play();
    myFunction();
    this.interval = setInterval(() => {
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
      this.bossTime++;
      this.winTime++;
      this.cartTime++;
      this.discountTime++;

      this.checkCollisions();

      if (this.winTime > 9000) {
        this.gameWin();
      }
      if(this.winTime == 3000){
        this.thisAudio = new Audio("/assets/audio/Gets serious.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
      }
      if (this.karenTime > Math.random() * 100 + 53300) {
        //karen
        this.karenTime = 0;
        this.karensAlert();
        this.addKarens();
        this.thisAudio = new Audio("/assets/audio/Karen.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
      }
      if (this.ratTime > Math.random() * 300 + 3004) {
        //rat
        this.ratTime = 0;
        this.ratAlert();
        this.addRats();
        this.thisAudio = new Audio("/assets/audio/Comemos.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
      }
      if (this.fatTime> Math.random() * 100 + 13030) {
        //fat
        this.fatTime= 0;
        this.fatAlert();
        this.addFat();
        this.thisAudio = new Audio("/assets/audio/Oh fuck.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
      }
      if (this.puddleTime > Math.random() * 100 + 9340) {
        //puddle
        this.puddleTime = 0;
        this.waterAlert();
        this.addPuddle();
        this.puddleBeginAudio = new Audio("/assets/audio/puddleBegin.mp3")
        this.puddleBeginAudio.volume = 0.2;
        this.puddleBeginAudio.play();
        this.thisAudio = new Audio("/assets/audio/Now what.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
      }
      if (this.fireTime > Math.random() * 100 + 6340) {
        //fire
        this.fireTime = 0;
        this.fireAlert();
        this.addFire();
        this.puddleBeginAudio = new Audio("/assets/audio/fireBegin.wav")
        this.puddleBeginAudio.volume = 0.2;
        this.puddleBeginAudio.play();
        this.thisAudio = new Audio("/assets/audio/Oh fuck.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
      }
      if (this.gooseTime > Math.random() * 100 + 5320) {
        //goose
        this.gooseTime = 0;
        this.gooseAlert();
        this.addGoose();
        this.thisAudio = new Audio("/assets/audio/Goose.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
        this.thisAudio = new Audio("/assets/audio/geese.mp3")
        this.thisAudio.volume = 0.1;
        this.thisAudio.play();
      }
      if (this.babyTime > Math.random() * 100 + 10340) {
        //baby
        this.babyTime = 0;
        this.babyAlert();
        this.addBaby();
        this.thisAudio = new Audio("/assets/audio/Los baby.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
      }
      if (this.cartTime > Math.random() * 100 + 140) {
        //cart
        this.cartTime = 0;
        this.addCart();
      }
      if (this.discountTime > Math.random() * 100 + 240) {
        //discount
        console.log(this.discounts)
        this.discountTime = 0;
        this.addDiscount()
      }
      if (this.bossTime > Math.random() * 100 + 1430) {
        //boss
        this.bossTime = 0;
        this.bossAlert();
        this.addBoss();
        this.thisAudio = new Audio("/assets/audio/Nonono.mp3")
        this.thisAudio.volume = 0.2;
        this.thisAudio.play();
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
    this.bosss = this.bosss.filter((e) => e.isVisible());
    this.puddles = this.puddles.filter((e) => e.isVisible());
    this.fires = this.fires.filter((e) => e.isVisible());
    this.babys = this.babys.filter((e) => e.isVisible());
    this.discounts = this.discounts.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());

    if(this.karens.length<= 0){
      const alert = document.getElementById("karens-alert");
      alert.style.display = "none";
    }
    if(this.rats.length<= 0){
      const alert = document.getElementById("rat-alert");
      alert.style.display = "none";
    }
    if(this.fats.length<= 0){
      const alert = document.getElementById("fat-alert");
      alert.style.display = "none";
    }
    if(this.geese.length<= 0){
      const alert = document.getElementById("goose-alert");
      alert.style.display = "none";
    }
    if(this.babys.length<= 0){
      const alert = document.getElementById("baby-alert");
      alert.style.display = "none";
    }
    if(this.puddles.length<= 0){
      const alert = document.getElementById("water-alert");
      alert.style.display = "none";
    }
    if(this.fires.length<= 0){
      const alert = document.getElementById("fire-alert");
      alert.style.display = "none";
    }
    if(this.bosss.length<= 0){
      const alert = document.getElementById("boss-alert");
      alert.style.display = "none";
    }
    if(this.bosss.length<= 0 && this.fires.length<= 0 && 
      this.puddles.length<= 0 && this.babys.length<= 0 && 
      this.geese.length<= 0 && this.fats.length<= 0 && 
      this.rats.length<= 0 && this.karens.length<= 0){
        const nothingToWorrie = document.getElementById("ok");
        nothingToWorrie.style.display = "inline-block";
      }
  }

  draw() {
    this.puddles.forEach((e) => e.draw());
    this.fires.forEach((e) => e.draw());
    this.bosss.forEach((e) => e.draw());
    this.player.draw();
    this.walls.forEach((e) => e.draw());
    this.token.draw();
    this.karens.forEach((e) => e.draw());
    this.rats.forEach((e) => e.draw());
    this.fats.forEach((e) => e.draw());
    this.geese.forEach((e) => e.draw());
    this.babys.forEach((e) => e.draw());
    this.line.draw();
    this.healing.draw();
    this.carts.forEach((e) => e.draw());
    this.discounts.forEach((e) => e.draw());
  }
  move() {
    this.player.move();
    this.token.move();
    this.karens.forEach((e) => e.move());
    this.rats.forEach((e) => e.move());
    this.fats.forEach((e) => e.move());
    this.geese.forEach((e) => e.move());
    this.babys.forEach((e) => e.move());
    this.bosss.forEach((e) => e.move(this.player));
    this.puddles.forEach((e) => e.move());
    this.fires.forEach((e) => e.move());
    this.line.move();
    this.healing.move();
    this.carts.forEach((e) => e.move());
    this.discounts.forEach((e) => e.move());
  }
  addKarens() {
    const karens = new Karens(this.ctx);
    this.karens.push(karens);
  }
  addRats() {
    const rats = new Rats(this.ctx);
    this.rats.push(rats);
  }
  addFat() {
    const fats = new Fat(this.ctx);
    this.fats.push(fats);
  }
  addGoose() {
    const geese = new Goose(this.ctx);
    this.geese.push(geese);
  }
  addBaby() {
    const babys = new Baby(this.ctx);
    this.babys.push(babys);
  }
  addBoss() {
    const bosss = new Boss(this.ctx);
    this.bosss.push(bosss);
  }
  addPuddle() {
    const puddles = new Puddle(this.ctx);
    this.puddles.push(puddles);
  }
  addFire() {
    const fires = new Fire(this.ctx);
    this.fires.push(fires);
  }
  addCart() {
    console.log("wa")
    const carts = new Cart(this.ctx);
    this.carts.push(carts);
  }
  addDiscount() {
    const discounts = new Discount(this.ctx);
    this.discounts.push(discounts);
  }
  karensAlert() {
    const karensAlert = document.getElementById("karens-alert");
    karensAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
  }
  ratAlert() {
    const ratAlert = document.getElementById("rat-alert");
    ratAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
  }
  fatAlert() {
    const fatAlert = document.getElementById("fat-alert");
    fatAlert.style.display = "inline-flex";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  gooseAlert() {
    const gooseAlert = document.getElementById("goose-alert");
    gooseAlert.style.display = "inline-flex";
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
  }
  bossAlert() {
    const babyAlert = document.getElementById("boss-alert");
    babyAlert.style.display = "inline-flex";
  }
  //Colisiones start

  checkCollisions() {
    this.puddle = new Puddle(ctx); //que el fuego mate al agua

    this.puddles.forEach((puddle) =>{ 
      this.player.heats = this.player.heats.filter((heat) =>{
        if (heat.collides(puddle)) {
          this.player.heats.splice(0, 1);
          puddle.dicrease();
          if (puddle.h <= 20) {
            puddle.vx = 500;
            const waterAlert = document.getElementById("water-alert");
            waterAlert.style.display = "none";
            if (this.winTime > 10000) {
              this.addPuddle();
            } //  el intervalo en el que aparecen mas charcos cada vez que los borras
          }
          return false
        } else return true
      })
    })

    this.player.waters.forEach((water) => {//que el agua con agua lo aumente
      this.puddles.forEach((puddle) => {
        water.collides(puddle);
        if (water.collides(puddle)) {
          this.player.waters.splice(0, 1);
          this.puddleBeginAudio = new Audio("/assets/audio/puddleBegin.mp3")
          this.puddleBeginAudio.volume = 0.2;
          this.puddleBeginAudio.play();
          puddle.increase();
        }
      });
    });
    
    this.fire = new Fire(ctx); //gue el agua mate al fuego
    this.fires.forEach((fire) =>{ 
      this.player.waters = this.player.waters.filter((water) =>{
        if (water.collides(fire)) {
          this.player.waters.splice(0, 1);
          fire.dicrease();
          if (fire.h <= 20) {
            fire.vx = 500;
            const waterAlert = document.getElementById("water-alert");
            waterAlert.style.display = "none";
            if (this.winTime > 10000) {
              this.addPuddle();
            } //  el intervalo en el que aparecen mas charcos cada vez que los borras
          }
          return false
        } else return true
      })
    })
    this.player.heats.forEach((heat) => {//que el fuego con fuego lo aumente
      this.fires.forEach((fire) => {
        heat.collides(fire);
        if (heat.collides(fire)) {
          this.player.heats.splice(0, 1);
          fire.increase();
        }
      });
    });

    this.karens = this.karens.filter((karen) => {
      if (karen.collides(this.player)) {
        SPACE = 32;
        if (this.line.check == 1) {
          return false;
        }
      }
      return true;
    });
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
    this.rats.forEach((rat) =>{ 
      this.player.waters = this.player.waters.filter((water) =>{
        if (water.collides(rat)) {
          this.player.waters.splice(0, 1);
          rat.vx += 2;
          this.player.coolDownWater -= 100;
          return false
        } else return true
      })
    })
    this.rats.forEach((rat) =>{ 
      this.player.heats = this.player.heats.filter((heat) =>{
        if (heat.collides(rat)) {
          this.player.heats.splice(0, 1);
          rat.vx += 2;
          this.player.coolDownFire -= 100;
          console.log(this.player.coolDownFire)
          return false
        } else return true
      })
    })
    this.fats = this.fats.filter((fat) => {
      if (fat.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0;
      }
      return true;
    });
    this.life 
      if (this.healing.collides(this.player)) {
        this.player.healslow();
      }
    this.geese = this.geese.filter((goose) => {
      if (goose.collides(this.player)) {
        this.player.hit();
        this.player.hit();
        return false;
      }
      return true;
    });
    this.goose = new Goose(ctx); //que el fuego mate al agua

    this.geese.forEach((goose) =>{ 
      this.player.heats = this.player.heats.filter((heat) =>{
        if (heat.collides(goose)) {
          this.player.heats.splice(0, 1);
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
        } else return true
      })
    })
    this.geese.forEach((goose) =>{ 
      this.player.waters = this.player.waters.filter((water) =>{
        if (water.collides(goose)) {
          this.player.waters.splice(0, 1);
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
        } else return true
      })
    })
    this.babys = this.babys.filter((baby) => {
      if (baby.collides(this.player)) {
        this.player.heal();
        return false;
      }
      return true;
    });
    this.bosss = this.bosss.filter((boss) => {
      if (boss.collides(this.player)) {
        this.player.hit();
        this.player.hit();
        C = 0;
        V = 0;
        return false;
      }
      return true;
    });
    this.boss = new Boss(ctx); //impacto de agua a boss

    this.bosss.forEach((boss) =>{ 
      this.player.waters = this.player.waters.filter((water) =>{
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
          return false
        } else return true
      })
    })


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
        this.player.boost += 1;
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

    // evento que se dispara al perder toda la vida
    if (!this.player.isAlive()) {
      this.gameOver();
    }
    // evento que se dispara al perder todas las hojas de reclamaciones
    if (forms.length < 1) {
      this.gameOver();
    }
  }
  //Colisiones end

  gameOver() {
    this.stop();
    this.ctx.fillStyle = "red";
    ctx.font = "70px Verdana";
    this.ctx.fillText("YOU ARE DEAD", 300, 220);
    this.rats = [];
    this.fats = [];
    this.geese = [];
    this.babys = [];
    this.karens = [];
    this.fires = [];
    this.puddles = [];
    this.bosss = [];
    this.carts = [];
    this.dicounts = [];
  }
  gameWin() {
    this.stop();
    ctx.font = "70px Verdana";
    this.ctx.fillStyle = "blue";
    this.ctx.strokeText("YOU WON!!! CONGRATULATIONS!", 10, 220);
    this.ctx.fillText("YOU WON!!! CONGRATULATIONS!", 10, 220);
    this.rats = [];
    this.fats = [];
    this.geese = [];
    this.babys = [];
    this.karens = [];
    this.boss = [];
    this.carts = [];
    this.dicounts = [];
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
