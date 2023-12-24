class Line {
  constructor(ctx, pla, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 120;
    this.h = 10;
    this.pla = pla
    this.total = 1;
    this.tick = 0;
    this.v = 1;
    this.a = -3;
    this.b = 3;
    this.check = 0;
    this.imgMinigame = new Image()
    this.imgMinigame.src = "/assets/images/fondos/minigame.png"
    ctx.font = "20px Verdana";
  }
  draw() {
    this.ctx.drawImage(
      this.imgMinigame, this.pla.x + 40, this.pla.y - 50, 120, 170
    )
    const prevStyle = this.ctx.fillStyle;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.88", "white");
    gradient.addColorStop("0.93", "black");
    gradient.addColorStop("1", "white");
    ctx.fillStyle = gradient;
    this.ctx.fillRect(this.pla.x + 40, this.y - 50, this.w * this.total, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeRect(this.pla.x + 40, this.y - 50, this.w, this.h);
  }
  move() {
    this.tick++;
    this.y -= this.v;
    if (this.y < this.pla.y) {
      this.v = this.a;
    } else if (this.y > this.pla.y + 170) this.v = this.b;
    const prevStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = "white";
    if (this.check === 1) {
      this.ctx.font = "19px Arial";
      ctx.fillStyle = "green";
      ctx.fillRect(this.pla.x + 42, this.pla.y , 120, 40);
      this.ctx.fillStyle = "black";
      this.ctx.fillText("Nice! She left!", this.pla.x + 45, this.pla.y + 30);
      this.ctx.fillStyle = "white";
      this.ctx.fillText("Nice! She left!", this.pla.x + 46, this.pla.y + 30);
      setTimeout(() => {
        this.check = 0;
      }, 2000);
    }
    if (this.check === 2) {
      this.ctx.font = "22px Arial";
      ctx.fillStyle = "black";
      ctx.fillRect(this.pla.x + 56, this.pla.y , 90, 40);
      this.ctx.fillStyle = "red";
      this.ctx.fillText("FAILED!", this.pla.x + 59, this.pla.y + 30);
      this.ctx.fillStyle = "white";
      this.ctx.fillText("FAILED!", this.pla.x + 60, this.pla.y + 30);
      setTimeout(() => {
        this.check = 0;
      }, 3000);
    }
    this.ctx.fillStyle = prevStyle;
  }
  keyDown(key) {
    if (key === SPACE) {
      this.checkPoint();
    }
  }
  checkPoint() {
    //se acelera la velocidad de la barra a medida que pasa el juego. cuanto con
    //mas karens se negocia, mas complicado se hace
    this.a -= 0.3;
    this.b += 0.3;
    if (this.y > this.pla.y + 60 && this.y < this.pla.y + 110) {
      this.check = 1;
    } else {
      this.check = 2;
    }
  }
}
