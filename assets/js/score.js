class Score {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = ctx.canvas.width - 170;
      this.y = 330
      this.score = 0;
    }
  
    draw() {
        ctx.fillRect(this.x -2, this.y -21, 165, 28);
        this.ctx.font = "17px Arco"
        this.ctx.fillStyle = "red";
      this.ctx.fillText(`Dead Custormers = ${this.score.toString()}`,this.x, this.y);
      ctx.fillStyle = "rgb(251, 209, 209)";
      this.ctx.restore();
    }
  
    addScore(){
        this.score++
    }
  }