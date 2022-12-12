class Discount {
    constructor(ctx) {
      this.ctx = ctx;

      this.salidas = [
        {x:10, y:15}, {x:10, y:584},
        {x:323, y:15}, {x:323, y:584},
        {x:645, y:15}, {x:645, y:584}, 
        {x:950, y:15}, {x:950, y:584}, 
      ]
      this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
      this.x = this.xy.x;
      this.y = this.xy.y;
      this.w = 0.05 * this.ctx.canvas.width;
      this.h = 0.04 * this.ctx.canvas.height;
      this.a = new Image();
      this.a.src = "/assets/images/elements/dis0.png";
      this.b = new Image();
      this.b.src = "/assets/images/elements/dis1.png";
      this.c = new Image();
      this.c.src = "/assets/images/elements/dis2.png";
      this.total = 0;
      this.randomImage = [this.a, this.b, this.c]
      this.image = this.randomImage[Math.floor(Math.random()*this.randomImage.length)]
      this.image.frame = 0;
  
      this.tick = 0;
      this.tock = 1000;
    }
  
    draw() {
      this.ctx.drawImage(
        this.image,
        0,
        (this.image.frame * this.image.height)/4,
        this.image.width, 
        this.image.height /4,
        this.x, 
        this.y, 
        this.w,
        this.h
      );
    }
  
    move() {
      this.tick++;
      this.tock--
      if (this.tick > 90) {
        this.tick = 0;
        this.image.frame++;
      }
      if (this.image.frame > 3) {
        this.image.frame = 0;
      }
      this.ctx.font = "18px Arial";
      ctx.fillStyle = "rgb(251, 209, 209)";
      ctx.fillRect(this.x +10, this.y - 21, 40, 20);
      this.ctx.fillStyle = "red";
      this.order = this.ctx.fillText(`${this.tock.toString()}`, this.x + 15, this.y - 3);
      if (this.tock <= 0){
        this.x = -100
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
  