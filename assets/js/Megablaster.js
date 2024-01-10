class Megablaster {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.dispose = false;
    this.blasterImg = new Image();
    this.blasterImg.src = "/assets/images/munición/stormstorm.png";
    this.blasterShootAudio = new Audio("/assets/audios ad/blasterStorm.wav")
    this.blasterShootAudio.volume = 0.2;
    this.blasterShootAudio.play();
    this.blasterImg.frame = 0;
    this.tick = 0;
    this.framer = 
    this.damage =( 1 + playerBasicDamage) * playerDoubleDamage; 
    1
  }
  draw() {
    this.ctx.drawImage(
      this.blasterImg,
      (this.blasterImg.frame * this.blasterImg.width) / this.framer,
      0,
      this.blasterImg.width / this.framer, 
      this.blasterImg.height,
      this.x, 
      this.y, 
      this.w,
      this.h
    );
  }
  move() {
    this.x += this.vx - 0.15;
    this.y += this.vy - 0.15;
    this.h += 0.4;
    this.w += 0.4;
    this.tick++
      if (this.h >= 300) {
        this.dispose = true;
      }
      if (this.w >= 300) {
        this.dispose = true;
      }
      if (this.tick > 2) {
        this.tick = 0;
        this.blasterImg.frame++;
      }
      if (this.blasterImg.frame > this.framer - 1) {
        this.blasterImg.frame = 0;
      }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
    const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
    return colX && colY;
  }
}


class RocketLauncher {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.dispose = false;
    this.blasterImg = new Image();
    this.blasterImg.src = "/assets/images/munición/roquetRight.png";
    this.sandShootAudio = new Audio("/assets/audios ad/rocketLaunchSound0.mp3")
    this.sandShootAudio.volume = 0.06;
    this.sandShootAudio.play();
    this.blasterImg.frame = 0;
    this.tick = 0;
    this.tock = 0;
    this.teck = 0;
    this.framer = 6
    this.rocketDetonation = false
    this.damage =( 1 + playerBasicDamage) * playerDoubleDamage; 

  }
  draw() {
    this.ctx.drawImage(
      this.blasterImg,
      0,
      (this.blasterImg.frame * this.blasterImg.height) / this.framer,
      this.blasterImg.width,
      this.blasterImg.height / this.framer, 
      this.x, 
      this.y, 
      this.w,
      this.h
    );
  }
  move() {
    this.x += this.vx - 0.1;
    this.y += this.vy - 0.1;
    this.tick++
    this.tock++
      if (this.tick > 3) {
        this.tick = 0;
        this.blasterImg.frame++;
      }
      if (this.blasterImg.frame > this.framer - 1) {
        this.blasterImg.frame = 0;
      }
      if(this.tock >= 100){
        this.rocketDetonation = true
      }
      if(this.rocketDetonation === true){
        this.vx = 0;
        this.vy = 0;
        this.x= this.x-1
        this.y= this.y-1
        this.h = 120;
        this.w = 120;
        this.blasterImg.src = "/assets/images/munición/roquetExplosion.png";
        this.teck++
        if(this.teck >= 22){
          this.dispose = true
          this.tock = 0
          this.teck = 0
        }
      }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    if(areaDamage){
      const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
      const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
      return colX && colY;
    }
  }
}
class Discounting {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 70;
    this.h = 70;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.dispose = false;
    this.discountImg = new Image();
    this.discountImg.src = "/assets/images/munición/discounting1.png";
    this.atraer = new Audio("/assets/audios ad/discountSound1.wav")
    this.atraer.volume = 0.003;
    this.atraer.play();
  }
  draw() {
    this.ctx.drawImage(this.discountImg, this.x, this.y, this.w, this.h);
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
    const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
    return colX && colY;
  }
}

