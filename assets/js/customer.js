class Customer {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      {x:200, y:0},{x:300, y:0}, {x:400, y:0}, {x:500, y:0}, {x:600, y:0}, {x:700, y:0}, {x:800, y:50}, {x:100, y:0}
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.03 * this.ctx.canvas.width;
    this.h = 0.07 * this.ctx.canvas.height;
    this.vx = 0;
    this.vy = 0.2;
    this.customImg = new Image();
    this.customImg.src = "/assets/images/elements/customer1.png";
    this.customImg.frame = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.customImg,
      (this.customImg.frame * this.customImg.width) / 6,
      0,
      this.customImg.width / 6, 
      this.customImg.height,
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
    
    if(this.y >= 0){
      this.vx = 0.4;
    }
    if(this.y >= 100){
      this.vx = -0.4;
      this.customImg.src = "/assets/images/elements/customer2.png";
    }
    if(this.y >= 200){
      this.vx = 0.4;
      this.customImg.src = "/assets/images/elements/customer1.png";
    }
    if(this.y >= 300){
      this.vx = -0.4;;
      this.customImg.src = "/assets/images/elements/customer2.png";
    }
    if(this.y >= 400){
      this.vx = 0.4;
      this.customImg.src = "/assets/images/elements/customer1.png";
    }
    
    if (this.tick > 7) {
      this.tick = 0;
      this.customImg.frame++;
    }

    if (this.x < 0) {
    }
    if (this.customImg.frame > 5) {
      this.customImg.frame = 0;
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
