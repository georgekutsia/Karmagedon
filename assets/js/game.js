class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.player = new Player(ctx);
    this.karen = new Karens(ctx);
    this.token = new Token(ctx);
    this.line = new Line(ctx);
    this.walls = [
      new Wall(ctx, 60, 50, 30, 70),
      new Wall(ctx, 60, 110, 30, 70),
      new Wall(ctx, 60, 170, 30, 70),

      new Wall(ctx, 285, 170, 30, 70),
      new Wall(ctx, 285, 110, 30, 70),
      new Wall(ctx, 285, 50, 30, 70),


      new Wall(ctx, 380, 170, 30, 70),
      new Wall(ctx, 380, 110, 30, 70),
      new Wall(ctx, 380, 50, 30, 70),


      new Wall(ctx, 610, 170, 30, 70),
      new Wall(ctx, 610, 110, 30, 70),
      new Wall(ctx, 610, 50, 30, 70),

      new Wall(ctx, 700, 50, 30, 70),
      new Wall(ctx, 700, 110, 30, 70),
      new Wall(ctx, 700, 170, 30, 70),

      new Wall(ctx, 925, 50, 30, 70),
      new Wall(ctx, 925, 110, 30, 70),
      new Wall(ctx, 925, 170, 30, 70),

      new Wall(ctx, 90, 50, 50, 30),
      new Wall(ctx, 240, 50, 50, 30),
      new Wall(ctx, 410, 205, 50, 30),
      new Wall(ctx, 560, 205, 50, 30),
      new Wall(ctx, 490, 130, 30, 50),
      new Wall(ctx, 490, 80, 30, 50),
      new Wall(ctx, 730, 50, 50, 30),
      new Wall(ctx, 870, 50, 50, 30),

      new Wall(ctx, 60, 320, 30, 70),
      new Wall(ctx, 60, 380, 30, 70),
      new Wall(ctx, 60, 440, 30, 70),
      
      new Wall(ctx, 285, 320, 30, 70),
      new Wall(ctx, 285, 380, 30, 70),
      new Wall(ctx, 285, 440, 30, 70),
      
      new Wall(ctx, 380, 320, 30, 70),
      new Wall(ctx, 380, 380, 30, 70),
      new Wall(ctx, 380, 440, 30, 70),

      
      new Wall(ctx, 610, 320, 30, 70),
      new Wall(ctx, 610, 380, 30, 70),
      new Wall(ctx, 610, 440, 30, 70),

      new Wall(ctx, 700, 320, 30, 70),
      new Wall(ctx, 700, 380, 30, 70),
      new Wall(ctx, 700, 440, 30, 70),
      
      new Wall(ctx, 925, 320, 30, 70),
      new Wall(ctx, 925, 380, 30, 70),
      new Wall(ctx, 925, 440, 30, 70),

      new Wall(ctx, 90, 320, 50, 30),
      new Wall(ctx, 240, 320, 50, 30),
      new Wall(ctx, 90, 480, 50, 30),
      new Wall(ctx, 240, 480, 50, 30),

      new Wall(ctx, 410, 320, 50, 30),
      new Wall(ctx, 560, 320, 50, 30),
      new Wall(ctx, 465, 450, 50, 30),
      new Wall(ctx, 500, 450, 50, 30),

      new Wall(ctx, 880, 320, 50, 30),
      new Wall(ctx, 830, 320, 50, 30),
      new Wall(ctx, 730, 480, 50, 30),
      new Wall(ctx, 780, 480, 50, 30),
    ]

    this.tack = 300; //karen
    this.tuck = 300  //puddle
    this.tick = 0;  // rat
    this.tock = 100; //fat
    this.winTime = 0; 
    this.interval = null;
    this.puddleLife = 1;



    this.karens = [];
    this.rats = [];
    this.fats = [];
    this.puddles = [];
    this.setListeners();
  }
  start() {
    myFunction()
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();  
      this.tack++;//karen
      this.tick++; //rat
      this.tock++; //fat
      this.tuck++; //puddle 
      this.winTime++
      this.checkCollisions();
      if(this.winTime > 9000){
        this.gameWin()
      }
      if (this.tack > Math.random() * 100 + 900) { //karen
        this.tack = 0;
        this.karensAlert();
        this.addKarens();
      }
      if (this.tick > Math.random() * 100 + 500) { //rat
        this.tick = 0;
        this.addRats();
      }
      if (this.tock > Math.random() * 100 + 500) { //fat
        this.tock = 0;
        this.fatAlert();
        this.addFat();
      }
      if (this.tuck > Math.random() * 100 + 400) { //puddle
        this.tuck = 300;
        this.addPuddle();
      }
    }, 1000 / 60);
  }
  stop() {
    clearInterval(this.interval);
    this.interval = null;
    clearInterval(window.timerInterval)
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.karens = this.karens.filter((e) => e.isVisible());
    this.rats = this.rats.filter((e) => e.isVisible());
    this.fats = this.fats.filter((e) => e.isVisible());
    this.player.heats = this.player.heats.filter((e) => e.isVisible());
    this.player.waters = this.player.waters.filter((e) => e.isVisible());
  }

  draw() {    
    this.puddles.forEach((e) => e.draw());
    this.player.draw();
    this.walls.forEach((e) => e.draw());
    this.token.draw();
    this.karens.forEach((e) =>e.draw());
    this.rats.forEach((e) => e.draw());
    this.fats.forEach((e) => e.draw());

    this.line.draw()
  }
  move() {
    this.player.move();
    this.token.move();
    this.karens.forEach((e) =>e.move());
    this.rats.forEach((e) => e.move());
    this.fats.forEach((e) =>e.move());
    this.puddles.forEach((e) =>e.move());
    this.line.move()
  }
  addKarens() {
    const karens = new Karens(this.ctx);
    this.karens.push(karens);
  }
  addRats() {
    const rats = new Rats(this.ctx);
    this.rats.push(rats);
  }
  addFat(){
      const fats = new Fat(this.ctx);
      this.fats.push(fats);
  }
  addPuddle(){
      const puddles = new Puddle(this.ctx);
      this.puddles.push(puddles);
  }
  karensAlert(){
    const ratAlert = document.getElementById('karens-alert');
    ratAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById('ok');
    nothingToWorrie.style.display = "none"
  }
  ratAlert(){
    const ratAlert = document.getElementById('rat-alert');
    ratAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById('ok');
    nothingToWorrie.style.display = "none"
  }
  fatAlert(){
    const ratAlert = document.getElementById('fat-alert');
    ratAlert.style.display = "inline-flex";
    const nothingToWorrie = document.getElementById('ok');
    nothingToWorrie.style.display = "none"
  }
  //Colisiones start
  checkCollisions() {
    this.puddle = new Puddle(ctx)
      this.player.heats.forEach( (heat)=>{
      this.puddles.forEach((puddle, pud) => {
       heat.collides(puddle);
       if(heat.collides(puddle)){
         this.player.heats.splice(0,1);
         console.log("es", pud)
         this.puddleLife -= 0.5;
         console.log(this.puddleLife)
         if(this.puddleLife < 0){
           this.puddles.splice(pud,1)
           this.puddleLife = 1;
          //  if(this.winTime > 1000){
          //    this.addPuddle();
          //  } //  el intervalo en el que aparecen mas charcos cada vez que los borras
          //  if(this.winTime > 2000){
          //   this.addPuddle();
          // }
         }
       }
      })
    })

    this.karens = this.karens.filter((karens) => {
      if (karens.collides(this.player)) {
        SPACE = 32;
        // if(this.player.discount == 1 )
        if(this.line.check == 1 ){
        return false;
        }
      }
      return true;
    });

    this.rats = this.rats.filter((rats) => {
      if (rats.collides(this.player)) {
        this.player.hit();
        this.player.vy = -1;
        this.player.vx = -1;     
        return false;
      }
      return true;
    });

    this.fats = this.fats.filter((fat) => {
      if (fat.collides(this.player)) {
        this.player.vy = 0;
        this.player.vx = 0; 
      }
      return true;
    });  
    

      // colisiones con las paredes y los charcos que retrasan al jugador
      this.walls.forEach((wall) => {
        if(wall.collides(this.player)){
          this.player.vy = 0;
          this.player.vx = 0;
        }
      })
      


      this.puddles.forEach((puddle) => {
        if(puddle.collides(this.player)){
          this.player.vy = 0;
          this.player.vx = 0;
        }
      });
      //fin de las colisiones

      // evento que se dispara al perder toda la vida
    if (!this.player.isAlive()) {
      this.gameOver()
    }
    // evento que se dispara al perder todas las hojas de reclamaciones
    if(forms.length<1){
      this.gameOver()
    }
  }
//Colisiones end

  gameOver() {
    this.stop();
    this.ctx.fillStyle = "red";
    ctx.font = "70px Verdana"
    this.ctx.fillText("YOU ARE DEAD", 300, 220);
    this.rats = [];
    this.fats = [];
    this.karens = [];
  }
  gameWin(){
    this.stop();
    ctx.font = "70px Verdana"
    this.ctx.fillStyle = "blue";
    this.ctx.strokeText("YOU WON!!! CONGRATULATIONS!", 10, 220);
    this.ctx.fillText("YOU WON!!! CONGRATULATIONS!", 10,220);
    this.rats = [];
    this.fats = [];
    this.karens = [];
  }

  setListeners() {
    document.addEventListener("keydown", (e) => {
      this.player.keyDown(e.keyCode);
      this.line.keyDown(e.keyCode);
    });

    document.addEventListener("keyup", (e) => {
      this.player.keyUp(e.keyCode);
      // this.line.keyUp(e.keyCode);      no necesito
    });
  }
}
