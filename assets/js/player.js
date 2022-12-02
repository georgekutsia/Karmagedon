class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 999;
    this.y = 280;
    this.w = 35;
    this.h = 35;
    this.extraBoost = 0
    this.booster = 0
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/assets/images/PJ/MANAGER 1.png";
    this.img.frame = 0;
    this.altTime = 0;
    this.goJump = ALT
    this.tick = 0;
    this.tock = 0;
    this.life = new Life(ctx);
    this.respect = new Respect(ctx)
    this.formins = new Formins(ctx)
    this.scoreback = new Scoreback(ctx)
    this.heats = [];
    this.auras = [];
    this.waters = [];
    this.blasters = [];
    this.sanders = [];
    this.direction = "left";
    this.speed = 4;
    this.cooldownBullet = 3000;
    this.cooldownJump = 3000;   
    this.cooldownJumpTick = 3000;   
    this.jumptimer = 20000; //quizás haga algo para disminuirlo o aumentar su distancia
  }
  drawOuch() {
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillRect(this.x - 42, this.y - 21, 135, 22);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.fillStyle = "black";
    this.order = this.ctx.fillText("Ouch! Cactus!", this.x - 30, this.y - 3);
    this.ctx.restore();
  }
  drawFire() {
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillRect(this.x - 10, this.y - 21, 75, 22);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.fillStyle = "black";
    this.order = this.ctx.fillText("It burns!", this.x - 5, this.y - 3);
    this.ctx.restore();
  }
  drawWater() {
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillRect(this.x - 10, this.y - 21, 90, 22);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.fillStyle = "black";
    this.order = this.ctx.fillText("I'll drown!", this.x - 5, this.y - 3);
    this.ctx.restore();
  }
  drawSorry() {
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillRect(this.x - 42, this.y - 21, 135, 22);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.fillStyle = "black";
    this.order = this.ctx.fillText("Sorry! Sorry!", this.x - 30, this.y - 3);
    this.ctx.restore();
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
    this.sanders.forEach((sand) => sand.draw());
    this.waters.forEach((water) => water.draw());
    this.auras.forEach((aura) => aura.draw());
    this.blasters.forEach((blaster) => blaster.draw());
    this.life.draw();
    this.respect.draw();
    this.formins.draw();
    this.scoreback.draw();
    this.ctx.fillStyle = "lightsalmon";
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
    this.life.move();
    this.respect.move()
    this.formins.move()
    this.scoreback.move()
    if(ALT === 16){
      this.ctx.font = "24px Arial";
      this.ctx.save();
      this.ctx.fillStyle = "cadetblue";
      ctx.fillRect(885, 552, 110, 25);
      this.ctx.fillStyle = "black";
      this.ctx.fillText(`Jump on`, 890, 572);
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.restore();
    }
    // LIMITES DEL CANVAS =>//
    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }
    if (this.y + this.h > this.ctx.canvas.height - 95) {
      this.y = this.ctx.canvas.height - this.h - 95;
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
    this.blasters.forEach((blaster) => {
      blaster.move();
    });
    this.heats.forEach((heat) => {
      heat.move();
    });
    this.sanders.forEach((sand) => {
      sand.move();
    });
    this.waters.forEach((water) => {
      water.move();
    });
    this.auras.forEach((aura) => {
      aura.move();
      this.healslow()
      this.hefa()
    });
  }

  loseRespect(){
    this.respect.loseRespect();
  }
  loseBigRespect(){
    this.respect.loseBigRespect();
  }
  getRespect(){
    this.respect.getRespect();
  }
  getBigRespect(){
    this.respect.getBigRespect();
  }
  getSmallRespect(){
    this.respect.getSmallRespect();
  }

  hit() {
    this.life.loseLife();
  }
  wallHit() {
    this.life.loseLifeSlow();
  }
  heal() {
    this.life.gainLife();
  }
  healslow() {
    this.life.healSlow();
  }
  fireHit() {
    this.life.loseLifeFire();
  }

  isAlive() {
    return this.life.total > 0;
  }
  isRespected() {
    return this.respect.total > 0;
  }

  jump() {
    if (this.direction === "top") {
      this.y -= distance;
    }
    if (this.direction === "down") {
      this.y += distance;
    }
    if (this.direction === "left") {
      this.x -= distance;
    }
    if (this.direction === "right") {
      this.x += distance;
    }
  }
      
    keyDown(key) {
    this.boost = 4 + this.booster + this.extraBoost;
    if (key === UP || key === W) {
      this.direction = "top";
      this.vy = - this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 1.png";
    }
    if (key === DOWN || key === S) {
      this.direction = "down";
      this.vy =  this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 3.png";
    }
    if (key === RIGHT || key === D) {
      this.direction = "right";
      this.vx = this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 2.png";
    }
    if (key === LEFT || key === A) {
      this.direction = "left";
      this.vx = - this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 4.png";
    }
    if (key === C) {
      this.tick++

      if(this.tick >= 10){
      this.heaterExtra();
      this.heaterPlus();
      this.tick = 0
      }
    }
      if (key === V) {
      this.tick++
      if(this.tick >= 10){

        this.watererExtraPlus();
        this.watererPlus();
        this.watererPlusExtra();
        this.tick = 0
      }
      }
  }
  keyUp(key) {
    if (key === UP || key === W) { this.vy = 0;}
    if (key === DOWN || key === S) {this.vy = 0;}
    if (key === RIGHT || key === D) {this.vx = 0;}
    if (key === LEFT || key === A) {this.vx = 0;}


    if (key === M) {
      this.megablaster();
      M = 0
    }
    if (key === Z) {
      this.heater();
      setTimeout(function () {
        Z = 0;
      }, 400);
      setTimeout(function () {
        Z = 90;
      }, this.cooldownBullet);
    }
    if (key === N) {
      this.aurar();
      N = 0;
    }
    if (key === B) {
      this.sander();
        B = 0;
        setTimeout(function () {
        B = 66;
      }, 20000);
    }
    if (key === X) {
      this.waterer();
      setTimeout(function () {
        X = 0;
      }, 400);
      setTimeout(function () {
        X = 88;
      }, this.cooldownBullet);
    }
    if (key === ALT) {
      this.jump();
      setTimeout(function () {
        ALT = 0;
      }, 20);
      setTimeout(function () {
        ALT = 16;
      }, this.cooldownJump);
    }
  }

  aurar() {
    const aura = new Aura(
      this.ctx,
      this.x + this.w - 40,
      this.y + this.h - 40,
      this
    );
    aura.auraImg.src = "/assets/images/munición/aura1.png";
    this.auras.push(aura);
  }



  megablaster() {
    const blaster = new Megablaster(
      this.ctx,
      this.x +10,
      this.y - 20,
      this
    );
    if (this.direction === "right") {
      blaster.vx += 0.5;
      blaster.vy = 0;
      setTimeout(function(){
        blaster.vx += 3
      }, 3000)
      setTimeout(function(){
        blaster.vx -= 8
      blaster.blasterImg.src = "/assets/images/munición/SandLeft.png";
      }, 5200)
      blaster.blasterImg.src = "/assets/images/munición/SandRight.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      blaster.vx -= 0.5;
      blaster.vy = 0;
      setTimeout(function(){
        blaster.vx -= 3
      }, 3000)
      setTimeout(function(){
        blaster.vx += 8
      blaster.blasterImg.src = "/assets/images/munición/SandRight.png";
      }, 5200)
      blaster.blasterImg.src = "/assets/images/munición/SandLeft.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      blaster.vx = 0;
      blaster.vy -= 0.5;
      setTimeout(function(){
        blaster.vy -= 3
      }, 3000)
      setTimeout(function(){
        blaster.vy += 8
      blaster.blasterImg.src = "/assets/images/munición/SandDown.png";
      }, 5200)
      blaster.blasterImg.src = "/assets/images/munición/SandUp.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      blaster.vx = 0;
      blaster.vy += 0.5;
      setTimeout(function(){
        blaster.vy += 3
      }, 3000)
      setTimeout(function(){
        blaster.vy -= 8
      blaster.blasterImg.src = "/assets/images/munición/sandup.png";
      }, 5200)
      blaster.blasterImg.src = "/assets/images/munición/SandDown.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }
    this.blasters.push(blaster);
  }
  sander() {
    const sand = new Sandstorm(
      this.ctx,
      this.x + 8,
      this.y + 8,
      this
    );
    this.sanders.push(sand);
  }


  heater() {
    const heat = new Heat(
      this.ctx,
      this.x + 8,
      this.y + 8,
      this
    );
    if (this.direction === "right") {
      heat.vx = this.speed;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = -this.speed;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = -this.speed;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = this.speed;
      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }
    if (this.cooldownBullet <= 600) {
      this.cooldownBullet = 600;
    }
    this.heats.push(heat);
  }
  heaterExtra() {
    const heat = new Heat(
      this.ctx,
      this.x + 8,
      this.y + 8,
      this
    );
    if (this.direction === "right") {
      heat.vx = this.speed;
      heat.vy = 0;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = -this.speed;
      heat.vy = 0;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = -this.speed;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = this.speed;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }
    if (this.cooldownBullet <= 600) {
      this.cooldownBullet = 600;
    }
    this.heats.push(heat);
  }
  heaterPlus() {
    const heat = new Heat(
      this.ctx,
      this.x + 8,
      this.y + 8,
      this
    );
    if (this.direction === "right") {
      heat.vx = -this.speed;
      heat.vy = 0;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = this.speed;
      heat.vy = 0;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = this.speed;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = -this.speed;
      heat.bla = bulletDistanceExtra - 60
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }
    this.heats.push(heat);
  }






  waterer() {
    const water = new Water(
      this.ctx,
      this.x + 1,
      this.y + 8,
      this
    );
    if (this.direction === "right") {
      water.vx = this.speed;
      water.vy = 0;
      water.w = 60;
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -this.speed;
      water.vy = 0;
      water.w = 60;
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = 0;
      water.vy = -this.speed;
      water.h = 60;
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = 0;
      water.vy = this.speed;
      water.h = 60;
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }
    if (this.cooldownBullet <= 600) {
      this.cooldownBullet = 600;
    }
    this.waters.push(water);
  }







  watererPlus() {
    const water = new Water(
      this.ctx,
      this.x + 8,
      this.y + 8,
      this
    );
    if (this.direction === "right") {
      water.vx = 4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.w = 60;
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.w = 60;
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = -4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.h = 60;
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = 4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.h = 60;
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }
    this.waters.push(water);
  }
  watererPlusExtra() {
    const water = new Water(
      this.ctx,
      this.x + 8,
      this.y + 8,
      this,
    );
    if (this.direction === "right") {
      water.vx = 4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra

      water.w = 60;
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra

      water.w = 60;
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = 4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      
      water.h = 60;
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = -4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra

      water.h = 60;
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }
    this.waters.push(water);
  }
  watererExtraPlus() {
  const water = new Water(
    this.ctx,
    this.x + 1,
    this.y + 8,
    this
  );
  if (this.direction === "right") {
    water.vx = 6.5;
    water.vy = 0;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra
    water.w = 60;
    this.img.src = "/assets/images/PJ/imright.png";
    this.img.frame++;
  }
  if (this.direction === "left") {
    water.vx = -6.5;
    water.vy = 0;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra

    water.w = 60;
    this.img.src = "/assets/images/PJ/imleft.png";
    this.img.frame++;
  }
  if (this.direction === "top") {
    water.vx = 0;
    water.vy = -6.5;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra

    water.h = 60;
    this.img.src = "/assets/images/PJ/imup.png";
    this.img.frame++;
  }
  if (this.direction === "down") {
    water.vx = 0;
    water.vy = 6.5;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra
    water.h = 60;
    this.img.src = "/assets/images/PJ/imdown.png";
    this.img.frame++;
  }
  if (this.cooldownBullet <= 600) {
    this.cooldownBullet = 600;
  }
  this.waters.push(water);
}
}
