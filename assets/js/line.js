class Line {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1011;
    this.y = 50;
    this.w = 180;
    this.h = 10;
    this.total = 1;
    this.tick = 0;
    this.v = 1;
    this.a = -3;
    this.b = 3;
    this.check = 0;
    ctx.font = "20px Verdana";
  }

  draw() {
    const prevStyle = this.ctx.fillStyle;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    this.ctx.strokeStyle = "yellow";
    gradient.addColorStop("0.88", "white");
    gradient.addColorStop("0.93", "black");
    gradient.addColorStop("1", "white");
    ctx.fillStyle = gradient;
    this.ctx.fillRect(this.x, this.y, this.w * this.total, this.h);
    this.ctx.fillStyle = prevStyle;
    this.ctx.strokeRect(this.x, this.y, this.w, this.h);
  }
  move() {
    this.tick++;
    this.y -= this.v;
    if (this.y < 0) {
      this.v = this.a;
    } else if (this.y > 165) this.v = this.b;
    const prevStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = "white";
    if (this.check > 0 && this.check <= 2) {
      this.ctx.font = "18px Arial";
      this.ctx.fillText("Bullseye! bye Karen!", this.x, this.y - 2);
      setTimeout(() => {
        this.check = 0;
      }, 3000);
    }
    if (this.check >= 3) {
      this.ctx.font = "18px Arial";
      this.ctx.strokeText("FAIL!", this.x + 20, this.y - 2);
      this.ctx.fillText("FAIL!", this.x + 20, this.y - 2);
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
    if (this.y > 50 && this.y < 110) {
      this.check = 1;
    } else {
      this.check = 4;
    }
  }
}
