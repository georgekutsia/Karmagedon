class HealingPlace {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 470;
    this.y = 125;
    this.w = 80;
    this.h = 80;
    this.heal = new Image();
    this.heal.src = "/assets/images/elements/healme.png";
    this.heal.frame = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.heal,
      (this.heal.frame * this.heal.width) / 13,
      0,
      this.heal.width / 13,
      this.heal.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {

    this.tick++;

    if (this.tick > 8) {
      this.tick = 0;
      this.heal.frame++;
    }
    if (this.heal.frame > 19) {
      this.heal.frame = 0;
    }
  }

  isVisible() {
    return this.y + this.h > 0;
  }

  collides(player) {
    const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;
    return colX && colY;
    
  }
}
