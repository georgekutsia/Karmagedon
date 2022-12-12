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
    this.kkarens = 0;
    this.kkorens = 0;
    this.total = 0;
  }

  draw() {
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Custormers: `, 1040, 515);
    this.ctx.font = "24px Arco";
    this.ctx.fillText(`Solved problems: `, 1018, 575);
    this.ctx.fillStyle = "darkseagreen";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Boss:${this.kboss.toString()}`, 1112, 690);
    this.ctx.font = "20px Arco";
    this.ctx.fillText(`Korens:${this.kkorens.toString()}`, 1020, 660);
    this.ctx.fillText(`Karens:${this.kkarens.toString()}`, 1105, 660);
    this.ctx.fillStyle = "white";
    ctx.fillRect(1020, 670, 85, 25);
    this.ctx.fillStyle = "black";
    this.ctx.font = "23px Arco";
    this.ctx.fillText(`Total:${this.total.toString()}`, 1023, 690);
    this.ctx.fillStyle = "red";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Dead:${this.score.toString()}`, 1020, 545);
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.fillText(`Geese:${this.kgoose.toString()}`, 1020, 600);
    this.ctx.fillText(`Rats:${this.krat.toString()}`, 1110, 600);
    this.ctx.fillText(`Fires/floods:${this.kobstacle.toString()}`, 1040, 630);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
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
  addkkarens(){
    this.kkarens++
  }
  addkkorens(){
    this.kkorens++
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
    this.ctx.fillText( `Saved:${this.save.toString()}`, 1100, 545); 
    ctx.fillStyle = "rgb(251, 209, 209)"; this.ctx.restore();
  }

  addSave() {
    this.save++;
  }
}
