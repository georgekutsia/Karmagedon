class Upgrade {
    constructor(ctx) {
      this.ctx = ctx;


      this.x = 1005;
      this.y = 200;
      this.w = 60;
      this.h = 60;
      this.cartImg = new Image();
      this.cartImg.src = "/assets/images/elements/upgrade.png";
      this.cartImg.frame = 0;
  
      this.tick = 0;
      this.tock = 0;
    }
  
    draw() {
      this.ctx.drawImage(
        this.cartImg,
        0,
        (this.cartImg.frame * this.cartImg.height) / 1,
        this.cartImg.width, 
        this.cartImg.height / 1,
        this.x, 
        this.y, 
        this.w,
        this.h
      );
    }
  
    move() {
      this.tick++;
      this.tock++;
      if (this.tick > 60) {
        this.tick = 0;
        this.cartImg.frame++;
      }
      if (this.tock >= 800){
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
  