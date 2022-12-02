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
    this.sandImg.src = "/assets/images/munición/sandstrom1.png";
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
    this.h += 0.05
    this.w += 0.05
    if (this.tick > 5) {
      this.tick = 0;
      this.sandImg.frame++;
    }
    if (this.sandImg.frame > 5) {
      this.sandImg.frame = 0;
    }
    if (this.tock >= 400 + afterSize * 4){
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
