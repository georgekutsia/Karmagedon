class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.player = new Player(ctx);
    this.karens = new Karens(ctx);
    this.token = new Token(ctx);
    this.walls = new Wall0(ctx);
    this.walls1 = new Wall1(ctx);
    this.walls2 = new Wall2(ctx);
    this.walls3 = new Wall3(ctx);
    this.walls4 = new Wall4(ctx);
    this.walls5 = new Wall5(ctx);
    this.walls6 = new Wall6(ctx);
    this.walls7 = new Wall7(ctx);
    this.walls8 = new Wall8(ctx);
    this.walls9 = new Wall9(ctx);

    this.puddle = new Puddle(ctx);

    this.tack = 0;
    this.tuck = 0
    this.tick = 0;
    this.tock = 500;
    this.timeTick= 0;
    this.interval = null;

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
      this.timeTick++ 
      



      this.checkCollisions();
      if (this.tack > Math.random() * 100 + 400) {
        this.tack = 0;
        this.karensAlert();
        this.addKarens();
      }
      if (this.tick > Math.random() * 100 + 500) {
        this.tick = 0;
        this.ratAlert();
        this.addRats();
      }
      if (this.tock > Math.random() * 100 + 1000) {
        this.tock = 0;
        this.fatAlert();
        this.addFat();
      }
      if (this.tuck > Math.random() * 100 + 1000) {
        this.tuck = 0;
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
    this.karens = this.karens.filter((e) => e.isVisible())
    this.rats = this.rats.filter((e) => e.isVisible());
    this.fats = this.fats.filter((e) => e.isVisible())
  }

  draw() {    
    this.puddle.draw();
    this.puddles.forEach((e) => e.draw());
    this.player.draw();
    this.walls.draw();
    this.token.draw();
    this.walls1.draw();
    this.walls2.draw();
    this.walls3.draw();
    this.walls4.draw();
    this.walls5.draw();
    this.walls6.draw();
    this.walls7.draw();
    this.walls8.draw();
    this.walls9.draw();
    this.karens.forEach((e) =>e.draw());
    this.rats.forEach((e) => e.draw());
    this.fats.forEach((e) => e.draw());

  }

  move() {
    this.player.move();
    this.token.move();
    this.karens.forEach((e) =>e.move());
    this.rats.forEach((e) => e.move());
    this.fats.forEach((e) =>e.move());
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
    this.karens = this.karens.filter((karens) => {
      if (karens.collides(this.player)) {
        this.player.hit();
        this.player.vy = -1;
        this.player.vx = -1;     
        return false;
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

    this.fats = this.fats.filter((fat) => {
        if (fat.collides(this.player)) {
          this.player.vy = 0;
          this.player.vx = 0; 
        }
        return true;
      });  
      // colision de wall
      if (this.walls.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls1.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls3.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls3.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls4.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls5.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls6.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls7.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls8.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.walls9.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }

      if (this.puddle.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }


    if (!this.player.isAlive()) {
      this.gameOver();
    }
  }
//Colisiones end


  gameOver() {
    this.stop();
    this.ctx.fillText("YOU ARE DEAD", 520, 220);

    this.rats = [];
    this.fats = [];
    this.karens = [];
    this.player = new Player(ctx);
  }

  setListeners() {
    document.addEventListener("keydown", (e) => {
      this.player.keyDown(e.keyCode);
    });

    document.addEventListener("keyup", (e) => {
      this.player.keyUp(e.keyCode);
    });
  }
}
