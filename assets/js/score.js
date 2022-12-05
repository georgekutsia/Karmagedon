class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1015;
    this.y = 570;
    this.score = 0;
    this.kgoose = 0;
    this.krat = 0;
    this.kobstacle = 0;
    this.kboss = 0;
    this.total = 60;
  }

  draw() {
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Custormers: `, 1040, 555);
    this.ctx.font = "19px Arco";
    this.ctx.fillText(`Eliminated problems: `, 1018, 600);
    this.ctx.fillStyle = "darkseagreen";
    this.ctx.font = "23px Arco";
    this.ctx.fillText(`Boss:${this.kboss.toString()}`, 1020, 660);
    this.ctx.fillText(`Karens:${this.kboss.toString()}`, 1100, 660);
    this.ctx.fillStyle = "white";
    ctx.fillRect(1020, 670, 110, 25);
    this.ctx.fillStyle = "black";
    this.ctx.font = "23px Arco";
    this.ctx.fillText(`Total:${this.total.toString()}`, 1030, 690);
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Dead:${this.score.toString()}`, 1020, 580);
    this.ctx.fillText(`Geese:${this.kgoose.toString()}`, 1020, 620);
    this.ctx.fillText(`Rats:${this.krat.toString()}`, 1110, 620);
    this.ctx.fillText(`Fires/floods:${this.kobstacle.toString()}`, 1040, 640);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
    if(this.total >= 5 ){
      
    }

  }
  addkobstacle(){
    this.kobstacle++
  }
  addkgoose(){
    this.kgoose++
  }
  addkrat(){
    this.krat++
  }
  addScore() {
    this.score++;
  }
  addkboss() {
    this.kboss++;
  }
  addktotal1(){
    this.total++
  }
  addktotal3(){
    this.total++
  }
  addktotal5(){
    this.total++
  }
}
class Saved {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = ctx.canvas.width - 175;
    this.y = 400;
    this.save = 0;
  }

  draw() {
    this.ctx.font = "22px Arco";
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillText( `Saved:${this.save.toString()}`, 1110, 580); 
    ctx.fillStyle = "rgb(251, 209, 209)"; this.ctx.restore();
  }

  addSave() {
    this.save++;
  }
}
