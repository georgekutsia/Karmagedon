class Boss {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      { x: 11, y: 50 },
      { x: 11, y: 210 },
      { x: 11, y: 400 },
      { x: 950, y: 200 },
      { x: 950, y: 400 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.06 * this.ctx.canvas.width;
    this.h = 0.1 * this.ctx.canvas.height;
    this.v = 0.3;
    this.bossImg = new Image();
    this.bossImg.src = "/assets/images/karens/boss4.png";
    this.bossImg.frame = 0;
    this.lifeleft = 30
    this.dead = 0;
    this.tick = 0;
    this.karenEnd = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.bossImg,
      (this.bossImg.frame * this.bossImg.width) / 13,
      0,
      this.bossImg.width / 13,
      this.bossImg.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move(player) {
    this.ctx.save();
    this.ctx.font = "18px Arial";
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.fillStyle = "red";
    this.order = this.ctx.fillText(`${this.lifeleft.toString()}`, this.x + 15, this.y + 3);
    this.ctx.restore();
    this.x += this.v;
    this.y += this.v;
    this.tick++;
    this.karenEnd++;
    let followX = player.x - this.x;
    let followY = player.y - this.y;
    followX > 0 ? (this.x += this.v) : (this.x += this.v -0.9);
    followY > 0 ? (this.y += this.v) : (this.y += this.v -0.9);
    
    if(followX > 0){
      this.bossImg.src = "/assets/images/karens/boss3.png";
    } else {
      this.bossImg.src = "/assets/images/karens/boss4.png";
    }
    if (this.x == player.x && this.y == player.y) {
      this.v = 0;
    }
    if (this.tick > 10) {
      this.tick = 0;
      this.bossImg.frame++;
    }
    if (this.bossImg.frame > 12) {
      this.bossImg.frame = 0;
    }
    if(this.karenEnd >=4000){
      this.v = 2;
      const crazyKaren = document.getElementById("boss-alert");
      crazyKaren.style.display = "none";
    }
    if(this.lifeleft <= 0){
      this.vx = 400;
      this.vy = 400;
  }
  }
  isVisible() {
    return this.x + this.w > 0 && this.y + this.h < 600;
  }
  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}
