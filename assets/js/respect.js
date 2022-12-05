class Respect {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 1015;
    this.y = 405;
    this.w = 173;
    this.h = 46;
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
    this.ctx.strokeStyle = "black";
    this.ctx.font = "35px Sans" ;
    this.ctx.strokeStyle = "black";
    gradient.addColorStop("0.88", "black");
    gradient.addColorStop("0.98", "black");
    gradient.addColorStop("1", "black");
    ctx.fillStyle = gradient;
    this.ctx.fillText("Reputation", 1020, 440)
    this.ctx.fillStyle = prevStyle;
  }
  move() {
    this.y -= this.v
    if(this.y < 405){
      this.v = -0.1
    } else if(this.y > 410)
    this.v = 0.1
  }
  loseRespect() {
    this.total -= 0.0005;
  }
  loseBigRespect() {
    this.total -= 0.3;
  }
  getBigRespect(){
    this.total += 0.2
  }
  getSmallRespect(){
    this.total += 0.1
  }
  getRespect(){
    this.total += 0.1;
    if(this.respect >=1){
      this.respect = 1
    }
  }
}