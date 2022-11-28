class Scoreback
 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1015;
    this.y = 550;
    this.w = 180;
    this.h = 60;
    this.total = 1;
    this.v = 5;
    ctx.font = "40px Verdana";
  }
  draw() {
    const prevStyle = this.ctx.fillStyle;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.6", "maroon");
    gradient.addColorStop("0.66", "olive");
    gradient.addColorStop("1", "maroon");
    ctx.fillStyle = gradient;
    this.ctx.fillRect(this.x, this.y, this.w * this.total, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    this.ctx.fillStyle= prevStyle;
    this.ctx.strokeStyle = "black";
    this.ctx.font = "40px Sans" ;
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.88", "white");
    gradient.addColorStop("0.8", "black");
    ctx.fillStyle = gradient;
    this.ctx.fillStyle = prevStyle;
  }
  move() {
    this.y -= this.v
    if(this.y < 545){
      this.v = -0.08
    } else if(this.y > 550)
    this.v = 0.12
  }
}
