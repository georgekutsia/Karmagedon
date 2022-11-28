class Upbullet {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 990;
    this.y = 300;
    this.w = 50;
    this.h = 50;
    this.cartImg = new Image();
    this.cartImg.src = "/assets/images/munición/gas.png";
    this.tock = 600;
  }

  draw() {
    this.ctx.drawImage(this.cartImg, this.x, this.y, this.w, this.h);
  }

  move() {
    this.tock--
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(this.x - 0, this.y - 21, 50, 25);
    this.ctx.fillStyle = "red";
    this.ctx.fillText(`${this.tock.toString()}`, 1000, 300);
    this.ctx.restore();
    if (this.tock <= 0) {
      this.x = -100;
    }
  }
  isVisible() {
    return this.x + this.w > 0 && this.x + this.w < 1400;
  }
  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}
