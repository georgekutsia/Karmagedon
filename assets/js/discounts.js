class Discount {
    constructor(ctx) {
      this.ctx = ctx;

      this.salidas = [
        {x:15, y:15}, {x:15, y:510}
      ]
      this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
      this.x = this.xy.x;
      this.y = this.xy.y;
      this.w = 0.08 * this.ctx.canvas.width;
      this.h = 0.05 * this.ctx.canvas.height;
      this.a = new Image();
      this.a.src = "/assets/images/elements/dis0.png";
      this.b = new Image();
      this.b.src = "/assets/images/elements/dis1.png";
      this.c = new Image();
      this.c.src = "/assets/images/elements/dis2.png";
      this.d = new Image();
      this.d.src = "/assets/images/elements/dis3.png";
      
      this.randomImage = [this.a,this.b,this.c,this.d]
      this.image = this.randomImage[Math.floor(Math.random()*this.randomImage.length)]
      this.image.frame = 0;
  
      this.tick = 0;
      this.tock = 0;
    }
  
    draw() {
      this.ctx.drawImage(
        this.image,
        0,
        (this.image.frame * this.image.height)/1,
        this.image.width, 
        this.image.height /1,
        this.x, 
        this.y, 
        this.w,
        this.h
      );
    }
  
    move() {
      this.tick++;
      if (this.tick > 10) {
        this.tick = 0;
        this.image.frame++;
      }
  
      if (this.x < 0) {
      }
      if (this.image.frame > 0) {
        this.image.frame = 0;
      }
    }
  
    isVisible() {
      return this.x + this.w > 0 && this.x + this.w < 1400;
    }
  
    collides(player) {
      const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
      const colY = this.y + this.h > player.y && this.y < player.y + player.h;
      return colX && colY;
    }
  }
  