class Life {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 1018;
    this.y = this.ctx.canvas.height * 0.9;
    this.w = 80;
    this.h = 40;
    this.total = 1;
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
    ctx.fillText("Life", 1018, 530);
  }

  move() {}

  loseLife() {
    this.total -= 0.2;
  }
}
