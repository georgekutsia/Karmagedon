class Goose {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = -4;
    this.salidas = [100, 150, 170, 190, 220, 250, 300, 330]
    this.y = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.w = 0.04 * this.ctx.canvas.width;
    this.h = 0.1 * this.ctx.canvas.height;
    this.vx = 1.5;
    this.vy = 0;
    this.gooseImg = new Image();
    this.gooseImg.src = "/assets/images/elements/gansos.png";
    this.gooseImg.frame = 0;

    this.tick = 0;
    this.tock = 0;
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
    if (this.gooseImg.frame > 7) {
      this.gooseImg.frame = 0;
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
