class Food {
    constructor(ctx, foodx, foody, image) {
      this.ctx = ctx;
      this.salidas = [
        {x:135, y:175},  {x:270, y:130}, {x:440, y:150},{x:574, y:88},
        {x:236, y:380},  {x:125, y:470}, {x:760, y:480}, {x:865, y:365},
        {x:817, y:80},  {x:730, y:240}, {x:730, y:340}, {x:530, y:250},
        {x:200, y:240},
      ]
      this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
      this.imgFrame = Math.floor(Math.random() * 15) + 1
      this.x = foodx || this.xy.x;
      this.y = foody || this.xy.y;
      this.w = 45;
      this.h = 40;
      this.cartImg = new Image();
      this.cartImg.src = "/assets/images/elements/comidas.png"
      this.cartImg.frame = this.imgFrame;
      this.tick = 0;
      this.tock = 900;
      this.v = 0;
      this.vNegative = 0
    }
    draw() {
      this.ctx.drawImage(
        this.cartImg,
        0,
        (this.cartImg.frame * this.cartImg.height) / 16,
        this.cartImg.width, 
        this.cartImg.height / 16,
        this.x, 
        this.y, 
        this.w,
        this.h
      );
    }
    move(player) {
      this.tick++;
      this.tock--;
      this.x += this.v;
      this.y += this.v;
      let followX = player.x - this.x;
      let followY = player.y - this.y;
      followX > 0 ? (this.x += this.v) : (this.x += this.v -this.vNegative);
      followY > 0 ? (this.y += this.v) : (this.y += this.v -this.vNegative);
      if (this.x == player.x && this.y == player.y) {
        this.v = 0;
      }
      this.ctx.font = "18px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 9, this.y - 5);
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 13, this.y - 1);
      this.ctx.fillStyle = "lime";
      this.ctx.fillText(`${this.tock.toString()}`, this.x + 11, this.y - 3);
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
  