class Sandstorm {
  constructor(ctx, x, y, sandAlterImg, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.tick = 0
    this.tock = 0
    this.tuck = 0
    this.dispose = false;
    this.sandImg = new Image();
    this.sandImg.frame = 0;
    this.sandImg.src = sandAlterImg || "/assets/images/munición/hurricanestorm1.png";
    this.sandShootAudio = new Audio("/assets/audio/sandSound.mp3")
    this.sandShootAudio.volume = 0.01;
    this.sandShootAudio.play();
    this.damage =( 0.03 + playerBasicDamage) * playerDoubleDamage; 
  }
  draw() {
    this.ctx.drawImage(
        this.sandImg,
        0,
        (this.sandImg.frame * this.sandImg.height) / 8,
        this.sandImg.width,
        this.sandImg.height / 8,
        this.x,
        this.y,
        this.w,
        this.h
      );
  }
  move() {
    this.tick++;
    this.tock++
    this.x -= 0.05;
    this.y -= 0.05;
    this.h += 0.14
    this.w += 0.14
    if (this.tick > 4) {
      this.tick = 0;
      this.sandImg.frame++;
    }
    if (this.sandImg.frame > 6) {
      this.sandImg.frame = 0;
    }
    if (this.tock >= 500 + afterSize * 4){
      this.dispose = true
    }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
    const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
    return colX && colY;
  }
}
class ElementShield {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 90;
    this.h = 90;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.tick = 0
    this.tock = 0
    this.tuck = 0
    this.dispose = false;
    this.eleImg = new Image();
    this.eleImg.frame = 0;
    this.eleImg.src = "/assets/images/munición/stormstorm.png";
    this.eleAudio = new Audio("/assets/audio/sandSound.mp3")
    this.eleAudio.volume = 0.01;
    this.eleAudio.play();
    this.damage =( 0.01 + playerBasicDamage) * playerDoubleDamage; 

  }
  draw() {
    this.ctx.drawImage(
        this.eleImg,
        0,
        (this.eleImg.frame * this.eleImg.height) / 12,
        this.eleImg.width,
        this.eleImg.height / 12,
        this.x,
        this.y,
        this.w,
        this.h
      );
  }
  move() {
    this.tick++;
    this.tock++
    this.x = this.player.x - 25;
    this.y = this.player.y - 25;
    if (this.tick > 4) {
      this.tick = 0;
      this.eleImg.frame++;
    }
    if (this.eleImg.frame > 11) {
      this.eleImg.frame = 0;
    }
    if (this.tock >= 500 + afterSize * 4){
      this.dispose = true
    }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
    const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
    return colX && colY;
  }
}

class ElementBomb{
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.tick = 0
    this.tock = 0
    this.tuck = 0
    this.dispose = false;
    this.eleImg = new Image();
    this.eleImg.frame = 0;
    this.eleImg.src = "/assets/images/munición/stormstorm.png";
    this.eleAudio = new Audio("/assets/audio/sandSound.mp3")
    this.eleAudio.volume = 0.01;
    this.eleAudio.play();
    this.damage =( 0.008 + playerBasicDamage) * playerDoubleDamage; 
  }
  draw() {
    this.ctx.drawImage(
        this.eleImg,
        0,
        (this.eleImg.frame * this.eleImg.height) / 12,
        this.eleImg.width,
        this.eleImg.height / 12,
        this.x,
        this.y,
        this.w,
        this.h
      );
  }
  move() {
    this.tick++;
    this.tock++
    this.x += 0.05;
    this.y += 0.05;
    this.h -= 0.2
    this.w -= 0.2
    if (this.tick > 0.01) {
      this.tick = 0;
      this.damage = 0.008
      this.eleImg.frame++;
    }
    if (this.eleImg.frame > 11) {
      this.eleImg.frame = 0;
    }
    if(this.tock >=220){
      this.damage = 0.3
      this.x -= 5;
      this.y -= 5;
      this.h += 12
      this.w += 12
    }
    if (this.tock >= 240){
      this.dispose = true
    }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
    const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
    return colX && colY;
  }
}



