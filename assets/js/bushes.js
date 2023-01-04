class Bushes {
    constructor(ctx, x, y, w, h , imagen) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.bla = new Player(ctx)
      this.img = new Image();
      this.img.src = imagen;

    }
    draw() {
      this.ctx.drawImage(
        this.img,this.x, this.y, this.w, this.h
      )
    } 
    drawWarn(){
      this.ctx.drawImage(
        this.excla, this.x, this.y, this.w - 20, this.h - 20
      )
    }
    collides(player) {
      const colX = this.x + 5 <= player.x + player.w && this.x + this.w - 10 > player.x;
      const colY = this.y + this.h - 5 > player.y && this.y + 10 < player.y  + player.h;
      return colX && colY;
    }
  }
class Portal {
    constructor(ctx, x, y, w, h , stn) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.stn =stn
      this.bla = new Player(ctx)
      this.img = new Image();
      this.img.src = "/assets/images/elements/portal.png";
    }
    draw() {
      this.ctx.drawImage(
        this.img, this.x, this.y, this.w, this.h
      )
    } 
    collides(player) {
      const colX = this.x + 5 <= player.x + player.w && this.x + this.w - 10 > player.x;
      const colY = this.y + this.h - 5 > player.y && this.y + 10 < player.y  + player.h;
      return colX && colY;
    }
  }
class Wall {
    constructor(ctx, x, y, w, h , stn) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.stn =stn
      this.img = new Image();
      this.img.src = "/assets/images/fondos/brick-png-39828.png";
    }
    draw() {
      this.ctx.drawImage(
        this.img, this.x, this.y, this.w, this.h
      )
    } 
    
    collides(player) {
      const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
      const colY = this.y + this.h > player.y && this.y < player.y + player.h;
      return colX && colY;
    }
  }
class Cactus {
    constructor(ctx, x, y, w, h , cactusImg) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.img = new Image();
      this.img.src = cactusImg || "/assets/images/elements/cactus1.png";
    }
    draw() {
      this.ctx.drawImage(
        this.img,this.x, this.y, this.w, this.h
      )
    } 
    
    collides(player) {
      const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
      const colY = this.y + this.h > player.y && this.y < player.y + player.h;
      return colX && colY;
    }
  }
class Bush1 {
    constructor(ctx, x, y, w, h , stn) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.stn =stn
      this.img = new Image();
      this.img.src = "/assets/images/elements/bush1.png";
    }
    draw() {
      this.ctx.drawImage(
        this.img,this.x, this.y, this.w, this.h
      )
    } 
    collides(player) {
      const colX = this.x + 10 <= player.x + player.w && this.x + this.w - 10 > player.x;
      const colY = this.y + this.h -10 > player.y && this.y + 10 < player.y + player.h;
      return colX && colY;
    }
  }
class Bush2 {
    constructor(ctx, x, y, w, h , stn) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.stn =stn
      this.img = new Image();
      this.img.src = "/assets/images/elements/bush2.png";
    }
    draw() {
      this.ctx.drawImage(
        this.img,this.x, this.y, this.w, this.h
      )
    } 
    collides(player) {
      const colX = this.x + 10 <= player.x + player.w && this.x + this.w - 10 > player.x;
      const colY = this.y + this.h -10 > player.y && this.y + 10 < player.y + player.h;
      return colX && colY;
    }
  }
class Bush3 {
    constructor(ctx, x, y, w, h , stn) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.stn =stn
      this.img = new Image();
      this.img.src = "/assets/images/elements/bush3.png";
    }
    draw() {
      this.ctx.drawImage(
        this.img,this.x, this.y, this.w, this.h
      )
    } 
    collides(player) {
      const colX = this.x + 10 <= player.x + player.w && this.x + this.w - 10 > player.x;
      const colY = this.y + this.h -10 > player.y && this.y + 10 < player.y + player.h;
      return colX && colY;
    }
  }
class Fence {
    constructor(ctx, x, y, w, h , stn) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.stn =stn
      this.img = new Image();
      this.img.src = "/assets/images/elements/fence1.png";
    }
    draw() {
      this.ctx.drawImage(
        this.img,this.x, this.y, this.w, this.h
      )
    } 
    
    collides(player) {
      const colX = this.x + 10 <= player.x + player.w && this.x + this.w - 20 > player.x;
      const colY = this.y + this.h > player.y && this.y + 10 < player.y + player.h;
      return colX && colY;
    }
  }
class People {
    constructor(ctx, x, y, w, h , other) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.img = new Image();
      this.img.src = other;
      this.complaintList  = [
        "Nice spectacle!",
        "Cool entertainment",
        "Good job with that!",
        "Incredible effects!",
        "Can`t believe my eyes",
        "Such a nice ambience"
      ]
      this.complainOne = this.complaintList[Math.floor(Math.random() * this.complaintList.length)]

    }
    draw() {
      this.ctx.drawImage(
        this.img,this.x, this.y, this.w, this.h
      )
    } 
    
    collides(player) {
      const colX = this.x + 10 <= player.x + player.w && this.x + this.w - 10 > player.x;
      const colY = this.y + this.h > player.y && this.y + 10 < player.y + player.h;
      return colX && colY;
    }
  }
