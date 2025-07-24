class Respect {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1230;
    this.y = 85;
    this.w = 155;
    this.h = 25;
    this.total =  10 + publicImage;
    this.v = 5;
    ctx.font = "40px Verdana";
  }

draw() {
  const prevStyle = this.ctx.fillStyle;
  const cappedTotal = Math.min(this.total , 10);
  const fillWidth = this.w * cappedTotal / 10;

  this.ctx.strokeStyle = "yellow";
  this.ctx.strokeRect(this.x, this.y, this.w, this.h);

  let gradient = this.ctx.createLinearGradient(this.x, this.y, this.x + this.w, this.y);
  gradient.addColorStop("0.0", "orange");
  gradient.addColorStop("1", "green");
  this.ctx.fillStyle = gradient;

  this.ctx.fillRect(this.x, this.y, fillWidth, this.h);

  this.ctx.fillStyle = "black";
  this.ctx.font = "20px Sans";
  this.ctx.fillText("Reputation", 1284, 105);
  this.ctx.fillText(`${this.total.toFixed(2)}`, 1235, 105);

  this.ctx.fillStyle = prevStyle;
}


  losingRespect(amount){
    this.total -= amount;
  }
  getRespect(amount){
    if (this.total <= 10 + publicImage) {
      this.total += amount;
    }
  }

}
