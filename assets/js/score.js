class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1015;
    this.y = 570;
    this.dead = 4;
    this.gooseImg = new Image();
    this.gooseImg.src = "/assets/images/infos/gooses.png"
    this.ratImg = new Image();
    this.ratImg.src = "/assets/images/infos/ratima.png"
    this.lamp = new Image();
    this.lamp.src = "/assets/images/elements/lamp.png"
    this.fireFloodImg = new Image();
    this.fireFloodImg.src = "/assets/images/infos/fireFloodImg.png"
  }
  
  draw() {
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Customers: `, 1242, 175);
    this.ctx.fillStyle = "tomato";
    this.ctx.font = "21px Arco";
    this.ctx.fillText(`Dead:${this.dead.toString()}`, 1230, 200);
    if(!showPlayerJoBStats){
      this.ctx.font = "36px Arco";
    this.ctx.fillStyle = "lightblue";
      this.ctx.fillText(`^`, 1300, 365);
      this.ctx.font = "22px Arco";
    this.ctx.fillStyle = "white";
      this.ctx.fillText(`Click to see stats`, 1232, 380);
    this.ctx.restore();
    }
    if(showPlayerJoBStats){
    this.ctx.font = "22px Arco";
    this.ctx.fillStyle = "green";
    this.ctx.fillText(`Solved problems: `, 1229, 430);
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Solved problems: `, 1230, 429);
    this.ctx.drawImage( this.gooseImg, 1223, 440, 50 , 35 ) 
    this.ctx.drawImage( this.ratImg, 1310, 440, 50 , 35 ) 
    this.ctx.drawImage( this.fireFloodImg, 1230, 485, 30 , 35 ) 
    this.ctx.drawImage( this.lamp, 1300, 485, 50 , 35 ) 
    this.ctx.font = "25px Arco";
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.fillText(`${solvedGoose.toString()}`, 1275, 470);
    this.ctx.fillText(`${solvedRats.toString()}`, 1360, 470);
    this.ctx.fillText(`${solvedWaterFire.toString()}`, 1275, 513);
    this.ctx.fillText(`${lampOn.toString()}`, 1360, 513);
    this.ctx.fillStyle = "darkseagreen";
    this.ctx.font = "20px Arco";
    this.ctx.fillText(`Korens:`, 1230, 550);
    this.ctx.fillText(`Karens:`, 1313, 550);
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.fillText(`${solvedKorens.toString()}`, 1296, 550);
    this.ctx.fillText(` ${solvedKarens.toString()}`, 1372, 550);
    this.ctx.fillStyle = "white";
    ctx.fillRect(1235, 565, 150, 25);
    this.ctx.fillStyle = "black";
    this.ctx.font = "21px Arco";
    this.ctx.fillText(`Total solved: ${solvedTotal.toString()}`, 1240, 585);
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
    this.ctx.font = "26px Arco";
    if(hookBoost || !machinegunBoost || elementBoost){
        this.ctx.save();
        this.ctx.font = "22px Arco";
        this.ctx.fillStyle = "green";
        this.ctx.fillText(`Special Weapons`, 1234, 620);
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`Special Weapons`, 1233, 619);
      }
      if(solvedTotal <= 19){
      this.ctx.font = "27px Arco";
      this.ctx.fillStyle = "orange";
      this.ctx.fillText(`Supervisor`, 1243, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Supervisor`, 1241, 369);
    } else if(solvedTotal >= 20 && solvedTotal <= 34){
      chance = 1
      this.ctx.fillStyle = "tomato";
      this.ctx.font = "27px Arco";
      this.ctx.fillText(`Manager`, 1259, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Manager`, 1258, 369);
    } else if(solvedTotal >= 35 && solvedTotal <= 49){
      chance = 2
      this.ctx.font = "18px Arco";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`General Manager`, 1233, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`General Manager`, 1232, 369);
    } else if(solvedTotal >= 50){
      chance = 3
      this.ctx.font = "32px Arco";
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Director`, 1252, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Director`, 1251, 369);
    }
    
    this.ctx.font = "23px Arco";
    this.ctx.fillText(`Budget`, 1233, 395);
    this.ctx.font = "21px Arco";
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.fillText(` ${money}$`, 1300, 397);
  }


  // dibujar mensajes al hacer hover
  // dibujar mensajes al hacer hover
// distancia de 18 en eje Y para separar bien el texto
  // life
      if (hoveredLife) {
      ctx.fillStyle = "rgba(37, 49, 50, 1)";
      ctx.fillRect( 950, 30, 275, 160,); // fondo semitransparente para visibilidad
      ctx.font = "16px Arial";
      ctx.fillStyle = "tomato";
      ctx.fillText("If your life reaches 0, you lose.", 962, 50);
      ctx.fillStyle = "white";
      ctx.fillText("Food heals you. You can wait at", 962, 68);
      ctx.fillText("Slurp & Glurp to eat. If the Ice", 962, 86);
      ctx.fillText("Machine is fixed, you can heal by", 962, 104);
      ctx.fillText("eating ice cream at the Candy Shop.", 962, 122);
      ctx.fillStyle = "lime";
      ctx.fillText("Shooting fat customers, geese, and ", 962, 140);
      ctx.fillText("rats may make them drop food", 962, 158);
      ctx.fillText("they have stolen.", 962, 176);

    } 

      if (hoveredReputation) {
      ctx.fillStyle = "rgba(37, 49, 50, 1)";
      ctx.fillRect( 905, 30, 320, 215,); 
      ctx.fillStyle = "tomato";
      ctx.font = "16px Arial";
      ctx.fillText("If you lose all your reputation, you lose.", 920, 50);
      ctx.fillStyle = "white";
      ctx.fillText("You lose reputation by hitting customers,", 920, 68);
      ctx.fillText("hurting them, or letting them die.", 920, 86);
      ctx.fillText(" You can regain it using special discounts", 920, 104);
      ctx.fillText("offered randomly by some stores, or by", 920, 122);
      ctx.fillText("turning on all mall lamps, returning carts,", 920, 140);
      ctx.fillText("and saving kids or customers before", 920, 158);
      ctx.fillText("they burn, drown, or get hurt by cacti.", 920, 176);
      ctx.fillStyle = "lime";
      ctx.fillText(" Improving your public image and keeping", 920, 194);
      ctx.fillText("your reputation high will increase how fast", 920, 212);
      ctx.fillText("you earn profits and find upgrade items.", 920, 230);
    } 
  if (hoveredComplaints) {
    ctx.fillStyle = "rgba(37, 49, 50, 1)";
    ctx.fillRect(900, 30, 330, 140); 
    ctx.fillStyle = "tomato";
    ctx.font = "16px Arial";
    ctx.fillText("If you run out of complaint forms, you lose.", 905, 50);
    ctx.fillStyle = "white";
    ctx.fillText("You can't get new ones, so don't waste them.", 905, 68);
    ctx.fillText("When a Karen appears, run to negotiate fast", 905, 86);
    ctx.fillText("before she asks for a complaint form.", 905, 104);
    ctx.fillText("Press the spacebar in the green zone to", 905, 122);
    ctx.fillText("send her off happy to cause trouble again,", 905, 140);
    ctx.fillText("hopefully somewhere far away next time.", 905, 158);
  }
}
    addDead(){
      this.dead++;
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
    this.ctx.font = "21px Arco";
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillText( `Saved:${this.save.toString()}`, 1307, 200); 
    ctx.fillStyle = "rgb(251, 209, 209)"; 
    this.ctx.restore();
  }
  addSave() {
    this.save++;
  }
}
