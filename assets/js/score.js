class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = ctx.canvas.width - 175;
    this.y = 290;
    this.score = 0;
  }

  draw() {
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `Custormers: `,
      this.x + 20,
      this.y
    );
    this.ctx.fillStyle = "lightsalmon";
    this.ctx.fillText(
      `Dead:${this.score.toString()}`,
      this.x ,
      this.y + 30,
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
    this.ctx.font = "27px Arco";
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillText(
      `Saved:${this.save.toString()}`,
      this.x + 85 ,
      this.y - 10
    );
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.restore();
  }

  addSave() {
    this.save++;
  }
}
