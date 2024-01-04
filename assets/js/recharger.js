
class Recharger {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 30;
    this.y = 30;
    this.radius = 23; // Radio del semicírculo
    this.total = lifeTotal;
    this.v = 2;
    ctx.font = "40px Verdana";
    this.outerRadius = 90;
    this.innerRadius = 89;
    this.aFinal = (Math.PI / 180) * 360;   // Ángulo final (360 grados)
  }
  
  draw(x, y) {
    if(recharginState){
      this.ctx.save();
      var gradient = this.ctx.createLinearGradient(x - recharging, y,   x + 300, y );
      gradient.addColorStop(0, 'yellow'); 
      gradient.addColorStop(1, 'red');
      this.ctx.fillStyle = gradient;
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 15;
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.outerRadius, (Math.PI / 180) * recharging, this.aFinal, false);
      this.ctx.arc(x, y, this.innerRadius, this.aFinal, (Math.PI / 180) * recharging, true);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();
    }
  }

  move() {
    this.y -= this.v;
    if (this.y < 15) {
      this.v = -0.01;
    } else if (this.y > 20) this.v = 0.01;
  }

  rechargingWeapons() {
    recharging += 1;
    if(recharging >= 360) {
      rocketCount += 5;
      recharging = 0;
  }
}}
