class Respect {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1212;
    this.y = 70;
    this.w = 173;
    this.h = 43;
    this.total = 1;
    this.v = 5;
    ctx.font = "40px Verdana";
  }

  draw() {
    const prevStyle = this.ctx.fillStyle;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.6", "orange");
    gradient.addColorStop("0.66", "green");
    gradient.addColorStop("1", "orange");
    ctx.fillStyle = gradient;
    this.ctx.fillRect(this.x, this.y, this.w * this.total, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    this.ctx.fillStyle= prevStyle;
    this.ctx.font = "35px Sans" ;
    this.ctx.strokeStyle = "black";
    gradient.addColorStop("0.88", "black");
    gradient.addColorStop("0.98", "black");
    gradient.addColorStop("1", "black");
    ctx.fillStyle = gradient;
    this.ctx.fillText("Reputation", 1220, 100)
    this.ctx.fillStyle = prevStyle;

  }
  move() {
    this.y -= this.v
    if(this.y < 70){
      this.v = -0.01
    } else if(this.y > 75)
    this.v = 0.01
  }
  loseRespect() {
    this.total -= 0.0005;
  }
  loseCustomerRespect() {
    this.total -= 0.004;
  }
  loseBigRespect() {
    this.total -= 0.3;
  }
  getBigRespect(){
    this.total += 0.2 + pImage
    if (this.total >= 1) {
      this.total = 1;
    }
  }
  getSmallRespect(){
    this.total += 0.1 + pImage/2
    if (this.total >= 1) {
      this.total = 1;
    }
  }
  getSmallestRespect() {
    this.total += 0.0005 + pImage/1000
    if (this.total >= 1) {
      this.total = 1;
    }
  }
}
