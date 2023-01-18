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
    this.total = 60;
  }

  draw() {
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Customers: `, 1240, 515);
    this.ctx.font = "24px Arco";
    this.ctx.fillText(`Solved problems: `, 1218, 575);
    this.ctx.fillStyle = "darkseagreen";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Boss:${this.kboss.toString()}`, 1312, 690);
    this.ctx.font = "20px Arco";
    this.ctx.fillText(`Korens:${this.kkorens.toString()}`, 1220, 660);
    this.ctx.fillText(`Karens:${this.kkarens.toString()}`, 1305, 660);
    this.ctx.fillStyle = "white";
    ctx.fillRect(1220, 670, 85, 25);
    this.ctx.fillStyle = "black";
    this.ctx.font = "23px Arco";
    this.ctx.fillText(`Total:${this.total.toString()}`, 1223, 690);
    this.ctx.fillStyle = "red";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Dead:${this.score.toString()}`, 1220, 545);
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.fillText(`Geese:${this.kgoose.toString()}`, 1220, 600);
    this.ctx.fillText(`Rats:${this.krat.toString()}`, 1310, 600);
    this.ctx.fillText(`Fires/floods:${this.kobstacle.toString()}`, 1240, 630);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
    this.ctx.font = "26px Arial";
    if(this.total <= 19){
      this.ctx.fillStyle = "orange";
      this.ctx.fillText(`Supervisor`, 1240, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Supervisor`, 1242, 371);
    } else if(this.total >= 20 && this.total <= 34){
      chance = 1
      this.ctx.fillStyle = "tomato";
      this.ctx.fillText(`Manager`, 1244, 370);
      this.ctx.fillStyle = "tomato";
      this.ctx.fillText(`Manager`, 1246, 372);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Manager`, 1245, 371);
    } else if(this.total >= 35 && this.total <= 49){
      chance = 2
      this.ctx.font = "22px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`General Manager`, 1211, 370);
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`General Manager`, 1213, 372);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`General Manager`, 1212, 371);
    } else if(this.total >= 50){
      chance = 3
      this.ctx.font = "32px Arial";
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Director`, 1244, 370);
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Director`, 1246, 372);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Director`, 1245, 371);
    }
    this.ctx.font = "26px Arial";
    this.ctx.fillStyle = "white";
    this.order = this.ctx.fillText(`Luck lvl: ${chance.toString()}`, 1240, 400);
  }
  // addTotalScore(){
  //   this.total += 50
  // }
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
    this.ctx.fillText( `Saved:${this.save.toString()}`, 1300, 545); 
    ctx.fillStyle = "rgb(251, 209, 209)"; 
    this.ctx.restore();
  }
  addSave() {
    this.save++;
  }
}
