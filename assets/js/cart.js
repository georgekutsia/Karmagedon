class Cart {
  constructor(ctx, cartx, carty, cartImage) {
    this.ctx = ctx;
    this.salidas = [
      { x: 70, y: 10 },{ x: 736, y: 152 },{ x: 812, y: 384 },{ x: 552, y: 505 },{ x: 412, y: 260 },
      { x: 96, y: 120 },{ x: 105, y: 250 },{ x: 125, y: 577 },{ x:1052, y: 655 },{ x: 900, y: 60 },{ x:452, y: 705 },{ x: 700, y: 560 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = cartx || this.xy.x;
    this.y = carty || this.xy.y;
    this.w = 43;
    this.h = 47;
    this.v = 0;
    this.vNegative = 0
    this.cartImg = new Image();
    this.cartImg.src = cartImage || "/assets/images/elements/shopCart.png";
    this.cartImg.frame = 0;
    this.tick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.cartImg,
      0,
      (this.cartImg.frame * this.cartImg.height) / 8,
      this.cartImg.width,
      this.cartImg.height / 8,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move(player) {
    this.tick++;
    this.x += this.v;
    this.y += this.v;
    let followX = player.x - this.x;
    let followY = player.y - this.y;
    followX > 0 ? (this.x += this.v) : (this.x += this.v -this.vNegative);
    followY > 0 ? (this.y += this.v) : (this.y += this.v -this.vNegative);
    if (this.x == player.x && this.y == player.y) {
      this.v = 0;
    }
    if (this.tick > 10) {
      this.tick = 0;
      this.cartImg.frame++;
    }
    if (this.cartImg.frame > 7) {
      this.cartImg.frame = 0;
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
class Drugs {
  constructor(ctx, cartx, carty, cartImage) {
    this.ctx = ctx;
    this.salidas = [
      { x: 70, y: 10 },{ x: 736, y: 152 },{ x: 812, y: 384 },{ x: 552, y: 505 },{ x: 412, y: 260 },
      { x: 96, y: 120 },{ x: 105, y: 250 },{ x: 125, y: 577 },{ x:1052, y: 655 },{ x: 900, y: 60 },{ x:452, y: 705 },{ x: 700, y: 560 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = cartx || this.xy.x;
    this.y = carty || this.xy.y;
    this.w = 43;
    this.h = 47;
    this.v = 0;
    this.vNegative = 0
    this.cartImg = new Image();
    this.cartImg.src = cartImage || "/assets/images/elements/backpack.png";
    this.cartImg.frame = 0;
    this.tick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.cartImg,
      0,
      (this.cartImg.frame * this.cartImg.height) / 8,
      this.cartImg.width,
      this.cartImg.height / 8,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move(player) {
    this.tick++;
    this.x += this.v;
    this.y += this.v;
    let followX = player.x - this.x;
    let followY = player.y - this.y;
    followX > 0 ? (this.x += this.v) : (this.x += this.v -this.vNegative);
    followY > 0 ? (this.y += this.v) : (this.y += this.v -this.vNegative);
    if (this.x == player.x && this.y == player.y) {
      this.v = 0;
    }
    if (this.tick > 10) {
      this.tick = 0;
      this.cartImg.frame++;
    }
    if (this.cartImg.frame > 7) {
      this.cartImg.frame = 0;
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
