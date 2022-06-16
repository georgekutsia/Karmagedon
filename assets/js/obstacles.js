class Puddle{
  constructor(ctx) {
    this.ctx = ctx;      
    this.salidas = [
      {x:125, y:120}, {x:455, y:100}, {x:775, y:100}, 
      {x:125, y:420}, {x:485, y:420}, {x:845, y:420},
      {x:135, y:420}, {x:485, y:250}, {x:845, y:270},
      {x:50, y:380}, {x:50, y:250}, {x:50, y:970},
      {x:250, y:340}, {x:250, y:220}, {x:250, y:770},
      {x:550, y:340}, {x:550, y:220}, {x:550, y:770},
      {x:650, y:360}, {x:750, y:320}, {x:850, y:320},
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 30;
    this.h = 30;
    this.vx = 0;
    this.puddle = new Image();
    this.puddle.src = "/assets/images/elements/puddleCanvas.png";
    this.puddle.frame = 0;
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
    this.x += this.vx
    this.tick++

    if (this.tick % 10 === 0) {
      this.puddle.frame++;
      this.w += 0.1
      this.h += 0.1
    }
    if (this.puddle.frame > 4) {
      this.puddle.frame = 0;
    }
  }
  increase(){
    this.h +=20;
    this.w += 20;
  }
  dicrease(){
    this.h -= 15;
    this.w -= 15;
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




class Fire{
  constructor(ctx) {
    this.ctx = ctx;      
    this.salidas = [
      {x:200, y:80}, {x:455, y:80}, {x:775, y:80}, 
      {x:200, y:380}, {x:450, y:380}, {x:845, y:380},
      {x:175, y:380}, {x:450, y:250}, {x:845, y:270},
      {x:5, y:380}, {x:5, y:25}, {x:5, y:970},
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 20;
    this.h = 20;
    this.fire = new Image();
    this.fire.src = "/assets/images/elements/flames.png";
    this.fire.frame = 0;
    this.vx = 0;

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
    this.x += this.vx;
    this.y += this.vx;
    this.tick++;
    if (this.tick % 10 === 0) {
      this.fire.frame++;
      this.w += 0.2
      this.h += 0.2
    }
    if (this.fire.frame > 4) {
      this.fire.frame = 0;
    }
  }
  increase(){
    this.h += 15;
    this.w += 15;
  }
  dicrease(){
    this.h -= 15;
    this.w -= 15;
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