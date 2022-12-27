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
    this.blasterImg.src = "/assets/images/munición/SandUp.png";
    this.blasterShootAudio = new Audio("/assets/audio/sandSound.mp3")
    this.blasterShootAudio.volume = 0.01;
    this.blasterShootAudio.play();
  }
  draw() {
    this.ctx.drawImage(this.blasterImg, this.x, this.y, this.w, this.h);
  }
  move() {
    this.x += this.vx - 0.15;
    this.y += this.vy - 0.15;
    this.h += 0.4;
    this.w += 0.4;
      if (this.h >= 300) {
        this.dispose = true;
      }
      if (this.w >= 300) {
        this.dispose = true;
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
    // this.blasterShootAudio = new Audio("/assets/audio/sandSound.mp3")
    // this.blasterShootAudio.volume = 0.01;
    // this.blasterShootAudio.play();
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