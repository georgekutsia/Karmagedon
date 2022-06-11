class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.player = new Player(ctx);
    this.token = new Token(ctx);
    this.line = new Line(ctx);
  
    this.walls = [
      new Wall(ctx, 60, 50, 30, 70),
      new Wall(ctx, 60, 110, 30, 70),
      new Wall(ctx, 60, 170, 30, 70),

      new Wall(ctx, 285, 170, 30, 70),
      new Wall(ctx, 175, 130, 70, 30),
      new Wall(ctx, 285, 50, 30, 70),

      new Wall(ctx, 380, 170, 30, 70),
      new Wall(ctx, 380, 110, 30, 70),
      new Wall(ctx, 380, 50, 30, 70),

      new Wall(ctx, 610, 170, 30, 70),
      new Wall(ctx, 610, 110, 30, 70),
      new Wall(ctx, 610, 50, 30, 70),

      new Wall(ctx, 700, 50, 30, 70),
      new Wall(ctx, 700, 110, 30, 70),
      new Wall(ctx, 700, 170, 30, 70),

      new Wall(ctx, 925, 50, 30, 70),
      new Wall(ctx, 925, 110, 30, 70),
      new Wall(ctx, 925, 170, 30, 70),

      new Wall(ctx, 90, 50, 50, 30),
      new Wall(ctx, 240, 50, 50, 30),
      new Wall(ctx, 410, 205, 50, 30),
      new Wall(ctx, 560, 205, 50, 30),
      new Wall(ctx, 490, 130, 30, 50),
      new Wall(ctx, 490, 80, 30, 50),
      new Wall(ctx, 730, 50, 50, 30),
      new Wall(ctx, 870, 50, 50, 30),

      new Wall(ctx, 60, 320, 30, 70),
      new Wall(ctx, 60, 380, 30, 70),
      new Wall(ctx, 60, 440, 30, 70),

      new Wall(ctx, 285, 320, 30, 70),
      new Wall(ctx, 285, 380, 30, 70),
      new Wall(ctx, 285, 440, 30, 70),

      new Wall(ctx, 380, 320, 30, 70),
      new Wall(ctx, 380, 380, 30, 70),
      new Wall(ctx, 380, 440, 30, 70),

      new Wall(ctx, 610, 320, 30, 70),
      new Wall(ctx, 610, 380, 30, 70),
      new Wall(ctx, 610, 440, 30, 70),

      new Wall(ctx, 700, 320, 30, 70),
      new Wall(ctx, 700, 380, 30, 70),
      new Wall(ctx, 700, 440, 30, 70),

      new Wall(ctx, 925, 320, 30, 70),
      new Wall(ctx, 925, 380, 30, 70),
      new Wall(ctx, 925, 440, 30, 70),

      new Wall(ctx, 90, 320, 50, 30),
      new Wall(ctx, 240, 320, 50, 30),
      new Wall(ctx, 90, 480, 50, 30),
      new Wall(ctx, 240, 480, 50, 30),

      new Wall(ctx, 410, 320, 50, 30),
      new Wall(ctx, 560, 320, 50, 30),
      new Wall(ctx, 465, 450, 50, 30),
      new Wall(ctx, 500, 450, 50, 30),

      new Wall(ctx, 880, 320, 50, 30),
      new Wall(ctx, 830, 320, 50, 30),
      new Wall(ctx, 730, 480, 50, 30),
      new Wall(ctx, 780, 480, 50, 30),
    ];

    this.tack = 0; //karen
    this.tick = 0; // rat
    this.tock = 0; //fat
    this.tuck = 500; //puddle
    this.teck = 500; //fire
    this.crazyTime = 0; //crazy
    this.babyTime = 0; //baby
    this.bossTime = 0;//boss
    this.winTime = 0;
    this.interval = null;

    
    this.karens = [];
    this.rats = [];
    this.babys = [];
    this.fats = [];
    this.puddles = [];
    this.fires = [];
    this.crazys = [];
    this.bosss = [];
    this.setListeners();

    this.musicStart = new Audio("/assets/audio/valse.mp3");
    this.musicStart.volume = 0.1;
    this.musicStart.loop = true;
  }
  start() {
    this.musicStart.play();
    myFunction();
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.tack++; //karen
      this.tick++; //rat
      this.tock++; //fat
      this.tuck++; //puddle
      this.teck++;
      this.crazyTime++;
      this.babyTime++;
      this.bossTime++;
      this.winTime++;

      this.checkCollisions();
      if (this.winTime > 9000) {
        this.gameWin();
      }
      if (this.tack > Math.random() * 100 + 3000) {
        //karen
        this.tack = 0;
        this.karensAlert();
        this.addKarens();
      }
      if (this.tick > Math.random() * 200 + 100) {
        //rat
        this.tick = 0;
        this.ratAlert();
        this.addRats();
      }
      if (this.tock > Math.random() * 100 + 18300) {
        //fat
        this.tock = 0;
        this.fatAlert();
        this.addFat();
      }
      if (this.tuck > Math.random() * 100 + 540) {
        //puddle
        this.tuck = 0;
        this.waterAlert();
        this.addPuddle();
        this.puddleBeginAudio = new Audio("/assets/audio/puddleBegin.mp3")
        this.puddleBeginAudio.volume = 0.2;
        this.puddleBeginAudio.play();
      }
      if (this.teck > Math.random() * 100 + 540) {
        //fire
        this.teck = 0;
        this.fireAlert();
        this.addFire();
        this.puddleBeginAudio = new Audio("/assets/audio/fireBegin.wav")
        this.puddleBeginAudio.volume = 0.2;
        this.puddleBeginAudio.play();
      }
      if (this.crazyTime > Math.random() * 200 + 3000) {
        //crazy
        this.crazyTime = 0;
        this.crazyAlert();
        this.addCrazy();
      }
      if (this.babyTime > Math.random() * 100 + 1040) {
        //baby
        this.babyTime = 0;
        this.babyAlert();
        this.addBaby();
      }
      if (this.bossTime > Math.random() * 100 + 4440) {
        //boss
        this.bossTime = 0;
        this.bossAlert();
        this.addBoss();
      }
    }, 1000 / 60);
  }
  stop() {
    this.musicStart.pause();
    console.log("")
    clearInterval(this.interval);
    this.interval = null;
    clearInterval(window.timerInterval);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.karens = this.karens.filter((e) => e.isVisible());
    this.rats = this.rats.filter((e) => e.isVisible());
    this.fats = this.fats.filter((e) => e.isVisible());
    this.crazys = this.crazys.filter((e) => e.isVisible());
    this.babys = this.babys.filter((e) => e.isVisible());
    this.bosss = this.bosss.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());
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
    this.crazys.forEach((e) => e.draw());
    this.babys.forEach((e) => e.draw());
    this.line.draw();
  }
  move() {
    this.player.move();
    this.token.move();
    this.karens.forEach((e) => e.move());
    this.rats.forEach((e) => e.move());
    this.fats.forEach((e) => e.move());
    this.crazys.forEach((e) => e.move());
    this.babys.forEach((e) => e.move());
    this.bosss.forEach((e) => e.move(this.player));
    this.puddles.forEach((e) => e.move());
    this.fires.forEach((e) => e.move());
    this.line.move();


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
  addCrazy() {
    const crazys = new Crazy(this.ctx);
    this.crazys.push(crazys);
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
    const nothingToWorrie = document.getElementById("ok");
    nothingToWorrie.style.display = "none";
    const statusOk = document.getElementById("status");
    statusOk.style.backgroundColor = "rgb(252, 5, 5)";
    statusOk.style.color = "white";
  }
  crazyAlert() {
    const crazyAlert = document.getElementById("crazy-alert");
    crazyAlert.style.display = "inline-flex";
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
            this.puddles.splice(0, 1);
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
            this.fires.splice(0, 1);
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

    this.rats = this.rats.filter((rat) => {
      if (rat.collides(this.player)) {
        this.player.hit();
        this.player.vy = -1;
        this.player.vx = -1;
        return false;
      }
      return true;
    });
     this.rats.forEach((rat) =>{ 
      this.player.heats = this.player.heats.filter((heat) =>{
        if (heat.collides(rat)) {
          this.player.heats.splice(0, 1);
            this.rats.splice(0, 1);
            const waterAlert = document.getElementById("rat-alert");
            waterAlert.style.display = "none";
          
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
    this.crazys = this.crazys.filter((crazy) => {
      if (crazy.collides(this.player)) {
        this.player.hit();
        this.player.hit();
        return false;
      }
      return true;
    });
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
        this.player.x = 0;
        this.player.x = 0;
        C = 0;
        V = 0;
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
    this.crazys = [];
    this.babys = [];
    this.karens = [];
    this.fires = [];
    this.puddles = [];
    this.bosss = [];
  }
  gameWin() {
    this.stop();
    ctx.font = "70px Verdana";
    this.ctx.fillStyle = "blue";
    this.ctx.strokeText("YOU WON!!! CONGRATULATIONS!", 10, 220);
    this.ctx.fillText("YOU WON!!! CONGRATULATIONS!", 10, 220);
    this.rats = [];
    this.fats = [];
    this.crazys = [];
    this.babys = [];
    this.karens = [];
    this.boss = [];
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
