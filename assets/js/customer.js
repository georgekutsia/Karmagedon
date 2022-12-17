class Customer {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      {x:200, y:0},{x:300, y:0}, {x:400, y:0}, {x:500, y:0}, {x:600, y:0}, {x:700, y:0}, {x:30, y:0}, {x:100, y:0}
    ]
    this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 0.06 * this.ctx.canvas.width;
    this.h = 0.10 * this.ctx.canvas.height;
    this.vx = 0;
    this.vy = 0.2;

    this.lifeleft = 1;
    this.dead = 0;
    this.tick = 0;
    this.images = [ "/assets/images/elements/customer4.png", 
                    "/assets/images/elements/customer17.png", 
                    "/assets/images/elements/customer13.png", 
                    "/assets/images/elements/customer8.png", 
                    "/assets/images/elements/customer15.png"]
    this.says = [
      "Such a nice place",
      "I'ts beautiful!",
      "I love this mall",
      "Ironmall is the best",
      "I hope I don't die",
      "Happy to be alive",
      "Hope nothing goes wrong",
      "What a clean place",
      "Just enjoying my life",
      "I like being alive so much"
    ]
    this.deadSays = [
      "What a horrible death!",
      "Im dead now!",
      "Why man!? why!?",
      "This hurts so much!",
      "So much blood!!"
    ]
    this.image = this.images[Math.floor(Math.random() * this.images.length)]
    this.say = this.says[Math.floor(Math.random() * this.says.length)]
    this.deadSay = this.deadSays[Math.floor(Math.random() * this.deadSays.length)]
    this.customImg = new Image();
    this.customImg.src = this.image;
    this.customImg.frame = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.customImg,
      (this.customImg.frame * this.customImg.width) / 5,
      0,
      this.customImg.width / 5, 
      this.customImg.height,
      this.x, 
      this.y, 
      this.w,
      this.h
    );
    this.ctx.font = "18px Arial";
    ctx.fillStyle = "rgb(251, 209, 209)";
    this.ctx.fillStyle = "black";
    this.order = this.ctx.fillText(this.say, this.x - 30, this.y - 3);
    this.ctx.fillStyle = "green";
    this.order = this.ctx.fillText(this.say, this.x - 29, this.y - 3);
    this.ctx.restore();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.tick++;
    
    if(this.y >= 0){
      this.vx = 0.4;
    }
    if(this.y >= 100){
      this.vx = -0.4;
      if(this.image === "/assets/images/elements/customer4.png"){
        this.customImg.src = "/assets/images/elements/customer3.png";
      } else if(this.image === "/assets/images/elements/customer17.png"){
        this.customImg.src = "/assets/images/elements/customer18.png";
      } else if(this.image === "/assets/images/elements/customer8.png"){
        this.customImg.src = "/assets/images/elements/customer7.png"
      } else if(this.image === "/assets/images/elements/customer13.png"){
        this.customImg.src = "/assets/images/elements/customer14.png"
      } else if(this.image === "/assets/images/elements/customer15.png"){
        this.customImg.src = "/assets/images/elements/customer16.png"
      }
    }
    if(this.y >= 200){
      this.vx = 0.4;
      this.customImg.src = this.image;
    }
    if(this.y >= 300){
      this.vx = -0.4;;
      if(this.image === "/assets/images/elements/customer4.png"){
        this.customImg.src = "/assets/images/elements/customer3.png";
      } else if(this.image === "/assets/images/elements/customer17.png"){
        this.customImg.src = "/assets/images/elements/customer18.png";
      } else if(this.image === "/assets/images/elements/customer8.png"){
        this.customImg.src = "/assets/images/elements/customer7.png"
      } else if(this.image === "/assets/images/elements/customer13.png"){
        this.customImg.src = "/assets/images/elements/customer14.png"
      } else if(this.image === "/assets/images/elements/customer15.png"){
        this.customImg.src = "/assets/images/elements/customer16.png"
      }
    }
    if(this.y >= 400){
      this.vx = 0.4;
      this.customImg.src = this.image;
    }
    
    if (this.tick > 7) {
      this.tick = 0;
      this.customImg.frame++;
    }

    if (this.x < 0) {
    }
    if (this.customImg.frame > 4) {
      this.customImg.frame = 0;
    }
    if(this.lifeleft <= 0){
      this.customImg.src = "/assets/images/elements/bloodStain.png"
      this.say = this.deadSay
      this.vx = 0;
      this.vy = 0;
      this.dead++
      if(this.dead >= 50){
        this.vx = -2000
      }
  }
  }

  isVisible() {
    return this.x + this.w > 0;
  }

  collides(player) {
    const colX = this.x + 10 <= player.x + player.w && this.x + this.w - 20 > player.x;
    const colY = this.y + this.h-5 > player.y && this.y + 10 < player.y + player.h;
    return colX && colY;
  }
}
