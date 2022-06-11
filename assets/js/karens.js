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
      this.complaints =
      ["Manager!", "Police!", "Give me a claim form!"] 
      this.problems =[" I do not like this shops decor!", 
                      // "  I've been waiting 5 minutes!", 
                      // "  Speak English in my country!", 
                      // "All you workers are $%&# lazy!",
                      // "  You can't treat me like that!",
                      // "Why can't I use expired cupons!",
                      // " I do not like the uniform here!",
                      // "My husband is this malls CEO",
                      // "I am late! Work faster! faster!",
                      "You looked at me with disgust!",
                      "  I hate how this place smells!"
                      ]
      this.problem = this.problems[Math.floor(Math.random()*this.problems.length)]
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
      if(this.tick >= 150 ){
        this.ctx.font = "18px Arial"
        this.ctx.save()
        ctx.fillStyle = 'rgb(251, 209, 209)';
        ctx.fillRect(this.x - 92, this.y-21, 255, 22);
        this.ctx.fillStyle = "black"
        this.order = this.ctx.fillText(this.problem, this.x-90, this.y-3)
        this.ctx.restore()
      }
      if(this.tick >= 800){
        this.ctx.save()
        ctx.fillStyle = 'rgb(235, 106, 106)';
        ctx.fillRect(this.x + 28, this.y +1, 85, 22);
        this.ctx.fillStyle = "black"
        this.ctx.font = "19px Arial"
        this.order = this.ctx.fillText(this.complaints[0], this.x+30, this.y+20)
        this.ctx.restore()
      }
      if(this.tick >= 1600){
        this.ctx.save()
        ctx.fillStyle = 'rgb(236, 75, 75)';
        ctx.fillRect(this.x - 62, this.y, 64, 22);
        this.ctx.fillStyle = "black"
        this.ctx.font = "20px Arial"
        this.order = this.ctx.fillText(this.complaints[1], this.x-60, this.y+20);
        this.ctx.restore()
      }
      if(this.tick >= 2400){
        this.ctx.save()
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x - 72, this.y+30, 220, 24);
        this.ctx.fillStyle = "black"
        this.ctx.font = "22px Arial"
        this.order = this.ctx.fillText(this.complaints[2], this.x-70, this.y+50);
        this.ctx.restore()
      }
      if(this.tick >= 2450 && this.tick<=2451){
        formsCheck();
        forms.splice(0,1);
      }
      //tengo 2 cosas que cambia, el tick y el [?], como hacer un loop? a saber..
    }


    move() {
      this.x += this.vx;
      this.y += this.vy;
      this.tick++
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
      if(this.tick % 800 === 0){
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
  