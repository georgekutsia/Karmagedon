class Fat {
  constructor(ctx) {
    this.ctx = ctx
    this.salidas = [10, 320, 630, 953, 1143]
    this.x = this.salidas[Math.floor(Math.random() * this.salidas.length)]
    this.y = this.ctx.canvas.height - 165
    this.w = 0.08 * this.ctx.canvas.height
    this.h = 0.12 * this.ctx.canvas.height
    this.vy = -0.3
    this.fatlist = [
      '/assets/images/elements/fat.png',
      '/assets/images/elements/gor1.png',
      '/assets/images/elements/gor2.png',
      '/assets/images/elements/gor3.png',
      '/assets/images/elements/gor4.png',
      '/assets/images/elements/gor5.png',
      '/assets/images/elements/gor6.png',
      '/assets/images/elements/gor7.png'
    ]
    this.fat = new Image()
    this.fat.src = this.fatlist[Math.floor(Math.random() * this.fatlist.length)]
    this.fat.frame = 0
    this.tick = 0
    this.fatAudio = new Audio('/assets/audio/fat1.m4a')
    this.fatAudio.volume = 0.07
    this.fatAudio.play()
    this.isDamaged = false
    this.damageTick = 0
  }
  draw() {
    this.ctx.drawImage(
      this.fat,
      0,
      (this.fat.frame * this.fat.height) / 8,
      this.fat.width,
      this.fat.height / 8,
      this.x,
      this.y,
      this.w,
      this.h
    )
    if (this.isDamaged) {
      this.damageTick++
      this.ctx.drawImage(
        damageImg,
        this.x + this.w / 2,
        this.y - this.damageTick,
        30,
        30
      )
      setTimeout(() => {
        this.damageTick = 0
        this.isDamaged = false
      }, 300)
    }
  }
  move() {
    this.y += this.vy
    this.tick++
    if (this.tick > 14) {
      this.tick = 0
      this.fat.frame++
    }
    if (this.fat.frame > 7) {
      this.fat.frame = 0
    }
  }

  isVisible() {
    return this.y + this.h > 0
  }

  collides(player) {
    const colX =
      this.x + 10 <= player.x + player.w && this.x + this.w - 20 > player.x
    const colY =
      this.y + this.h - 5 > player.y && this.y + 10 < player.y + player.h
    return colX && colY
  }
}
