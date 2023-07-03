class Token {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = -30;
    this.y = 800;
    this.w = 130;
    this.h = 130;
    this.token = new Image();
    this.token.src = "https://res.cloudinary.com/dfrda73uc/image/upload/v1688380422/karengedon/PJ/token_life_v2f1l9.png";
    this.token.frame = 0;
    this.tick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.token,
      0,
      (this.token.frame * this.token.height) / 20,
      this.token.width,
      this.token.height / 20,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move() {
    this.tick++;
    if (this.tick % 14 === 0) {
      this.token.frame++;
    }
    if (this.token.frame > 19) {
      this.token.frame = 0;
    }
  }

}
