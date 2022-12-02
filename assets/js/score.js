class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1015;
    this.y = 570;
    this.score = 0;
    this.kgoose = 0;
    this.krat = 0;
    this.kobstacle = 0;

  }

  draw() {
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Custormers: `, 1040, 540);
    this.ctx.font = "19px Arco";
    this.ctx.fillText(`Eliminated problems: `, 1018, 585);
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Dead:${this.score.toString()}`, 1020, 565);
    this.ctx.fillText(`Geese:${this.kgoose.toString()}`, 1020, 605);
    this.ctx.fillText(`Rats:${this.krat.toString()}`, 1110, 605);
    this.ctx.fillText(`Fires/floods:${this.kobstacle.toString()}`, 1040, 625);
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
  addScore() {
    this.score++;
  }
}
class Saved {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = ctx.canvas.width - 175;
    this.y = 330;
    this.save = 0;
  }

  draw() {
    this.ctx.font = "22px Arco";
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillText( `Saved:${this.save.toString()}`, 1110, 565); 
    ctx.fillStyle = "rgb(251, 209, 209)"; this.ctx.restore();
  }

  addSave() {
    this.save++;
  }
}
