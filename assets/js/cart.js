class Cart {
    constructor(ctx) {
      this.ctx = ctx;

      this.salidas = [
        {x:310, y:400}, {x:310, y:200}, {x:125, y:15}, {x:155, y:320}, {x:900, y:420}, {x:805, y:120}, {x:950, y:40}
      ]
      this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
      this.x = this.xy.x;
      this.y = this.xy.y;
      // this.x = 310;
      // this.y = 400
      this.w = 30;
      this.h = 40;
      this.cartImg = new Image();
      this.cartImg.src = "/assets/images/elements/cart.png";
      this.cartImg.frame = 0;
  
      this.tick = 0;
    }
  
    draw() {
      this.ctx.drawImage(
        this.cartImg,
        0,
        (this.cartImg.frame * this.cartImg.height) / 4,
        this.cartImg.width, 
        this.cartImg.height / 4,
        this.x, 
        this.y, 
        this.w,
        this.h
      );
    }
  
    move() {
      this.tick++;
      if (this.tick > 20) {
        this.tick = 0;
        this.cartImg.frame++;
      }
      if (this.cartImg.frame > 3) {
        this.cartImg.frame = 0;
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
  