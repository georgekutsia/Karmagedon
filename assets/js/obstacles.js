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
    this.puddle.src = "/assets/images/elements/puddleCanvas.png";
    this.puddle.frame = 0;

    this.life = 4;
    this.tick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.puddle,
      0,
      (this.puddle.frame * this.puddle.height) / 5,
      this.puddle.width,
      this.puddle.height / 5,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  move(){
    this.tick++;

    if (this.tick > 10) {
      this.tick = 0;
      this.puddle.frame++;
      this.w += 0.2
      this.h += 0.2
    }
    if (this.puddle.frame > 4) {
      this.puddle.frame = 0;
    }
  }
  increase(){
    this.h += 1;
    this.w += 1;
    this.life += 1;
  }
  dicrease(){
    this.h -= 10;
    this.w -= 10;
    this.life -= 2;
  }
  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}




class Fire{
  constructor(ctx) {
    this.ctx = ctx;      
    this.salidas = [
      {x:200, y:80}, {x:455, y:80}, {x:775, y:80}, 
      {x:200, y:380}, {x:450, y:380}, {x:845, y:380},
      {x:175, y:380}, {x:450, y:250}, {x:845, y:270},
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 20;
    this.h = 20;
    this.fire = new Image();
    this.fire.src = "/assets/images/elements/flames.png";
    this.fire.frame = 0;

    this.life = 2;
    this.tick = 0;
  }
  draw() {
    this.ctx.drawImage(
      this.fire,
      (this.fire.frame * this.fire.width) / 5,
      0,
      this.fire.width / 5,
      this.fire.height,
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
      this.fire.frame++;
      this.w += 0.2
      this.h += 0.2
    }
    if (this.fire.frame > 4) {
      this.fire.frame = 0;
    }
  }
  increase(){
    this.h += 1;
    this.w += 1;
    this.life += 1;
  }
  dicrease(){
    this.h -= 1;
    this.w -= 1;
    this.life -= 1;
  }
  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}