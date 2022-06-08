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
      this.heatImg.src = "/assets/images/fondos/fuego.png";
    }
  
    draw() {
      this.ctx.drawImage(
        this.heatImg,this.x, this.y, this.w, this.h
      )
    }
  
    move() {
      this.x += this.vx;
      this.y += this.vy;
    }  
    isVisible() {
      return this.y + this.h > 0 || this.x + this.w > 0;
    }
      

    collides(puddle) {
      const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
      const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
      return colX && colY;
    }
  }