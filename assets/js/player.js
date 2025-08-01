class Player {
  constructor(ctx, position) {
    this.ctx = ctx;
    this.x = 499;
    this.y = 290;
    this.w = 30;
    this.h = 30;
    this.position = position
    // extrabooststate creo que es para incrementar la velocidad porun período de tiempo
    this.extraBoostState = false
    this.extraSizeState = false
    this.lesserSizeState = false
    this.boostTick = 0;
    this.booster = 0;
    this.speed = 3;
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
    this.imgHookGun = new Image()
    this.imgHookGun.src = "/assets/images/munición/hookGun.png"
    this.imgRocket = new Image()
    this.imgRocket.src = "/assets/images/munición/rocketImg.png"
    this.discountGun = new Image()
    this.discountGun.src = "/assets/images/munición/discountGun1.png"
    this.mineImg = new Image()
    this.mineImg.src = "/assets/images/munición/elementUpgrade.png"
    this.shieldAura = new Image()
    this.shieldAura.src = "/assets/images/munición/au.png"
    this.bullsEye = new Image()
    this.bullsEye.src = "/assets/images/elements/bullsEye.png"
    this.machinegun = new Image();
    this.machinegun.src =  "/assets/images/munición/machinegunSpin.png";
    this.ammo1 = new Image();
    this.ammo1.src =  "/assets/images/shotgun/bull2.png";
    this.ammo2 = new Image();
    this.ammo2.src =  "/assets/images/shotgun/bull2.png";
    this.ammo3 = new Image();
    this.ammo3.src =  "/assets/images/shotgun/bull1.png";
    this.shotgunCharged = new Image();
    this.shotgunCharged.src =  "/assets/images/shotgun/shotgunCharged.png";
    this.shotgunUncharged = new Image();
    this.shotgunUncharged.src =  "/assets/images/shotgun/shotgunUncharged.png";
    this.machinegun.frame = 0;
    this.machinegunTick = 0
    this.elementalImg = new Image();
    this.elementalImg.src = "/assets/images/munición/stormstorm1.png"
    this.mineElementalImg = new Image();
    this.mineElementalImg.src = "/assets/images/munición/mineImg.png"
    this.elementalImg.frame = 0;
    this.elementalImgTick = 0
    this.ctx.font = "20px Arial";
    this.img.frame = 0;
    this.tick = 0;
    this.tock = 0;
    this.truck = 0;
    this.hookTIck = 0
    this.life = new Life(ctx);
    this.recharger = new Recharger(ctx);
    this.hookRecharger = new HookRecharger(ctx);
    this.shotgunUpgrade = new ShotgunUpgrade(ctx);
    this.respect = new Respect(ctx)
    this.formins = new Formins(ctx)
    this.score = new Score(ctx)
    this.heats = this.hooks = this.auras = this.waters = this.blasters = this.sanders = this.toxics =  this.discountings = this.shotguns = []
    this.direction = "left";
    this.speedBullet = 4;
    this.extraHookSpeed = 0
    this.cooldownBullet = 3000;
    this.cooldownJump = 3000;   
    this.toxicity = false;
    this.sandstate = false;
    this.sandAlterImg = ""
    this.cagedAllAnimals = false
    this.foodPreparingTime = 100;
    this.foodReady = false;
  }
  draw() {
    formsCheck();
    this.rocketCountDiv =  rocketCount;
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

      if(C === 67 && showPlayerWeaponStats){
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
        if(M === 77 && showPlayerWeaponStats){
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

    if(showPlayerWeaponStats){
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
    if(hookCounter > 0 && B ===66){
      this.ctx.drawImage(
        this.imgHookGun, this.x + 38, this.y + 21, this.w - 10, this.h - 10
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      ctx.shadowBlur = 5;
      ctx.shadowColor = "black";
      ctx.lineWidth = 3;
      this.ctx.fillStyle = "yellow";
      this.ctx.font = "20px Arial";
      this.ctx.fillText(`${hookCounter.toString()}`, this.x + 57, this.y + 42);
      ctx.shadowBlur = 0;
    }
    if(rocketCount>0){
      this.ctx.drawImage(
        this.imgRocket, this.x + 19, this.y + 51, this.w - 10, this.h - 15
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "aqua";
      this.ctx.font = "17px Arial";
      ctx.shadowBlur = 5;
      ctx.shadowColor = "black";
      ctx.lineWidth = 3;
      this.ctx.fillText(`${this.rocketCountDiv.toString()}`, this.x + 40, this.y + 70);
      ctx.shadowBlur = 0;


    }
    if(discounting >= 1){
      this.ctx.drawImage(
        this.discountGun, this.x - 40, this.y + 15, this.w + 10, this.h+5
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "black";
      this.ctx.font = "15px Arial";
      if(discounting >=10){
        this.ctx.fillText(`${discounting.toString()}`, this.x - 30, this.y + 40);
      } else {
        this.ctx.fillText(`${discounting.toString()}`, this.x - 25, this.y + 40);
      }
    }

    if(elementalMineCount > 0){
      this.ctx.drawImage(
        this.mineImg, this.x - 50, this.y - 15, this.w, this.h
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "white";
      this.ctx.font = "17px Arial";
      if(elementalMineCount >=10){
        ctx.shadowColor = "red";
        ctx.shadowBlur = 5;
        ctx.lineWidth = 3;
        this.ctx.fillText(`${elementalMineCount.toString()}`, this.x - 44, this.y + 5);
        ctx.shadowBlur = 0;
      } else {
      this.ctx.fillStyle = "white";
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;
        ctx.lineWidth = 3;
        this.ctx.fillText(`${elementalMineCount.toString()}`, this.x - 41, this.y + 5);
        ctx.shadowBlur = 0;

      }
    }
    if(mineCount > 0 && K === 75){
      this.ctx.drawImage(
        this.mineElementalImg, this.x + 45, this.y - 15, this.w, this.h
      )
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "white";
      this.ctx.font = "17px Arial";
      if(mineCount >= 10){
        ctx.shadowColor = "red";
        ctx.shadowBlur = 5;
        ctx.lineWidth = 3;
        this.ctx.fillText(`${mineCount.toString()}`, this.x + 52, this.y + 5);
      } else {
        
        this.ctx.fillText(`${mineCount.toString()}`, this.x + 56, this.y + 5);
      }
        ctx.shadowBlur = 0;

    }
    if(shotgunShots >= 0 && shotgunShots <= 1 && H === 72){
      this.ctx.drawImage(
        this.ammo1, this.x - 30, this.y + 65, 13, 8
      )
      this.ctx.drawImage(
        this.shotgunCharged, this.x - 20, this.y + 50, this.w-5, this.h 
      )
    }
    if(shotgunShots === 0 && H === 72){
      this.ctx.drawImage(
        this.ammo2, this.x - 30, this.y + 75, 13, 8
      )
    }
    if(extraShotgun === true && H === 72){
      this.ctx.drawImage(
        this.ammo3, this.x - 15, this.y + 65, 7, 15
      )
      this.ctx.drawImage( //esto es redundante pero soluciona que no desaparece la imagen con la tercera bala
        this.shotgunCharged, this.x - 20, this.y + 50, this.w-5, this.h 
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
    }
    if(L === 76 && elementalistLeveling >= 1 ){
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
    if(this.extraBoostState === true){
      this.boostTick++
      if(this.boostTick >= 1200){
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
        hookCounter -= 1
        this.extraHookSpeed = 0
      }
      if(this.hookTIck >= 50){
        this.hookTIck = 0
      }
    }
  }
    this.ctx.fillStyle = "black";
    this.ctx.font = "16px Arial";
      //posicion del jugador aqui
    // this.ctx.fillText(this.x.toFixed(1), this.x - 84, this.y - 42);
    // this.ctx.fillText(this.y.toFixed(1), this.x + 64, this.y - 42);
    this.ctx.fillText(charging, this.x + 64, this.y - 42);
  // terminan los draws de textos

    this.heats.forEach((heat) => heat.draw());
    this.shotguns.forEach((shotgun) => shotgun.draw());
    this.hooks.forEach((hook) => hook.draw());
    this.sanders.forEach((sand) => sand.draw());
    this.toxics.forEach((tox) => tox.draw());
    this.discountings.forEach((disc) => disc.draw());
    this.waters.forEach((water) => water.draw());
    this.auras.forEach((aura) => aura.draw());
    this.blasters.forEach((blaster) => blaster.draw()); //tanto los rocket como los sanders están en blasters
    mineria.forEach((mi) => mi.draw());
    this.life.draw();
    this.recharger.draw(this.x + 15, this.y + 15);
    if(hookCounter<=9){
      this.hookRecharger.draw(this.x + 63, this.y + 35);
      hookRechargeExtraRadius = 0;
    } else {
      this.hookRecharger.draw(this.x + 68, this.y + 35);
      hookRechargeExtraRadius = 3;
    }
    this.shotgunUpgrade.draw(this.x + 19, this.y + 19);
    this.respect.draw();
    this.formins.draw();
    this.ctx.fillStyle = "lightsalmon";
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if(this.toxicity ===true && this.tick % 5 === 0){
      this.toxicar()
    }
    this.tick++;
    if ((this.tick > 3 && this.vx) || (this.tick > 3 && this.vy)) {
      this.img.frame++;
      this.tick = 0;
    }
    if (this.img.frame > 3) {
      this.img.frame = 0;
    }
    // this.recharger.move();
    // this.hookRecharger.move();
    // this.shotgunUpgrade.move();
    // LIMITES DEL CANVAS =>//
    if (this.y < 10) {
      this.y = 10;
      this.vy = 0;
    }
    if (this.y + this.h > this.ctx.canvas.height - 70) {
      this.y = this.ctx.canvas.height - this.h - 70;
      this.vy = 0;
    }
    if (this.x + this.w * 6 > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w * 6;
      this.vx = 0;
    }
    if (this.x < 8) {
      this.x = 8;
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

    if(hookLeveling>=1){
      this.hookRecharger.rechargingWeapons()
    }
  //  entrenando en el gym
    if(this.x >= 395 && this.x <=610 && this.y >= 580 && this.y <= 727){
      training = true;
      distance += 0.01;   // afecta a la distancia de salto
      this.speed += 0.001;   // afecta a la velocidad de movimiento
      this.ctx.save();
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.fillStyle = "black";
      this.ctx.font = "18px Arial";
      ctx.shadowColor = "violet";
      ctx.shadowBlur = 5;
      ctx.lineWidth = 4;
      this.ctx.fillText("Leg day every day!", this.x - 49, this.y - 29);
      ctx.shadowBlur = 0;
      this.ctx.restore();
    } else{
      training = false;
    }
    if(this.x >=1008 && this.x <=1118 && this.y >= 80 && this.y <= 250 && destroyerLeveling >= 2){
      recharginState = true;
      this.recharger.rechargingWeapons()
      this.ctx.save();
      this.ctx.fillStyle = "rgb(103, 27, 8)";
      this.ctx.font = "20px Arial";
      ctx.shadowColor = "violet";
      ctx.shadowBlur = 5;
      ctx.lineWidth = 4;
      this.ctx.fillText(`Recharging Ammo`, this.x - 49, this.y - 59);
      ctx.shadowBlur = 0;
      this.ctx.restore();
      if(destroyerLeveling >=3) { 
        shotgunUpgradingState = true;
        this.shotgunUpgrade.rechargingWeapons()
        this.ctx.save();
        this.ctx.font = "18px Arial";
        this.ctx.fillStyle = "rgb(5, 101, 74)";
        ctx.shadowColor = "violet";
        ctx.shadowBlur = 5;
        ctx.lineWidth = 4;
        this.ctx.fillText(`Upgrading Shotgun`, this.x - 50, this.y - 30);
        ctx.shadowBlur = 0;
        this.ctx.restore();
      }
    } else{
      recharginState = false;
      shotgunUpgradingState = false;
    }
    if(this.x >=85 && this.x <=280 && this.y >= 325 && this.y <= 496 && this.foodPreparingTime >= 0){
      this.foodPreparingTime -= 0.1;
        this.ctx.font = "14px Arial";
        this.ctx.fillStyle = "rgb(5, 101, 74)";
        this.ctx.fillText(`Food coming up in ${this.foodPreparingTime.toFixed(1)}`, 90, 360);
        if(this.foodPreparingTime <= 0){
          this.foodReady = true;
          setTimeout(() => {
            this.foodPreparingTime = 100 - publicImage * 10;
          }, 9000);
        }
    }

  }

  getRespect(amount){
    this.respect.getRespect(amount);
  }

  hit(damage) {
    this.life.loseLife(damage);
  }
  heal(gainedLife) {
    this.life.heal(gainedLife);
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
    // this.speed = this.speed + this.booster;
    if (key === UP || key === W) {
      solvedTotal += 1;
      this.direction = "top";
      this.vy = - this.speed - this.booster;
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
      this.vy =  this.speed + this.booster;
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
      this.vx = this.speed + this.booster
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
      this.vx = - this.speed - this.booster;
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
      if (key === V || waterDrug) {
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
        // if(hookCounter === 1){
          this.cagedAllAnimals = true;
        // }
        hookTransporter = true;
      }
  }
  keyUp(key) {
    if (key === UP || key === W) { this.vy = 0;}
    if (key === DOWN || key === S) {this.vy = 0;}
    if (key === RIGHT || key === D) {this.vx = 0;}
    if (key === LEFT || key === A) {this.vx = 0;}

    if (key === M && solvedTotal >= 10) {
      this.megablaster();
      M = 0;
    }
    if (key === F && rocketCount >= 1) {
      this.rocketer();
      rocketCount -= 1;
    }
    if (key === R) {
      this.discounting();
      this.discounting1();
      this.discounting2();
      this.discounting3();
      discounting -= 1;
    }
    if(key === K && mineCount >=1){
      mineCount -= 1;
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
    if (key === L && elementalistLeveling >=1){
        this.elementShield()
        L = 0;
        setTimeout(function () {
          L = 76;
        }, 20000);
      }
        
    if (key === N) {
      this.sander();
        N = 0;
        setTimeout(function () {
        N = 78;
      }, 30000);
    }
    if (key === J && elementalistLeveling >= 2 && elementalMineCount >= 1) {
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
    if (key === B && hookCounter >=1) {
        this.hooker();
        B = 0;
        hookCounter -= 1
        setTimeout(function () {
          B = 66;
          this.alertingSound = new Audio("/assets/audios ad/reload.mp3");
          this.alertingSound.volume = 0.05;
          this.alertingSound.play()
          },  this.cooldownBullet);
    }

    // para que el tercer disparo sea más potente
    if(shotgunShots >= 1.999){
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
        }, shotgunCooldown);
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
      // este set timeout es por que a menos que sea en el game principal, en el resto no funcionan los jump
      setTimeout(() => {
        ALT = 0;
      }, 10);
      
      setTimeout(function () {
        ALT = 16;
      }, this.cooldownJump);
    }
    if (key === Q) {
      this.dodgeq();
        Q = 0;
      setTimeout(function () {
        Q = 81;
      }, this.cooldownJump * 1.5);
    }
    if (key === E) {
      this.dodgee();
        E = 0;
      setTimeout(function () {
        E = 69;
      }, this.cooldownJump * 1.5);
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
        hookCounter += 10;
        discounting += 50;
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
    aura.auraImg.src = "/assets/images/munición/aura1.png";
    this.auras.push(aura);
  }
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
          blaster.vx -= 8;
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
        blaster.blasterImg.src = "/assets/images/munición/roquetRightFast.png";
      }, 1000)
      blaster.blasterImg.src = "/assets/images/munición/roquetRight.png";
      this.img.src = "/assets/images/PJ/imright.png";
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
        blaster.blasterImg.src = "/assets/images/munición/roquetLeftFast.png";
      }, 1000)
      blaster.blasterImg.src = "/assets/images/munición/roquetLeft.png";
      this.img.src = "/assets/images/PJ/imleft.png";
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
        blaster.blasterImg.src = "/assets/images/munición/roquetUpFast.png";
      }, 1000)
      blaster.blasterImg.src = "/assets/images/munición/roquetUp.png";
      this.img.src = "/assets/images/PJ/imup.png";
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
        blaster.blasterImg.src = "/assets/images/munición/roquetDownFast.png";
      }, 1000)
      blaster.blasterImg.src = "/assets/images/munición/roquetDown.png";
      this.img.src = "/assets/images/PJ/imdown.png";
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
      hook.vx = this.speedBullet + 5 + this.extraHookSpeed;
      hook.vy = 0;
      hook.hookImg.src = "/assets/images/munición/hookright.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      hook.vx = -this.speedBullet - 5 - this.extraHookSpeed;
      hook.vy = 0;
      hook.hookImg.src = "/assets/images/munición/hookleft.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      hook.vx = 0;
      hook.vy = -this.speedBullet - 5 - this.extraHookSpeed;
      hook.hookImg.src = "/assets/images/munición/hookup.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      hook.vx = 0;
      hook.vy = this.speedBullet + 5 + this.extraHookSpeed;
      hook.hookImg.src = "/assets/images/munición/hookdown.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
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
      heat.vx = this.speedBullet;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = -this.speedBullet;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = -this.speedBullet;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = this.speedBullet;
      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
    }

    this.heats.push(heat);
  }
  shotgunner() {
  const shotgun = new Shotgun(this.ctx, this.x + 10, this.y + 10, this);
  const extraShotHandler = () => {
    thirdShot = false;
    thirdShotRange = 140;
    this.extraShotSound = new Audio("/assets/audios ad/extraShotgun.mp3");
    this.extraShotSound.volume = 0.3;
    this.extraShotSound.play();
  };

  switch (this.direction) {
    case "right":
      shotgun.w = 60 ;
      this.x -= 40 ;
      shotgun.x = this.x + 100 ;
      shotgun.y = this.y - 5;

      if (thirdShot) {
        extraShotHandler();
        this.x -= 140 ;
        shotgun.w = 200;
        shotgun.h = 100;
        shotgun.y = this.y - 40;
      }

      shotgun.shotImg.src = "/assets/images/shotgun/flashRight.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
      break;

    case "left":
      shotgun.w = 60 ;
      this.x += 40 ;
      shotgun.x = this.x - 130 ;
      shotgun.y = this.y - 5;

      if (thirdShot) {
        extraShotHandler();
        this.x += 160 ;
        shotgun.w = 200;
        shotgun.h = 100;
        shotgun.y = this.y - 40;
      }

      shotgun.shotImg.src = "/assets/images/shotgun/flashLeft.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
      break;

    case "top":
      shotgun.h = 60 ;
      this.y += 40 ;
      shotgun.y = this.y - 120 ;
      shotgun.x = this.x - 5;
      if (thirdShot) {
        extraShotHandler();
        this.y += 160 ;
        shotgun.w = 100;
        shotgun.h = 200;
        shotgun.y = this.y - 390;
        shotgun.x = this.x - 50;
      }
      shotgun.shotImg.src = "/assets/images/shotgun/flashUp.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
      break;

    case "down":
      shotgun.h = 60 ;
      this.y -= 20 ;
      shotgun.y = this.y + 80 ;
      shotgun.x = this.x + 2;

      if (thirdShot) {
        extraShotHandler();
        this.y -= 160 ;
        shotgun.w = 100;
        shotgun.h = 200;
        shotgun.y = this.y + 140;
        shotgun.x = this.x - 30;
      }

      shotgun.shotImg.src = "/assets/images/shotgun/flashDown.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
      break;
  }

  shotgunShots += 1;
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
      heat.vx = this.speedBullet;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = -this.speedBullet;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = -this.speedBullet;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = this.speedBullet;
      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
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
      heat.vx = -this.speedBullet;
      heat.vy = 0;      heat.heatImg.src = "/assets/images/munición/bola de fuego copia.png";
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      heat.vx = this.speedBullet;
      heat.vy = 0;
      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 3.png";
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      heat.vx = 0;
      heat.vy = this.speedBullet;
      heat.heatImg.src = "/assets/images/munición/bola de fuego.png";
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      heat.vx = 0;
      heat.vy = -this.speedBullet;      heat.heatImg.src = "/assets/images/munición/bola de fuego copia 2.png";
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
      water.vx = this.speedBullet;
      water.vy = 0;
      water.waterImg.src = "/assets/images/munición/waterright.png"
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -this.speedBullet;
      water.vy = 0;
      water.waterImg.src = "/assets/images/munición/waterleft.png"
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = 0;
      water.vy = -this.speedBullet;
      water.waterImg.src = "/assets/images/munición/waterup.png"
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = 0;
      water.vy = this.speedBullet;
      water.waterImg.src = "/assets/images/munición/waterdown.png"
      this.img.src = "/assets/images/PJ/imdown.png";
      this.img.frame++;
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
      water.vy = 4;      water.waterImg.src = "/assets/images/munición/waterright.png"
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = -4;      water.waterImg.src = "/assets/images/munición/waterleft.png"
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = -4;
      water.vy = -4;      water.waterImg.src = "/assets/images/munición/waterup.png"
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = 4;
      water.vy = 4;      water.waterImg.src = "/assets/images/munición/waterdown.png"
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
      water.vy = -4;      water.waterImg.src = "/assets/images/munición/waterright.png"
      this.img.src = "/assets/images/PJ/imright.png";
      this.img.frame++;
    }
    if (this.direction === "left") {
      water.vx = -4;
      water.vy = 4;      water.waterImg.src = "/assets/images/munición/waterleft.png"
      this.img.src = "/assets/images/PJ/imleft.png";
      this.img.frame++;
    }
    if (this.direction === "top") {
      water.vx = 4;
      water.vy = -4;      water.waterImg.src = "/assets/images/munición/waterup.png"
      this.img.src = "/assets/images/PJ/imup.png";
      this.img.frame++;
    }
    if (this.direction === "down") {
      water.vx = -4;
      water.vy = 4;      water.waterImg.src = "/assets/images/munición/waterdown.png"
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
    water.vy = 0;    water.waterImg.src = "/assets/images/munición/waterright.png"
    this.img.src = "/assets/images/PJ/imright.png";
    this.img.frame++;
  }
  if (this.direction === "left") {
    water.vx = -6.5;
    water.vy = 0;
    water.waterImg.src = "/assets/images/munición/waterleft.png"
    this.img.src = "/assets/images/PJ/imleft.png";
    this.img.frame++;
  }
  if (this.direction === "top") {
    water.vx = 0;
    water.vy = -6.5;    water.waterImg.src = "/assets/images/munición/waterup.png"
    this.img.src = "/assets/images/PJ/imup.png";
    this.img.frame++;
  }
  if (this.direction === "down") {
    water.vx = 0;
    water.vy = 6.5;    water.waterImg.src = "/assets/images/munición/waterdown.png"
    this.img.src = "/assets/images/PJ/imdown.png";
    this.img.frame++;
  }

  this.waters.push(water);
}
drawOuch() {
  this.ctx.font = "18px Arial";
  this.ctx.save();
  this.ctx.fillStyle = "red";
  this.ctx.fillText("Ouch! Cactus!", this.x - 36, this.y - 4);
  this.ctx.fillText("Ouch! Cactus!", this.x - 32, this.y );
  this.ctx.fillStyle = "white";
  this.ctx.fillText("Ouch! Cactus!", this.x - 34, this.y - 2);

  this.ctx.restore();

}
drawFire() {
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillRect(this.x - 10, this.y - 21, 75, 22);
  ctx.fillStyle = "rgb(251, 209, 209)";
  this.ctx.fillStyle = "black";
  this.ctx.fillText("It burns!", this.x - 5, this.y - 3);
  this.ctx.restore();
}
drawWater() {
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillRect(this.x - 10, this.y - 21, 90, 22);
  ctx.fillStyle = "rgb(251, 209, 209)";
  this.ctx.fillStyle = "black";
  this.ctx.fillText("I'll drown!", this.x - 5, this.y - 3);
  this.ctx.restore();
}
drawSorry() {
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillStyle = "rgb(251, 209, 209)";
  this.ctx.fillStyle = "red";
  this.ctx.fillText("Sorry!", this.x - 11, this.y - 4);
  this.ctx.fillText("Sorry!", this.x - 7, this.y );
  this.ctx.fillStyle = "white";
  this.ctx.fillText("Sorry!", this.x - 9, this.y - 2);
  this.ctx.restore();
}
drawSmash() {
  this.ctx.font = "18px Arial";
  this.ctx.save();
  ctx.fillRect(this.x - 57, this.y - 21, 175, 22);
  ctx.fillStyle = "rgb(251, 209, 209)";
  this.ctx.fillStyle = "black";
  this.ctx.fillText("I'm being smashed!", this.x - 55, this.y - 3);
  this.ctx.restore();
}
}

