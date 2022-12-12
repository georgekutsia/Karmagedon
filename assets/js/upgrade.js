class Upgrade {
    constructor(ctx) {
      this.ctx = ctx;


      this.x = 990;
      this.y = 220;
      this.w = 60;
      this.h = 60;
      this.cartImg = new Image();
      this.cartImg.src = "/assets/images/elements/upgra.png";  
      this.tock = 600;
      this.dispose = true
    }
  
    draw() {
      this.ctx.drawImage(
        this.cartImg,this.x, this.y, this.w, this.h
      )
    } 
    move() {
      this.tock--
      this.ctx.font = "18px Arial";
      this.ctx.save();
      ctx.fillStyle = "black";
      ctx.fillRect(this.x - 0, this.y - 21, 50, 25);
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`${this.tock.toString()}`, this.x  + 9, this.y - 3);
      this.ctx.restore();
      if (this.tock <= 0) {
        this.x = -100;
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
  