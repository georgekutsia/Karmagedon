class Karens {
    constructor(ctx) {
      this.ctx = ctx;
      this.salidas = [
        {x:155, y:100}, {x:485, y:100}, {x:805, y:100}, {x:155, y:420}, {x:485, y:420}, {x:805, y:420}
      ]
      this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
      this.x = this.xy.x;
      this.y = this.xy.y;
      this.w = 0.07 * this.ctx.canvas.width;
      this.h = 0.15 * this.ctx.canvas.height;

      this.v = -1;
  
      this.karens = new Image();
      this.karens.src = "/assets/images/karens/karen1.png";
      
    }
  
    draw() {
      this.ctx.drawImage(
        this.karens,this.x, this.y, this.w, this.h,
      )
    }
  
    move() {
    }
  
    isVisible() {
      return this.y + this.h > 0;
    }
  
    collides(player) {
      const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
      const colY = this.y + this.h > player.y && this.y < player.y + player.h;
      return colX && colY;
      
    }
  }
  