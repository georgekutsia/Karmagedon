class HookRecharger {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 30;
    this.y = 30;
    this.radius = 23;
    this.outerRadius = 12;
    this.innerRadius = 11;
    this.aFinal = 360; // usamos grados directamente
    this.counter = 0;
  }
  
  draw(x, y) {
    if (hookLeveling >= 1) {
      this.ctx.save();
      const gradient = this.ctx.createLinearGradient(x - this.counter, y, x + 300, y);
      gradient.addColorStop(0, 'yellow'); 
      gradient.addColorStop(1, 'red');
      this.ctx.fillStyle = gradient;
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 2;

      this.ctx.beginPath();
      this.ctx.arc(x, y, this.outerRadius + hookRechargeExtraRadius, (Math.PI / 180) * this.counter, Math.PI * 2, false);
      this.ctx.arc(x, y, this.innerRadius + hookRechargeExtraRadius, Math.PI * 2, (Math.PI / 180) * this.counter, true);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();
    }
  }

  rechargingWeapons() {
    this.counter += 0.19; // velocidad de recarga. cada 30 segundos
    if (this.counter >= this.aFinal) {
      hookCounter += 3;  // Suma 3 al contador
      this.counter = 0;  // Reinicia
      this.levelupSound = new Audio("/assets/audios ad/reloadMachinegun.mp3");
      this.levelupSound.volume = 0.05;
      this.levelupSound.play();
    }
  }
}
