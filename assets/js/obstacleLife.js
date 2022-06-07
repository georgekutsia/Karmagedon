class ObstacleLife {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 115;
    this.y = 200;
    this.w = 180;
    this.h = 110;
    this.total = 1;
  }

  draw() {   
  }

  move() {
  }
  isAlive() {
    return this.obstacleLife.total > 0;
  }

  loseLife() {
    this.total -= 1;
    this.h -= 10;
    this.w -= 10;  
    //que disminuya de tamaño
  }
}
