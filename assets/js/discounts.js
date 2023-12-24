class Discount {
    constructor(ctx, discx, discy, image) {
      this.ctx = ctx;
      this.salidas = [
        {x:10, y:20}, {x:10, y:584}, {x:323, y:20}, {x:323, y:250},
        {x:645, y:20}, {x:645, y:584}, {x:950, y:20}, {x:800, y:260}, 
        {x:1120, y:750}, {x:400, y:750}, {x:80, y:750}, {x:700, y:750}, 
      ]
      this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
      this.x = discx || this.xy.x;
      this.y = discy || this.xy.y;
      this.w = 0.04 * this.ctx.canvas.width;
      this.h = 0.04 * this.ctx.canvas.height;
      this.a = new Image();
      this.a.src = "/assets/images/elements/dis0.png";
      this.b = new Image();
      this.b.src = "/assets/images/elements/dis1.png";
      this.c = new Image();
      this.c.src = "/assets/images/elements/dis2.png";
      this.total = 0;
      this.randomImage = [this.a, this.b, this.c]
      this.image = image || this.randomImage[Math.floor(Math.random()*this.randomImage.length)]
      this.image.frame = 0;
      this.tick = 0;
      this.tock = 800;
      this.v = 0;
      this.vNegative = 0

    }
  // 2.4  7.2
    draw() {
      this.ctx.drawImage(
        this.image,
        0,
        (this.image.frame * this.image.height)/4,
        this.image.width, 
        this.image.height /4,
        this.x, 
        this.y, 
        this.w,
        this.h
      );
    }
  
    move(player) {
      this.tick++;
      this.tock--
      this.x += this.v;
      this.y += this.v;
      let followX = player.x - this.x;
      let followY = player.y - this.y;
      followX > 0 ? (this.x += this.v) : (this.x += this.v -this.vNegative);
      followY > 0 ? (this.y += this.v) : (this.y += this.v -this.vNegative);
      if (this.x == player.x && this.y == player.y) {
        this.v = 0;
      }
      if (this.tick > 90) {
        this.tick = 0;
        this.image.frame++;
      }
      if (this.image.frame > 3) {
        this.image.frame = 0;
      }
      this.ctx.font = "18px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 13, this.y - 5);
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 17, this.y - 1);
      this.ctx.fillStyle = "lime";
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 15, this.y - 3);
      if (this.tock <= 0){
        this.x = -100
      }
    }
    isVisible() {
      return this.x + this.w > 0 && this.x + this.w < 1400;
    }
    collides(player) {
      const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
      const colY = this.y + this.h > player.y && this.y < player.y + player.h;
      return colX && colY;
    }
  }
  