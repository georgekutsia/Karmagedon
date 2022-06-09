class Karens {
    constructor(ctx) {
      this.ctx = ctx;
      this.salidas = [
        {x:155, y:100}, {x:485, y:100}, {x:805, y:100}, {x:155, y:420}, {x:485, y:420}, {x:805, y:420}
      ]
      this.xy = this.salidas[Math.floor(Math.random()*this.salidas.length)]
      this.x = this.xy.x;
      this.y = this.xy.y;
      this.w = 20;
      this.h = 20;

      this.vx = -0.3;
      this.vy = -0.3;
  


      this.karens = new Image();
      this.karens.src = "/assets/images/karens/karen1.png";
      this.tick = 0;
      this.time=0
      this.complaints =
      ["Manager!", "Who`se in charge?", "Police!", "Give me a claim form!"] 
    }
  
    draw() {
      this.ctx.drawImage(
        this.karens,this.x, this.y, this.w, this.h,
      ) 
      this.line = new Line(ctx)
      if(this.line.check <= 3){
      }     
      
      //que salgan distintos mensajes a medida que se enfada y se hace grande

      this.tick++

      if(this.tick >= 400 ){
        this.ctx.font = "18px Arial"
        this.order = this.ctx.fillText(this.complaints[0], this.x-20, this.y-1)
      }
      if(this.tick >= 800){
        this.ctx.font = "19px Arial"
        this.order = this.ctx.fillText(this.complaints[1], this.x+30, this.y+20)
      }
      if(this.tick >= 1200){
        this.ctx.font = "20px Arial"
        this.order = this.ctx.fillText(this.complaints[2], this.x-60, this.y+20);
      }
      if(this.tick >= 1600){
        this.ctx.font = "22px Arial"
        this.order = this.ctx.fillText(this.complaints[3], this.x-70, this.y+50);
      }
      if(this.tick >= 1800 && this.tick<=1801){
        formsCheck();
        forms.splice(0,1);
      }
      //tengo 2 cosas que cambia, el tick y el [?], como hacer un loop? a saber..
    }


    move() {
      this.x += this.vx;
      this.tick++

   if(this.tick % 200 === 0){
     this.vy += 0.5
   }


      if(this.tick % 100 === 0){
        this.vx = 0.3;
      } else if(this.tick % 201 === 0){
        this.vy = 0.3;
      } else if(this.tick % 302 === 0){
        this.vx = -0.3;
      } else if(this.tick % 403 === 0){
        this.vx = -0.3;
        this.vy = -0.3;
      }
      if(this.tick % 400 === 0){
        this.w += 5;
        this.h += 5;
      }
    }
  
    isVisible() {
      return this.y + this.h > 0 && this.w < 45;
    }
  
    collides(player) {
      //para que la colision sea un acercamiento al área
      const colX = this.x <= player.x + player.w +30 && this.x + this.w+30 > player.x;
      const colY = this.y + this.h+30 > player.y && this.y < player.y + player.h + 30;
      return colX && colY;
    }
  }
  