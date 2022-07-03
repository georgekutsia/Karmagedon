class Game4 {
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

    this.karenTime = 0; //karen
    this.puddleTime = 0 ; //puddle
    this.gooseTime = 300; //goose
    this.winTime = 0;
    this.interval = null;

    this.karens = [];
    this.puddles = [];
    this.geese = [];
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
      this.gooseTime++;
      this.winTime++;
      this.checkCollisions();

      if(this.winTime >= 60500){
        this.gameWin()
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

      if (this.karenTime > Math.random() * 100 + 2000) {
        //karen  tarda mucho en salir pero luego sale cada 3000
        this.karenTime = 1000;
        this.karensAlert();
        this.addKaren();
        if(this.winTime >=20000){
          this.addGoose()
        }
      }
      if (this.puddleTime > Math.random() * 1000 + 700) {
        //puddle
        this.puddleTime = 0;
        this.waterAlert();
        this.addPuddle();
        this.addPuddle();
      }
      if (this.gooseTime > Math.random() * 100 + 400) {
        //goose
        this.gooseTime = 0;
        this.gooseAlert();
        this.addGoose();
        if(this.winTime >= 7000){
          this.gooseTime = 200;
          this.addGoose()
        }
        console.log(this.winTime)
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
    this.geese = this.geese.filter((e) => e.isVisible());
    this.puddles = this.puddles.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());

    if (this.karens.length <= 0) {
      const alert = document.getElementById("karens-alert");
      alert.style.display = "none";
    }
    if (this.geese.length <= 0) {
      const alert = document.getElementById("goose-alert");
      alert.style.display = "none";
    }
    if (this.puddles.length <= 0) {
      const alert = document.getElementById("water-alert");
      alert.style.display = "none";
    }
    if (
      this.puddles.length <= 0 &&
      this.geese.length <= 0 &&
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
    this.puddles.forEach((e) => e.draw());
    this.player.draw();
    this.walls.forEach((e) => e.draw());
    this.token.draw();
    this.karens.forEach((e) => e.draw());
    this.geese.forEach((e) => e.draw());

    this.line.draw();
    this.healing.draw();

  }
  move() {
    this.player.move();
    this.token.move();
    this.karens.forEach((e) => e.move());
    this.geese.forEach((e) => e.move());
    this.puddles.forEach((e) => e.move());
    this.line.move();
    this.healing.move();
  }
  addKaren() {
    const karen = new Karens(ctx);
    this.karens.push(karen);
    this.thisAudio = new Audio("/assets/audio/Karen.mp3");
    this.thisAudio.volume = 0.06;
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

  karensAlert() {
    const karensAlert = document.getElementById("karens-alert");
    karensAlert.style.display = "inline-flex";

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
            } //  el intervalo en el que aparecen mas charcos cada vez que los borras
          }
          return false;
        } else return true;
      });
    });

    this.player.waters.forEach((water) => {
      this.puddles.forEach((puddle) => { //que el agua con agua lo aumente
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

    this.karens = this.karens.filter((karen) => {
      if (karen.collides(this.player)) {
        if (this.line.check == 1) {
          return false;
        }
      }
      return true;
    });
    if (this.healing.collides(this.player) && this.winTime >= 550) {
      this.player.healslow();
    }
    this.geese = this.geese.filter((goose) => {
      if (goose.collides(this.player)) {
        this.player.hit();
        this.player.coolDownWater += 300;
        this.player.coolDownFire += 300;

        return false;
      }
      return true;
    });
    this.goose = new Goose(ctx); //que el fuego mate al agua
    this.geese.forEach((goose) => {
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(goose)) {
          this.player.heats.splice(0, 1);
          this.player.coolDownFire -= 300;
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
          this.player.coolDownFire -= 300;
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
    //fin de las colisiones

    // evento que se dispara al perder toda la vida, morir clientes y perder hjas de reclamaciones
    if (!this.player.isAlive() || this.score.score >= 10 || forms.length < 1) {
      this.gameOver();
    }
  }
  //Colisiones end

  gameOver() {
    this.stop();
    this.geese = [];
    this.karens = [];
    this.puddles = [];
    const lose = document.getElementById("lose");
    lose.style.display = "block"
    this.winMus = new Audio("/assets/audios ad/losemusic.mp3");
    this.winMus.volume = 0.1;
    this.winMus.play();
  }
  gameWin() {
    this.stop();
    this.geese = [];
    this.karens = [];
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
