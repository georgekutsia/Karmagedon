class Puddle{
  constructor(ctx) {
    this.ctx = ctx;      
    this.salidas = [
      {x:125, y:120}, {x:455, y:100}, {x:775, y:100}, 
      {x:125, y:420}, {x:485, y:420}, {x:845, y:420},
      {x:135, y:420}, {x:485, y:250}, {x:845, y:270},
      {x:50, y:380}, {x:50, y:250}, {x:50, y:270},
      {x:250, y:340}, {x:250, y:220}, {x:250, y:400},
      {x:550, y:340}, {x:550, y:220}, {x:550, y:360},
      {x:350, y:640}, {x:750, y:620}, {x:800, y:560},
      {x:50, y:720}, {x:350, y:750}, {x:500, y:700},
      {x:650, y:360}, {x:750, y:320}, {x:850, y:320},
      {x:850, y:160}, {x:890, y:390}, {x:900, y:520},
      {x:1060, y:60}, {x:1010, y:300}, {x:1020, y:650},
      {x:1100, y:10}, {x:1110, y:320}, {x:1020, y:740},
      {x: 327, y:260 }
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 30;
    this.h = 30;
    this.vx = 0;
    this.vy = 0;
    this.puddle = new Image();
    this.puddle.src = "/assets/images/elements/puddleCanvas.png";
    this.worning = new Image();
    this.worning.src = "/assets/images/elements/excla.png"
    this.puff = new Image();
    this.puff.src = "/assets/images/elements/Puff1.png"
    this.bla = 20
    this.blu = 30
    this.puddle.frame = 0;
    this.puff.frame = 0;
    this.tick = 0;
    this.puffTick = 0;
    this.puddleIsOn = true
    this.puffIsOn = false
  }
  draw() {
    if(this.puddleIsOn){
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
        this.ctx.drawImage(
          this.worning, this.x + 10, this.y - 20, this.bla, this.blu
        )
      }
    if(this.puffIsOn){
      this.ctx.drawImage(
        this.puff,
        (this.puff.frame * this.puff.width) / 16,
        0,
        this.puff.width / 16,
        this.puff.height,
        this.x,
        this.y,
        this.w,
        this.h
        );
      }
  }
  move(){
    this.x += this.vx
    this.y += this.vy
    this.tick++
    if(this.puffIsOn){
      this.puffTick++
      
      if (this.puffTick % 2 === 0) {
        this.puff.frame++;
      }
      if (this.puff.frame > 16) {
        this.vx = 2000;
      }
      if(this.puff.frame === 0){
        this.luzOnAudio = new Audio("/assets/audio/evaporar.mp3")
        this.luzOnAudio.volume = 0.07;
        this.luzOnAudio.play();
      }
    }
    if (this.tick % 10 === 0) {
      this.puddle.frame++;
      this.w += 0.1
      this.h += 0.1
      this.bla += 0.05
      this.blu += 0.05
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
  dicreaseSmall(){
    this.h -= 1;
    this.w -= 1;
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
      {x:5, y:380}, {x:5, y:25}, {x:5, y:270},
      {x:100, y:380}, {x:100, y:210}, {x:100, y:270},
      {x:175, y:380}, {x:450, y:250}, {x:845, y:270},
      {x:200, y:80}, {x:455, y:80}, {x:775, y:80}, 
      {x:210, y:380}, {x:450, y:380}, {x:845, y:380},
      {x:600, y:230}, {x:600, y:250}, {x:5, y:270},
      {x:700, y:630}, {x:630, y:550}, {x:665, y:490},
      {x:800, y:30}, {x:830, y:250}, {x:865, y:390},
      {x:900, y:530}, {x:950, y:650}, {x:990, y:100},
      {x:1100, y:150}, {x:1050, y:350}, {x:1140, y:500},
      {x: 527, y:260 }
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 25;
    this.h = 25;
    this.fire = new Image();
    this.fire.src = "/assets/images/elements/flames.png";
    this.worning = new Image();
    this.worning.src = "/assets/images/elements/excla.png"
    this.puff = new Image();
    this.puff.src = "/assets/images/elements/Puff1.png"
    this.bla = 20
    this.blu = 30
    this.fire.frame = 0;
    this.puff.frame = 0;
    this.vx = 0;
    this.vy = 0;
    this.tick = 0;
    this.puffTick = 0;
    this.fireIsOn = true;
    this.puffIsOn = false;
  }
  draw() {
    if(this.fireIsOn){
      this.ctx.drawImage(
        this.fire,
        (this.fire.frame * this.fire.width) / 9,
        0,
        this.fire.width / 9,
        this.fire.height,
        this.x,
        this.y,
        this.w,
        this.h
        );
        this.ctx.drawImage(
          this.worning, this.x + 10, this.y - 20, this.bla, this.blu
          )
        }
      if(this.puffIsOn){
        this.ctx.drawImage(
          this.puff,
          (this.puff.frame * this.puff.width) / 16,
          0,
          this.puff.width / 16,
          this.puff.height,
          this.x,
          this.y,
          this.w,
          this.h
          );
        }
  }
  move(){
    this.x += this.vx;
    this.y += this.vy;
    this.tick++;
    if(this.puffIsOn){
      this.puffTick++
      if (this.puffTick % 2 === 0) {
        this.puff.frame++;
      }
      if (this.puff.frame > 16) {
        this.vx = 2000;
      }
      if(this.puff.frame === 0){
        this.luzOnAudio = new Audio("/assets/audio/evaporar.mp3")
        this.luzOnAudio.volume = 0.07;
        this.luzOnAudio.play();
      }
    }
    if (this.tick % 10 === 0) {
      this.fire.frame++;
      this.w += 0.2
      this.h += 0.2
      this.bla += 0.05
      this.blu += 0.05
    }
    if (this.fire.frame > 8) {
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
  dicreaseSmall(){
    this.h -= 1;
    this.w -= 1;
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