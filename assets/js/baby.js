class Baby {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      {x:0, y:50}, {x:0, y:150},{x:0, y:200}, {x:0, y:300}, {x:0, y:400}, {x:0, y:450}, {x:0, y:500}, 
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.02 * this.ctx.canvas.width;
    this.h = 0.06 * this.ctx.canvas.height;
    this.moveY = 0.3
    this.vx = 0.3;
    this.vy = this.moveY;
    this.babyImg = new Image();
    this.babyImg.src = "/assets/images/elements/bebe.png";
    this.babyImg.frame = 0;
    this.tick = 0;
    this.babyLife = 5
    this.babyFrame = 18
    this.cageImg = new Image();
    this.cageImg.src = "/assets/images/munición/cage.png"
    this.cage = false
    this.cageTick = 0
  }

  draw() {
    this.ctx.drawImage(
      this.babyImg,
      (this.babyImg.frame * this.babyImg.width) / this.babyFrame,
      0,
      this.babyImg.width / this.babyFrame, 
      this.babyImg.height,
      this.x, 
      this.y, 
      this.w,
      this.h
    );
    if(this.cage){
      this.ctx.drawImage(
        this.cageImg, this.x-20, this.y -10, 70, 80
      )
      this.cageTick++
      if(this.cageTick >= 900){
        this.cage = false
        this.moveY = 0.3
        this.vx = 0.3;
        this.cageTick = 0
        this.atraer = new Audio("/assets/audios ad/jaulaRota.mp3")
        this.atraer.volume = 0.15;
        this.atraer.play();
      }
    }
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.tick++;
    
    if(this.x >= 0){
      this.vy =  this.moveY
    }
    if(this.x >= 100){
      this.vy = - this.moveY
    }
    if(this.x >= 200){
      this.vy =  this.moveY
    }
    if(this.x >= 300){
      this.vy = - this.moveY;
    }
    if(this.x >= 400){
      this.vy =  this.moveY
    }
    if(this.x >= 500){
      this.vy = - this.moveY
    }
    if(this.x >= 600){
      this.vy =  this.moveY
    }
    if(this.x >= 700){
      this.vy = - this.moveY;
    }
    if(this.x >= 800){
      this.vy =  this.moveY;
    }
    if(this.x >= 960){
      this.vy = 200;
      this.vx = 0;
    }
    if (this.tick > 10) {
      this.tick = 0;
      this.babyImg.frame++;
    }
    if (this.x < 0) {
    }
    if (this.babyImg.frame > this.babyFrame-1) {
      this.babyImg.frame = 0;
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
