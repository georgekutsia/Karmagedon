class Aura {
  constructor(ctx, x, y, player) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 55;
    this.h = 55;
    this.tick = 0
    this.player = player;
    this.vx = 0;
    this.vy = 0;
    this.dispose = false;
    this.life = new Life(ctx)
    this.auraImg = new Image();
    this.auraImg.src = "/assets/images/munición/powerUp1.png";
    this.auraShootAudio = new Audio("/assets/audio/watchslow.mp3")
    this.auraShootAudio.volume = 0.02;
    this.auraShootAudio.play();
  }

  draw() {
    this.ctx.drawImage(this.auraImg, this.x, this.y, this.w, this.h);
  }
  move() {
    this.tick ++
    this.x = this.player.x-10;
    this.y = this.player.y-10;
    this.player.booster = 2
      if(this.tick >= 200){
        this.player.booster  = 0
        this.dispose = true;
      }
      this.auraImg.src = "/assets/images/munición/aura1.png";
      // if (this.h >= 10) {
        // this.dispose = false;
      // }
  }
  isVisible() {
    return !this.dispose;
  }
  collides(aura) {
    const colX = this.x <= aura.x + aura.w && this.x + this.w > aura.x;
    const colY = this.y + this.h > aura.y && this.y < aura.y + aura.h;
    return colX && colY;
  }
}
