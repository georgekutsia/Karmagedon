class Respect {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1212;
    this.y = 70;
    this.w = 173;
    this.h = 43;
    this.total = 1 + publicImage;
    this.v = 5;
    ctx.font = "40px Verdana";
  }

  draw() {
    const prevStyle = this.ctx.fillStyle;
    const ratio = this.total / (1 + publicImage);
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.6", "orange");
    gradient.addColorStop("0.66", "green");
    gradient.addColorStop("1", "orange");
    ctx.fillStyle = gradient;
    const width = this.w * ratio;
    this.ctx.fillRect(this.x, this.y, width, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    this.ctx.fillStyle= prevStyle;
    this.ctx.font = "26px Sans" ;
    this.ctx.strokeStyle = "black";
    gradient.addColorStop("0.88", "black");
    gradient.addColorStop("0.98", "black");
    gradient.addColorStop("1", "black");
    ctx.fillStyle = gradient;
    this.ctx.fillText("Reputation", 1264, 100)
    this.ctx.font = "32px Sans" ;
    this.ctx.fillText(`${Math.round(this.total * 10)}`, 1226, 100);
    this.ctx.fillStyle = prevStyle;
} 
  
  move() {
    this.y -= this.v
    if(this.y < 70){
      this.v = -0.01
    } else if(this.y > 75)
    this.v = 0.01
  }

  losingRespect(amount){
    this.total -= amount;
  }
  getRespect(amount){
    this.total += amount + publicImage/1000;
    publicImageLeveling += amount;
    console.log(publicImageLeveling)
    if(publicImageLeveling >= 2){
      publicImageLevelup = true;
      publicImage += 1;
      publicImageLeveling = 0;
    }
    if (this.total >= 1 + publicImage) {
      this.total = 1 + publicImage;
    }
  }

}
