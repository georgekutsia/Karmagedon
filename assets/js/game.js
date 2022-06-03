class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.player = new Player(ctx);
    this.karens = new Karens(ctx);
    this.time = new Time(ctx)
    this.muros = new Muros0(ctx);
    this.muros1 = new Muros1(ctx);
    this.muros2 = new Muros2(ctx);
    this.muros3 = new Muros3(ctx);
    this.muros4 = new Muros4(ctx);
    this.muros5 = new Muros5(ctx);
    this.muros6 = new Muros6(ctx);
    this.muros7 = new Muros7(ctx);
    this.muros8 = new Muros8(ctx);

    this.tack = 0;
    this.tick = 0;
    this.tock = 500;
    this.interval = null;

    this.karens = [];
    this.rats = [];
    this.fats = [];

    this.setListeners();
  }
  start() {
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.tack++;
      this.tick++
      this.tock++
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
    }, 1000 / 60);
  }
  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.karens = this.karens.filter((e) => e.isVisible())
    this.rats = this.rats.filter((e) => e.isVisible());
    this.fats = this.fats.filter((e) => e.isVisible())
  }

  draw() {
    this.player.draw();
    this.muros.draw();
    this.muros1.draw();
    this.muros2.draw();
    this.muros3.draw();
    this.muros4.draw();
    this.muros5.draw();
    this.muros6.draw();
    this.muros7.draw();
    this.muros8.draw();
    this.karens.forEach((e) =>e.draw());
    this.rats.forEach((e) => e.draw());
    this.fats.forEach((e) => e.draw());
  }

  move() {
    this.player.move();
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
      // colision de muro
      if (this.muros.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros1.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros3.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros3.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros4.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros5.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros6.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros7.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros8.collides(this.player)){
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
