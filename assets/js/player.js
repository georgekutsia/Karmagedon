class Player {
  constructor(ctx, position) {
    this.ctx = ctx;
    this.x = 599;
    this.y = 300;
    this.w = 35;
    this.h = 35;
    this.position = position
    this.extraBoost = 0
    this.extraBoostState = false
    this.extraSizeState = false
    this.lesserSizeState = false
    this.boostTick = 0
    this.booster = 0
    this.boost = 4
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/MANAGER_1_cqs0dr.png";
    this.imgJump = new Image()
    this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpup1_bjghie.png"
    this.imgFire = new Image()
    this.imgFire.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381738/karengedon/elements/fireball_eqfrh9.png"
    this.imgWater = new Image()
    this.imgWater.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381744/karengedon/elements/waterball_pkzcrq.png"
    this.imgSand = new Image()
    this.imgSand.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381740/karengedon/elements/sandball_vllwtg.png"
    this.imgQ = new Image()
    this.imgQ.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381733/karengedon/elements/dodgeq_zltvtg.png"
    this.imgE = new Image()
    this.imgE.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381733/karengedon/elements/dodgee_weqfto.png"
    this.imgHookGun = new Image()
    this.imgHookGun.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380197/karengedon/municio%CC%81n/hookGun_nb3tyl.png"
    this.imgRocket = new Image()
    this.imgRocket.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380193/karengedon/municio%CC%81n/rocketImg_c0yvks.png"
    this.discountGun = new Image()
    this.discountGun.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380198/karengedon/municio%CC%81n/discounting1_ux4mih.png"
    this.mineImg = new Image()
    this.mineImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/elementUpgrade_m74ew9.png"
    this.shieldAura = new Image()
    this.shieldAura.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380194/karengedon/municio%CC%81n/au_iildyf.png"
    this.bullsEye = new Image()
    this.bullsEye.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381736/karengedon/elements/bullsEye_spvxnv.png"
    this.machinegun = new Image();
    this.machinegun.src =  "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380204/karengedon/municio%CC%81n/machinegunSpin_yrp7ng.png";
    this.ammo1 = new Image();
    this.ammo1.src =  "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/bull2_h9yj32.png";
    this.ammo2 = new Image();
    this.ammo2.src =  "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/bull2_h9yj32.png";
    this.ammo3 = new Image();
    this.ammo3.src =  "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/bull1_t4bvb3.png";
    this.shotgunCharged = new Image();
    this.shotgunCharged.src =  "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/shotgunCharged_aj0zwh.png";
    this.shotgunUncharged = new Image();
    this.shotgunUncharged.src =  "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/shotgunUncharged_d6qtu9.png";
    this.machinegun.frame = 0;
    this.machinegunTick = 0
    this.elementalImg = new Image();
    this.elementalImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380202/karengedon/municio%CC%81n/sandstrom1_livt6s.png"
    this.mineElementalImg = new Image();
    this.mineElementalImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380193/karengedon/municio%CC%81n/mineImg_cl2a4n.png"
    this.elementalImg.frame = 0;
    this.elementalImgTick = 0
    this.ctx.font = "20px Arial";
    this.img.frame = 0;
    this.tick = 0;
    this.tock = 0;
    this.truck = 0;
    this.hookTIck = 0
    this.life = new Life(ctx);
    this.respect = new Respect(ctx)
    this.formins = new Formins(ctx)
    this.scoreback = new Scoreback(ctx)
    this.score = new Score(ctx)
    this.heats = this.hooks = this.auras = this.waters = this.blasters = this.sanders = this.toxics =  this.discountings = this.shotguns = []
    this.direction = "left";
    this.speed = 4;
    this.extraHookSpeed = 0
    this.cooldownBullet = 3000;
    this.cooldownJump = 3000;   
    this.cooldownJumpTick = 3000;   
    this.jumptimer = 20000; //quizás haga ala para disminuirlo o aumentar su distancia
    this.toxicity = false
    this.sandstate = false
    this.sandAlterImg = ""
    this.cageDamage = false
  }
  draw() {
    formsCheck();

    this.rocketCountDiv =  rocketCount/5 
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
      if(C === 67){
        this.ctx.drawImage(
          this.machinegun,
          (this.machinegun.frame * this.machinegun.width) / 5,
          0,
          this.machinegun.width / 5, 
          this.machinegun.height, 
          this.x - 21,  
          this.y - 5,  
          this.w -8, 
          this.h -8
          );
        this.ctx.drawImage(
          this.machinegun,
          (this.machinegun.frame * this.machinegun.width) / 5,
          0,
          this.machinegun.width / 5, 
          this.machinegun.height, 
          this.x + 29,  
          this.y - 5,  
          this.w -8, 
          this.h -8
          );
          this.machinegunTick++
          if (this.machinegunTick > 1) {
            this.machinegunTick = 0;
            this.machinegun.frame++;
          }
          if (this.machinegun.frame > 4) {
            this.machinegun.frame = 0;
          }
        }
        if(M === 77){
          this.ctx.drawImage(
            this.machinegun,
            (this.machinegun.frame * this.machinegun.width) / 5,
            0,
            this.machinegun.width / 5, 
            this.machinegun.height, 
            this.x -2,  
            this.y + 29,  
            this.w , 
            this.h 
            );
            this.machinegunTick++
            if (this.machinegunTick > 4) {
              this.machinegunTick = 0;
              this.machinegun.frame++;
            }
            if (this.machinegun.frame > 4) {
              this.machinegun.frame = 0;
            }
          }
      if(T === 84){
        ctx.globalAlpha = 0.8
        this.ctx.drawImage(
          this.shieldAura, this.x - 4, this.y - 20, this.w + 10, this.h -10
        )
        ctx.globalAlpha = 1
      }
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
        this.imgQ, this.x - 5, this.y - 15, this.w -25, this.h - 18 
      )
    }
    if(E === 69){
      this.ctx.drawImage(
        this.imgE, this.x + 31, this.y - 15, this.w -25, this.h - 18 
      )
    }
    if(Z === 90){
      this.ctx.drawImage(
        this.imgFire, this.x - 15, this.y + 1, this.w - 20, this.h - 20
      )
    }
    if(X === 88){
      this.ctx.drawImage(
        this.imgWater, this.x + 35, this.y + 1, this.w - 19, this.h - 19
      )
    }
    if(hookCount>0 && B ===66){
      this.ctx.drawImage(
        this.imgHookGun, this.x + 29, this.y + 21, this.w - 10, this.h - 10
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "yellow";
      this.ctx.font = "17px Arial";
      this.order = this.ctx.fillText(`${hookCount.toString()}`, this.x + 48, this.y + 42);
      this.order = this.ctx.fillText(`${hookCount.toString()}`, this.x + 50, this.y + 42);
      this.ctx.fillStyle = "black";
      this.ctx.font = "15px Arial";
      this.order = this.ctx.fillText(`x${hookCount.toString()}`, this.x + 43, this.y + 42);
    }
    if(rocketCount>0){
      this.ctx.drawImage(
        this.imgRocket, this.x + 19, this.y + 51, this.w - 10, this.h - 15
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "aqua";
      this.ctx.font = "17px Arial";
      this.order = this.ctx.fillText(`${this.rocketCountDiv.toString()}`, this.x + 48, this.y + 70);
      this.order = this.ctx.fillText(`${this.rocketCountDiv.toString()}`, this.x + 50, this.y + 70);
      this.ctx.fillStyle = "black";
      this.ctx.font = "15px Arial";
      this.order = this.ctx.fillText(`x${this.rocketCountDiv.toString()}`, this.x + 43, this.y + 70);
    }
    if(discounting > 0){
      this.ctx.drawImage(
        this.discountGun, this.x - 40, this.y + 15, this.w + 10, this.h
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "black";
      this.ctx.font = "15px Arial";
      if(discounting >=50){
        this.order = this.ctx.fillText(`x${discounting.toString()/5}`, this.x - 30, this.y + 40);
      } else {
        this.order = this.ctx.fillText(`x${discounting.toString()/5}`, this.x - 25, this.y + 40);
      }
    }
    if(elementalMineCount > 0){
      this.ctx.drawImage(
        this.mineImg, this.x - 30, this.y + 45, this.w + 10, this.h
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "white";
      this.ctx.font = "15px Arial";
      if(elementalMineCount >=50){
        this.order = this.ctx.fillText(`x${elementalMineCount.toString()}`, this.x - 20, this.y + 71);
        this.order = this.ctx.fillText(`x${elementalMineCount.toString()}`, this.x - 18, this.y + 70);
        this.ctx.fillStyle = "black";
        this.order = this.ctx.fillText(`x${elementalMineCount.toString()}`, this.x - 19, this.y + 70);
      } else {
        this.order = this.ctx.fillText(`x${elementalMineCount.toString()}`, this.x - 16, this.y + 71);
        this.order = this.ctx.fillText(`x${elementalMineCount.toString()}`, this.x - 14, this.y + 70);
        this.ctx.fillStyle = "black";
        this.order = this.ctx.fillText(`x${elementalMineCount.toString()}`, this.x - 15, this.y + 70);
      }
    }
    if(mineCount > 0 && K === 75){
      this.ctx.drawImage(
        this.mineElementalImg, this.x + 25, this.y + 45, this.w, this.h
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "white";
      this.ctx.font = "15px Arial";
      if(mineCount >=10){
        this.order = this.ctx.fillText(`x${mineCount.toString()/5}`, this.x + 35, this.y + 71);
        this.order = this.ctx.fillText(`x${mineCount.toString()/5}`, this.x + 33, this.y + 70);
        this.ctx.fillStyle = "black";
        this.order = this.ctx.fillText(`x${mineCount.toString()/5}`, this.x + 34, this.y + 70);
      } else {
        this.order = this.ctx.fillText(`x${mineCount.toString()/5}`, this.x + 31, this.y + 71);
        this.order = this.ctx.fillText(`x${mineCount.toString()/5}`, this.x + 30, this.y + 70);
        this.ctx.fillStyle = "black";
        this.order = this.ctx.fillText(`x${mineCount.toString()/5}`, this.x + 30, this.y + 70);
      }
    }
    if(shotgunShots >= 0 && shotgunShots <= 2 && H === 72){
      this.ctx.drawImage(
        this.ammo1, this.x - 25, this.y + 65, 15, 10
      )
      this.ctx.drawImage(
        this.shotgunCharged, this.x - 20, this.y + 45, this.w , this.h + 5
      )
    }
    if(shotgunShots === 0 && H === 72){
      this.ctx.drawImage(
        this.ammo2, this.x - 25, this.y + 75, 15, 10
      )
      
    }
    if(extraShotgun === true && H === 72){
      this.ctx.drawImage(
        this.ammo3, this.x - 7, this.y + 68, 10, 20
      )
      this.ctx.drawImage(
        this.shotgunCharged, this.x - 20, this.y + 45, this.w , this.h + 5
      )
    }
    if(H === 0){
      this.ctx.drawImage(
        this.shotgunUncharged, this.x - 30, this.y + 25, this.w - 15, this.h + 10
      )
    }
    if(N === 78){
      this.ctx.drawImage(
        this.imgSand, this.x + 10, this.y + 38, this.w - 22, this.h - 22
      )
      if(elementBoost ){
        this.ctx.drawImage(
          this.elementalImg,
          (this.elementalImg.frame * this.elementalImg.width) / 12,
          0,
          this.elementalImg.width / 12, 
          this.elementalImg.height, 
          this.x + 4,  
          this.y + 34,  
          this.w -10, 
          this.h -10
          );
          this.elementalImgTick++
          if (this.elementalImgTick > 1) {
            this.elementalImgTick = 0;
            this.elementalImg.frame++;
          }
          if (this.elementalImg.frame > 11) {
            this.elementalImg.frame = 0;
          }
      }
    }
    if(this.extraBoostState === true){
      this.boostTick++
      this.extraBoost = 5
      if(this.boostTick >= 1200){
        this.extraBoost = 0
        this.extraBoostState = false
        this.boostTick = 0
      }
    }
    if(this.lesserSizeState === true){
      this.boostTick++
      this.w = 15
      this.h = 15
      if(this.boostTick >= 1200){
        this.w = 35
        this.h = 35
        this.extraSizeState = false
        this.boostTick = 0
      }
    }
    if(this.extraSizeState === true){
      this.boostTick++
      this.w = 50
      this.h = 50
      if(this.boostTick >= 1200){
        this.w = 35
        this.h = 35
        this.extraSizeState = false
        this.boostTick = 0
      }
    }
    if(hookImpact && extraHooker){
      this.hookTIck++
      this.extraHookSpeed = 10
      if(this.hookTIck === 5){
        this.hooker();
      }
      if(this.hookTIck === 15){
        this.hooker();
        hookImpact = false
        hookCount -= 1
      this.extraHookSpeed = 0
      }
      if(this.hookTIck >= 50){
        this.hookTIck = 0
      }
    }
    this.heats.forEach((heat) => heat.draw());
    this.shotguns.forEach((shotgun) => shotgun.draw());
    this.hooks.forEach((hook) => hook.draw());
    this.sanders.forEach((sand) => sand.draw());
    this.toxics.forEach((tox) => tox.draw());
    this.discountings.forEach((disc) => disc.draw());
    this.waters.forEach((water) => water.draw());
    this.auras.forEach((aura) => aura.draw());
    this.blasters.forEach((blaster) => blaster.draw());
    mineria.forEach((mi) => mi.draw());
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
    if(this.direction === "right")
      this.ctx.drawImage(
        this.bullsEye, this.x + 460, this.y, this.w, this.h 
        )
    if(this.direction === "left")
    this.ctx.drawImage(
      this.bullsEye, this.x - 460, this.y, this.w, this.h 
    )
    if(this.direction === "top")
    this.ctx.drawImage(
      this.bullsEye, this.x , this.y - 460, this.w, this.h 
    )
    if(this.direction === "down")
    this.ctx.drawImage(
      this.bullsEye, this.x , this.y + 460, this.w, this.h 
    )

    // LIMITES DEL CANVAS <=//
    this.blasters.forEach((blaster) => {blaster.move();});
    mineria.forEach((mine) => {mine.move();});
    this.heats.forEach((heat) => {heat.move();});
    this.shotguns.forEach((shotgun) => {shotgun.move();});
    this.hooks.forEach((hook) => {hook.move();});
    this.sanders.forEach((sand) => {sand.move();});
    this.toxics.forEach((tox) => {tox.move();});
    this.discountings.forEach((discount) => {discount.move();});
    this.waters.forEach((water) => {water.move();});
    this.auras.forEach((aura) => {aura.move(); this.heal(3);this.hefa()});
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

  heal(gainedLife) {
    this.life.heal(gainedLife);
  }

  healslow(gainLife) {
    this.life.healSlow(gainLife);
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
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/MANAGER_1_cqs0dr.png";
      if(distance <= 60){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpup1_bjghie.png"
      } else if( distance >= 70 && distance <= 85){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379911/karengedon/jumps/jumpup2_o6wn0j.png"
      } else if(distance >= 90 && distance <= 105){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpup3_fbsh5p.png"
      } else if(distance >= 110 && distance <= 125){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379911/karengedon/jumps/jumpup4_lfzphu.png"
      } else if(distance >= 130){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379911/karengedon/jumps/jumpup5_v85fun.png"
      }
    }
    if (key === DOWN || key === S) {
      this.direction = "down";
      this.vy =  this.boost;
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/MANAGER_3_z6olby.png";
      if(distance <= 60){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpdown1_vlczg5.png"
      } else if( distance >= 70 && distance <= 85){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpdown2_nsnhnb.png"
      } else if(distance >= 90 && distance <= 105){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpdown3_hutmmj.png"
      } else if(distance >= 110 && distance <= 125){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpdown4_gd1m5s.png"
      } else if(distance >= 130){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpdown5_aacw5t.png"
      }
    }
    if (key === RIGHT || key === D) {
      this.direction = "right";
      this.vx = this.boost;
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/MANAGER_2_gcfnfg.png";
      if(distance <= 60){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379909/karengedon/jumps/jumpright1_ae8lkd.png"
      } else if( distance >= 70 && distance <= 85){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379909/karengedon/jumps/jumpright2_idnvls.png"
      } else if(distance >= 90 && distance <= 105){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379909/karengedon/jumps/jumpright3_owge2i.png"
      } else if(distance >= 110 && distance <= 125){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpright4_atjzal.png"
      } else if(distance >= 130){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpright5_pysmpu.png"
      }
    }
    if (key === LEFT || key === A) {
      this.direction = "left";
      this.vx = - this.boost;
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/MANAGER_4_qswowt.png";
      if(distance <= 60){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379909/karengedon/jumps/jumpleft1_k1e3kf.png"
      } else if( distance >= 70 && distance <= 85){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379909/karengedon/jumps/jumpleft2_mheyg2.png"
      } else if(distance >= 90 && distance <= 105){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379909/karengedon/jumps/jumpleft3_ijpkpc.png"
      } else if(distance >= 110 && distance <= 125){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpleft4_jxajmb.png"
      } else if(distance >= 130){
        this.imgJump.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688379910/karengedon/jumps/jumpleft5_eeo5bq.png"
      }
    }
    if(fireDrug === true){
      setTimeout(function () {
        fireDrug = false
          setTimeout(function () {
            waterDrug = false
          }, 5000);
      }, 10000);
    }
    if (key === C || fireDrug === true) {
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
      if (key === V || waterDrug === true) {
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
      if (key === G) {
        this.cageDamage = true
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
    if (key === F && rocketCount >= 1) {
      this.rocketer();
      rocketCount -= 1
    }
    if (key === R) {
      this.discounting();
      this.discounting1();
      this.discounting2();
      this.discounting3();
      discounting -= 1
    }
    if(key === K && mineCount >=1){
      mineCount--
      this.elementMine()
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
      if(elementBoost){
        this.elementShield()
      }
      this.sander();
        N = 0;
        setTimeout(function () {
        N = 78;
      }, 20000);
    }
    if (key === J //&& !elementBoost
&& elementalMineCount >= 1) {
      this.elementBomb()
      this.sandShootAudio = new Audio("/assets/audios ad/elementalBombSound.wav")
      this.sandShootAudio.volume = 0.4;
      this.sandShootAudio.play();
      elementalMineCount -= 1
        J = 0;
        setTimeout(function () {
        J = 74;
      }, 200);
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
    if (key === B && hookCount >=1) {
        this.hooker();
        B = 0;
        hookCount -= 1
        setTimeout(function () {
          B = 66;
          this.alertingSound = new Audio("/assets/audios ad/reload.mp3");
          this.alertingSound.volume = 0.05;
          this.alertingSound.play()
          }, this.cooldownBullet);
    }

    if (key === G) {
      hookTransporter = true
      this.cageDamage = false
    }
    if(shotgunShots >= 2.999){
      thirdShot = true
    } else {
      thirdShot = false
    }
    if (key === H) {
      this.shotgunner()
      if(shotgunShots >= 2 + extraShot){
        H = 0
        setTimeout(function () {
          shotgunShots = 0
          thirdShotRange = 0
          H = 72;
        }, 2500);
        setTimeout(function () {
          this.alertingSound = new Audio("/assets/audios ad/shotgunReload.mp3");
          this.alertingSound.volume = 0.05;
          this.alertingSound.play()
        }, 2300);
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
    // cheat cheat
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
      }
      if(key === Y){
        if(I = 73){
          this.life.total -= 2
          this.respect.total -= 0.2
        }
      }
      // cheat cheat
  }

  aurar() {
    const aura = new Aura(
      this.ctx,
      this.x + this.w - 40,
      this.y + this.h - 40,
      this
    );
    aura.auraImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380194/karengedon/municio%CC%81n/aura1_xvft65.png";
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
          blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
          blaster.vx += 3
        }, 3000)
        setTimeout(function(){
          blaster.vx -= 8
        blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
        }, 5200)
        blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
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
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
      }, 5200)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
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
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
      }, 5200)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
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
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
      }, 5200)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380379/karengedon/municio%CC%81n/stormstorm1_pv3p9j.png";
    this.blasters.push(blaster);
    }
  rocketer() {
    const blaster = new RocketLauncher(
      this.ctx,
      this.x + 8,
      this.y + 8,
      this
    );
    if (this.direction === "right") {
      blaster.vx += 1;
      blaster.vy = 0;
      blaster.h = 25;
      setTimeout(function(){
        blaster.vx += 10
        this.sandShootAudio = new Audio("/assets/audios ad/rocketExplosionSound.mp3")
        this.sandShootAudio.volume = 0.06;
        this.sandShootAudio.play();
        blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380198/karengedon/municio%CC%81n/roquetRightFast_d3wnd0.png";
      }, 1000)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380200/karengedon/municio%CC%81n/roquetRight_qpjpv6.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      blaster.vx -= 1;
      blaster.vy = 0;
      blaster.h = 25;
      setTimeout(function(){
        blaster.vx -= 10
        this.sandShootAudio = new Audio("/assets/audios ad/rocketExplosionSound.mp3")
        this.sandShootAudio.volume = 0.06;
        this.sandShootAudio.play();
        blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380198/karengedon/municio%CC%81n/roquetLeftFast_ekaxgq.png";
      }, 1000)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380193/karengedon/municio%CC%81n/roquetLeft_oigl8z.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      blaster.vx = 0;
      blaster.vy -= 1;
      blaster.w = 20
      setTimeout(function(){
        blaster.vy -= 10
        this.sandShootAudio = new Audio("/assets/audios ad/rocketExplosionSound.mp3")
        this.sandShootAudio.volume = 0.06;
        this.sandShootAudio.play();
        blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380193/karengedon/municio%CC%81n/roquetUpFast_deaizx.png";
      }, 1000)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380194/karengedon/municio%CC%81n/roquetUp_bo4e77.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      blaster.vx = 0;
      blaster.vy += 1;
      blaster.w = 20
      setTimeout(function(){
        blaster.vy += 10
        this.sandShootAudio = new Audio("/assets/audios ad/rocketExplosionSound.mp3")
        this.sandShootAudio.volume = 0.06;
        this.sandShootAudio.play();
        blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380197/karengedon/municio%CC%81n/roquetDownFast_m6ljnz.png";
      }, 1000)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/roquetDown_mibf5d.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
      this.img.frame++;
    }
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
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380200/karengedon/municio%CC%81n/SandLeft_rcfh9a.png";
      }, 5200)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380196/karengedon/municio%CC%81n/SandRight_lsxeud.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
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
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380196/karengedon/municio%CC%81n/SandRight_lsxeud.png";
      }, 5200)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380200/karengedon/municio%CC%81n/SandLeft_rcfh9a.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
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
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380194/karengedon/municio%CC%81n/SandDown_wjfgic.png";
      }, 5200)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/SandUp_depz3h.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
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
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/SandUp_depz3h.png";
      }, 5200)
      blaster.blasterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380194/karengedon/municio%CC%81n/SandDown_wjfgic.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
      this.img.frame++;
    }
    this.blasters.push(blaster);
  }
  sander() {
    const sand = new Sandstorm (
      this.ctx,
      this.x + 8,
      this.y + 8,
      this.sandAlterImg,
      this
    );
    this.sanders.push(sand);
  }
  elementShield() {
    const elem = new ElementShield (
      this.ctx,
      this.x,
      this.y,
      this
    );
    this.sanders.push(elem);
  }
  elementBomb() {
    const elem = new ElementBomb (
      this.ctx,
      this.x,
      this.y,
      this
    );
    this.sanders.push(elem);
  }
  elementMine() {
    const elem = new ElementMine (
      this.ctx,
      this.x,
      this.y,
      this,
      true
    );
    this.sanders.push(elem);
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
      this.x + 5,
      this.y + 5,
      this
    );
    if (this.direction === "right") {
      hook.vx = this.speed + 5 + this.extraHookSpeed;
      hook.vy = 0;
      hook.hookImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380196/karengedon/municio%CC%81n/hookright_ecxm78.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      hook.vx = -this.speed - 5 - this.extraHookSpeed;
      hook.vy = 0;
      hook.hookImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380198/karengedon/municio%CC%81n/hookleft_veier0.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      hook.vx = 0;
      hook.vy = -this.speed - 5 - this.extraHookSpeed;
      hook.hookImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380200/karengedon/municio%CC%81n/hookup_umwlgg.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      hook.vx = 0;
      hook.vy = this.speed + 5 + this.extraHookSpeed;
      hook.hookImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380196/karengedon/municio%CC%81n/hookdown_lddrxz.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
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
      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/bola_de_fuego_copia_3_ydrlzb.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = -this.speed;
      heat.vy = 0;
      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380200/karengedon/municio%CC%81n/bola_de_fuego_copia_lpi2c6.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = -this.speed;
      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/bola_de_fuego_copia_2_xwh0rl.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = this.speed;
      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380194/karengedon/municio%CC%81n/bola_de_fuego_v0hdpt.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
      this.img.frame++;
    }
    if (this.cooldownBullet <= 600) {
      this.cooldownBullet = 600;
    }
    this.heats.push(heat);
  }
  shotgunner() {
    const shotgun = new Shotgun(
      this.ctx,
      this.x + 10,
      this.y + 10,
      this
    );
    if (this.direction === "right") {
      shotgun.w = 60
      this.x = this.x - 60
      shotgun.x = this.x + 80;
      shotgun.y = this.y - 5
      if(thirdShot){
        thirdShot = false
        this.x = this.x - 160
        thirdShotRange = 140
        shotgun.w = 200
        shotgun.h = 100
        shotgun.y = this.y - 40
        this.extraShotSound = new Audio("/assets/audios ad/extraShotgun.mp3")
        this.extraShotSound.volume = 0.3;
        this.extraShotSound.play();
      }
      shotgun.shotImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/flashRight_pn6in5.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      shotgun.w = 60
      this.x = this.x + 60
      shotgun.x = this.x - 80;
      shotgun.y = this.y -5
      if(thirdShot){
        this.x = this.x + 160
        thirdShotRange = 140
        shotgun.w = 200
        shotgun.h = 100
        shotgun.y = this.y - 40
        this.extraShotSound = new Audio("/assets/audios ad/extraShotgun.mp3")
        this.extraShotSound.volume = 0.3;
        this.extraShotSound.play();
      }
      shotgun.shotImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/flashLeft_kir4iz.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      shotgun.h = 60
      this.y = this.y + 60
      shotgun.y = this.y - 80
      shotgun.x = this.x - 5
      if(thirdShot){
        this.y = this.y + 160
        thirdShotRange = 140
        shotgun.w = 100
        shotgun.h = 200
        shotgun.y = this.y - 390
        shotgun.x = this.x - 50
        this.extraShotSound = new Audio("/assets/audios ad/extraShotgun.mp3")
        this.extraShotSound.volume = 0.3;
        this.extraShotSound.play();
      }
      shotgun.shotImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/flashUp_gpant8.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      shotgun.h = 60
      this.y = this.y - 60
      shotgun.y = this.y + 80
      shotgun.x = this.x + 2
      if(thirdShot){
        this.y = this.y - 160
        thirdShotRange = 140
        shotgun.w = 100
        shotgun.h = 200
        shotgun.y = this.y + 140
        shotgun.x = this.x -30
        this.extraShotSound = new Audio("/assets/audios ad/extraShotgun.mp3")
        this.extraShotSound.volume = 0.3;
        this.extraShotSound.play();
      }
      shotgun.shotImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380435/karengedon/shotgun/flashDown_qc22cw.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
      this.img.frame++;
    }
    if (this.cooldownBullet <= 600) {
      this.cooldownBullet = 600;
    }
    shotgunShots +=0.3
    this.shotguns.push(shotgun);
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

      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/bola_de_fuego_copia_3_ydrlzb.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = -this.speed;
      heat.vy = 0;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380200/karengedon/municio%CC%81n/bola_de_fuego_copia_lpi2c6.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = -this.speed;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/bola_de_fuego_copia_2_xwh0rl.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = this.speed;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380194/karengedon/municio%CC%81n/bola_de_fuego_v0hdpt.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
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

      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380200/karengedon/municio%CC%81n/bola_de_fuego_copia_lpi2c6.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = this.speed;
      heat.vy = 0;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/bola_de_fuego_copia_3_ydrlzb.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = this.speed;
      heat.bla = bulletDistanceExtra - 60

      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380194/karengedon/municio%CC%81n/bola_de_fuego_v0hdpt.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = -this.speed;
      heat.bla = bulletDistanceExtra - 60
      heat.heatImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/bola_de_fuego_copia_2_xwh0rl.png";
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
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
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/waterright_wq2f3m.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -this.speed;
      water.vy = 0;
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380195/karengedon/municio%CC%81n/waterleft_mchk4d.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = 0;
      water.vy = -this.speed;
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380198/karengedon/municio%CC%81n/waterup_ggipzn.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = 0;
      water.vy = this.speed;
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380196/karengedon/municio%CC%81n/waterdown_axtgtk.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
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
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/waterright_wq2f3m.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380195/karengedon/municio%CC%81n/waterleft_mchk4d.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = -4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380198/karengedon/municio%CC%81n/waterup_ggipzn.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = 4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380196/karengedon/municio%CC%81n/waterdown_axtgtk.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
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
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/waterright_wq2f3m.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380195/karengedon/municio%CC%81n/waterleft_mchk4d.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = 4;
      water.vy = -4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380198/karengedon/municio%CC%81n/waterup_ggipzn.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = -4;
      water.vy = 4;
      water.bla = bulletDistanceExtra - 90
      water.sa = bulletSizeExtra
      water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380196/karengedon/municio%CC%81n/waterdown_axtgtk.png"
      this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
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
    water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380199/karengedon/municio%CC%81n/waterright_wq2f3m.png"
    this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380428/karengedon/PJ/imright_hnd6kn.png";
    this.img.frame++;
  }
  if (this.direction === "left") {
    water.vx = -6.5;
    water.vy = 0;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra

    water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380195/karengedon/municio%CC%81n/waterleft_mchk4d.png"
    this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380430/karengedon/PJ/imleft_ypkgum.png";
    this.img.frame++;
  }
  if (this.direction === "top") {
    water.vx = 0;
    water.vy = -6.5;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra
    water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380198/karengedon/municio%CC%81n/waterup_ggipzn.png"
    this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380429/karengedon/PJ/imup_dd2vz1.png";
    this.img.frame++;
  }
  if (this.direction === "down") {
    water.vx = 0;
    water.vy = 6.5;
    water.bla = bulletDistanceExtra - 60
    water.sa = bulletSizeExtra
    water.waterImg.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380196/karengedon/municio%CC%81n/waterdown_axtgtk.png"
    this.img.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380427/karengedon/PJ/imdown_i2jqrk.png";
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

