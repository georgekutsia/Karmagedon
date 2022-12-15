class Food {
    constructor(ctx, foodx, foody) {
      this.ctx = ctx;

      this.salidas = [
        {x:310, y:10}, {x:310, y:260}, {x:125, y:15}, {x:155, y:320}, {x:900, y:420}, {x:805, y:505}, {x:950, y:40}
      ]
      this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
      this.x = foodx || this.xy.x;
      this.y = foody || this.xy.y;
      this.w = 45;
      this.h = 40;
      this.cartImg = new Image();
      this.cartImg.src = "/assets/images/elements/comidas.png";
      this.cartImg.frame = 0;
  
      this.tick = 0;
      this.tock = 900;
    }
  
    draw() {
      this.ctx.drawImage(
        this.cartImg,
        0,
        (this.cartImg.frame * this.cartImg.height) / 16,
        this.cartImg.width, 
        this.cartImg.height / 16,
        this.x, 
        this.y, 
        this.w,
        this.h
      );
    }
  
    move() {
      this.tick++;
      this.tock--;
      if (this.tick > 40) {
        this.tick = 0;
        this.cartImg.frame++;
      }
      if (this.cartImg.frame > 15) {
        this.cartImg.frame = 0;
      }
      this.ctx.font = "18px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 9, this.y - 5);
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 13, this.y - 1);
      this.ctx.fillStyle = "lime";
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 11, this.y - 3);
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
  