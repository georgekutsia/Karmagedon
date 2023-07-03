class Fat {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [311,630,940,0,1120]
    this.x = this.salidas[Math.floor(Math.random() * this.salidas.length)]
    this.y = this.ctx.canvas.height - 165;
    this.w = 0.07 * this.ctx.canvas.width;
    this.h = 0.15 * this.ctx.canvas.height;
    this.vy = -0.3;
    this.fatlist = [
      "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381743/karengedon/elements/gor1_poib9z.png",
      "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381744/karengedon/elements/gor2_uspzvr.png",
      "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381743/karengedon/elements/gor3_vdmegp.png",
      "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381743/karengedon/elements/gor4_uk3fak.png",
      "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381743/karengedon/elements/gor5_vuglbl.png",
      "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381742/karengedon/elements/gor6_lfbki5.png",
      "https://res.cloudinary.com/dfrda73uc/image/upload/v1688381744/karengedon/elements/gor7_f7i2ib.png"
    ]
    this.fat = new Image();
    this.fat.src = this.fatlist[Math.floor(Math.random() * this.fatlist.length)];
    this.fat.frame = 0;
    this.tick = 0;
    this.fatAudio = new Audio("/assets/audio/fat1.m4a")
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
    if (this.fat.frame > 7) {
      this.fat.frame = 0;
    }
  }

  isVisible() {
    return this.y + this.h > 0;
  }

  collides(player) {
    const colX = this.x + 10 <= player.x + player.w && this.x + this.w - 20 > player.x;
    const colY = this.y + this.h-5 > player.y && this.y + 10 < player.y + player.h;
    return colX && colY;
    
  }
}
