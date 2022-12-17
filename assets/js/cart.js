class Cart {
  constructor(ctx, cartx, carty) {
    this.ctx = ctx;

    this.salidas = [
      { x: 70, y: 10 },
      { x: 736, y: 152 },
      { x: 812, y: 384 },
      { x: 552, y: 505 },
      { x: 412, y: 260 },
      { x: 96, y: 120 },
      { x: 105, y: 250 },
      { x: 125, y: 577 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = cartx || this.xy.x;
    this.y = carty||this.xy.y;
    this.w = 43;
    this.h = 47;
    this.cartImg = new Image();
    this.cartImg.src = "/assets/images/elements/cart11.png";
    this.cartImg.frame = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.cartImg,
      0,
      (this.cartImg.frame * this.cartImg.height) / 4,
      this.cartImg.width,
      this.cartImg.height / 4,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.tick++;
    if (this.tick > 20) {
      this.tick = 0;
      this.cartImg.frame++;
    }
    if (this.cartImg.frame > 3) {
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
