class Life {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1230;
    this.y = 50;
    this.w = 155;
    this.h = 25;
    this.total = lifeTotal;
    this.v = 2;
    ctx.font = "40px Verdana";
  }
  draw() {
    const prevStyle = this.ctx.fillStyle;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    if(this.total <= 3){
      gradient.addColorStop("0.68", "red");
      gradient.addColorStop("1", "red");
    } else if(this.total >=7){
      gradient.addColorStop("0.88", "limegreen");
      gradient.addColorStop("1", "chartreuse");
    } else {      
      gradient.addColorStop("0.68", "red");
      gradient.addColorStop("1", "green");
    }
    ctx.fillStyle = gradient;
    this.ctx.fillRect(this.x, this.y, (this.w * this.total) / lifeTotal, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeStyle = "black";
    this.ctx.font = "20px Sans";
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.88", "black");
    ctx.fillStyle = gradient;
    this.ctx.fillText(`Life`, 1300, 70);
    this.ctx.font = "20px Sans";
    this.ctx.fillText(`${Math.round(this.total * 100)/100}`, 1235, 70);
    this.ctx.fillStyle = prevStyle;
  } 
  loseLife() {
    this.total -= 2;
    this.damageAudio = new Audio("/assets/audio/ouch.mp3");
    this.damageAudio.volume = 0.2;
    this.damageAudio.play();
  }
  loseLifeFire() {
    this.total -= 0.005;
  }
  healSlow(healing) {
    this.total += healing;
    if (this.total >= lifeTotal) {
      this.total = lifeTotal;
    }
  }
  dieSlower() {
    this.total -= 0.001;
    if (this.total >= 10) {
      this.total = 10;
    }
  }
  heal(theLife) {
    this.total += theLife;
    // this.healAudio = new Audio("/assets/audios ad/Sanar.mp3");
    // this.healAudio.volume = 0.15;
    // this.healAudio.play();
    if (this.total >= lifeTotal) {
      this.total = lifeTotal;
    }
  }
}
