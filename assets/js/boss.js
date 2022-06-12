class Boss {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      { x: 11, y: 11 },
      { x: 11, y: 211 },
      { x: 11, y: 311 },
      { x: 11, y: 400 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.06 * this.ctx.canvas.width;
    this.h = 0.1 * this.ctx.canvas.height;
    this.v = 0.2;
    this.bossImg = new Image();
    this.bossImg.src = "/assets/images/karens/boss derecha.png";
    this.bossImg.frame = 0;

    this.tick = 0;
    this.karenEnd = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.bossImg,
      (this.bossImg.frame * this.bossImg.width) / 6,
      0,
      this.bossImg.width / 6,
      this.bossImg.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move(player) {
    this.x += this.v;
    this.y += this.v;
    this.tick++;
    this.karenEnd++;
    let followX = player.x - this.x;
    let followY = player.y - this.y;

    followX > 0 ? (this.x += this.v) : (this.x += this.v -0.6);
    followY > 0 ? (this.y += this.v) : (this.y += this.v -0.6);

    if(followX > 0){
      this.bossImg.src = "/assets/images/karens/boss derecha.png";
    } else {
      this.bossImg.src = "/assets/images/karens/boss izquierda.png";
    }

    if (this.x == player.x && this.y == player.y) {
      this.v = 0;
    }

    if (this.tick > 10) {
      this.tick = 0;
      this.bossImg.frame++;
    }

    if (this.x < 0) {
    }
    if (this.bossImg.frame > 5) {
      this.bossImg.frame = 0;
    }

    if(this.karenEnd >=4000){
      this.v = 2;
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
