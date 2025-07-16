class Respect {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1230;
    this.y = 85;
    this.w = 155;
    this.h = 25;
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
    this.ctx.font = "20px Sans" ;
    this.ctx.strokeStyle = "black";
    gradient.addColorStop("0.88", "black");
    gradient.addColorStop("0.98", "black");
    gradient.addColorStop("1", "black");
    ctx.fillStyle = gradient;
    this.ctx.fillText("Reputation", 1264, 105)
    this.ctx.font = "20px Sans" ;
    this.ctx.fillText(`${Math.round(this.total * 10)}`, 1235, 105);
    this.ctx.fillStyle = prevStyle;
} 
  

  losingRespect(amount){
    this.total -= amount;
  }
  getRespect(amount){
    this.total += amount + publicImage/1000;
    publicImageLeveling += amount;
    if(publicImageLeveling >= 2){
      publicImageLevelup = true;
      this.total += 1
      publicImage += 1;
      publicImageLeveling = 0;
    }
    if (this.total >= 1 + publicImage) {
      this.total = 1 + publicImage;
    }
  }

}
