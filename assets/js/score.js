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
    this.fireFloodImg.src = "/assets/images/infos/fireFloodImg.png";
    this.helperImg = new Image();
    this.helperImg.src = "/assets/images/PJ/helper6.png";
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
    if (solvedTotal >= 50) {
      this.ctx.font = "27px Arco";
      this.ctx.fillStyle = "aqua";
      this.ctx.fillText(`Director`, 1260, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Director`, 1259, 369);
    } else if (solvedTotal >= 35 ) {
      this.ctx.font = "27px Arco";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`Manager`, 1259, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Manager`, 1258, 369);
    } else if (solvedTotal >= 20 ) {
      this.ctx.font = "27px Arco";
      this.ctx.fillStyle = "tomato";
      this.ctx.fillText(`Supervisor`, 1254, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Supervisor`, 1253, 369);
      afterSpin = true; //activa los giros posteriores a los disparos básicos
    } else if (solvedTotal >= 0) {
      this.ctx.font = "27px Arco";
      this.ctx.fillStyle = "orange";
      this.ctx.fillText(`Associate`, 1255, 370);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Associate`, 1254, 369);
    }
    chance = Math.floor(solvedTotal / 5) //para actualizar
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
    ctx.fillRect(900, 60, 330, 140); 
      ctx.font = "16px Arial";
    ctx.fillStyle = "tomato";
    ctx.fillText("If you run out of complaint forms, you lose.", 905, 80);
    ctx.fillStyle = "white";
    ctx.fillText("You can't get new ones, so don't waste them.", 905, 98);
    ctx.fillText("When a Karen appears, run to negotiate fast", 905, 116);
    ctx.fillText("before she asks for a complaint form.", 905, 134);
    ctx.fillText("Press the spacebar in the green zone to", 905, 152);
    ctx.fillText("send her off happy to cause trouble again,", 905, 170);
    ctx.fillText("hopefully somewhere far away next time.", 905, 188);
  }

if (hoveredCustomers) {
  ctx.fillStyle = "rgba(37, 49, 50, 1)";
  ctx.fillRect(905, 100, 320, 160); 
  ctx.font = "16px Arial";
  ctx.fillStyle = "tomato";
  ctx.fillText("If 10 customers die, you lose the game.", 920, 120);
  ctx.fillStyle = "white";
  ctx.fillText("Lost kids or distracted clients may appear,", 920, 138);
  ctx.fillText("wandering toward deadly obstacles.", 920, 156);
  ctx.fillText("Stop them from walking into cacti, fire,", 920, 174);
  ctx.fillText("puddles, or other dangerous things.", 920, 192);
  ctx.fillText("They can also die from your own damage,", 920, 228);
  ctx.fillText("so aim carefully and avoid accidents.", 920, 246);
  ctx.fillStyle = "lime";
  ctx.fillText("Get close to save them—and regain rep.", 920, 210);
}
if (hoveredOffice) {
  ctx.fillStyle = "rgba(37, 49, 50, 1)";
  ctx.fillRect(925, 180, 300, 200); 
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("At the Main Office, your helper is", 950, 200);
  ctx.fillText("preparing upgrades and improvements,", 933, 218);
  ctx.fillText("for your gear which you can collect in", 933, 236);
  ctx.fillText(" various shops.", 1005, 254);
  ctx.fillStyle = "tomato";
  ctx.fillText("Your helper also handle alerts", 1005, 274);
  ctx.fillText("for dangers and events.", 1005, 292);
  ctx.fillStyle = "lime";
  ctx.fillText("When you return shopping", 1005, 312);
  ctx.fillText("carts, your helper receives ", 1005, 330);
  ctx.fillText("tools needed to upgrade", 1005, 348);
  ctx.fillText("your weapons.", 1005, 366);
  this.ctx.drawImage(this.helperImg, 926, 245, 75, 120)

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

if (showingPowerupBullet) {
  countdown1++;
  ctx.font = "20px Arial";
  ctx.shadowColor = "white";
  ctx.shadowBlur = 5;
  ctx.lineWidth = 4;
  ctx.fillStyle = "green";
  ctx.globalAlpha = 1 - countdown1/130
  ctx.fillText(`After Growth + 20`, game.player.x - 91, game.player.y - countdown1);

  ctx.fillStyle = "red";
  ctx.fillText(`Ammo size + 10`, game.player.x - 1, game.player.y - 21 - countdown1 / 1.1);

  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  this.ctx.globalAlpha = 1
}

if (showingPowerupWeapon) {
  countdown2++;
  ctx.font = "20px Arial";
  ctx.shadowColor = "white";
  ctx.shadowBlur = 5;
  ctx.lineWidth = 4;
  ctx.globalAlpha = 1 - countdown2/130

  ctx.fillStyle = "blue";
  ctx.fillText(`Bullet recharge time - 0.4s`, game.player.x - 102, game.player.y - 1 - countdown2);

  ctx.fillStyle = "darkgreen";
  ctx.fillText(`Bullet size + 50`, game.player.x - 40, game.player.y - 40 - countdown2 / 1.1);

  ctx.fillStyle = "red";
  ctx.fillText(`Bullet speed + 2`, game.player.x - 5, game.player.y - 20 - countdown2 / 1.1);

  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  this.ctx.globalAlpha = 1;
}

  }
  addSave() {
    this.save++;
  }
}
