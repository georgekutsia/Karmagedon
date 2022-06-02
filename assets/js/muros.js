class Muros {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 60;
      this.y = 60;
      this.w = 30;
      this.h = 70;

      this.img = new Image();
      this.img.src = "/assets/images/fondos/arbusto1.png";
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

class Muros1{
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 60;
    this.y = 200;
    this.w = 30;
    this.h = 70;
    this.img = new Image();
    this.img.src = "/assets/images/fondos/arbusto2.png";
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