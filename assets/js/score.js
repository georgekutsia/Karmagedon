class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1015;
    this.y = 570;
    this.score = 0;
    this.dollarImg = new Image();
    this.dollarImg.src = "/assets/images/infos/dollar.png"
    this.gooseImg = new Image();
    this.gooseImg.src = "/assets/images/infos/gooses.png"
    this.ratImg = new Image();
    this.ratImg.src = "/assets/images/infos/ratima.png"
    this.spiderImg = new Image();
    this.spiderImg.src = "/assets/images/infos/spiderImg.png"
    this.fireFloodImg = new Image();
    this.fireFloodImg.src = "/assets/images/infos/fireFloodImg.png"
  }
  
  draw() {
    if(!showPlayerJoBStats){
      this.ctx.font = "36px Arco";
    this.ctx.fillStyle = "lightblue";
      this.ctx.fillText(`^ ^ ^ ^`, 1250, 365);
      this.ctx.font = "26px Arco";
    this.ctx.fillStyle = "white";
      this.ctx.fillText(`Click on Office`, 1220, 380);
      this.ctx.fillText(`to see stats `, 1230, 405);
    this.ctx.restore();
    }
    if(showPlayerJoBStats){
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Customers: `, 1240, 415);
    this.ctx.fillStyle = "tomato";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Dead: ${this.score.toString()}`, 1220, 445);
    this.ctx.font = "22px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Solved problems: `, 1218, 475);
    this.ctx.drawImage( this.gooseImg, 1220, 480, 50 , 35 ) 
    this.ctx.drawImage( this.ratImg, 1275, 480, 50 , 35 ) 
    this.ctx.drawImage( this.spiderImg, 1330, 480, 50 , 35 ) 
    this.ctx.drawImage( this.fireFloodImg, 1220, 535, 30 , 35 ) 
    this.ctx.font = "25px Arco";
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.fillText(`${solvedGoose.toString()}`, 1235, 530);
    this.ctx.fillText(`${solvedRats.toString()}`, 1288, 530);
    this.ctx.fillText(`${solvedRats.toString()}`, 1348, 530);
    this.ctx.fillText(`${solvedWaterFire.toString()}`, 1260, 560);
    this.ctx.fillText(`${lampOn.toString()}`, 1310, 560);
    this.ctx.fillStyle = "darkseagreen";
    this.ctx.font = "22px Arco";
    this.ctx.fillText(`Boss:${solvedBoss.toString()}`, 1312, 610);
    this.ctx.font = "20px Arco";
    this.ctx.fillText(`Korens: ${solvedKorens.toString()}`, 1220, 580);
    this.ctx.fillText(`Karens: ${solvedKarens.toString()}`, 1305, 580);
    this.ctx.fillStyle = "white";
    ctx.fillRect(1220, 615, 150, 25);
    this.ctx.fillStyle = "black";
    this.ctx.font = "21px Arco";
    this.ctx.fillText(`Total solved: ${solvedTotal.toString()}`, 1223, 635);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
    this.ctx.font = "26px Arial";
    if(solvedTotal <= 19){
      this.ctx.fillStyle = "orange";
      this.ctx.fillText(`Supervisor`, 1240, 352);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Supervisor`, 1242, 353);
    } else if(solvedTotal >= 20 && solvedTotal <= 34){
      chance = 1
      this.ctx.fillStyle = "tomato";
      this.ctx.fillText(`Manager`, 1244, 365);
      this.ctx.fillStyle = "tomato";
      this.ctx.fillText(`Manager`, 1246, 367);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Manager`, 1245, 366);
    } else if(solvedTotal >= 35 && solvedTotal <= 49){
      chance = 2
      this.ctx.font = "22px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`General Manager`, 1211, 365);
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`General Manager`, 1213, 367);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`General Manager`, 1212, 366);
    } else if(solvedTotal >= 50){
      chance = 3
      this.ctx.font = "32px Arial";
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Director`, 1244, 365);
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Director`, 1246, 367);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Director`, 1245, 366);
    }
    
    this.ctx.font = "23px Arial";
    this.ctx.drawImage( this.dollarImg, 1212, 360, 30 , 25 ) 
    this.ctx.fillText(`: ${money}$`, 1242, 380);
  }
  if(showPlayerPhysicalStats){
    this.ctx.font = "22px Arial";
    this.ctx.fillStyle = "white";
    this.order = this.ctx.fillText(`Luck lvl: ${chance.toString()}`, 970, 840);
    this.order = this.ctx.fillText(`Public Image: ${publicImage.toString()}`, 970, 863);
    if(publicImageLevelup){
    this.ctx.fillStyle = "aqua";
    this.order = this.ctx.fillText(`Public Image: ${publicImage.toString()}`, 970, 863);
    setTimeout(() => {
      publicImageLevelup = false;
    }, 3000);
  }
  this.order = this.ctx.fillText(`Instinct: ${instinct.toString()}`, 970, 886);
  }
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
    if(showPlayerJoBStats) { 
    this.ctx.font = "22px Arco";
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillText( `Saved: ${this.save.toString()}`, 1300, 445); 
    ctx.fillStyle = "rgb(251, 209, 209)"; 
    this.ctx.restore();
    }
  }
  addSave() {
    this.save++;
  }
}
