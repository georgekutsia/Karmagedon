class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 85;
    this.y = 0;

    this.w = 35;
    this.h = 35;

    this.vx = 0;
    this.vy = 0;

    this.discount = 0;

    this.img = new Image();
    this.img.src = "/assets/images/PJ/MANAGER 1.png";
    this.img.frame = 0;

    this.bullet = 0;
    this.tick = 0;
    this.life = new Life(ctx);
    this.heats = [];
    this.waters = [];
    this.direction = "left";
  }

  draw() {
    formsCheck();
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frame * this.img.height) / 4,
      this.img.width,
      this.img.height / 4,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.heats.forEach((heat) => heat.draw());
    this.waters.forEach((water) => water.draw());
    this.life.draw();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.tick++;

    if ((this.tick > 15 && this.vx) || (this.tick > 15 && this.vy)) {
      this.img.frame++;
      this.tick = 0;
    }

    if (this.img.frame > 3) {
      this.img.frame = 0;
    }
    if (this.x < 10 && this.y < 10) {
      this.x = 1000;
      this.y = 200;
      C = 67;
      const forms1 = document.getElementById("forms1");
      forms5.style.display = "inline-block";
    }
    this.life.move();

    // LIMITES DEL CANVAS =>//
    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }

    if (this.y + this.h > this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.h;
      this.vy = 0;
    }

    if (this.x + this.w * 5 > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w * 5;
      this.vx = 0;
    }

    if (this.x < 0) {
      this.x = 0;
      this.vx = 0;
    }
    // LIMITES DEL CANVAS <=//
    this.heats.forEach((heat) => {
      heat.move();
    });
    this.waters.forEach((water) => {
      water.move();
    });
  }
  hit() {
    this.life.loseLife();
  }
  fireHit(){
    this.life.loseLifeFire();
  }

  isAlive() {
    return this.life.total > 0;
  }

  keyDown(key) {
    if (key === UP || key === W) {
      this.direction = "top";
      this.vy = -4;
      this.img.src = "/assets/images/PJ/MANAGER 1.png";
    }
    if (key === DOWN || key === S) {
      this.direction = "down";
      this.vy = 4;
      this.img.src = "/assets/images/PJ/MANAGER 3.png";
    }
    if (key === RIGHT || key === D) {
      this.direction = "right";
      this.vx = 4;
      this.img.src = "/assets/images/PJ/MANAGER 2.png";
    }
    if (key === LEFT || key === A) {
      this.direction = "left";
      this.vx = -4;
      this.img.src = "/assets/images/PJ/MANAGER 4.png";
    }
    if (key === Z) {
      this.heater();
      this.bullet++;
      if (this.bullet % 2 === 0) {
        Z = 0;
        setTimeout(function () {
          Z = 90;
        }, 2000);
      }
    }
    if (key === C) {
      this.heater();
      this.bullet++;
      if (this.bullet % 8 === 0) {
        C = 0;
        setTimeout(function () {
          C = 67;
        }, 2000);
      }
    }
    if (key === X) {
      this.waterer();
      this.bullet++;
      if (this.bullet % 2 === 0) {
        X = 0;
        setTimeout(function () {
          X = 88;
        }, 1000);
      }
    }
  }
  keyUp(key) {
    if (key === UP || key === W) {
      this.vy = 0;
    }
    if (key === DOWN || key === S) {
      this.vy = 0;
    }
    if (key === RIGHT || key === D) {
      this.vx = 0;
    }
    if (key === LEFT || key === A) {
      this.vx = 0;
    }
  }

  heater() {
    const heat = new Heat(
      this.ctx,
      this.x + this.w - 40,
      this.y + this.h - 40,
      this
    );
    if (this.direction === "right") {
      heat.vx = 1;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
    }
    if (this.direction === "left") {
      heat.vx = -1;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = -1;
      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = 1;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
    }
    this.heats.push(heat);
  }
  waterer() {
    const water = new Water(
      this.ctx,
      this.x + this.w - 40,
      this.y + this.h - 40,
      this
    );
    if (this.direction === "right") {
      water.vx = 2;
      water.vy = 0;
      water.w = 60;
    }
    if (this.direction === "left") {
      water.vx = -2;
      water.vy = 0;
      water.w = 60;
    }
    if (this.direction === "top") {
      water.vx = 0;
      water.vy = -2;
      water.h = 60;
    }
    if (this.direction === "down") {
      water.vx = 0;
      water.vy = 2;
      water.h = 60;
    }
    this.waters.push(water);
  }
}
