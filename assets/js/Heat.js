class Heat {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = bulletSize ;
    this.h = bulletSize ;

    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.bla = 0;
    this.dispose = false;
    this.heatImg = new Image();
    this.heatImg.src = "/assets/images/munición/bola de fuego.png";
    this.heatShootAudio = new Audio("/assets/audio/fired.mp3")
    this.heatShootAudio.volume = 0.01;
    this.heatShootAudio.play();
  }
  draw() {
    this.ctx.drawImage(this.heatImg, this.x, this.y, this.w, this.h);
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
      this.vx = 0;
      this.vy = 0;
      this.heatImg.src = "/assets/images/munición/flame.png";
      if (this.h >= afterSize ) {
        this.dispose = true;
      }
      if (this.w >= afterSize) {
        this.dispose = true;
      }
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
