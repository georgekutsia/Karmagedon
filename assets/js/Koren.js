class Koren {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      { x: 333, y: 100 },{ x: 433, y: 100 },{ x: 533, y: 100 },{ x: 633, y: 100 },
      { x: 1033, y: 100 },{ x: 333, y: 400 },{ x: 433, y: 400 },{ x: 533, y: 400 },
      { x: 633, y: 400 },{ x: 833, y: 400 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.04 * this.ctx.canvas.width;
    this.h = 0.07 * this.ctx.canvas.height;
    this.v = 0.3;
    this.ks1 = new Audio("/assets/audio/korens/koren1.m4a");
    this.ks1.volume = 0.1;
    this.ks2 = new Audio("/assets/audio/korens/koren2.m4a");
    this.ks2.volume = 0.1;
    this.ks3 = new Audio("/assets/audio/korens/koren3.m4a");
    this.ks3.volume = 0.1;
    this.ks4 = new Audio("/assets/audio/korens/koren4.m4a");
    this.ks4.volume = 0.1;
    this.ks5 = new Audio("/assets/audio/korens/koren5.m4a");
    this.ks5.volume = 0.1;
    this.ks6 = new Audio("/assets/audio/korens/koren6.m4a");
    this.ks6.volume = 0.1;
    this.ks7 = new Audio("/assets/audio/korens/koren7.m4a");
    this.ks7.volume = 0.1;
    this.ks8 = new Audio("/assets/audio/korens/koren8.m4a");
    this.ks8.volume = 0.1;
    this.korenSounds = [this.ks1,this.ks2,this.ks3,this.ks4,this.ks5,this.ks6,this.ks7,this.ks8];
    this.korenSounds[Math.floor(Math.random() * this.korenSounds.length)].play();
    this.huckSound = true
    this.tick = 0;
    this.korenEnd = 0;
    this.truth = false
    this.images = [
      "/assets/images/elements/koren1.png",
      "/assets/images/elements/koren3.png",
      "/assets/images/elements/koren5.png",
      "/assets/images/elements/koren7.png",
      "/assets/images/elements/koren9.png",
    ]
    this.says = [
      "Don`t touch my girl",
      "I'm gonna beat U up!",
      "Come here U sucker!",
      "Gonna burn this place down!",
      "U better run U little shit!",
    ]
    this.say = this.says[Math.floor(Math.random() * this.says.length)]
    this.image = this.images[Math.floor(Math.random() * this.images.length)]
    this.koren = new Image();
    this.koren.src = this.image;
    this.koren.frame = 0;

  }

  draw() {
    this.ctx.drawImage(
      this.koren,
      (this.koren.frame * this.koren.width) / 6,
      0,
      this.koren.width / 6,
      this.koren.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ctx.font = "18px Arial";
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.fillStyle = "black";
    this.order = this.ctx.fillText(this.say, this.x - 40, this.y - 3);
    this.ctx.fillStyle = "red";
    this.order = this.ctx.fillText(this.say, this.x - 39, this.y - 3);
    this.ctx.restore();
  }

  move(player) {
    this.x += this.v;
    this.y += this.v;
    this.tick++;
    this.korenEnd++;
    let followX = player.x - this.x;
    let followY = player.y - this.y;

    followX > 0 ? (this.x += this.v) : (this.x += this.v -0.9);
    followY > 0 ? (this.y += this.v) : (this.y += this.v -0.9);
    if(followX > 0){
      if(this.image === "/assets/images/elements/koren1.png"){
        this.koren.src = "/assets/images/elements/koren1.png";
      } else if(this.image === "/assets/images/elements/koren3.png"){
        this.koren.src = "/assets/images/elements/koren4.png";
      } else if(this.image === "/assets/images/elements/koren5.png"){
        this.koren.src = "/assets/images/elements/koren5.png";
      } else if(this.image === "/assets/images/elements/koren7.png"){
        this.koren.src = "/assets/images/elements/koren7.png";
      } else if(this.image === "/assets/images/elements/koren9.png"){
        this.koren.src = "/assets/images/elements/koren9.png";
      } 
    } else {
      if(this.image === "/assets/images/elements/koren1.png"){
        this.koren.src = "/assets/images/elements/koren2.png";
      } else if(this.image === "/assets/images/elements/koren3.png"){
        this.koren.src = "/assets/images/elements/koren3.png";
      } else if(this.image === "/assets/images/elements/koren5.png"){
        this.koren.src = "/assets/images/elements/koren6.png";
      } else if(this.image === "/assets/images/elements/koren7.png"){
        this.koren.src = "/assets/images/elements/koren8.png";
      } else if(this.image === "/assets/images/elements/koren9.png"){
        this.koren.src = "/assets/images/elements/koren10.png";
      } 
    }
    if (this.x == player.x && this.y == player.y) {
      this.v = 0;
    }
    if (this.tick > 10) {
      this.tick = 0;
      this.koren.frame++;
    }
    if (this.koren.frame > 5) {
      this.koren.frame = 0;
    }
    if(this.h >= 121){
      this.v = 1.5
      this.y = 650
      this.say = "F U, I'm Moonwalking"
    }
    if(this.korenEnd >=400){
      this.v = 2;
      this.say = "F THIS, I'm leaving backwords"
    }
    if(this.huckSound === true && this.h>=121 || this.huckSound === true && this.korenEnd >= 400){
      this.huckYou = new Audio("/assets/audio/korens/huckYou.m4a");
      this.huckYou.volume = 0.1;
      this.huckYou.play();
      this.huckSound = false
    }
  }

  isVisible() {
    return this.x + this.w > 0 && this.y + this.h < 780 && this.x < 1200;
  }

  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}
