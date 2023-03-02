class Heat {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.sa = 0;
    this.w = bulletSize + this.sa
    this.h = bulletSize + this.sa
    this.player = player;
    this.bla = 0;
    this.vx = 0;
    this.vy = 0;
    this.dispose = false;
    this.heatImg = new Image();
    this.heatImg.src = "/assets/images/munición/bola de fuego.png";
    this.heatImg.frame = 0;
    this.heatShootAudio = new Audio("/assets/audio/fired.mp3")
    this.heatShootAudio.volume = 0.01;
    this.heatShootAudio.play();
    this.framer = 1
    this.tick = 0
    this.afterTick = 0
    this.heatFar = false
  }
  draw() {
    this.ctx.drawImage(
      this.heatImg,
      (this.heatImg.frame * this.heatImg.width) / this.framer,
      0,
      this.heatImg.width / this.framer, 
      this.heatImg.height,
      this.x, 
      this.y, 
      this.w,
      this.h
    );
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.h += 0.2;
    this.w += 0.2;
    if (
      this.x >= this.player.x + bulletDistance + this.bla || 
      this.y >= this.player.y + bulletDistance + this.bla ||
      this.x <= this.player.x - bulletDistance - this.bla || 
      this.y <= this.player.y - bulletDistance - this.bla 
    ) {
      this.heatFar = true
    }
    if (afterSpin && this.heatFar) {
      this.tick++
      this.afterTick++
      this.heatImg.src = "/assets/images/munición/heatspin.png";
      this.x -= 0.09;
      this.y -= 0.09;
      this.vx = 0;
      this.vy = 0;
      this.framer = 5
      if (this.afterTick >= afterSize + this.sa + 20) {
        this.dispose = true;
      }
    }
    if (!afterSpin && this.heatFar) {
      this.dispose = true;
    }
    if (this.tick > 1) {
      this.tick = 0;
      this.heatImg.frame++;
    }
    if (this.heatImg.frame > this.framer - 1) {
      this.heatImg.frame = 0;
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

class Hook {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 25
    this.h = 25
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.dispose = false;
    this.hookImg = new Image();
    this.hookImg.src = "/assets/images/munición/hookdown.png.png";
    this.hookImg.frame = 0;
    this.hookShootAudio = new Audio("/assets/audio/hookShort.m4a  ")
    this.hookShootAudio.volume = 0.03;
    this.hookShootAudio.play();
    this.framer = 1
    this.tick = 0
  }
  draw() {
    this.ctx.drawImage(
      this.hookImg,
      (this.hookImg.frame * this.hookImg.width) / this.framer,
      0,
      this.hookImg.width / this.framer, 
      this.hookImg.height,
      this.x, 
      this.y, 
      this.w,
      this.h
    );
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (
      this.x >= this.player.x + bulletDistance * 20|| 
      this.y >= this.player.y + bulletDistance * 20||
      this.x <= this.player.x - bulletDistance * 20|| 
      this.y <= this.player.y - bulletDistance * 20
    ){
      this.dispose = true
    }
    if (this.tick > 2) {
      this.tick = 0;
      this.hookImg.frame++;
    }
    if (this.hookImg.frame > this.framer - 1) {
      this.hookImg.frame = 0;
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
