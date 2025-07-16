class Formins
 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1230;
    this.y = 120;
    this.w = 155;
    this.h = 25;
    this.total = 1;
    this.v = 5;
    ctx.font = "40px Verdana";
  }
  draw() {
    const prevStyle = this.ctx.fillStyle;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.6", "grey");
    gradient.addColorStop("0.66", "black");
    gradient.addColorStop("1", "grey");
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
    this.ctx.fillStyle = prevStyle;
  }

}
