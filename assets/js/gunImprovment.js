
class ShotgunUpgrade {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 30;
    this.y = 30;
    this.radius = 23; // Radio del semicírculo
    this.total = lifeTotal;
    ctx.font = "40px Verdana";
    this.outerRadius = 50;
    this.innerRadius = 49;
    this.aFinal = (Math.PI / 180) * 360;   // Ángulo final (360 grados)
  }
  
  draw(x, y) {
    if(shotgunUpgradingState){
      this.ctx.save();
      var gradient = this.ctx.createLinearGradient(x - shotgunUpgrading, y,   x + 300, y );
      gradient.addColorStop(0, 'aqua'); 
      gradient.addColorStop(1, 'green');
      this.ctx.fillStyle = gradient;
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 5;
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.outerRadius, (Math.PI / 180) * shotgunUpgrading, this.aFinal, false);
      this.ctx.arc(x, y, this.innerRadius, this.aFinal, (Math.PI / 180) * shotgunUpgrading, true);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();
    }
  }

  move() {

  }

  rechargingWeapons() {
    shotgunUpgrading += 0.1;
    if(shotgunUpgrading >= 360) {
      alert("Shotgun upgraded!");
      shotgunDamage += 20;
      shotgunRange += 30;
      shotgunUpgrading = 0;
  }
}}
