class Baby {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      {x:0, y:0},{x:0, y:200}, {x:0, y:300}, {x:0, y:400}
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.02 * this.ctx.canvas.width;
    this.h = 0.06 * this.ctx.canvas.height;
    this.vx = 0.3;
    this.vy = 0;
    this.babyImg = new Image();
    this.babyImg.src = "/assets/images/elements/bebe.png";
    this.babyImg.frame = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.babyImg,
      (this.babyImg.frame * this.babyImg.width) / 18,
      0,
      this.babyImg.width / 18, 
      this.babyImg.height,
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
    
    console.log(this.x)
    if(this.x >= 0){
      this.vy = 0.3
    }
    if(this.x >= 100){
      this.vy = -0.3
    }
    if(this.x >= 200){
      this.vy = 0.3
    }
    if(this.x >= 300){
      this.vy = -0.3;
    }
    if(this.x >= 400){
      this.vy = 0.3
    }
    if(this.x >= 500){
      this.vy = -0.3
    }
    if(this.x >= 600){
      this.vy = 0.3
    }
    if(this.x >= 700){
      this.vy = -0.3;
    }
    if(this.x >= 800){
      this.vy = 0.3;
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
    if (this.babyImg.frame > 17) {
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
