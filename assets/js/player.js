class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 485;
    this.y = 420;

    this.w = 40;
    this.h = 40;

    this.vx = 0;
    this.vy = 0;
    

    this.life = 10;
    this.img = new Image();
    this.img.src = "/assets/images/PJ/MANAGER 1.png";
    this.img.frame = 0;

    this.tick = 0;
    this.life = new Life(ctx);
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frame * this.img.height) / 4,
      this.img.width,
      this.img.height / 4,
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.life.draw();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    this.tick++;

    if ((this.tick > 15 && this.vx) || (this.tick > 15 && this.vy)) {
      this.img.frame++;
      this.tick = 0;
    }

    if (this.img.frame > 3) {
      this.img.frame = 0;
    }

    this.life.move();

    // LIMITES DEL CANVAS =>//
    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }

    if (this.y + this.h > this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.h;
      this.vy = 0;
    }

    if (this.x + this.w * 2.7 > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w * 2.7;
      this.vx = 0;
    }

    if (this.x < 0) {
      this.x = 0;
      this.vx = 0;
    }
    // LIMITES DEL CANVAS <=//
  }
  hit() {
    this.life.loseLife();
  }

  isAlive() {
    return this.life.total > 0;
  }
  keyDown(key) {
    if (key === UP) {
      this.vy = -2;
      this.img.src = "/assets/images/PJ/MANAGER 1.png";
    }
    if (key === DOWN) {
      this.vy = 2;
      this.img.src = "/assets/images/PJ/MANAGER 3.png";
    }
    if (key === RIGHT) {
      this.vx = 2;
      this.img.src = "/assets/images/PJ/MANAGER 2.png";
    }
    if (key === LEFT) {
      this.vx = -2;
      this.img.src = "/assets/images/PJ/MANAGER 4.png";
    }
  }
  keyUp(key) {
    if (key === UP) {
      this.vy = 0;
    }
    if (key === DOWN) {
      this.vy = 0;
    }
    if (key === RIGHT) {
      this.vx = 0;
    }
    if (key === LEFT) {
      this.vx = 0;
    }
  }
}
