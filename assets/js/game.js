class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.player = new Player(ctx);
    this.muros = new Muros(ctx)
    this.muros1 = new Muros1(ctx)

    this.tick = 0;
    this.tock = 1000;
    this.interval = null;

    this.rats = [];
    this.fats = [];
    this.setListeners();
  }
  start() {
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.tick++;
      this.tock++
      this.checkCollisions();

      if (this.tick > Math.random() * 100 + 300) {
        this.tick = 0;
        this.ratAlert();
        this.addRats();
      }
      if (this.tock > Math.random() * 100 + 1200) {
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
    this.rats = this.rats.filter((e) => e.isVisible());
    this.fats = this.fats.filter((e) => e.isVisible())
  }

  draw() {
    this.player.draw();
    this.muros.draw();
    this.muros1.draw();
    this.rats.forEach((e) => e.draw());
    this.fats.forEach((e) => e.draw());
  }

  move() {
    this.player.move();
    this.rats.forEach((e) => e.move());
    this.fats.forEach((e) =>e.move())
  }

  addRats() {
    const rats = new Rats(this.ctx);
    this.rats.push(rats);
  }
  addFat(){
      const fats = new Fat(this.ctx);
      this.fats.push(fats);
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
  checkCollisions() {
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
      if (this.muros.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }
      if (this.muros1.collides(this.player)){
        this.player.vy = 0;
        this.player.vx = 0;
      }


    if (!this.player.isAlive()) {
      this.gameOver();
    }
  }

  gameOver() {
    this.stop();
    this.ctx.fillText("YOU ARE DEAD", 520, 220);

    this.rats = [];
    this.fats = [];
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
