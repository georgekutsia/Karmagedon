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

    this.ctx.fillStyle= prevStyle;
    this.ctx.strokeStyle = "black";
    this.ctx.font = "50px Sans" ;
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.88", "white");
    gradient.addColorStop("0.8", "black");
    ctx.fillStyle = gradient;
    this.ctx.fillText("Life", 1070, 500)
    this.ctx.fillStyle = prevStyle;
  }

  move() {
    this.y -= this.v
    if(this.y < 410){
      this.v = -0.3
    } else if(this.y > 430)
    this.v = 0.3
  }

  loseLife() {
    this.total -= 0.2;
    this.damageAudio = new Audio("/assets/audio/ouch.mp3")
    this.damageAudio.volume = 0.2;
    this.damageAudio.play();
  }
  loseLifeFire(){
    this.total -= 0.002;
  }
  loseLifeSlow(){
    this.total -= 0.0005;
  }
  healSlow(){
    this.total += 0.001;
    if(this.life >=1){
      this.life = 1
    }
  }
  gainLife(){
    this.total += 0.2
    this.healAudio = new Audio("/assets/audios ad/Sanar.mp3")
    this.healAudio.volume = 0.15;
    this.healAudio.play();
  }
}
