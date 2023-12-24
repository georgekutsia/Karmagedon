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
    this.pImageCount = pImage 
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Customers: `, 1240, 435);
    this.ctx.font = "24px Arco";
    this.ctx.fillText(`Solved problems: `, 1218, 495);
    this.ctx.fillStyle = "darkseagreen";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Boss:${this.kboss.toString()}`, 1312, 610);
    this.ctx.font = "20px Arco";
    this.ctx.fillText(`Korens: ${this.kkorens.toString()}`, 1220, 580);
    this.ctx.fillText(`Karens: ${this.kkarens.toString()}`, 1305, 580);
    this.ctx.fillStyle = "white";
    ctx.fillRect(1220, 615, 150, 25);
    this.ctx.fillStyle = "black";
    this.ctx.font = "21px Arco";
    this.ctx.fillText(`Total solved: ${this.total.toString()}`, 1223, 635);
    this.ctx.fillStyle = "red";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Dead: ${this.score.toString()}`, 1220, 465);
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.fillText(`Geese: ${this.kgoose.toString()}`, 1220, 520);
    this.ctx.fillText(`Rats: ${this.krat.toString()}`, 1310, 520);
    this.ctx.fillText(`Fires/floods: ${this.kobstacle.toString()}`, 1240, 550);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
    this.ctx.font = "26px Arial";
    if(this.total <= 19){
      this.ctx.fillStyle = "orange";
      this.ctx.fillText(`Supervisor`, 1240, 365);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Supervisor`, 1242, 366);
    } else if(this.total >= 20 && this.total <= 34){
      chance = 1
      afterSpin = true
      this.ctx.fillStyle = "tomato";
      this.ctx.fillText(`Manager`, 1244, 365);
      this.ctx.fillStyle = "tomato";
      this.ctx.fillText(`Manager`, 1246, 367);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Manager`, 1245, 366);
    } else if(this.total >= 35 && this.total <= 49){
      chance = 2
      afterSpin = true
      this.ctx.font = "22px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`General Manager`, 1211, 365);
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`General Manager`, 1213, 367);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`General Manager`, 1212, 366);
    } else if(this.total >= 50){
      chance = 3
      afterSpin = true
      this.ctx.font = "32px Arial";
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Director`, 1244, 365);
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Director`, 1246, 367);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Director`, 1245, 366);
    }
    this.ctx.font = "22px Arial";
    this.ctx.fillStyle = "white";
    this.order = this.ctx.fillText(`Luck lvl: ${chance.toString()}`, 970, 840);
    this.order = this.ctx.fillText(`Public Image: ${this.pImageCount.toString()}`, 970, 860);

    this.ctx.font = "23px Arial";
    this.ctx.fillStyle = "aqua";
    this.ctx.fillText(`money `, 1214, 395);
    this.ctx.fillStyle = "aqua";
    this.ctx.fillText(`money `, 1216, 397);
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`money ${money}$`, 1215, 396);
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
    this.ctx.fillText( `Saved: ${this.save.toString()}`, 1300, 465); 
    ctx.fillStyle = "rgb(251, 209, 209)"; 
    this.ctx.restore();
  }
  addSave() {
    this.save++;
  }
}
