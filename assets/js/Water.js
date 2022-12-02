class Water {
    constructor (ctx, x, y,  player){
      this.ctx= ctx;
      this.x = x;
      this.y = y;
      this.sa = 0;
      this.w = bulletSize + this.sa
      this.h = bulletSize + this.sa
      this.bla = 0;
      this.vx = 0;
      this.vy = 0;
      this.player = player;


      this.dispose = false;
      this.waterImg = new Image();
      this.waterImg.src = "/assets/images/elements/puddle.png";
      
      this.waterShootAudio = new Audio("/assets/audio/splash0.mp3")
      this.waterShootAudio.volume = 0.01;
      this.waterShootAudio.play();
    }
  
    draw() {
      this.ctx.drawImage(
        this.waterImg,this.x, this.y, this.w, this.h
      )
    }
  
    move() {
      this.x += this.vx;
      this.y += this.vy;
      this.h += 0.2 ;
      this.w += 0.2;
      if(
        this.x >= this.player.x + bulletDistance + this.bla || 
        this.y >= this.player.y + bulletDistance + this.bla ||
        this.x <= this.player.x - bulletDistance - this.bla || 
        this.y <= this.player.y - bulletDistance - this.bla 
          ) {
          this.vx = 0;
          this.vy = 0;
          this.waterImg.src = "/assets/images/munición/water.png";
          if (this.h >= afterSize + this.sa  + 40) {
            this.dispose = true;
          }
          if (this.w >= afterSize + this.sa + 40) {
            this.dispose = true;
          }
      }  
    }  
    isVisible() {
      return !this.dispose
    }
    collides(puddle) {
      const colX = this.x <= puddle.x + puddle.w && this.x + this.w > puddle.x;
      const colY = this.y + this.h > puddle.y && this.y < puddle.y + puddle.h;
      return colX && colY;
    }
  }