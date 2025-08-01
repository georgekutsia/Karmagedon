class Customer {
  constructor(ctx) {
    this.ctx = ctx
    this.salidas = [
      { x: 200, y: 100 },
      { x: 300, y: 100 },
      { x: 400, y: 100 },
      { x: 500, y: 100 },
      { x: 600, y: 100 },
      { x: 700, y: 100 },
      { x: 30, y: 100 },
      { x: 100, y: 100 }
    ]
    this.xy = this.salidas[Math.floor(Math.random() * this.salidas.length)]
    this.x = this.xy.x
    this.y = this.xy.y
    this.w = 45
    this.h = 70
    this.moveX = 0.3
    this.vx = this.moveX
    this.vy = 0.2
    this.lifeleft = 1
    this.dead = 0
    this.tick = 0
    this.cageImg = new Image()
    this.cageImg.src = '/assets/images/munición/cage.png'
    this.cage = false
    this.cageTick = 0
    this.canCollide = true
    this.isDamaged = false
    this.damageTick = 0
    this.images = [
      '/assets/images/elements/customer4.png',
      '/assets/images/elements/customer17.png',
      '/assets/images/elements/customer13.png',
      '/assets/images/elements/customer8.png',
      '/assets/images/elements/customer15.png'
    ]
    this.says = [
      'Such a nice place',
      "I'ts beautiful!",
      'I love this mall',
      'Ironmall is the best',
      "I hope I don't die",
      'Happy to be alive',
      'Hope nothing goes wrong',
      'What a clean place',
      'Just enjoying my life',
      'I like being alive so much'
    ]
    this.deadSays = [
      'What a horrible death!',
      'Im dead now!',
      'Why man!? why!?',
      'This hurts so much!',
      'So much blood!!'
    ]
    this.image = this.images[Math.floor(Math.random() * this.images.length)]
    this.say = this.says[Math.floor(Math.random() * this.says.length)]
    this.deadSay =
      this.deadSays[Math.floor(Math.random() * this.deadSays.length)]
    this.customerSound1 = new Audio('/assets/audios ad/customerHappy1.m4a')
    this.customerSound1.volume = 0.1
    this.customerSound2 = new Audio('/assets/audios ad/customerHappy2.m4a')
    this.customerSound2.volume = 0.1
    this.customerSound3 = new Audio('/assets/audios ad/customerHappy3.m4a')
    this.customerSound3.volume = 0.1
    this.customerSound4 = new Audio('/assets/audios ad/customerHappy4.m4a')
    this.customerSound4.volume = 0.1
    this.customerSound5 = new Audio('/assets/audios ad/customerHappy5.m4a')
    this.customerSound5.volume = 0.1
    this.customerSounds = [
      this.customerSound1,
      this.customerSound2,
      this.customerSound3,
      this.customerSound4,
      this.customerSound5
    ]
    this.customerSounds[
      Math.floor(Math.random() * this.customerSounds.length)
    ].play()
    this.customImg = new Image()
    this.customImg.src = this.image
    this.customImg.frame = 0
    this.customFrame = 5
    this.color = 'green'
  }

  draw() {
    this.ctx.drawImage(
      this.customImg,
      (this.customImg.frame * this.customImg.width) / this.customFrame,
      0,
      this.customImg.width / this.customFrame,
      this.customImg.height,
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
    if (this.cage) {
      this.ctx.drawImage(this.cageImg, this.x - 15, this.y - 10, 70, 90)
      this.cageTick++
      if (this.cageTick >= 900) {
        this.cage = false
        this.moveX = 0.3
        this.vy = 0.3
        this.cageTick = 0
        this.atraer = new Audio('/assets/audios ad/jaulaRota.mp3')
        this.atraer.volume = 0.15
        this.atraer.play()
      }
    }
    this.ctx.font = '18px Arial'
    ctx.fillStyle = 'rgb(251, 209, 209)'
    this.ctx.fillStyle = this.color
    this.order = this.ctx.fillText(this.say, this.x - 32, this.y - 5)
    this.ctx.fillStyle = this.color
    this.order = this.ctx.fillText(this.say, this.x - 28, this.y - 1)
    this.ctx.fillStyle = 'white'
    this.order = this.ctx.fillText(this.say, this.x - 30, this.y - 3)
    this.ctx.restore()
  }
  move() {
    this.x += this.vx
    this.y += this.vy
    this.tick++
    if (this.y >= 0) {
      this.vx = this.moveX
    }
    if (this.y >= 100) {
      this.vx = -this.moveX
      if (this.image === '/assets/images/elements/customer4.png') {
        this.customImg.src = '/assets/images/elements/customer3.png'
      } else if (this.image === '/assets/images/elements/customer17.png') {
        this.customImg.src = '/assets/images/elements/customer18.png'
      } else if (this.image === '/assets/images/elements/customer8.png') {
        this.customImg.src = '/assets/images/elements/customer7.png'
      } else if (this.image === '/assets/images/elements/customer13.png') {
        this.customImg.src = '/assets/images/elements/customer14.png'
      } else if (this.image === '/assets/images/elements/customer15.png') {
        this.customImg.src = '/assets/images/elements/customer16.png'
      }
    }
    if (this.y >= 200) {
      this.vx = this.moveX
      this.customImg.src = this.image
    }
    if (this.y >= 300) {
      this.vx = -this.moveX

      if (this.image === '/assets/images/elements/customer4.png') {
        this.customImg.src = '/assets/images/elements/customer3.png'
      } else if (this.image === '/assets/images/elements/customer17.png') {
        this.customImg.src = '/assets/images/elements/customer18.png'
      } else if (this.image === '/assets/images/elements/customer8.png') {
        this.customImg.src = '/assets/images/elements/customer7.png'
      } else if (this.image === '/assets/images/elements/customer13.png') {
        this.customImg.src = '/assets/images/elements/customer14.png'
      } else if (this.image === '/assets/images/elements/customer15.png') {
        this.customImg.src = '/assets/images/elements/customer16.png'
      }
    }
    if (this.y >= 400) {
      this.vx = this.moveX
      this.customImg.src = this.image
    }

    if (this.tick > 7) {
      this.tick = 0
      this.customImg.frame++
    }
    if (this.x < 0) {
    }
    if (this.customImg.frame > this.customFrame - 1) {
      this.customImg.frame = 0
    }
    if (this.lifeleft <= 0) {
      this.customImg.src = '/assets/images/elements/bloodStain.png'
      this.color = 'red'
      this.say = this.deadSay
      this.vx = 0
      this.vy = 0
      this.dead++
      if (this.dead >= 50) {
        this.vx = -2000
      }
    }
  }
  isVisible() {
    return this.x + this.w > 0 && this.x <= 1180
  }
  collides(player) {
    if (this.canCollide) {
      let colX =
        this.x + 10 <= player.x + player.w && this.x + this.w - 20 > player.x
      let colY =
        this.y + this.h - 5 > player.y && this.y + 10 < player.y + player.h
      return colX && colY
    }
  }
}
