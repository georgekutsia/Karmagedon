class Puddle{
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 500;
    this.y = 200;
    this.w = 50;
    this.h = 120;
    this.img = new Image();
    this.img.src = "/assets/images/elements/puddle.png";
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