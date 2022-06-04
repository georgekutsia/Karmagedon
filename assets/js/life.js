class Life {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 1015;
    this.y = 400;
    this.w = 180;
    this.h = 110;
    this.total = 1;

    this.v = 0.3;
    ctx.font = "40px Verdana";
  }

  draw() {
    const prevStyle = this.ctx.fillStyle;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.88", "red");
    gradient.addColorStop("1", "green");
    ctx.fillStyle = gradient;
    this.ctx.fillRect(this.x, this.y, this.w * this.total, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    this.ctx.fillText("Life", 1100, 500)
    
  }

  move() {
    this.y -= this.v
    if(this.y < 410){
      this.v = -0.3
    } else if(this.y > 430)
    this.v = 0.3
  }

  loseLife() {
    this.total -= 0.1;
  }
}
