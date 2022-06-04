class Heat {
    constructor (ctx, x, y){
      this.ctx= ctx;
      this.x = x;
      this.y = y;
      this.w = 20;
      this.h = 20;
      
      this.vx = 2;
      this.vy = 0;

      this.heatImg = new Image();
      this.heatImg.src = "/assets/images/fondos/arbusto1.png";
    }
  
    draw() {
      console.log("draw")
      this.ctx.drawImage(
        this.heatImg,this.x, this.y, this.w, this.h
      )
    }
  
    move() {
      this.x += this.vx;
      this.y += this.vy;
      
    }

  }