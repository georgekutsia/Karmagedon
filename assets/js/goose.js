class Goose {
  constructor(ctx) {
    this.ctx = ctx
    this.x = -4
    this.salidas = [
      30, 50, 100, 150, 170, 190, 220, 250, 300, 330, 370, 400, 430, 460, 500,
      520, 560, 600, 630, 690, 710, 730
    ]
    this.y = this.salidas[Math.floor(Math.random() * this.salidas.length)]
    this.w = 0.04 * this.ctx.canvas.width
    this.h = 0.1 * this.ctx.canvas.height
    this.vx = 0.5
    this.vy = 0
    this.moveY = 1
    this.gooseImg = new Image()
    this.score = new Score()
    this.gooseImg.src = '/assets/images/elements/gansos.png'
    this.gooseImg.frame = 0
    this.lifeleft = 5 * extraLife
    this.tick = 0
    this.tock = 0
    this.dead = 0
    this.cageImg = new Image()
    this.cageImg.src = '/assets/images/munición/cage.png'
    this.cage = false
    this.cageTick = 0
    this.isDamaged = false
    this.damageTick = 0
    this.isDamaged = false
    this.damageTick = 0
  }
  draw() {
    this.ctx.drawImage(
      this.gooseImg,
      (this.gooseImg.frame * this.gooseImg.width) / 8,
      0,
      this.gooseImg.width / 8,
      this.gooseImg.height,
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
    if (this.cage && this.cageTick <= 600) {
      this.cageTick++
      this.ctx.drawImage(this.cageImg, this.x - 10, this.y - 10, 70, 80)
      if (this.cageTick >= 600) {
        this.vx = 0.5
        this.vy = 0
        this.moveY = 1
        this.cageTick = 0
        this.cage = false
      }
    }
  }
  move() {
    this.ctx.font = '18px Arial'
    this.ctx.save()
    ctx.fillStyle = 'rgb(251, 209, 209)'
    this.ctx.fillStyle = 'red'
    this.order = this.ctx.fillText(
      `${this.lifeleft.toString()}`,
      this.x + 15,
      this.y + 3
    )
    this.ctx.restore()
    this.x += this.vx
    this.y += this.vy
    this.tick++
    this.tock++
    if (this.x >= 0) {
      this.vy = this.moveY
    }
    if (this.x >= 100) {
      this.vy = -this.moveY
    }
    if (this.x >= 300) {
      this.vy = this.moveY
    }
    if (this.x >= 500) {
      this.vy = -this.moveY
    }
    if (this.x >= 700) {
      this.vy = this.moveY
    }
    if (this.x >= 900) {
      this.vy = -this.moveY
    }
    if (this.x >= 1100) {
      this.vy = this.moveY
    }
    if (this.x >= 1180) {
      this.vx = -this.moveY * 2
      this.gooseImg.src = '/assets/images/elements/gansos reversa.png'
    }
    if (this.tick > 10) {
      this.tick = 0
      this.gooseImg.frame++
    }
    if (this.x < 0) {
      const ratAlert = document.getElementById('rat-alert')
      ratAlert.style.display = 'none'
    }
    if (this.lifeleft <= 0) {
      this.gooseImg.src = '/assets/images/elements/deadgoose.png'
      this.vx = 0
      this.vy = 0
      this.dead++
      if (this.dead >= 100) {
        solvedGoose += 0.5
        solvedTotal += 0.5
        if (!moneyForKill) {
          money += Math.floor(Math.random() * 20)
        }
        this.vx = -2000
      }
    }
    if (this.gooseImg.frame > 7) {
      this.gooseImg.frame = 0
    }
  }

  damagingCage() {
    if (this.cage) this.lifeleft -= 0.0005
  }
  isVisible() {
    return this.x + this.w > 0
  }

  collides(player) {
    const colX =
      this.x + 5 <= player.x + player.w && this.x + this.w - 10 > player.x
    const colY =
      this.y + this.h - 5 > player.y && this.y + 5 < player.y + player.h

    return colX && colY
  }
}
