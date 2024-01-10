
//invierte la imagen de algo en Game 180 grados
function invertImage(ctx, x, y, w, h, img) {
  ctx.clearRect(x, y, w, h);
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(Math.PI);
  ctx.drawImage(img, -w / 2, -h / 2, w, h);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// crea un puf cuando desaparecen el chargo y las llamas
  function puddlePuff(elem){
    if (elem.h <= 20) {
      elem.puddleIsOn = false;
      elem.puffIsOn = true;
      elem.h = 30;
      elem.w = 30;
    }
  }
  function firePuff(elem){
    if (elem.h <= 20) {
      elem.fireIsOn = false;
      elem.puffIsOn = true;
      elem.h = 40;
      elem.w = 40;
    }
  }


  // efecto al atraer aguas o fuegos hacia el jugador con hook
 function hookCollideWaterFire(elem, hook, player){
    this.luzOnAudio = new Audio("/assets/audio/evap.mp3")
    this.luzOnAudio.volume = 0.07;
    this.luzOnAudio.play();
      if(elem.x < player.x){
        elem.x = elem.x + 40
      } else if (elem.x > player.x){
        elem.x = elem.x - 40
      } 
      if(elem.y < player.y){
        elem.y = elem.y +40
      } else if(elem.y > player.y){
        elem.y = elem.y - 40
      }
      if(elem.x < player.x){
        elem.x = elem.x + 40
      } else if (elem.x > player.x){
        elem.x = elem.x - 40
      } 
      if(elem.y < player.y){
        elem.y = elem.y +40
      } else if(elem.y > player.y){
        elem.y = elem.y - 40
      }
      hook.dispose = true
}




//salvar a los niños y los clientes
function saving(saved, player, customersMessage){
  saved.addSave()
  player.cooldownJump -= 100
  if(player.cooldownJump <=1000){
    player.cooldownJump = 1000;
  }
  player.getRespect(0.02)
  customersMessage = true
}
function dyingBaby(player, perjudiceMessage){
  player.loseRespect(0.02);
  perjudiceMessage = true
}
function dyingCustomer(player, perjudiceMessage){
  player.loseRespect(0.02)
  distance -= 0.05;
  player.booster -= 0.010;
  player.cooldownJump += 5;
  perjudiceMessage = true;
}
function angryKorenPopup(probability){
  let randomNumber = Math.floor(Math.random() *200);
  if(randomNumber % probability === 0){//20% probabilidad de que salga koren al dañar a boss
  }
}
function timeDamage(koren, player){
  if (koren.x < player.x) {
    koren.x -= 30;
    koren.h += (6-extraLife)
    koren.w += (6-extraLife)
  }
  if (koren.x > player.x) {
    koren.x += 30;
    koren.h += (6-extraLife)
    koren.w += (6-extraLife)
  }
  if (koren.y < player.y) {
    koren.y -= 30;
    koren.h += (6-extraLife)
    koren.w += (6-extraLife)
  }
  if (koren.y > player.y) {
    koren.y += 30;
    koren.h += (6-extraLife)
    koren.w += (6-extraLife)
  }
}

function creaturePushback(creature, distance, player){
  if (creature.x < player.x) {
    creature.x -= distance;
  }
  if (creature.x > player.x) {
    creature.x += distance;
  }
  if (creature.y < player.y) {
    creature.y -= distance;
  }
  if (creature.y > player.y) {
    creature.y += distance;
  }
}

function foodAndDiscountDrop(creature, foods, discounts){
const discRandom = Math.floor(Math.random() * 10)
const foodRandom = Math.floor(Math.random() * 10)
if(foodRandom == 1){
  const food = new Food(ctx, creature.x, creature.y + 80);
  foods.push(food);
}
if(discRandom == 1){
  this.disImage = new Image()
  this.disImage.src = "/assets/images/elements/disrat.png"
  const discount = new Discount(ctx, creature.x, creature.y - 80, this.disImage);
  discounts.push(discount);
}
}
function collidingWithClients(client, ctx, player){
  this.excla = new Image();
  this.excla.src = "/assets/images/elements/exclapep.png"
  ctx.drawImage(
  this.excla, client.x + 10, client.y - 10, 30,  30
  )
  player.loseRespect(0.0003)
  player.drawSorry()
}
function directDamagingClients(client, message, lostRespect, ctx, player){
  player.loseRespect(lostRespect)
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  ctx.fillText(`${message}`, client.x, client.y);
  ctx.fillStyle = "red";
  ctx.fillText(`${message}`, client.x-1, client.y-1);
  ctx.fillStyle = "black";
  ctx.fillText(`${message}`, client.x+1, client.y+1);
}
function directHelpingClients(client, message, wonRespect, ctx, player){
  player.getRespect(wonRespect)
  ctx.font = "20px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText(`${message}`, client.x, client.y);
  ctx.fillStyle = "blue";
  ctx.fillText(`${message}`, client.x-1, client.y-1);
  ctx.fillStyle = "aqua";
  ctx.fillText(`${message}`, client.x+1, client.y+1);
}
function stormHealingClients(client, message, ctx){
  player.getRespect(0.0005)
  ctx.font = "20px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText(`${message}`, client.x - 40, client.y - 28);
  ctx.fillStyle = "ble";
  ctx.fillText(`${message}`, client.x - 36, client.y-24);
  ctx.fillStyle = "aqua";
  ctx.fillText(`${message}`, client.x - 38, client.y-26);
}

// lo que ocurre al llegar a nivel 3
