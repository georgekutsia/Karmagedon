class Heat {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;

    this.player = player;

    this.vx = 2;
    this.vy = 0;

    this.dispose = false;
    this.heatImg = new Image();
    this.heatImg.src = "/assets/images/munición/bola de fuego.png";
    this.heatShootAudio = new Audio("/assets/audio/fired.mp3")
    this.heatShootAudio.volume = 0.1;
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
      this.x >= this.player.x + 150 ||
      this.y >= this.player.y + 150 ||
      this.x <= this.player.x - 150 ||
      this.y <= this.player.y - 150
    ) {
      this.vx = 0;
      this.vy = 0;
      this.heatImg.src = "/assets/images/munición/flame.png";
      if (this.h >= 40) {
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
