class Cart {
  constructor(ctx, cartx, carty, cartImage) {
    this.ctx = ctx;
    this.salidas = [
      { x: 650, y: 50 },{ x: 650, y: 482 },{ x: 650, y: 780 },
      { x: 340, y: 60 },{ x: 340, y: 340 },{ x: 340, y: 700 },
      { x: 20, y: 60 },{ x: 20, y: 440 },{ x: 20, y: 640 },
      { x: 90, y: 290 },{ x: 460, y: 290 },  { x: 690, y: 290 },{ x: 900, y: 290 },{ x: 1150, y: 290 },
      { x: 290, y: 540 },{ x: 390, y: 540 },  { x: 590, y: 540 },{ x: 760, y: 540 },{ x: 1100, y: 540 },
      { x: 30, y: 760 },{ x: 190, y: 760 },  { x: 490, y: 760 },{ x: 860, y: 760 },{ x: 1050, y: 760 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = cartx || this.xy.x;
    this.y = carty || this.xy.y;
    this.w = 35;
    this.h = 39;
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
      { x:1080, y: 620 }
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = cartx || this.xy.x;
    this.y = carty || this.xy.y;
    this.w = 43;
    this.h = 47;
    this.v = 0;
    this.vNegative = 0
    this.drugImg = new Image();
    this.drugImg.src = cartImage || "/assets/images/elements/drugs.png";
    this.tick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.drugImg,
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
