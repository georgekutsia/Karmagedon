class Rats {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width - 300;
    this.salidas = [20, 240, 280, 505]
    this.y = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.w = 0.1 * this.ctx.canvas.width;
    this.h = 0.05 * this.ctx.canvas.height;
    this.vx = -2;
    this.vy = 0;
    this.dead = 0;
    this.lifeleft = 5;
    this.ratImg = new Image();
    this.ratImg.src = "/assets/images/elements/rats.png";
    this.ratImg.frame = 0;
    this.tick = 0;
    this.tock = 0;
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
    this.y += this.vy;
    this.tick++;
    if (this.tick > 10) {
      this.tick = 0;
      this.ratImg.frame++;
    }

    if (this.x < 0) {

    }
    if (this.ratImg.frame > 5) {
      this.ratImg.frame = 0;
    }
    if(this.lifeleft <= 0){
      this.ratImg.src = "/assets/images/elements/ratsDead.png"
      this.vx = 0;
      this.vy = 0;
      this.dead++
      if(this.dead >= 100){
        this.vx = -2000
      }
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
