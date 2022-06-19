class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 999;
    this.y = 280;

    this.w = 35;
    this.h = 35;
    this.boost = 0;
    this.vx = 0;
    this.vy = 0;

    this.discount = 0;

    this.img = new Image();
    this.img.src = "/assets/images/PJ/MANAGER 1.png";
    this.img.frame = 0;


    this.bheat = 0;
    this.bheatplus = 0;
    this.bwater = 0;
    this.bwaterplus = 0;
    this.altTime = 0;

    this.tick = 0;
    this.life = new Life(ctx);
    this.heats = [];
    this.waters = [];
    this.direction = "left";
    this.coolDownFire = 2000;
    this.coolDownWater = 2000;
    this.jumptimer = 20000; //quizás haga algo para disminuirlo o aumentar su distancia
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
    if ((this.tick > 10 && this.vx) || (this.tick > 10 && this.vy)) {
      this.img.frame++;
      this.tick = 0;
    }

    if (this.img.frame > 3) {
      this.img.frame = 0;
    }
    if (this.life.total <= 0.4) {
      C = 67;
      V = 86;
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

    if (this.x + this.w * 6 > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w * 6;
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
  heal() {
    this.life.gainLife();
  }
  healslow(){
    this.life.healSlow();
  }
  fireHit(){
    this.life.loseLifeFire();
  }

  isAlive() {
    return this.life.total > 0;
  }


  jump(){
    if(this.direction === "top"){
      this.y -= distance;
    }
    if(this.direction === "down"){
      this.y += distance;
    }
    if(this.direction === "left"){
      this.x -= distance;
    }
    if(this.direction === "right"){
      this.x += distance; 
    }
  }

  keyDown(key) {
    if (key === UP || key === W) {
      this.direction = "top";
      this.vy = -4 - this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 1.png";
    }
    if (key === DOWN || key === S) {
      this.direction = "down";
      this.vy = 4 + this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 3.png";
    }
    if (key === RIGHT || key === D) {
      this.direction = "right";
      this.vx = 4 + this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 2.png";
    }
    if (key === LEFT || key === A) {
      this.direction = "left";
      this.vx = -4 - this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 4.png";
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

     //
//        shoooooooooooots
    //
    if (key === Z) {
      this.heater();
      this.bheat++;
      if (this.bheat % 5 === 0) {
        Z = 0;
        setTimeout(function () {
          Z = 90;
        }, this.coolDownFire);
      }
    }

    if (key === X) {
      this.waterer();
      this.bwater++;
      if (this.bwater >= 5) {
        this.bwater = 0;
        X = 0;
        setTimeout(function () {
          X = 88;
        }, this.coolDownWater);
      }
    }    
    if (key === C) {
      this.heater();
      this.heaterPlus();
      this.bheatplus++;
      if (this.bheatplus >= 6) {
        this.bheatplus = 0;
        C = 0;
        setTimeout(function () {
          C = 67;
        }, 2000);
      }
    }
    if (key === V) {
      this.waterer();
      this.watererPlus();
      this.bwaterplus++;
      if (this.bwaterplus >= 5) {
        this.bwaterplus = 0;
        V = 0;
        setTimeout(function () {
          V = 86;
        }, 2000);
      }
    }
    if (key === ALT) {
      this.jump();
      ALT = 0
      setTimeout(function () {
        ALT = 16;
      }, 2000);
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
      heat.vx = 5;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++
    }
    if (this.direction === "left") {
      heat.vx = -5;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = -5;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++
    }
    if (this.direction === "down") {
      heat.vx = 0;  
      heat.vy = 5;
      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++
      
    }
    this.heats.push(heat);
  }
  heaterPlus() {
    const heat = new Heat(
      this.ctx,
      this.x + this.w - 40,
      this.y + this.h - 40,
      this
    );
    if (this.direction === "right") {
      heat.vx = -5;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++
    }
    if (this.direction === "left") {
      heat.vx = 5;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = 5;
      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = -5;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++
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
      water.vx = 4;
      water.vy = 0;
      water.w = 60;
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = 0;
      water.w = 60;
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++
    }
    if (this.direction === "top") {
      water.vx = 0;
      water.vy = -4;
      water.h = 60;
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++
    }
    if (this.direction === "down") {
      water.vx = 0;
      water.vy = 4;
      water.h = 60;
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++
    }
    this.waters.push(water);
  }
  watererPlus() {
    const water = new Water(
      this.ctx,
      this.x + this.w - 40,
      this.y + this.h - 40,
      this
    );
    if (this.direction === "right") {
      water.vx = 0;
      water.vy = 4;
      water.w = 60;
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++
    }
    if (this.direction === "left") {
      water.vx = 0;
      water.vy = -4;
      water.w = 60;
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++
    }
    if (this.direction === "top") {
      water.vx = -4;
      water.vy = 0;
      water.h = 60;
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++
    }
    if (this.direction === "down") {
      water.vx = 4;
      water.vy = 0;
      water.h = 60;
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++
    }
    this.waters.push(water);
  }
}
