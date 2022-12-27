class Life {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1015;
    this.y = 285;
    this.w = 173;
    this.h = 46;
    this.total = 10;
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
    this.ctx.fillRect(this.x, this.y, (this.w * this.total) / 10, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeStyle = "black";
    this.ctx.font = "40px Sans";
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.88", "white");
    gradient.addColorStop("0.8", "black");
    ctx.fillStyle = gradient;
    this.ctx.fillText("Life", 1070, 325);
    this.ctx.fillStyle = prevStyle;
  }
  move() {
    this.y -= this.v;
    if (this.y < 285) {
      this.v = -0.01;
    } else if (this.y > 290) this.v = 0.01;
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
  healSlow() {
    this.total += 0.01;
    if (this.total >= 10) {
      this.total = 10;
    }
  }
  healSlower() {
    this.total += 0.001;
    if (this.total >= 10) {
      this.total = 10;
    }
  }
  gainLife() {
    this.total += 1;
    this.healAudio = new Audio("/assets/audios ad/Sanar.mp3");
    this.healAudio.volume = 0.15;
    this.healAudio.play();
    if (this.total >= 10) {
      this.total = 10;
    }
  }
}
