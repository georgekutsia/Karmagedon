class Water {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = bulletSize ;
    this.h = bulletSize ;
    this.vx = 0;
    this.vy = 0;
    this.player = player;
    this.dispose = false;
    this.waterImg = new Image();
    this.waterImg.src = "/assets/images/elements/puddle.png";
    this.waterImg.frame = 0;
    this.waterShootAudio = new Audio("/assets/audio/splash0.mp3");
    this.waterShootAudio.volume = 0.01;
    this.waterShootAudio.play();
    this.framer = 1;
    this.tick = 0;
    this.afterTick = 0;
    this.waterFar = false;
    this.damage = playerBasicDamage + playerDoubleDamage;

  }
  draw() {
    this.ctx.drawImage(
      this.waterImg,
      (this.waterImg.frame * this.waterImg.width) / this.framer,
      0,
      this.waterImg.width / this.framer,
      this.waterImg.height,
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
      this.x >= this.player.x + bulletDistance ||
      this.y >= this.player.y + bulletDistance ||
      this.x <= this.player.x - bulletDistance ||
      this.y <= this.player.y - bulletDistance||
      this.x + this.w >= this.ctx.canvas.width - 150
    ) {
      this.waterFar = true;
    }
    if (afterSpin && this.waterFar) {
        this.tick++;
        this.afterTick++;
        this.waterImg.src = "/assets/images/munición/waterspin.png";
        this.vx = 0;
        this.vy = 0;
        this.x -= 0.09;
        this.y -= 0.09;
        this.framer = 8;
        if (this.afterTick >= afterSize ) {
        this.dispose = true;
      }
    }
    if (!afterSpin && this.waterFar) {
      this.dispose = true;
    }
    if (this.tick > 4) {
      this.tick = 0;
      this.waterImg.frame++;
    }
    if (this.waterImg.frame > this.framer - 1) {
      this.waterImg.frame = 0;
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

if (this.waterFar === true) {
  this.dispose = true;
}