class ElementMine{
  constructor(ctx, x, y, player, theTruthOfMine) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 30;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.tick = 0
    this.tock = 0
    this.tuck = 0
    this.mineTick = 0
    this.minePosTick = 0
    this.dispose = false;
    this.eleImg = new Image();
    this.eleImg.src = "/assets/images/munición/mineExplo.png";
    this.blip = new Image();
    this.blip.src = "/assets/images/munición/blip.png";
    this.blip.frame = 0;
    this.eleImg.frame = 0;
    this.activated = false
    this.framer = 8;
    this.damage = 0.1;
    this.eleAudio = new Audio("/assets/audios ad/minaInstall.wav")
    this.eleAudio.volume = 0.01;
    this.eleAudio.play();
    this.active = theTruthOfMine;
    this.damage =( 1 + playerBasicDamage) * playerDoubleDamage; 

  }
  draw() {
    this.ctx.drawImage(
        this.eleImg,
        0,
        (this.eleImg.frame * this.eleImg.height) / this.framer,
        this.eleImg.width,
        this.eleImg.height / this.framer,
        this.x,
        this.y,
        this.w,
        this.h
      );
    this.ctx.drawImage(
        this.blip,
        0,
        (this.blip.frame * this.blip.height) / 3,
        this.blip.width,
        this.blip.height / 3,
        this.x - 15,
        this.y - 15,
        this.w + 30,
        this.h + 30
      );
  }
  move() {
    this.tick++;
    this.tock++;
    this.damage += 0.00002;
    this.w += 0.005;
    this.h += 0.005;
    if (this.tick > 4) {
      this.tick = 0;
      this.eleImg.frame++;
      this.eleImg.frame++;
    }
    if (this.eleImg.frame >= this.framer-1) {
      this.eleImg.frame = 0;
    }
    if (this.tock > 93) {
      this.tock = 92;
      this.blip.frame++;
    }
    if (this.blip.frame >= this.framer-1) {
      this.blip.frame = 0;
      this.tock = 0;
    }
    if(this.activated === true){
      this.eleAudio = new Audio("/assets/audios ad/minaExploSound.mp3")
      this.eleAudio.volume = 0.01;
      this.eleAudio.play();
      this.framer = 8
      this.x -= 5;
      this.y -= 5;
      this.h += 19
      this.w += 19
      if(this.w >= 300 && this.h >= 300){
        this.dispose = true
      }
    }
    if(extraMine === true && this.active){
      this.mineTick++
      if(this.mineTick >=650){
        this.mineTick = 0
        this.minePosTick++
        if(this.minePosTick === 1){
          this.elementMines1()
        } 
        if(this.minePosTick === 2){
          this.elementMines2()
        } 
        if(this.minePosTick === 3){
          this.elementMines3()
        } 
        if(this.minePosTick === 4){
          this.elementMines4()
        }
        if(this.minePosTick === 5){
          this.active = false
        }
      }
    }
  }
  elementMines1() {
    const elem = new ElementMine (
      this.ctx,
      this.x + 17,
      this.y + 17,
      this,
      false
      );
    mineria.push(elem);
  }
  elementMines2() {
    const elem = new ElementMine (
      this.ctx,
      this.x - 17,
      this.y + 17,
      this,
      false
      );
    mineria.push(elem);
  }
  elementMines3() {
    const elem = new ElementMine (
      this.ctx,
      this.x + 17,
      this.y - 17,
      this,
      false
      );
    mineria.push(elem);
  }
  elementMines4() {
    const elem = new ElementMine (
      this.ctx,
      this.x - 17,
      this.y - 17,
      this,
      false
      );
    mineria.push(elem);
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
    const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
    return colX && colY;
  }
}

