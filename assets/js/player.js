class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 999;
    this.y = 280;
    this.w = 35;
    this.h = 35;
    this.extraBoost = 0
    this.booster = 0
    this.boost = 4
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/assets/images/PJ/MANAGER 1.png";
    this.imgJump = new Image()
    this.imgJump.src = "/assets/images/jumps/jumpup1.png"
    this.imgFire = new Image()
    this.imgFire.src = "/assets/images/elements/fireball.png"
    this.imgWater = new Image()
    this.imgWater.src = "/assets/images/elements/waterball.png"
    this.imgSand = new Image()
    this.imgSand.src = "/assets/images/elements/sandball.png"
    this.imgQ = new Image()
    this.imgQ.src = "/assets/images/elements/dodgeq.png"
    this.imgE = new Image()
    this.imgE.src = "/assets/images/elements/dodgee.png"
    this.ctx.font = "20px Arial";
    this.img.frame = 0;
    this.tick = 0;
    this.tock = 0;
    this.truck = 0;
    this.life = new Life(ctx);
    this.respect = new Respect(ctx)
    this.formins = new Formins(ctx)
    this.scoreback = new Scoreback(ctx)
    this.score = new Score(ctx)
    this.heats = [];
    this.hooks = [];
    this.auras = [];
    this.waters = [];
    this.blasters = [];
    this.sanders = [];
    this.toxics = [];
    this.discountings = []
    this.direction = "left";
    this.speed = 4;
    this.cooldownBullet = 3000;
    this.cooldownJump = 3000;   
    this.cooldownJumpTick = 3000;   
    this.jumptimer = 20000; //quizás haga ala para disminuirlo o aumentar su distancia
    this.toxicity = false
    this.sandstate = false
    this.sandAlterImg = ""
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

      // console.log("x",this.x)
      // console.log("y",this.y)
    if(this.y + this.h > this.ctx.canvas.height -100 && this.x + this.w > this.ctx.canvas.width - 520 &&this.x + this.w < this.ctx.canvas.width - 470){
      ctx.fillRect(this.x - 11, this.y - 41, 70, 22);
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "black";
      this.order = this.ctx.fillText("Closed", this.x - 10, this.y - 23);
    }
    if(this.y + this.h > this.ctx.canvas.height -100 && this.x + this.w > this.ctx.canvas.width - 860 &&this.x + this.w < this.ctx.canvas.width - 800){
      ctx.fillRect(this.x - 11, this.y - 41, 70, 22);
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "black";
      this.order = this.ctx.fillText("Closed", this.x - 10, this.y - 23);
    }
    if(ALT === 16){
      this.ctx.drawImage(
        this.imgJump, this.x + 5, this.y - 20, this.w -10, this.h-10
      )
    }
    if(Q === 81){
      this.ctx.drawImage(
        this.imgQ, this.x - 5, this.y - 20, this.w -25, this.h - 15 
      )
    }
    if(E === 69){
      this.ctx.drawImage(
        this.imgE, this.x + 31, this.y - 20, this.w -25, this.h - 15 
      )
    }
    if(Z === 90){
      this.ctx.drawImage(
        this.imgFire, this.x - 15, this.y + 10, this.w - 20, this.h - 20
      )
    }
    if(X === 88){
      this.ctx.drawImage(
        this.imgWater, this.x + 35, this.y + 10, this.w - 19, this.h - 19
      )
    }
    if(N === 78){
      this.ctx.drawImage(
        this.imgSand, this.x + 10, this.y + 38, this.w - 22, this.h - 22
      )
    }

    this.heats.forEach((heat) => heat.draw());
    this.hooks.forEach((hook) => hook.draw());
    this.sanders.forEach((sand) => sand.draw());
    this.toxics.forEach((tox) => tox.draw());
    this.discountings.forEach((disc) => disc.draw());
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
    if(this.toxicity ===true && this.tick % 5 === 0){
      this.toxicar()
    }
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
    // LIMITES DEL CANVAS =>//
    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }
    if (this.y + this.h > this.ctx.canvas.height - 80) {
      this.y = this.ctx.canvas.height - this.h - 80;
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
    this.hooks.forEach((hook) => {
      hook.move();
    });
    this.sanders.forEach((sand) => {
      sand.move();
    });
    this.toxics.forEach((tox) => {
      tox.move();
    });
    this.discountings.forEach((discount) => {
      discount.move();
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
  loseCustomerRespect(){
    this.respect.loseCustomerRespect()
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
  getSmallestRespect(){
    this.respect.getSmallestRespect();
  }
  hit() {
    this.life.loseLife();
  }
  heal() {
    this.life.gainLife();
  }
  healslow() {
    this.life.healSlow();
  }
  healslower() {
    this.life.healslower();
  }
  dieSlower() {
    this.life.dieSlower();
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
  dodgeq() {
    if (this.direction === "top") {
      this.x = this.x - distance 
    }
    if (this.direction === "down") {
      this.x = this.x +  distance;;
    }
    if (this.direction === "left") {
      this.y = this.y +  distance;;
    }
    if (this.direction === "right") {
      this.y = this.y -  distance;;
    }
  }
  dodgee() {
    if (this.direction === "top") {
      this.x = this.x +  distance
    }
    if (this.direction === "down") {
      this.x = this.x -  distance;;
    }
    if (this.direction === "left") {
      this.y = this.y -  distance;;
    }
    if (this.direction === "right") {
      this.y = this.y +  distance;;
    }
  }
    keyDown(key) {
    this.boost = 4 + this.booster + this.extraBoost;
    if (key === UP || key === W) {
      this.direction = "top";
      this.vy = - this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 1.png";
      if(distance <= 60){
        this.imgJump.src = "/assets/images/jumps/jumpup1.png"
      } else if( distance >= 70 && distance <= 85){
        this.imgJump.src = "/assets/images/jumps/jumpup2.png"
      } else if(distance >= 90 && distance <= 105){
        this.imgJump.src = "/assets/images/jumps/jumpup3.png"
      } else if(distance >= 110 && distance <= 125){
        this.imgJump.src = "/assets/images/jumps/jumpup4.png"
      } else if(distance >= 130){
        this.imgJump.src = "/assets/images/jumps/jumpup5.png"
      }
    }
    if (key === DOWN || key === S) {
      this.direction = "down";
      this.vy =  this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 3.png";
      if(distance <= 60){
        this.imgJump.src = "/assets/images/jumps/jumpdown1.png"
      } else if( distance >= 70 && distance <= 85){
        this.imgJump.src = "/assets/images/jumps/jumpdown2.png"
      } else if(distance >= 90 && distance <= 105){
        this.imgJump.src = "/assets/images/jumps/jumpdown3.png"
      } else if(distance >= 110 && distance <= 125){
        this.imgJump.src = "/assets/images/jumps/jumpdown4.png"
      } else if(distance >= 130){
        this.imgJump.src = "/assets/images/jumps/jumpdown5.png"
      }
    }
    if (key === RIGHT || key === D) {
      this.direction = "right";
      this.vx = this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 2.png";
      if(distance <= 60){
        this.imgJump.src = "/assets/images/jumps/jumpright1.png"
      } else if( distance >= 70 && distance <= 85){
        this.imgJump.src = "/assets/images/jumps/jumpright2.png"
      } else if(distance >= 90 && distance <= 105){
        this.imgJump.src = "/assets/images/jumps/jumpright3.png"
      } else if(distance >= 110 && distance <= 125){
        this.imgJump.src = "/assets/images/jumps/jumpright4.png"
      } else if(distance >= 130){
        this.imgJump.src = "/assets/images/jumps/jumpright5.png"
      }
    }
    if (key === LEFT || key === A) {
      this.direction = "left";
      this.vx = - this.boost;
      this.img.src = "/assets/images/PJ/MANAGER 4.png";
      if(distance <= 60){
        this.imgJump.src = "/assets/images/jumps/jumpleft1.png"
      } else if( distance >= 70 && distance <= 85){
        this.imgJump.src = "/assets/images/jumps/jumpleft2.png"
      } else if(distance >= 90 && distance <= 105){
        this.imgJump.src = "/assets/images/jumps/jumpleft3.png"
      } else if(distance >= 110 && distance <= 125){
        this.imgJump.src = "/assets/images/jumps/jumpleft4.png"
      } else if(distance >= 130){
        this.imgJump.src = "/assets/images/jumps/jumpleft5.png"
      }
    }
    if (key === C) {
      this.tick++
      this.tock ++
      if(this.tick >= 10){
      this.heaterExtra();
      this.heaterPlus();
      this.tick = 0
      if(this.tock >= 100){
          C = 0
        }
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
      if (key === P) {
        this.toxicity = !this.toxicity
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
    if (key === R) {
      this.discounting();
      this.discounting1();
      this.discounting2();
      this.discounting3();
      discounting -= 1
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
    if (key === T) {
      this.aurar();
      T = 0;
    }
    if (key === N) {
      this.sander();
        N = 0;
        setTimeout(function () {
        N = 78;
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
    if (key === B) {
      if(hookCount >= 1){
        this.hooker();
          B = 0;
        hookCount -= 1
        setTimeout(function () {
          B = 66;
        }, this.cooldownBullet/4);
      }
    }
    if (key === ALT) {
      if(Z == 0, X == 0, N == 0, Q == 0, E == 0 && this.life.total <=3){
        this.discounting()
        this.discounting1()
        this.discounting2()
        this.discounting3()
        this.megablast1()
        this.megablast2()
        this.megablast3()
        this.megablast4()
      }
      this.jump();
        ALT = 0;
      setTimeout(function () {
        ALT = 16;
      }, this.cooldownJump);
    }
    if (key === Q) {
      this.dodgeq();
        Q = 0;
      setTimeout(function () {
        Q = 81;
      }, this.cooldownJump + 1000);
    }
    if (key === E) {
      this.dodgee();
        E = 0;
      setTimeout(function () {
        E = 69;
      }, this.cooldownJump + 1000);
    }
    if( Z == 0 && X == 0){
      Y = 89
      if(key === Y){
        U = 85 
        }
      }
      if(key === U){
        I = 73
      }
      if(key === I){
        hookCount += 10
        discounting += 50
        M = 77
        P = 80
        // this.score.addTotalScore()
      }
      if(key === Y){
        if(I = 73){
          this.life.total -= 2
          this.respect.total -= 0.2
        }
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
  // totalizacion(){
  //   this.score.addTotalScore()
  // }
  discounting() {
    const discount = new Discounting(
      this.ctx,
      this.x + 10,
      this.y - 20,
      this
    );
    discount.vx = 2
    discount.vy = 2

    this.discountings.push(discount);
  }
  discounting1() {
    const discount = new Discounting(
      this.ctx,
      this.x + 10,
      this.y - 20,
      this
    );
    discount.vx = 2
    discount.vy = -2

    this.discountings.push(discount);
  }
  discounting2() {
    const discount = new Discounting(
      this.ctx,
      this.x + 10,
      this.y - 20,
      this
    );
    discount.vx = -2
    discount.vy = 2

    this.discountings.push(discount);
  }
  discounting3() {
    const discount = new Discounting(
      this.ctx,
      this.x + 10,
      this.y - 20,
      this
    );
    discount.vx = -2
    discount.vy = -2
    this.discountings.push(discount);
  }
    megablast1(){
      const blaster = new Megablaster(
        this.ctx,
        this.x + 10,
        this.y - 20,
        this
        );
        blaster.framer = 12
        blaster.vx += 0.5;
        blaster.vy = 0;
        setTimeout(function(){
          blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
          blaster.vx += 3
        }, 3000)
        setTimeout(function(){
          blaster.vx -= 8
        blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
        }, 5200)
        blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
    this.blasters.push(blaster);
    }
    megablast2(){
      const blaster = new Megablaster(
        this.ctx,
        this.x + 10,
        this.y - 20,
        this
      );
      blaster.framer = 12
      blaster.vx -= 0.5;
      blaster.vy = 0;
      setTimeout(function(){
        blaster.vx -= 3
      }, 3000)
      setTimeout(function(){
        blaster.vx += 8
      blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
      }, 5200)
      blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
    this.blasters.push(blaster);
    }
    megablast3(){
      const blaster = new Megablaster(
        this.ctx,
        this.x + 10,
        this.y - 20,
        this
      );
      blaster.framer = 12
      blaster.vx = 0;
      blaster.vy -= 0.5;
      setTimeout(function(){
        blaster.vy -= 3
      }, 3000)
      setTimeout(function(){
        blaster.vy += 8
      blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
      }, 5200)
      blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
    this.blasters.push(blaster);
    }
    megablast4(){
      const blaster = new Megablaster(
        this.ctx,
        this.x + 10,
        this.y - 20,
        this
      );
      blaster.framer = 12
      blaster.vx = 0;
      blaster.vy += 0.5;
      setTimeout(function(){
        blaster.vy += 3
      }, 3000)
      setTimeout(function(){
        blaster.vy -= 8
      blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
      }, 5200)
      blaster.blasterImg.src = "/assets/images/munición/stormstorm1.png";
    this.blasters.push(blaster);
    }
  megablaster() {
    const blaster = new Megablaster(
      this.ctx,
      this.x + 10,
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
      this.sandAlterImg,
      this
    );
    this.sanders.push(sand);
  }

  toxicar(){
    const tox = new Toxic(
      this.ctx,
      this.x + 8,
      this.y + 8,
      this
    );
    this.toxics.push(tox);
  }




  hooker() {
    const hook = new Hook(
      this.ctx,
      this.x + 10,
      this.y + 10,
      this
    );
    if (this.direction === "right") {
      hook.vx = this.speed;
      hook.vy = 0;
      hook.hookImg.src = "/assets/images/munición/hookright.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      hook.vx = -this.speed;
      hook.vy = 0;
      hook.hookImg.src = "/assets/images/munición/hookleft.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      hook.vx = 0;
      hook.vy = -this.speed;
      hook.hookImg.src = "/assets/images/munición/hookup.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      hook.vx = 0;
      hook.vy = this.speed;
      hook.hookImg.src = "/assets/images/munición/hookdown.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }
    if (this.cooldownBullet <= 600) {
      this.cooldownBullet = 600;
    }
    this.hooks.push(hook);
  }
  heater() {
    const heat = new Heat(
      this.ctx,
      this.x + 10,
      this.y + 10,
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



// water...water...water...water...water...water...water...water...water...
// water...water...water...water...water...water...water...water...water...


  waterer() {
    const water = new Water(
      this.ctx,
      this.x + 10,
      this.y + 10,
      this
    );
    if (this.direction === "right") {
      water.vx = this.speed;
      water.vy = 0;
      water.waterImg.src = "/assets/images/munición/waterright.png"
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -this.speed;
      water.vy = 0;
      water.waterImg.src = "/assets/images/munición/waterleft.png"
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = 0;
      water.vy = -this.speed;
      water.waterImg.src = "/assets/images/munición/waterup.png"
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = 0;
      water.vy = this.speed;
      water.waterImg.src = "/assets/images/munición/waterdown.png"
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
      water.waterImg.src = "/assets/images/munición/waterright.png"
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "/assets/images/munición/waterleft.png"
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = -4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "/assets/images/munición/waterup.png"
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = 4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "/assets/images/munición/waterdown.png"
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
      water.waterImg.src = "/assets/images/munición/waterright.png"
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "/assets/images/munición/waterleft.png"
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = 4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "/assets/images/munición/waterup.png"
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = -4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "/assets/images/munición/waterdown.png"
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
    water.waterImg.src = "/assets/images/munición/waterright.png"
    this.img.src = "/assets/images/PJ/imright.png";
    this.img.frame++;
  }
  if (this.direction === "left") {
    water.vx = -6.5;
    water.vy = 0;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra

    water.waterImg.src = "/assets/images/munición/waterleft.png"
    this.img.src = "/assets/images/PJ/imleft.png";
    this.img.frame++;
  }
  if (this.direction === "top") {
    water.vx = 0;
    water.vy = -6.5;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra
    water.waterImg.src = "/assets/images/munición/waterup.png"
    this.img.src = "/assets/images/PJ/imup.png";
    this.img.frame++;
  }
  if (this.direction === "down") {
    water.vx = 0;
    water.vy = 6.5;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra
    water.waterImg.src = "/assets/images/munición/waterdown.png"
    this.img.src = "/assets/images/PJ/imdown.png";
    this.img.frame++;
  }
  if (this.cooldownBullet <= 600) {
    this.cooldownBullet = 600;
  }
  this.waters.push(water);
}
drawOuch() {
  this.ctx.font = "18px Arial";
  this.ctx.save();
  this.ctx.fillStyle = "red";
  this.order = this.ctx.fillText("Ouch! Cactus!", this.x - 36, this.y - 4);
  this.order = this.ctx.fillText("Ouch! Cactus!", this.x - 32, this.y );
  this.ctx.fillStyle = "white";
  this.order = this.ctx.fillText("Ouch! Cactus!", this.x - 34, this.y - 2);
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
  ctx.fillStyle = "rgb(251, 209, 209)";
  this.ctx.fillStyle = "red";
  this.order = this.ctx.fillText("Sorry!", this.x - 11, this.y - 4);
  this.order = this.ctx.fillText("Sorry!", this.x - 7, this.y );
  this.ctx.fillStyle = "white";
  this.order = this.ctx.fillText("Sorry!", this.x - 9, this.y - 2);
  this.ctx.restore();
}
drawSmash() {
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillRect(this.x - 57, this.y - 21, 175, 22);
  ctx.fillStyle = "rgb(251, 209, 209)";
  this.ctx.fillStyle = "black";
  this.order = this.ctx.fillText("I'm being smashed!", this.x - 55, this.y - 3);
  this.ctx.restore();
}
}

