class Upbullet {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 480;
    this.y = 420;
    this.w = 40;
    this.h = 40;
    this.cartImg = new Image();
    this.cartImg.src = "/assets/images/munición/gas.png";
    this.tock = 900;
    this.total = 0;
    this.v = 0;
    this.vNegative = 0
  }
  draw() {
    this.ctx.drawImage(this.cartImg, this.x, this.y, this.w, this.h);
  }
  move(player) {
    this.tock--
    this.x += this.v;
    this.y += this.v;
    let followX = player.x - this.x;
    let followY = player.y - this.y;
    followX > 0 ? (this.x += this.v) : (this.x += this.v -this.vNegative);
    followY > 0 ? (this.y += this.v) : (this.y += this.v -this.vNegative);
    if (this.x == player.x && this.y == player.y) {
      this.v = 0;
    }
    this.ctx.font = "20px Arial";
    this.ctx.save();
    this.ctx.fillStyle = "lime";
    this.ctx.fillText(`${this.tock.toString()}`, this.x  + 2, this.y - 5);
    this.ctx.fillStyle = "lime";
    this.ctx.fillText(`${this.tock.toString()}`, this.x  + 7, this.y - 5);
    this.ctx.fillStyle = "red";
    this.ctx.fillText(`${this.tock.toString()}`, this.x  + 5, this.y - 3);
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
