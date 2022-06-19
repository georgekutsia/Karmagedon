class Fat {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [160,311,630]
    this.x = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.y = this.ctx.canvas.height;
    this.w = 0.07 * this.ctx.canvas.width;
    this.h = 0.15 * this.ctx.canvas.height;
    this.vy = -1;

    this.fat = new Image();
    this.fat.src = "/assets/images/elements/fat.png";
    this.fat.frame = 0;

    this.tick = 0;

    this.fatAudio = new Audio("/assets/audio/fat.mp3")
    this.fatAudio.volume = 0.07;
    this.fatAudio.play();
  }

  draw() {
    this.ctx.drawImage(
      this.fat,
      0,
      (this.fat.frame * this.fat.height) / 8,
      this.fat.width,
      this.fat.height / 8,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.y += this.vy;

    this.tick++;

    if (this.tick > 14) {
      this.tick = 0;
      this.fat.frame++;
    }
    if (this.y < 0) {
    }
    if (this.fat.frame > 7) {
      this.fat.frame = 0;
    }
  }

  isVisible() {
    return this.y + this.h > 0;
  }

  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
    
  }
}
