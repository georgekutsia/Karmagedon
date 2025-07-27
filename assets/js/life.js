class Life {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1230;
    this.y = 50;
    this.w = 155;
    this.h = 25;
    this.total = lifeTotal;
    this.v = 2;
    ctx.font = "40px Verdana";
  }
  draw() {
const prevStyle = this.ctx.fillStyle;
let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

// Barra de vida con color dependiente de `this.total`
if (this.total <= 2) {
  gradient.addColorStop("0.68", "red");
  gradient.addColorStop("1", "red");
    this.ctx.fillStyle = "red";
  this.ctx.strokeStyle = "red";
} else if (this.total >= 5) {
  gradient.addColorStop("0.88", "limegreen");
  gradient.addColorStop("1", "chartreuse");
    this.ctx.fillStyle = "black";
  this.ctx.strokeStyle = "black";
} else {
  gradient.addColorStop("0.68", "red");
  gradient.addColorStop("1", "green");
    this.ctx.fillStyle = "white";
  this.ctx.strokeStyle = "white";
}

ctx.fillStyle = gradient;
this.ctx.fillRect(this.x, this.y, (this.w * this.total) / lifeTotal, this.h);
this.ctx.strokeRect(this.x, this.y, this.w, this.h);

this.ctx.font = "20px Sans";
this.ctx.lineWidth = 1;

if (this.total < 5) {
  this.ctx.fillStyle = "white";
  this.ctx.strokeStyle = "white";
} else {
  this.ctx.fillStyle = "black";
  this.ctx.strokeStyle = "black";
}

this.ctx.fillText(`Life`, 1300, 70);
this.ctx.strokeText(`Life`, 1300, 70);

this.ctx.fillText(`${Math.round(this.total * 100) / 100}`, 1235, 70);

this.ctx.fillStyle = prevStyle;
  }
  loseLife(damage) {
    this.total -=  damage;
    this.damageAudio = new Audio("/assets/audio/ouch.mp3");
    this.damageAudio.volume = 0.2;
    this.damageAudio.play();
  }
  healSlow(healing) {
    this.total += healing;
    if (this.total >= lifeTotal) {
      this.total = lifeTotal;
    }
  }

  heal(healing) {
    this.total += healing;
    // this.healAudio = new Audio("/assets/audios ad/Sanar.mp3");
    // this.healAudio.volume = 0.15;
    // this.healAudio.play();
    if (this.total >= lifeTotal) {
      this.total = lifeTotal;
    }
  }
}
