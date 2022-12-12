class Goose {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = -4;
    this.salidas = [30, 50, 100, 150, 170, 190, 220, 250, 300, 330, 370, 400, 430, 460, 500, 520]
    this.y = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.w = 0.04 * this.ctx.canvas.width;
    this.h = 0.1 * this.ctx.canvas.height;
    this.vx = 0.5;
    this.vy = 0;
    this.gooseImg = new Image();
    this.score = new Score()
    this.gooseImg.src = "/assets/images/elements/gansos.png";
    this.gooseImg.frame = 0;
    this.lifeleft = 3;
    this.tick = 0;
    this.tock = 0;
    this.dead = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.gooseImg,
      (this.gooseImg.frame * this.gooseImg.width) / 8,
      0,
      this.gooseImg.width / 8, 
      this.gooseImg.height,
      this.x, 
      this.y, 
      this.w,
      this.h
    );
  }
  move() {
    this.ctx.font = "18px Arial";
    this.ctx.save();
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.fillStyle = "red";
    this.order = this.ctx.fillText(`${this.lifeleft.toString()}`, this.x + 15, this.y + 3);
    this.ctx.restore();
    this.x += this.vx;
    this.y += this.vy;
    this.tick++;
    this.tock++;
    if(this.x >= 0){
      this.vy = 1
    }
    if(this.x >= 100){
      this.vy = -1
    }
    if(this.x >= 300){
      this.vy = 1;
    }
    if(this.x >= 500){
      this.vy = -1
    }
    if(this.x >= 700){
      this.vy = 1;
    }
    if(this.x >= 900){
      this.vy = -1
    }
    if(this.x >= 960){
      this.vx = -2
      this.gooseImg.src = "/assets/images/elements/gansos reversa.png"
    }
    if (this.tick > 10) {
      this.tick = 0;
      this.gooseImg.frame++;
    }
    if (this.x < 0) {
      const ratAlert = document.getElementById("rat-alert");
      ratAlert.style.display = "none";
    }
    if(this.lifeleft <= 0){
      this.gooseImg.src = "/assets/images/elements/deadgoose.png"
      this.vx = 0;
      this.vy = 0;
      this.dead++
      if(this.dead >= 100){
        this.vx = -2000
      }
  }
    if (this.gooseImg.frame > 7) {
      this.gooseImg.frame = 0;
    }
  }
  gooseDamage() {
    this.life.loseLife();
  }
  isVisible() {
    return this.x + this.w > 0;
  }

  collides(player) {
    const colX = this.x + 5 <= player.x + player.w && this.x + this.w - 10 > player.x;
    const colY = this.y + this.h - 5 > player.y && this.y + 5 < player.y + player.h;
    return colX && colY;
  }
}
