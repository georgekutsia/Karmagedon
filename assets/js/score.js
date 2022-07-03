class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = ctx.canvas.width - 175;
    this.y = 330;
    this.score = 0;
  }

  draw() {
    ctx.fillRect(this.x - 3, this.y - 25, 165, 35);
    this.ctx.font = "17px Arco";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(
      `Custormers: `,
      this.x,
      this.y
    );
    this.ctx.fillStyle = "red";
    this.ctx.fillText(
      `Dead=${this.score.toString()}`,
      this.x + 90,
      this.y -9,
    );
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
  }

  addScore() {
    this.score++;
  }
}
class Saved {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = ctx.canvas.width - 175;
    this.y = 330;
    this.save = 0;
  }

  draw() {
    this.ctx.font = "17px Arco";
    this.ctx.fillStyle = "blue";
    this.ctx.fillText(
      `Saved=${this.save.toString()}`,
      this.x + 90 ,
      this.y +8
    );
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
  }

  addSave() {
    this.save++;
  }
}
