class Karens {
  constructor(ctx) {
    this.ctx = ctx;
    this.salidas = [
      { x: 115, y: 120 },
      { x: 225, y: 120 },
      { x: 435, y: 120 },
      { x: 545, y: 120 },
      { x: 755, y: 120 },
      { x: 865, y: 120 },
      { x: 115, y: 420 },
      { x: 225, y: 420 },
      { x: 435, y: 420 },
      { x: 545, y: 420 },
      { x: 755, y: 420 },
      { x: 885, y: 420 },
    ];
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)];
    this.x = this.xy.x;
    this.y = this.xy.y;
    this.w = 25;
    this.h = 25;

    this.vx = -0.3;
    this.vy = -0.3;

    this.karens = new Image();
    this.karens.src = "/assets/images/karens/karen1.png";
    this.ks1 = new Audio("/assets/audio/ks1.mp3");
    this.ks1.volume = 0.1;
    this.ks2 = new Audio("/assets/audio/ks2.mp3");
    this.ks2.volume = 0.1;
    this.ks3 = new Audio("/assets/audio/ks3.mp3");
    this.ks3.volume = 0.1;
    this.ks4 = new Audio("/assets/audio/ks4.mp3");
    this.ks4.volume = 0.1;
    this.ks5 = new Audio("/assets/audio/ks5.mp3");
    this.ks5.volume = 0.1;
    this.ks6 = new Audio("/assets/audio/ks6.mp3");
    this.ks6.volume = 0.1;
    this.ks7 = new Audio("/assets/audio/ks7.mp3");
    this.ks7.volume = 0.1;
    this.ks8 = new Audio("/assets/audio/ks8.mp3");
    this.ks8.volume = 0.1;
    this.ks9 = new Audio("/assets/audio/ks9.mp3");
    this.ks9.volume = 0.1;
    this.ks10 = new Audio("/assets/audio/ks10.mp3");
    this.ks10.volume = 0.1;
    this.ks11 = new Audio("/assets/audio/ks11.mp3");
    this.ks11.volume = 0.1;
    this.ks12 = new Audio("/assets/audio/ks12.mp3");
    this.ks12.volume = 0.1;

    this.karenSounds = [
      this.ks1,
      this.ks2,
      this.ks3,
      this.ks4,
      this.ks5,
      this.ks6,
      this.ks7,
      this.ks8,
      this.ks9,
      this.ks10,
      this.ks11,
      this.ks12,
    ];
    this.karenSound =
      this.karenSounds[
        Math.floor(Math.random() * this.karenSounds.length)
      ].play();
    this.tick = 0;
    this.complaints = ["Manager!", "Police!", "Give me a claim form!"];
    this.problems = [
      " I do not like this shops decor!",
      "  I've been waiting 5 minutes!",
      "  Speak English in my country!",
      "All you workers are $%&# lazy!",
      "  You can't treat me like that!",
      "Why can't I use expired cupons!",
      " I do not like the uniform here!",
      "My husband is this malls CEO",
      "I am late! Work faster! faster!",
      "You looked at me with disgust!",
      "  I hate how this place smells!",
      "I have never been disrespected!",
      "   You dont have it in stack?!",
      "My lawyer is the best in town!",
      "  Do you imply that i'm fat??!!",
      "  What do you don't work here??",
      "I've been waiting dor 2 hours!!",
      "My baby is in the car. hurry up!",
      "I always buy milk in the pharmacy",
      "   Why can't I get it for free??",
      "  I don't care about the camera",
    ];
    this.problem =
      this.problems[Math.floor(Math.random() * this.problems.length)];
  }

  draw() {
    this.karenSound;
    this.ctx.drawImage(this.karens, this.x, this.y, this.w, this.h);
    this.line = new Line(ctx);
    if (this.line.check <= 3) {
    }
    this.tick++;

    if (this.tick >= 150) {
      this.ctx.font = "18px Arial";
      this.ctx.save();
      ctx.fillStyle = "rgb(251, 209, 209)";
      ctx.fillRect(this.x - 92, this.y - 21, 255, 22);
      this.ctx.fillStyle = "black";
      this.order = this.ctx.fillText(this.problem, this.x - 90, this.y - 3);
      this.ctx.restore();
    }
    if (this.tick >= 800) {
      this.ctx.save();
      ctx.fillStyle = "rgb(235, 106, 106)";
      ctx.fillRect(this.x + 28, this.y + 1, 85, 22);
      this.ctx.fillStyle = "black";
      this.ctx.font = "19px Arial";
      this.order = this.ctx.fillText(
        this.complaints[0],
        this.x + 30,
        this.y + 20
      );
      this.ctx.restore();
    }
    if (this.tick >= 1600) {
      this.ctx.save();
      ctx.fillStyle = "rgb(236, 75, 75)";
      ctx.fillRect(this.x - 62, this.y, 64, 22);
      this.ctx.fillStyle = "black";
      this.ctx.font = "20px Arial";
      this.order = this.ctx.fillText(
        this.complaints[1],
        this.x - 60,
        this.y + 20
      );
      this.ctx.restore();
    }
    if (this.tick >= 2300) {
      this.ctx.save();
      ctx.fillStyle = "red";
      ctx.fillRect(this.x - 72, this.y + 30, 220, 24);
      this.ctx.fillStyle = "black";
      this.ctx.font = "22px Arial";
      this.order = this.ctx.fillText(
        this.complaints[2],
        this.x - 70,
        this.y + 50
      );
      this.ctx.restore();
    }
    if (this.tick >= 2350 && this.tick <= 2351) {
      //importante que borre de uno en uno
      formsCheck();
      forms.splice(0, 1);
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.tick++;
    if (this.tick % 100 === 0) {
      this.vx = 0.3;
    } else if (this.tick % 201 === 0) {
      this.vy = 0.3;
    } else if (this.tick % 302 === 0) {
      this.vx = -0.3;
    } else if (this.tick % 403 === 0) {
      this.vx = -0.3;
      this.vy = -0.3;
    }
    if (this.tick % 800 === 0) {
      this.w += 5;
      this.h += 5;
    }
  }

  isVisible() {
    return this.y + this.h > 0 && this.w < 40;
  }

  collides(player) {
    //para que la colision sea un acercamiento al área
    const colX =
      this.x <= player.x + player.w + 30 && this.x + this.w + 30 > player.x;
    const colY =
      this.y + this.h + 30 > player.y && this.y < player.y + player.h + 30;
    return colX && colY;
  }
}
