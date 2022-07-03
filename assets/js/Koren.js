class Koren {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      { x: 333, y: 100 },
      { x: 433, y: 100 },
      { x: 533, y: 100 },
      { x: 633, y: 100 },
      { x: 333, y: 400 },
      { x: 433, y: 400 },
      { x: 533, y: 400 },
      { x: 633, y: 400 },

    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.04 * this.ctx.canvas.width;
    this.h = 0.07 * this.ctx.canvas.height;
    this.v = 0.3;
    this.koren = new Image();
    this.koren.src = "/assets/images/elements/customer1.png";
    this.koren.frame = 0;

    this.tick = 0;
    this.korenEnd = 0;
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
      this.koren.src = "/assets/images/elements/customer1.png";
    } else {
      this.koren.src = "/assets/images/elements/customer2.png";
    }

    if (this.x == player.x && this.y == player.y) {
      this.v = 0;
    }

    if (this.tick > 10) {
      this.tick = 0;
      this.koren.frame++;
    }

    if (this.x < 0) {
    }
    if (this.koren.frame > 5) {
      this.koren.frame = 0;
    }

    if(this.korenEnd >=1300){
      this.v = 2;
      const crazyKaren = document.getElementById("boss-alert");
      crazyKaren.style.display = "none";

    }
  }

  isVisible() {
    return this.x + this.w > 0 && this.y + this.h < 600;
  }

  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
  }
}
