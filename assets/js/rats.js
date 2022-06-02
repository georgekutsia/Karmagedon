class Rats {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width;

    this.y = Math.random() * this.ctx.canvas.height;
    this.w = 0.1 * this.ctx.canvas.width;
    this.h = 0.05 * this.ctx.canvas.height;
    this.vx = -10;

    this.ratImg = new Image();
    this.ratImg.src = "/assets/images/elements/rats.png";
    this.ratImg.frame = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.ratImg,
      0,
      (this.ratImg.frame * this.ratImg.height) / 7,
      this.ratImg.width, 
      this.ratImg.height / 7,
      this.x, 
      this.y, 
      this.w,
      this.h
    );
  }

  move() {
    this.x += this.vx;

    this.tick++;

    if (this.tick > 10) {
      this.tick = 0;
      this.ratImg.frame++;
    }

    if (this.x < 0) {
      const ratAlert = document.getElementById("rat-alert");
      ratAlert.style.display = "none";
    }
    if (this.ratImg.frame > 5) {
      this.ratImg.frame = 0;
    }
  }

  isVisible() {
    return this.x + this.w > 0;
  }

  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}
