class Puddle{
  constructor(ctx) {
    this.ctx = ctx;      
    this.salidas = [
      {x:125, y:100}, {x:455, y:100}, {x:775, y:100}, 
      {x:125, y:420}, {x:485, y:420}, {x:845, y:420},
      {x:175, y:420}, {x:485, y:250}, {x:845, y:270},
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 40;
    this.h = 40;
    this.puddle = new Image();
    this.puddle.src = "/assets/images/elements/puddle gif.png";
    this.puddle.frame = 0;

    this.life = 2;
    this.tick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.puddle,
      0,
      (this.puddle.frame * this.puddle.height) / 12,
      this.puddle.width,
      this.puddle.height / 12,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move(){
    this.tick++;

    if (this.tick > 5) {
      this.tick = 0;
      this.puddle.frame++;
      this.w += 0.2
      this.h += 0.2
    }
    if (this.puddle.frame > 11) {
      this.puddle.frame = 0;
    }
  }
  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}