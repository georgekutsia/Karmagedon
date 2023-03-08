class Boss {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      { x: 11, y: 50 },
      { x: 11, y: 210 },
      { x: 11, y: 500 },
      { x: 11, y: 650 },
      { x: 1180, y: 20 },
      { x: 1180, y: 400 },
      { x: 1180, y: 650 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.05 * this.ctx.canvas.width;
    this.h = 0.09 * this.ctx.canvas.height;
    this.v = 0.3;
    this.vNegative = 0.9 
    this.bossImg = new Image();
    this.bossImg.src = "/assets/images/karens/boss4.png";
    this.bossImg.frame = 0;
    this.lifeleft = 25 + extraLife * 5
    this.dead = 0;
    this.tick = 0;
    this.karenEnd = 0;
    this.cageImg = new Image();
    this.cageImg.src = "/assets/images/munición/cage.png"
    this.cage = false
    this.cageTick = 0
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
    if(this.cage){
      this.ctx.drawImage(
        this.cageImg, this.x-10, this.y -10, 70, 90
      )
      this.cageTick++
      if(this.cageTick >= 200){
        this.cage = false
        this.v = 0.3
        this.vNegative = 0.9
        this.cageTick = 0
        this.atraer = new Audio("/assets/audios ad/jaulaRota.mp3")
        this.atraer.volume = 0.15;
        this.atraer.play();
      }
    }
  }
  move(player) {
    this.ctx.save();
    this.ctx.font = "18px Arial";
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(this.x, this.y -2, 90, 8);
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y -2, (30 * this.lifeleft) / 10, 8);
    this.ctx.fillStyle = "black";
    this.ctx.font = "22px Arial";
    this.order = this.ctx.fillText(`${this.lifeleft.toString()}`, this.x + 33, this.y - 5);
    this.ctx.restore();
    this.x += this.v;
    this.y += this.v;
    this.tick++;
    this.karenEnd++;
    let followX = player.x - this.x;
    let followY = player.y - this.y;
    followX > 0 ? (this.x += this.v) : (this.x += this.v - this.vNegative);
    followY > 0 ? (this.y += this.v) : (this.y += this.v - this.vNegative);
    
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
    return this.x + this.w > 0 && this.y + this.h < 890;
  }
  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}
