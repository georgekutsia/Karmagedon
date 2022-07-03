class Wall {
    constructor(ctx, x, y, w, h , stn) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.stn =stn
      this.img = new Image();
      this.img.src = "/assets/images/fondos/arbusto1.png";
      this.stone = new Image();
      this.stone.src = "/assets/images/munición/bola de fuego copia.png";
    }
    draw() {
      this.ctx.drawImage(
        this.img,this.x, this.y, this.w, this.h
      )
    } 
    
    collides(player) {
      const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
      const colY = this.y + this.h > player.y && this.y < player.y + player.h;
      return colX && colY;
    }
  }