class Airshield {
  constructor(ctx, x, y, airAlterImg, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.tick = 0
    this.tock = 0
    this.tuck = 0
    this.dispose = false;
    this.sandImg = new Image();
    this.sandImg.frame = 0;
    this.sandImg.src = airAlterImg || "/assets/images/munición/hurricanestorm1.png";
    this.sandShootAudio = new Audio("/assets/audio/sandSound.mp3")
    this.sandShootAudio.volume = 0.01;
    this.sandShootAudio.play();
  }
  draw() {
    this.ctx.drawImage(
        this.sandImg,
        0,
        (this.sandImg.frame * this.sandImg.height) / 8,
        this.sandImg.width,
        this.sandImg.height / 8,
        this.x,
        this.y,
        this.w,
        this.h
      );
  }
  move() {
    this.tick++;
    this.tock++
    this.x -= 0.05;
    this.y -= 0.05;
    this.h += 0.14
    this.w += 0.14
    if (this.tick > 4) {
      this.tick = 0;
      this.sandImg.frame++;
    }
    if (this.sandImg.frame > 6) {
      this.sandImg.frame = 0;
    }
    if (this.tock >= 500 + afterSize * 4){
      this.dispose = true
    }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
    const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
    return colX && colY;
  }
}
class Poison {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.tick = 0
    this.tock = 0
    this.tuck = 0
    this.dispose = false;
    this.sandImg = new Image();
    this.sandImg.frame = 0;
    this.sandImg.src = "/assets/images/munición/sandstrom2.png";
    this.sandShootAudio = new Audio("/assets/audio/sandSound.mp3")
    this.sandShootAudio.volume = 0.01;
    this.sandShootAudio.play();
    this.damage =( 0.003 + playerBasicDamage) * playerDoubleDamage; 

  }
  draw() {
    this.ctx.drawImage(
        this.sandImg,
        0,
        (this.sandImg.frame * this.sandImg.height) / 6,
        this.sandImg.width,
        this.sandImg.height / 6,
        this.x,
        this.y,
        this.w,
        this.h
      );
  }
  move() {
    this.tick++;
    this.tock++
    this.x -= 0.05;
    this.y -= 0.05;
    this.h += 0.14
    this.w += 0.14
    if (this.tick > 5) {
      this.tick = 0;
      this.sandImg.frame++;
    }
    if (this.sandImg.frame > 5) {
      this.sandImg.frame = 0;
    }
    if (this.tock >= 500 + afterSize * 4){
      this.dispose = true
    }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(puddle) {
    const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
    const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
    return colX && colY;
  }
}

class Toxic {
    constructor(ctx, x, y, player) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = 40;
      this.h = 40;
      this.player = player;
      this.vx = 0;
      this.vy = 0;
      this.tick = 0
      this.tock = 0
      this.tuck = 0
      this.dispose = false;
      this.toxicImg = new Image();
      this.toxicImg.frame = 0;
      this.toxicImg.src = "/assets/images/munición/toxic.png";
      this.sandShootAudio = new Audio("/assets/audio/sandSound.mp3")
      this.sandShootAudio.volume = 0.01;
      this.sandShootAudio.play();
    this.damage =( 0.02 + playerBasicDamage) * playerDoubleDamage; 

    }
    draw() {
      this.ctx.drawImage(
          this.toxicImg,
          0,
          (this.toxicImg.frame * this.toxicImg.height) / 12,
          this.toxicImg.width,
          this.toxicImg.height / 12,
          this.x,
          this.y,
          this.w,
          this.h
        );
    }
    move() {
      this.tick++;
      this.tock++
      this.x -= 0.05;
      this.y -= 0.05;
      this.h += 0.08
      this.w += 0.08
      if (this.tick > 1) {
        this.tick = 0;
        this.toxicImg.frame++;
      }
      if (this.toxicImg.frame > 10) {
        this.toxicImg.frame = 0;
      }
      if (this.tock >= 800 + afterSize * 4){
        this.dispose = true
      }
    }
    isVisible() {
      return !this.dispose;
    }
    collides(puddle) {
      const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
      const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
      return colX && colY;
    }
  }