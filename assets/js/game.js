class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.player = new Player(ctx)
    this.token = new Token(ctx)
    this.healing = new HealingPlace(ctx)
    // this.water = new Water(ctx)
    this.score = new Score(ctx)
    this.line = new Line(ctx, this.player, this.player.x, this.player.y)
    this.food = new Food(ctx)
    this.upgrade = new Upgrade(ctx)
    this.upBullet = new Upbullet(ctx)
    this.saved = new Saved(ctx)
    this.helper1 = new Image()
    this.helper1.src = '/assets/images/pj/helper1.png'
    this.helper2 = new Image()
    this.helper2.src = '/assets/images/pj/helper2.png'
    this.helper3 = new Image()
    this.helper3.src = '/assets/images/pj/helper3.png'
    this.helper4 = new Image()
    this.helper4.src = '/assets/images/pj/helper4.png'
    this.helper7 = new Image()
    this.helper7.src =  '/assets/images/pj/helper7.png'
    this.bodyImg = new Image()
    this.bodyImg.src = '/assets/images/elements/body.png'
    this.backPack = new Image()
    this.backPack.src = '/assets/images/elements/backpack.png'
    this.brain = new Image()
    this.brain.src = '/assets/images/elements/brain.png'
    // this.mainOffice = new Image();
    // this.mainOffice.src = "/assets/images/fondos/mainOffice.png"
    this.levelupImg1 = new Image()
    this.levelupImg1.src = '/assets/images/infos/hookUpgrade1.png'
    this.levelupImg2 = new Image()
    this.levelupImg2.src = '/assets/images/infos/machinegunUpgrade1.png'
    this.levelupImg3 = new Image()
    this.levelupImg3.src = '/assets/images/infos/elementalUpgrade.png'
    this.levelupElement = new Image()
    this.levelupElement.src = '/assets/images/munición/elementUpgrade.png'
    this.levelupMachinegun = new Image()
    this.levelupMachinegun.src = '/assets/images/munición/upgradeMachinegun.png';
    this.levelupHook = new Image()
    this.levelupHook.src = '/assets/images/munición/hookUpgrade.png';
    this.upBulletsMessage = this.upgradeMessage = this.customersMessage = this.perjudiceMessage = this.bossPerjIs = this.ratMessage =   false
    this.upgradeTick =this.customerTick =this.perjudiceTick =this.bossPerjTick =this.levelerTick =this.lampTick =this.ratPoison =this.iceCurePoison =this.ratTick = this.upBulletTick =  0;
    this.puddleTime = this.fireTime = this.babyTime = this.customerTime = this.bossTime = this.korenTime = this.cartTime = this.foodTime = this.upgradeTime = this.upBulletTime = this.discountTime = this.deadGoose =   0
    this.karens =this.rats =this.babys =this.customers =this.fats =this.puddles =this.fires =this.geese =this.bosss =this.korens =this.carts =this.drugs =this.foods =this.upgrades =this.upBullets =this.discounts =  []
    this.gooseTime = 1900
    this.lampOff = '/assets/images/elements/lampOfff.png'
    this.poisonedTime = 3000 
    this.tick = 0
    this.chargeTick = 0
    this.hookedAllRatsAndGeese = true

    this.cactus = [
      new Cactus(ctx, 80, 240, 40, 40, '/assets/images/fondos/cact1.png'),
      new Cactus(ctx, 280, 240, 40, 40, '/assets/images/fondos/cact1.png'),
      new Cactus(ctx, 397, 340, 40, 40, '/assets/images/fondos/cact1.png'),
      new Cactus(ctx, 582, 340, 40, 40, '/assets/images/fondos/cact1.png'),
      new Cactus(ctx, 65, 725, 40, 40, '/assets/images/fondos/cact1.png'),
      new Cactus(ctx, 1010, 725, 40, 40, '/assets/images/fondos/cact1.png'),
      new Cactus(ctx, 490, 220, 35, 35, '/assets/images/fondos/cact2.png'),
      new Cactus(ctx, 1070, 350, 35, 35, '/assets/images/fondos/cact2.png'),
      new Cactus(ctx, 610, 805, 30, 30, '/assets/images/fondos/cact3.png'),
      new Cactus(ctx, 385, 805, 30, 30, '/assets/images/fondos/cact3.png'),
      new Cactus(ctx, 1135, 805, 30, 30, '/assets/images/fondos/cact3.png'),
      new Cactus(ctx, 388, 575, 30, 30, '/assets/images/fondos/cact4.png'),
      new Cactus(ctx, 300, 575, 30, 30, '/assets/images/fondos/cact4.png'),
      new Cactus(ctx, 818, 575, 30, 30, '/assets/images/fondos/cact4.png'),
      new Cactus(ctx, 818, 735, 30, 30, '/assets/images/fondos/cact4.png')
    ]
    this.pfront = [
      new People(ctx, 90, 350, 70, 70, '/assets/images/people/pep10.png'),
      new People(ctx, 275, 347, 40, 70, '/assets/images/people/pep3.png'),
      new People(ctx, 710, 110, 40, 40, '/assets/images/people/pep5.png'),
      new People(ctx, 870, 200, 80, 80, '/assets/images/people/pep8.png'),
      new People(ctx, 1180, 660, 35, 35, '/assets/images/people/pep11.png'),
      new People(ctx, 90, 590, 80, 80, '/assets/images/people/Peoppps.png'),
      new People(ctx, 280, 620, 35, 35, '/assets/images/people/pep23.png'),
      new People(ctx, 430, 20, 50, 30, '/assets/images/people/pep25.png'),
      new People(ctx, 800, 17, 60, 35, '/assets/images/people/pep20.png'),
      new People(ctx,1000,285,75,28,'/assets/images/people/pep24.png',true,-0.2,0,0.2),
      new People(ctx, 420, 390, 80, 45, '/assets/images/people/pep30.png'),
      new People(ctx, 835, 625, 80, 45, '/assets/images/people/pep31.png'),
      new People( ctx, 155, 312, 50, 28, '/assets/images/people/pep32.png', true, -0.4, 0, 0.4
      ),
      new People(ctx, 400, 595, 65, 50, '/assets/images/people/pep33.png')
    ]
    this.pback = [
      new People(ctx, 275, 460, 40, 50, '/assets/images/people/pep2.png'),
      new People(ctx, 700, 783, 40, 40, '/assets/images/people/pep.png'),
      new People(ctx, 240, 180, 80, 50, '/assets/images/people/pep7.png'),
      new People(ctx, 130, 80, 70, 35, '/assets/images/people/pep1.png'),
      new People(ctx, 570, 230, 50, 50, '/assets/images/people/pep6.png'),
      new People(ctx, 410, 250, 40, 40, '/assets/images/people/pep14.png'),
      new People(ctx, 520, 630, 50, 50, '/assets/images/people/pep15.png'),
      new People(ctx, 15, 100, 40, 100, '/assets/images/people/pep27.png'),
      new People(ctx, 655, 380, 40, 90, '/assets/images/people/peop72.png'),
      new People(ctx, 830, 430, 30, 60, '/assets/images/people/Peop000.png'),
      new People(ctx, 560, 515, 60, 30, '/assets/images/people/peop71.png'),
      new People(ctx, 420, 670, 40, 50, '/assets/images/people/Peopp0.png'),
      new People(ctx, 1075, 110, 40, 40, '/assets/images/people/peop74.png'),
      new People(ctx, 1075, 150, 40, 40, '/assets/images/people/peop75.png'),
      new People(ctx, 715, 380, 40, 40, '/assets/images/people/Peop101.png'),
      new People( ctx, 1075, 705, 40, 35, '/assets/images/people/Peop00 copia 3.png'),
      new People(ctx, 1100, 380, 28, 60, '/assets/images/people/peop76.png'),
      new People(ctx, 650, 150, 45, 40, '/assets/images/people/Peop010.png'),
      new People(ctx, 1055, 380, 33, 60, '/assets/images/people/peop77.png'),
      new People(ctx, 410, 470, 40, 40, '/assets/images/people/Peop100.png')
    ]
    this.bushesover = [
      //  bushes start
      new Bush1(ctx, 75, 82, 10, 200),
      new Bush1(ctx, 315, 80, 10, 200),
      new Bush1(ctx, 390, 80, 10, 200),
      new Bush1(ctx, 620, 80, 10, 200),
      new Bush1(ctx, 695, 80, 10, 200),
      new Bush1(ctx, 947, 80, 10, 200),
      new Bush1(ctx, 75, 345, 10, 175),
      new Bush1(ctx, 315, 345, 10, 175),
      new Bush1(ctx, 390, 345, 10, 175),
      new Bush1(ctx, 620, 345, 10, 175),
      new Bush1(ctx, 695, 345, 10, 175),
      new Bush1(ctx, 947, 345, 10, 175),
      new Bush1(ctx, 75, 582, 10, 175),
      new Bush1(ctx, 75, 745, 90, 10),
      new Bush1(ctx, 315, 582, 10, 100),
      new Bush1(ctx, 390, 582, 10, 100),
      new Bush1(ctx, 390, 582, 90, 10),
      new Bush1(ctx, 620, 660, 10, 90),
      new Bush1(ctx, 540, 745, 90, 10),
      new Bush1(ctx, 790, 582, 75, 10),
      new Bush1(ctx, 790, 745, 75, 10),
      new Bush1(ctx, 695, 635, 10, 75),
      new Bush1(ctx, 947, 635, 10, 75),
      // warhouse
      new Bush1(ctx, 1020, 82, 10, 50),
      new Bush1(ctx, 1020, 230, 10, 50),
      // poisoner
      new Bush1(ctx, 1140, 345, 10, 50),
      new Bush1(ctx, 1020, 470, 10, 50),
      //soup opera
      new Bush1(ctx, 1140, 586, 10, 50),
      new Bush1(ctx, 1140, 708, 10, 50)
      //  bushes end
    ]
    this.lamps = [
      new Bushes(ctx, 160, -13, 40, 40, this.lampOff),
      new Bushes(ctx, 680, -13, 40, 40, this.lampOff),
      new Bushes(ctx, -13, 100, 40, 40, this.lampOff),
      new Bushes(ctx, 298, 250, 40, 40, this.lampOff),
      new Bushes(ctx, 1000, 110, 40, 40, this.lampOff),
      new Bushes(ctx, 605, 335, 40, 40, this.lampOff),
      new Bushes(ctx, 370, 490, 40, 40, this.lampOff),
      new Bushes(ctx, 1120, 370, 40, 40, this.lampOff),
      new Bushes(ctx, 58, 560, 40, 40, this.lampOff),
      new Bushes(ctx, 933, 567, 40, 40, this.lampOff),

      new Bushes(ctx, 230, 800, 40, 40, this.lampOff),
      new Bushes(ctx, 560, 640, 40, 40, this.lampOff),
      new Bushes(ctx, 1190, 730, 40, 40, this.lampOff),
      new Bushes(ctx, 810, 800, 40, 40, this.lampOff)
    ]
    this.walls = [
      // round bushes
      new Bushes(ctx, 82, 80, 40, 40, '/assets/images/fondos/arb9.png'),
      new Bushes(ctx, 278, 80, 40, 40, '/assets/images/fondos/arb9.png'),
      new Bushes(ctx, 82, 410, 40, 40, '/assets/images/fondos/arb11.png'),
      new Bushes(ctx, 278, 410, 40, 40, '/assets/images/fondos/arb11.png'),
      new Bushes(ctx, 910, 380, 40, 40, '/assets/images/fondos/arbusto1.png'),
      new Bushes(ctx, 700, 440, 40, 40, '/assets/images/fondos/arbusto1.png'),
      new Bushes(ctx, 800, 165, 50, 50, '/assets/images/fondos/arb1.png'),
      new Bushes(ctx, 705, 80, 75, 25, '/assets/images/fondos/arbtriple.png'),
      new Bushes(ctx, 1065, 580, 75, 25, '/assets/images/fondos/arbtriple.png'),
      new Bushes(ctx, 875, 80, 75, 25, '/assets/images/fondos/arbtriple.png'),
      new Bushes(ctx, 460, 700, 25, 25, '/assets/images/fondos/arb9.png')
    ]
    this.portals = [new Portal(ctx, 200, 770, 50, 50)]
    this.portals2 = [new Portal(ctx, 800, 5, 50, 50)]
    this.levelUps1 = new Bushes(
      ctx,
      140,
      250,
      80,
      60,
      '/assets/images/munición/hookUpgrade.png'
    )
    this.levelUps2 = new Bushes(
      ctx,
      440,
      250,
      100,
      70,
      '/assets/images/munición/upgradeMachinegun.png'
    )
    this.levelUps3 = new Bushes(
      ctx,
      780,
      250,
      80,
      80,
      '/assets/images/munición/elementUpgrade.png'
    )
    this.karenTime = 0
    this.ratTime = 1600
    this.fatTime = 100
    this.winTime = 0
    this.machinegunTime = machingunCountback
    this.machinganRestore = machingunRestoreCountback
    this.levelMessage1 = false
    this.interval = null
    this.setListeners()
    this.musicStart = new Audio('/assets/audio/valse.mp3')
    this.musicStart.volume = 0.002
    this.musicStart.loop = true
    this.karens.src = '/assets/images/karens/karen1.png'
    this.bossSound1 = new Audio('/assets/audios ad/bossOuch1.m4a')
    this.bossSound1.volume = 0.1
    this.bossSound2 = new Audio('/assets/audios ad/bossOuch2.m4a')
    this.bossSound2.volume = 0.1
    this.bossSound3 = new Audio('/assets/audios ad/bossOuch3.m4a')
    this.bossSound3.volume = 0.1
    this.bossSound4 = new Audio('/assets/audios ad/bossOuch4.m4a')
    this.bossSound4.volume = 0.1
    this.bossSound5 = new Audio('/assets/audios ad/bossOuch5.m4a')
    this.bossSound5.volume = 0.1
    this.karenSounds = [
      this.bossSound1,
      this.bossSound2,
      this.bossSound3,
      this.bossSound4,
      this.bossSound5
    ]
  }
  start() {
    // this.so = new Audio("/assets/audio/So1.mp3");
    // this.so.volume = 0.08;
    // this.so.play();
    // this.musicStart.play();
    myFunction()
    this.interval = setInterval(() => {
      this.endGame = document.getElementById('time')
      this.clear()
      this.draw()
      this.move()
      this.checkCollisions()
      this.karenTime++
      this.ratTime++
      this.fatTime++
      this.puddleTime++
      this.fireTime++
      this.gooseTime++
      this.babyTime++
      this.customerTime++
      this.bossTime++
      this.korenTime++
      this.winTime++
      this.levelerTick++
      this.cartTime++
      this.foodTime++
      this.upgradeTime++
      this.upBulletTime++
      this.discountTime++
      if (this.karenTime > 37000) {
        // karen
        this.karenTime = 0
        this.karensAlert()
        this.addKaren()
        if (this.winTime >= 68520) {
          this.karenTime = 2000
        }
      }
      if (this.puddleTime > Math.random() * 400 + 20000) {
        //puddle
        this.puddleTime = 0
        this.waterAlert()
        this.addPuddle()
        if (this.winTime >= 80000) {
          this.puddleTime = 400
        }
      }
      if (this.fireTime > Math.random() * 400 + 20000) {
        //fire
        this.fireTime = 0
        this.fireAlert()
        this.addFire()
        if (this.winTime >= 80000) {
          this.fireTime = 400
        }
      }
      if (this.ratTime > Math.random() * 100 + 2000 && addRat) {
        //rat
        this.ratTime = 0
        this.ratAlert()
        this.addRat()
        if (this.winTime >= 48520) {
          this.ratTime = 700
          this.addRat()
        }
      }
      if (this.fatTime > Math.random() * 400 + 190 && addFat) {
        //fat
        this.fatTime = 0
        this.fatAlert()
        this.addFat()
        if (this.winTime >= 68520) {
          this.fatTime = 500
        }
      }

      if (this.gooseTime >= Math.random() * 100 + 2000 && addGeese) {
        //goose
        this.gooseTime = 0
        this.gooseAlert()
        this.addGoose()
      }
      if (this.babyTime > Math.random() * 2000 + 100 && addBaby) {
        //baby
        this.babyTime = 11000
        this.babyAlert()
        this.addBaby()
      }
      if (this.customerTime > Math.random() * 100 + 40 && addCustomer) {
        //customer
        this.customerTime = 0
        this.addCustomer()
      }
      if (this.cartTime > Math.random() * 100 + 10000) {
        //cart
        this.cartTime = 0
        this.addCart()
      }
      if (this.foodTime > Math.random() * 100 + 20000) {
        //food
        this.foodTime = 0
        this.addFood()
      }
      if (this.discountTime > Math.random() * 900 + 6000) {
        //discount
        this.discountTime = 3000
        this.addDiscount()
      }
      if (this.upgradeTime > Math.random() * 100 + 7400) {
        //upgrade
        this.upgradeTime = 0
        this.upgradeAlert()
        this.addUpgrade()
      }
      if (this.upBulletTime > Math.random() * 100 + 6000 ) {
        //upbullet
        this.upBulletTime = 0
        this.upBulletAlert()
        this.addUpBullet()
      }
      if (this.bossTime > Math.random() * 100 + 140 && addBoss) {
        //boss
        this.bossTime = 5000
        this.bossAlert()
        this.addBoss()
      }
      if (this.korenTime > Math.random() * 100 + 22500) {
        //koren
        this.korenTime = 100
        this.addKoren()
        this.korenAlert()
      }
      // win time game start -----------------------
      if (this.winTime >= 137800) {
        this.gameWin()
      }
      if (this.winTime % 55000 === 0) {
        this.almostOver = new Audio('/assets/audio/It’s almost over.mp3')
        this.almostOver.volume = 0.3
        this.almostOver.play()
      }
      if (this.winTime % 45000 === 0) {
        this.littleMore = new Audio('/assets/audio/Just a little more.mp3')
        this.littleMore.volume = 0.3
        this.littleMore.play()
      }
      if (this.winTime % 40000 === 0) {
        this.soTired = new Audio('/assets/audio/Tired.mp3')
        this.soTired.volume = 0.3
        this.soTired.play()
      }
      if (this.winTime % 35000 === 0) {
        this.candyShop = new Audio('/assets/audios ad/Candy shop.mp3')
        this.candyShop.volume = 0.3
        this.candyShop.play()
      }
      if (this.winTime % 30200 === 0) {
        this.needCoffee = new Audio('/assets/audios ad/Need coffee.mp3')
        this.needCoffee.volume = 0.3
        this.needCoffee.play()
      }
      if (this.winTime % 30000 === 0) {
        this.pizzaPlace = new Audio('/assets/audios ad/Pizza place.mp3')
        this.pizzaPlace.volume = 0.3
        this.pizzaPlace.play()
      }
      if (this.winTime % 25000 === 0) {
        this.moreIShoot = new Audio('/assets/audios ad/More I shoot.mp3')
        this.moreIShoot.volume = 0.3
        this.moreIShoot.play()
      }
      if (this.winTime % 8000 === 0) {
        this.getsSiri = new Audio('/assets/audio/Gets serious.mp3')
        this.getsSiri.volume = 0.2
        this.getsSiri.play()
      }
      if (this.winTime >= 12500 && this.winTime <= 13999) {
        extraLife = 2
      }
      if (this.winTime >= 24000) {
        extraLife = 3
      }
      // win time game end -----------------------
    }, 1000 / 60)
  }
  stop() {
    this.musicStart.pause()
    clearInterval(this.interval)
    this.interval = null
    clearInterval(window.timerInterval)
  }
  clear() {
    this.ctx.clearRect(
      this.ratPoison,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    )
    this.karens = this.karens.filter((e) => e.isVisible())
    this.rats = this.rats.filter((e) => e.isVisible())
    this.fats = this.fats.filter((e) => e.isVisible())
    this.geese = this.geese.filter((e) => e.isVisible())
    this.babys = this.babys.filter((e) => e.isVisible())
    this.customers = this.customers.filter((e) => e.isVisible())
    this.bosss = this.bosss.filter((e) => e.isVisible())
    this.korens = this.korens.filter((e) => e.isVisible())
    this.foods = this.foods.filter((e) => e.isVisible())
    this.puddles = this.puddles.filter((e) => e.isVisible())
    this.upgrades = this.upgrades.filter((e) => e.isVisible())
    this.upBullets = this.upBullets.filter((e) => e.isVisible())
    this.carts = this.carts.filter((e) => e.isVisible())
    this.drugs = this.drugs.filter((e) => e.isVisible())
    this.fires = this.fires.filter((e) => e.isVisible())
    this.discounts = this.discounts.filter((e) => e.isVisible())
    this.player.heats = this.player.heats.filter((e) => e.isVisible())
    this.player.shotguns = this.player.shotguns.filter((e) => e.isVisible())
    this.player.hooks = this.player.hooks.filter((e) => e.isVisible())
    this.player.toxics = this.player.toxics.filter((e) => e.isVisible())
    this.player.blasters = this.player.blasters.filter((e) => e.isVisible())
    this.player.auras = this.player.auras.filter((e) => e.isVisible())
    this.player.waters = this.player.waters.filter((e) => e.isVisible())
    this.player.sanders = this.player.sanders.filter((e) => e.isVisible())
    this.player.discountings = this.player.discountings.filter((e) =>
      e.isVisible()
    )
    mineria = mineria.filter((e) => e.isVisible())
    this.lampTick++
    if (this.karens.length <= 0) {
      const alert = document.getElementById('karens-alert')
      alert.style.display = 'none'
    }
    if (this.rats.length <= 0) {
      const alert = document.getElementById('rat-alert')
      alert.style.display = 'none'
    }
    if (this.fats.length <= 0) {
      const alert = document.getElementById('fat-alert')
      alert.style.display = 'none'
    }
    if (this.geese.length <= 0) {
      const alert = document.getElementById('goose-alert')
      alert.style.display = 'none'
    }
    if (this.babys.length <= 0) {
      const alert = document.getElementById('baby-alert')
      alert.style.display = 'none'
    }
    if (this.puddles.length <= 0) {
      const alert = document.getElementById('water-alert')
      alert.style.display = 'none'
    }
    if (this.fires.length <= 0) {
      const alert = document.getElementById('fire-alert')
      alert.style.display = 'none'
    }
    if (this.upgrades.length <= 0) {
      const alert = document.getElementById('upgrade-alert')
      alert.style.display = 'none'
    }
    if (this.upBullets.length <= 0) {
      const alert = document.getElementById('upBullet-alert')
      alert.style.display = 'none'
    }
    if (this.bosss.length <= 0) {
      const alert = document.getElementById('boss-alert')
      alert.style.display = 'none'
    }
    if (this.korens.length <= 0) {
      const alert = document.getElementById('koren-alert')
      alert.style.display = 'none'
    }
    if (
      this.bosss.length <= 0 &&
      this.korens.length <= 0 &&
      this.fires.length <= 0 &&
      this.puddles.length <= 0 &&
      this.babys.length <= 0 &&
      this.geese.length <= 0 &&
      this.fats.length <= 0 &&
      this.rats.length <= 0 &&
      this.karens.length <= 0
    ) {
      const nothingToWorrie = document.getElementById('ok')
      nothingToWorrie.style.display = 'inline-block'
      const statusOk = document.getElementById('status')
      statusOk.style.backgroundColor = 'rgb(0, 128, 0)'
      statusOk.style.color = 'white'
      statusOk.style.border = '3px solid rgb(3, 59, 3)'
      statusOk.style.padding = '2px 20px'
      statusOk.style.marginBottom = '2px'
    }
  }
  draw() {
    this.upgrades.forEach((e) => e.draw())
    this.upBullets.forEach((e) => e.draw())
    if (this.player.respect.total <= 0.3 && this.player.life.total <= 3) {
      this.player.sandstate = true
    }
    if (this.player.respect.total >= 0.5 || this.player.life.total >= 5) {
      setTimeout(() => {
        this.player.sandstate = false
      }, 3000)
    }
    if (this.player.sandstate === true) {
      this.player.sandAlterImg = '/assets/images/munición/hurricanestorm2.png'
      this.player.imgSand.src = '/assets/images/elements/sandballHeal.png'
    } else {
      this.player.sandAlterImg = ''
      this.player.imgSand.src = '/assets/images/elements/sandball.png'
    }
    if (this.ratMessage) {
      this.ratTick++
      this.ctx.font = '20px Arial'
      this.ctx.fillStyle = 'red'
      this.ctx.fillText(
        `Poisoned ${venom} times. Icecream can help!`,
        this.player.x - 29,
        this.player.y - 16
      )
      this.ctx.fillStyle = 'tomato'
      this.ctx.fillText(
        `Poisoned ${venom} times. Icecream can help!`,
        this.player.x - 26,
        this.player.y - 14
      )
      this.ctx.fillStyle = 'white'
      this.ctx.fillText(
        `Poisoned ${venom} times. Icecream can help!`,
        this.player.x - 28,
        this.player.y - 15
      )
      if (this.ratTick >= 400) {
        this.ratTick = 0
        this.ratMessage = false
      }
    }
    if (this.upBullets.length >= 1) {
      this.ctx.save()
      this.ctx.font = '20px Sans'
      ctx.fillStyle = 'lime'
      ctx.globalAlpha = 0.8
      ctx.fillRect(1229, 220, 159, 120)
      ctx.globalAlpha = 1
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(`New Upgrades!`, 1258, 238)
      this.ctx.font = '18px Sans'
      this.ctx.fillText(`There are`, 1293, 266)
      this.ctx.fillText(`some upgrades`, 1278, 286)
      this.ctx.fillText(`for bullets at`, 1287, 306)
      this.ctx.fillStyle = 'red'
      this.ctx.font = '22px Sans'
      this.ctx.fillText(`-Fixit Forge-`, 1263, 332)
      this.ctx.drawImage(this.helper1, 1234, 245, 45, 70)
    }
    if (this.upgrades.length >= 1) {
      this.ctx.save()
      this.ctx.font = '20px Sans'
      ctx.fillStyle = 'lime'
      ctx.globalAlpha = 0.8
      ctx.fillRect(1229, 220, 159, 120)
      ctx.globalAlpha = 1
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(`New Upgrades!`, 1258, 238)
      this.ctx.font = '18px Sans'
      this.ctx.fillText(`There are`, 1290, 266)
      this.ctx.fillText(`some upgrades`, 1277, 286)
      this.ctx.fillText(`for weapons at`, 1274, 306)
      this.ctx.fillStyle = 'red'
      this.ctx.font = '22px Sans'
      this.ctx.fillText(`-Warhouse-`, 1270, 332)
      this.ctx.drawImage(this.helper4, 1232, 245, 45, 70)
      this.ctx.restore()
    }
    if ( cartInMall) {
      this.ctx.save()
      this.ctx.font = '20px Sans'
      ctx.fillStyle = 'lime'
      ctx.globalAlpha = 0.8
      ctx.fillRect(1229, 220, 159, 120)
      ctx.globalAlpha = 1
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(`Get that cart!`, 1258, 238)
      this.ctx.font = '18px Sans'
      this.ctx.fillText(`Need parts to`, 1280, 266)
      this.ctx.fillText(`to upgrade`, 1285, 286)
      this.ctx.fillText(`your weapons`, 1274, 306)
      this.ctx.fillStyle = 'red'
      this.ctx.font = '20px Sans'
      this.ctx.drawImage(this.helper2, 1232, 245, 45, 70)
      this.ctx.fillText(`Parts needed 5 / ${cartCount}`, 1235, 330)
      this.ctx.restore()
    }
    if( preparingUpgradeImage){
      this.ctx.save()
      this.ctx.font = '20px Sans'
      ctx.fillStyle = 'yellow'
      ctx.globalAlpha = 0.8
      ctx.fillRect(1229, 220, 159, 120)
      ctx.globalAlpha = 1
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(`Almost done!`, 1258, 238)
      this.ctx.font = '18px Sans'
      this.ctx.fillText(`Sending it your way`, 1235, 335)
      this.ctx.fillStyle = 'red'
      this.ctx.font = '20px Sans'
      this.ctx.drawImage(this.helper7, 1280, 240, 65, 80)
      this.ctx.restore()
    }

    this.curePoisonTimer = 300;
    this.korens.forEach((e) => e.draw())
    this.bosss.forEach((e) => e.draw())
    this.babys.forEach((e) => e.draw())
    this.customers.forEach((e) => e.draw())
    if (addWalls) {
      this.walls.forEach((e) => e.draw())
    }
    if (addPeople) {
      this.pback.forEach((e) => e.draw())
      this.pfront.forEach((e) => e.draw())
    }
    this.geese.forEach((e) => e.draw())
    this.puddles.forEach((e) => e.draw())
    this.fires.forEach((e) => e.draw())
    this.player.draw()
    this.fats.forEach((e) => e.draw())
    this.rats.forEach((e) => e.draw())
    if (addWalls) {
      this.bushesover.forEach((e) => e.draw())
    }
    if (addCactus) {
      this.cactus.forEach((e) => e.draw())
    }
    this.karens.forEach((e) => e.draw())
    this.carts.forEach((e) => e.draw())
    this.drugs.forEach((e) => e.draw())
    this.foods.forEach((e) => e.draw())
    this.discounts.forEach((e) => e.draw())
    this.token.draw()
    // se dibujan los portales a partir de las 5 horas
    if (this.winTime >= 50 && addPortal) {
      //14 de la tarde 57500
      this.portals.forEach((e) => e.draw())
      this.portals2.forEach((e) => e.draw())
    }
    // aparecen los niveles para subir
    if (this.levelerTick >= 33333 && this.levelerTick <= 33333) {
      this.karens = this.rats = this.babys = this.customers = this.fats = this.puddles = this.fires = this.geese = this.bosss = this.korens = this.carts = this.foods = this.upgrades = this.upBullets = this.discounts =[]
      leveler = true
      this.player.x = 500
      this.player.y = 400
    }
    if (addLamps) {
      this.lamps.forEach((e) => e.draw())
      if (this.lampTick >= 7640) {// se reinicia cada 2 horas con 7640
        this.lamps.forEach(
        (lamp) => (lamp.img.src = '/assets/images/elements/lampOfff.png'))
        this.lamps.forEach((lamp) => (lamp.lights = false))
        this.alertingSound = new Audio('/assets/audios ad/lampOff.wav')
        this.alertingSound.volume = 0.05
        this.alertingSound.play()
        this.lampTick = 0
        lampOn = 0
      }
    }
    // CTX data statistics
    // CTX data statistics
    if (!showPlayerPhysicalStats) {
      this.ctx.fontSize = '60px'
      this.ctx.fillText(`<`, 60, 875)
      this.ctx.fontSize = '40px'
      this.ctx.font = '24px Arial'
      this.ctx.fillText(`Click to see`, 90, 858)
      this.ctx.fillText(`physical stats!`, 90, 885)
    }
    if (showPlayerPhysicalStats) {
      this.ctx.drawImage(this.backPack, 80, 840, 50, 50)
      this.ctx.drawImage(this.bodyImg, 480, 833, 65, 65)
      this.ctx.drawImage(this.brain, 760, 840, 50, 50)
      this.ctx.font = '16px Arial'
      this.ctx.fillStyle = 'white'
      this.ctx.fillText( `Recharge Time: ${this.player.cooldownBullet.toString()}`, 150, 852)
      this.ctx.fillText( `Bullet Speed: ${this.player.speedBullet.toFixed(1).toString()}`, 150, 870)
      this.ctx.fillText( `Shooting Range: ${bulletDistance.toString()}`, 150, 888)
      if (this.upgradeMessage === true) {
      this.upgradeTick++
      this.ctx.fillStyle = 'aqua'
      this.ctx.fillText(`Recharge Time: ${this.player.cooldownBullet.toString()}`,150,852)
        this.ctx.fillText( `Bullet Speed: ${this.player.speedBullet.toFixed(1).toString()}`, 150, 870)
        this.ctx.fillText( `Shooting Range: ${bulletDistance.toString()}`, 150, 888)
        this.ctx.fillStyle = 'white'
        if (this.upgradeTick >= 150) {this.upgradeMessage = falsethis.upgradeTick = 0}
      }
      this.ctx.fillText(`After Growth: ${afterSize.toString()}`, 320, 860)
      this.ctx.fillText(`Ammo size: ${bulletSize.toString()}`, 320, 880)
      if (this.upBulletsMessage === true) {
        this.upBulletTick++
        this.ctx.fillStyle = 'aqua'
        this.ctx.fillText(`After Growth: ${afterSize.toString()}`, 320, 860)
        this.ctx.fillText(`Ammo size: ${bulletSize.toString()}`, 320, 880)
        this.ctx.fillStyle = 'white'
        if (this.upBulletTick >= 150) {this.upBulletsMessage = falsethis.upBulletTick = 0
        }
      }
      this.ctx.fillText(
        `Jump cooldown: ${this.player.cooldownJump.toFixed(1)}`,
        540,
        852
      )
      this.ctx.fillText(
        `Jump distance: ${distance.toFixed(1).toString()}ft`,
        540,
        870
      )
      this.ctx.fillText(`Walk Speed: ${this.player.speed.toFixed(1)}`, 540, 888)
      this.ctx.fillText(`Luck lvl: ${chance.toString()}`, 818, 852)
      this.ctx.fillText(`Public Image: ${publicImageLevel}`, 818, 870);
      this.ctx.fillText(`Instinct: ${instinct.toString()}`, 818, 888)
      if(publicImage % 3 === 0 && publicImage > 0 && publicImageLevelup === false) {
        publicImageLevel ++;
        publicImageLevelup = true;
        if (publicImageLevelup) {
          this.ctx.fillStyle = 'aqua'
          this.ctx.fillText(`Public Image: ${publicImageLevel}`, 818, 870);
          setTimeout(() => {
            publicImageLevelup = false
          }, 3000)
        }
      }

      if (this.customersMessage) {
        this.customerTick++
        this.ctx.fillStyle = 'aqua'
        this.ctx.fillText(
          `Jump cooldown: ${this.player.cooldownJump.toFixed(1)}`,
          540,
          852
        )
        this.ctx.fillText(
          `Jump distance: ${distance.toFixed(1).toString()}ft`,
          540,
          870
        )
        this.ctx.fillText(
          `Walk Speed: ${this.player.speed.toFixed(1)}`,
          540,
          888
        )
        if (this.customerTick >= 150) {
          this.customerTick = 0
          this.customersMessage = false
        }
      }
      if (training) {
        this.ctx.fillStyle = 'aqua'
        this.ctx.fillText(
          `Jump distance: ${distance.toFixed(1).toString()}ft`,
          540,
          870
        )
        this.ctx.fillText(
          `Walk Speed: ${this.player.speed.toFixed(1)}`,
          540,
          888
        )
        // cuando deja de entrenar, pierde velodidad y distancia de salto
      } else if (!training && this.player.speed >= 5) {
        distance -= 0.002
        this.player.speed -= 0.0002
        if (distance >= 90) {
          distance -= 0.005
        }
        if (this.player.speed >= 7) {
          this.player.speed -= 0.0005
        }
        this.ctx.fillStyle = 'tomato'
        this.ctx.fillText(
          `Jump distance: ${distance.toFixed(1).toString()}ft`,
          540,
          870
        )
        this.ctx.fillText(
          `Walk Speed: ${this.player.speed.toFixed(1)}`,
          540,
          888
        )
      }
      if (this.perjudiceMessage === true) {
        this.perjudiceTick++
        this.ctx.fillStyle = 'tomato'
        this.ctx.fillText(
          `Jump cooldown: ${this.player.cooldownJump.toFixed(1)}`,
          540,
          852
        )
        this.ctx.fillText(
          `Jump distance: ${distance.toFixed(1).toString()}ft`,
          540,
          870
        )
        this.ctx.fillText(
          `Walk Speed: ${this.player.speed.toFixed(1)}`,
          540,
          888
        )
        if (this.perjudiceTick >= 150) {
          this.perjudiceTick = 0
          this.perjudiceMessage = false
        }
      }
      if (this.bossPerjIs === true) {
        this.bossPerjTick++
        this.ctx.fillStyle = 'tomato'
        this.ctx.fillText(`Recharge Time: ${this.player.cooldownBullet.toString()}`,150,852)
        this.ctx.fillText(`After Growth: ${afterSize.toString()}`, 320, 860)
        this.ctx.fillText(`Ammo size: ${bulletSize.toString()}`, 320, 880)
        this.ctx.fillText(`Bullet Speed: ${this.player.speedBullet.toFixed(1).toString()}`,150,870)
        if (this.bossPerjTick >= 150) {
          this.bossPerjTick = 0
          this.bossPerjIs = false
        }
      }
    }

    if ( destroyerLeveling >= 1) {
      this.machinegunTime--
      C = 67
      V = 86
      if (this.machinegunTime <= 0) {
        C = 0
        V = 0
        this.machinegunTime = 0
        this.machinganRestore--
        if (this.machinganRestore <= 0) {
          this.machinegunTime = machingunCountback
          this.machinganRestore = machingunRestoreCountback
          C = 67
          V = 86
          this.alertingSound = new Audio(
            '/assets/audios ad/reloadMachinegun.mp3'
          )
          this.alertingSound.volume = 0.05
          this.alertingSound.play()
        }
      }
    }
    if (discounting >= 1) {
      R = 82
    }
    if (discounting < 1) {
      R = 0
    }
    if (this.ratPoison === 1010) {
      const poison = document.getElementById('poisoned')
      poison.style.display = 'inline-block'
      this.poisonedTime--
      this.ctx.font = '23px Sans'
      ctx.fillStyle = 'green'
      ctx.fillRect(1220, 30, 155, 28)
      this.ctx.fillStyle = 'purple'
      this.ctx.fillText(`Poisoned ${this.poisonedTime.toString()}`, 1235, 52)
      if (this.poisonedTime <= 0) {
        this.ratPoison = 0
        this.poisonedTime = 1000
      }
    }

    if (this.player.foodReady) {
      this.player.foodReady = false
      const food = new Food(ctx, 130, 350)
      this.foods.push(food)
    }
    // levelup messages..levelup messages..levelup messages..levelup messages..levelup messages..
    // levelup messages..levelup messages..levelup messages..levelup messages..levelup messages..

    this.ctx.save()

    if (this.levelMessage1) {
      this.tick++
      this.ctx.drawImage(
        this.levelupHook,
        140 - this.tick / 4,
        250 - this.tick / 4,
        80 + this.tick / 2,
        60 + this.tick / 2
      )
      this.ctx.drawImage(this.levelupImg1, 35, 30, 300, 200)
      this.ctx.font = '25px Arial'
      this.ctx.save()
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(
        `Hook-master`,
        this.player.x - 55 - this,
        this.player.y - 30
      )
      this.ctx.fillText(`Hook-master`, this.player.x - 56, this.player.y - 31)
      this.ctx.font = '25px Arial'
      this.ctx.fillStyle = 'aqua'
      if (this.tick >= 20 && this.tick <= 39) {
        this.ctx.fillStyle = 'rgb(100, 245, 100)'
      } else if (this.tick >= 40 && this.tick <= 59) {
        this.ctx.fillStyle = 'rgb(75, 245, 75)'
      } else if (this.tick >= 60 && this.tick <= 89) {
        this.ctx.fillStyle = 'rgb(0, 245, 0)'
      }
      this.ctx.fillText(`Hook-master`, this.player.x - 54, this.player.y - 29)
      this.ctx.restore()
      if (this.tick >= 150) {
        this.levelMessage1 = false
        this.tick = 0
      }
    }
    if (this.levelMessage2) {
      this.tick++
      this.ctx.drawImage(
        this.levelupMachinegun,
        440 - this.tick / 4,
        250 - this.tick / 4,
        100 + this.tick / 2,
        70 + this.tick / 2
      )
      this.ctx.drawImage(this.levelupImg2, 355, 30, 300, 200)
      this.ctx.font = '25px Arial'
      this.ctx.save()
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(
        `Destroyer`,
        this.player.x - 45 - this,
        this.player.y - 30
      )
      this.ctx.fillText(`Destroyer`, this.player.x - 46, this.player.y - 31)
      this.ctx.font = '25px Arial'
      this.ctx.fillStyle = 'yellow'
      if (this.tick >= 20 && this.tick <= 39) {
        this.ctx.fillStyle = 'rgb(100, 245, 100)'
      } else if (this.tick >= 40 && this.tick <= 59) {
        this.ctx.fillStyle = 'rgb(75, 245, 75)'
      } else if (this.tick >= 60 && this.tick <= 89) {
        this.ctx.fillStyle = 'rgb(0, 245, 0)'
      }
      this.ctx.fillText(`Destroyer`, this.player.x - 44, this.player.y - 29)
      this.ctx.restore()
      if (this.tick >= 150) {
        this.levelMessage2 = false
        this.tick = 0
      }
    }
    if (this.levelMessage3) {
      this.tick++
      this.ctx.drawImage(this.levelupImg3, 675, 30, 300, 200)
      this.ctx.drawImage(
        this.levelupElement,
        780 - this.tick / 4,
        250 - this.tick / 4,
        80 + this.tick / 2,
        80 + this.tick / 2
      )
      this.ctx.font = '25px Arial'
      this.ctx.save()
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(
        `Elementalist`,
        this.player.x - 55 - this,
        this.player.y - 30
      )
      this.ctx.fillText(`Elementalist`, this.player.x - 56, this.player.y - 31)
      this.ctx.font = '25px Arial'
      this.ctx.fillStyle = 'rgb(200, 245, 200)'
      if (this.tick >= 20 && this.tick <= 39) {
        this.ctx.fillStyle = 'rgb(100, 245, 100)'
      } else if (this.tick >= 40 && this.tick <= 59) {
        this.ctx.fillStyle = 'rgb(75, 245, 75)'
      } else if (this.tick >= 60 && this.tick <= 89) {
        this.ctx.fillStyle = 'rgb(0, 245, 0)'
      }
      this.ctx.fillText(`Elementalist`, this.player.x - 54, this.player.y - 29)
      this.ctx.restore()
      if (this.tick >= 150) {
        this.levelMessage3 = false
        this.tick = 0
      }
    }
    // levelup messages.....................
    if (chargingTrue) {
      this.chargeTick++
      if (this.chargeTick >= 150) {
        chargingTrue = false
        this.chargeTick = 0
      }
      if (charging !== 0) {
        this.ctx.save()
        this.ctx.font = '16px Arial'
        this.ctx.fillStyle = 'white'
        this.ctx.shadowColor = "violet";
        this.ctx.shadowBlur = 5;
        this.ctx.lineWidth = 3;
        this.ctx.fillText( `Blaster 20/${charging.toString()}`, this.player.x - 50, this.player.y + 70)
        this.ctx.restore()
      }
      if (charging === 0) {
        this.ctx.save()
        this.ctx.font = '16px Arial'
        this.ctx.fillStyle = 'red';
        this.ctx.shadowColor = "violet";
        this.ctx.shadowBlur = 5;
        this.ctx.lineWidth = 3;
        this.ctx.fillText( `Megablaster Charged!`, this.player.x - 50, this.player.y + 70)
        this.ctx.restore()
      }
    }
    if (this.puddles.length + this.fires.length >= 9) {
      this.player.getRespect(-0.0003)
    }
    // CTX data statistics
    // CTX data statistics
    if (this.winTime >= 960) {
      this.healing.draw()
      this.iceCreamAlert()
    }
    if (this.winTime >= 961 && this.winTime <= 964) {
      this.alertingSound = new Audio('/assets/audios ad/alerting.wav')
      this.alertingSound.volume = 0.05
      this.alertingSound.play()
    }

    this.score.draw()
    this.saved.draw()

    if (leveler === true) {
      this.ctx.font = '20px Sans'
      ctx.fillStyle = 'black'
      ctx.globalAlpha = 0.8
      ctx.fillRect(1210, 210, 177, 130)
      ctx.globalAlpha = 1
      this.ctx.fillStyle = 'white'
      this.ctx.fillText(`Level Ups Boss`, 1258, 235)
      this.ctx.font = '18px Sans'
      this.ctx.fillText(`Choose one...`, 1270, 260)
      this.ctx.fillText(`I'll improve your`, 1265, 278)
      this.ctx.fillText(`weapon of choice soon`, 1220, 296)
      this.ctx.drawImage(this.helper2, 1220, 215, 40, 60)
      this.ctx.drawImage(this.levelupImg1, 35, 30, 300, 200)
      this.ctx.drawImage(this.levelupImg2, 355, 30, 300, 200)
      this.ctx.drawImage(this.levelupImg3, 675, 30, 300, 200)
      this.levelUps1.draw()
      this.levelUps2.draw()
      this.levelUps3.draw()
    }
  }
  move() {
    this.player.move()
    this.token.move()
    this.karens.forEach((e) => e.move())
    this.portals.forEach((e) => e.move())
    this.portals2.forEach((e) => e.move())
    this.rats.forEach((e) => e.move())
    this.fats.forEach((e) => e.move())
    this.geese.forEach((e) => e.move())
    this.babys.forEach((e) => e.move())
    this.customers.forEach((e) => e.move())
    this.bosss.forEach((e) => e.move(this.player))
    this.korens.forEach((e) => e.move(this.player))
    this.puddles.forEach((e) => e.move())
    this.fires.forEach((e) => e.move())
    this.pfront.forEach((e) => {
      if (e.walking === true) {
        e.move()
      }
    })

    this.healing.move()
    this.carts.forEach((e) => e.move(this.player))
    this.drugs.forEach((e) => e.move(this.player))
    this.foods.forEach((e) => e.move(this.player))
    this.upgrades.forEach((e) => e.move(this.player))
    this.upBullets.forEach((e) => e.move(this.player))
    this.discounts.forEach((e) => e.move(this.player))
  }
  addKaren() {
    const karen = new Karens(ctx)
    this.karens.push(karen)
  }
  addRat() {
    const rat = new Rats(ctx)
    this.rats.push(rat)
    this.thisAudio = new Audio('/assets/audio/Comemos.mp3')
    this.thisAudio.volume = 0.2
    this.thisAudio.play()
    this.thisAudio = new Audio('/assets/audios ad/Ratas.mp3')
    this.thisAudio.volume = 0.03
    this.thisAudio.play()
  }
  addFat() {
    const fat = new Fat(ctx)
    this.fats.push(fat)
  }
  addGoose() {
    const goose = new Goose(ctx)
    this.geese.push(goose)
    this.thisAudio = new Audio('/assets/audio/angryGoose.mp3')
    this.thisAudio.volume = 0.02
    this.thisAudio.play()
  }
  addBaby() {
    const baby = new Baby(ctx)
    this.babys.push(baby)
    this.newShoes = new Audio('/assets/audio/Los baby.mp3')
    this.newShoes.volume = 0.2
    this.newShoes.play()
    this.newShoes = new Audio('/assets/audios ad/Baby.mp3')
    this.newShoes.volume = 0.07
    this.newShoes.play()
  }
  addCustomer() {
    const customer = new Customer(ctx)
    this.customers.push(customer)
  }
  addBoss() {
    const boss = new Boss(ctx)
    this.bosss.push(boss)
    this.thisAudio = new Audio('/assets/audio/Nonono.mp3')
    this.thisAudio.volume = 0.2
    this.thisAudio.play()
    this.thisAudio = new Audio('/assets/audios ad/Karen loca.mp3')
    this.thisAudio.volume = 0.1
    this.thisAudio.play()
  }
  addKoren() {
    const koren = new Koren(ctx)
    this.korens.push(koren)
  }
  addPuddle() {
    const puddle = new Puddle(ctx)
    this.puddles.push(puddle)
    this.puddleBeginAudio = new Audio('/assets/audio/puddleBegin.mp3')
    this.puddleBeginAudio.volume = 0.5
    this.puddleBeginAudio.play()
  }
  addFire() {
    const fire = new Fire(ctx)
    this.fires.push(fire)
    this.puddleBeginAudio = new Audio('/assets/audio/fireBegin.wav')
    this.puddleBeginAudio.volume = 0.02
    this.puddleBeginAudio.play()
  }
  addCart() {
    const cart = new Cart(ctx)
    this.carts.push(cart)
    this.luzOnAudio = new Audio('/assets/audios ad/cartLeft2.wav')
    this.luzOnAudio.volume = 0.07
    this.luzOnAudio.play()
    cartInMall = true; // para que aparezca el mensaje de helper
  }
  addDrug() {
    const drug = new Drugs(ctx)
    this.drugs.push(drug)
    this.luzOnAudio = new Audio('/assets/audios ad/cartLeft2.wav')
    this.luzOnAudio.volume = 0.07
    this.luzOnAudio.play()
  }

  addFood() {
    const food = new Food(ctx)
    this.foods.push(food)
    this.disco = new Audio('/assets/audios ad/food.wav')
    this.disco.volume = 0.01
    this.disco.play()
  }
  addUpgrade() {
    const upgrade = new Upgrade(ctx)
    this.upgrades.push(upgrade)
    this.luzOnAudio = new Audio('/assets/audios ad/upgrades.m4a')
    this.luzOnAudio.volume = 0.03
    this.luzOnAudio.play()
    this.luzOnAudio = new Audio('/assets/audios ad/upgradeSound.wav')
    this.luzOnAudio.volume = 0.03
    this.luzOnAudio.play()
  }
  addUpBullet() {
    const upBullet = new Upbullet(ctx)
    this.upBullets.push(upBullet)
    this.luzOnAudio = new Audio('/assets/audios ad/upgradeForBullets.m4a')
    this.luzOnAudio.volume = 0.03
    this.luzOnAudio.play()
    this.luzOnAudio = new Audio('/assets/audios ad/upgradeSound.wav')
    this.luzOnAudio.volume = 0.03
    this.luzOnAudio.play()
  }
  addDiscount() {
    const discount = new Discount(ctx)
    this.discounts.push(discount)
    this.disco = new Audio('/assets/audio/discount.wav')
    this.disco.volume = 0.01
    this.disco.play()
  }
  triggerRandomUpgrade() {
  const random = Math.floor(Math.random() * 2); // 0 o 1
  switch (random) {
    case 0:
      this.addUpBullet();
      break;
    case 1:
      this.addUpgrade();
      break;
  }
}

  // alerts start !!!!!!
  // alerts start !!!!!!
  alerting() {
    const nothingToWorrie = document.getElementById('ok')
    nothingToWorrie.style.display = 'none'
    const statusOk = document.getElementById('status')
    statusOk.style.backgroundColor = 'rgb(252, 5, 5)'
    statusOk.style.border = '5px solid rgb(99, 5, 5)'
    statusOk.style.color = 'white'
    this.disco = new Audio('/assets/audios ad/alerting.wav')
    this.disco.volume = 0.05
    this.disco.play()
  }
  karensAlert() {
    const karensAlert = document.getElementById('karens-alert')
    karensAlert.style.display = 'inline-flex'
    this.alerting()
  }
  ratAlert() {
    const ratAlert = document.getElementById('rat-alert')
    ratAlert.style.display = 'inline-flex'
    this.alerting()
  }
  fatAlert() {
    const fatAlert = document.getElementById('fat-alert')
    fatAlert.style.display = 'inline-flex'
    this.alerting()
  }
  gooseAlert() {
    const gooseAlert = document.getElementById('goose-alert')
    gooseAlert.style.display = 'inline-flex'
    this.alerting()
  }
  waterAlert() {
    const waterAlert = document.getElementById('water-alert')
    waterAlert.style.display = 'inline-flex'
    this.alerting()
  }
  fireAlert() {
    const fireAlert = document.getElementById('fire-alert')
    fireAlert.style.display = 'inline-flex'
    this.alerting()
  }
  upgradeAlert() {
    const upgradeAlert = document.getElementById('upgrade-alert')
    upgradeAlert.style.display = 'inline-flex'
    this.alerting()
  }
  upBulletAlert() {
    const upBulletAlert = document.getElementById('upBullet-alert')
    upBulletAlert.style.display = 'inline-flex'
    this.alerting()
  }
  babyAlert() {
    const babyAlert = document.getElementById('baby-alert')
    babyAlert.style.display = 'inline-flex'
    this.alerting()
  }
  bossAlert() {
    const crazyKaren = document.getElementById('boss-alert')
    crazyKaren.style.display = 'inline-flex'
    this.alerting()
  }
  korenAlert() {
    const korenAlert = document.getElementById('koren-alert')
    korenAlert.style.display = 'inline-flex'
    this.alerting()
  }
  iceCreamAlert() {
    const iceWorning = document.getElementById('ice')
    iceWorning.style.display = 'inline-block'
  }
  // alerts end !!!!!!

  // funciones sueltas para varias cosas
  // funciones sueltas para varias cosas
  // funciones sueltas para varias cosas

  // al tercer nivel de hook checkCharger también aumenta en 2 el charging al impactar

  //Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..
  //Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..Colisiones start..

  // para las colisiones que acumulan megablaster hasta 20
  checkCharger() {
    if (M === 0) {
      charging += 1
      chargingTrue = true
      if (charging >= 20) {
        M = 77
        charging = 0
        this.luzOnAudio = new Audio('/assets/audios ad/reloadBlaster.wav')
        this.luzOnAudio.volume = 0.1
        this.luzOnAudio.play()
      }
    }
  }
  checkCollisions() {
    // puddle....
    this.puddles.forEach((puddle) => { //agua con blasters
      this.player.blasters.filter((blast) => {
        if (blast.collides(puddle)) {
          puddle.dicreaseSmall()
          puddlePuff(puddle)
          return false
        } else return true
      })
    })
    this.puddles.forEach((puddle) => {
      //agua con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(puddle)) {
          puddle.dicreaseSmall()
          puddlePuff(puddle)
          return false
        } else return true
      })
    })
    
    this.puddles.forEach((puddle) => { //agua con fuego
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(puddle)) {
          this.player.heats.splice(0, 1)
          this.checkCharger()
          puddle.dicrease()
          puddlePuff(puddle)
          return false
        } else return true
      })
    })
    this.player.waters.forEach((water) => {
      // agua con agua
      this.puddles.forEach((puddle) => {
        water.collides(puddle)
        if (water.collides(puddle)) {
          this.player.waters.splice(0, 1)
          this.puddleBeginAudio = new Audio('/assets/audio/puddleBegin.mp3')
          this.puddleBeginAudio.volume = 0.2
          this.puddleBeginAudio.play()
          puddle.increase()
        }
      })
    })
    this.player.hooks.forEach((hook) => {//hook con agua
      this.puddles.forEach((puddle) => {
        hook.collides(puddle)
        if (hook.collides(puddle)) {
          hookCollideWaterFire(puddle, hook, this.player)
        }
      })
    })
    // fire......
    this.fires.forEach((fire) => {//fuego con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(fire)) {
          fire.dicreaseSmall()
          firePuff(fire)
          return false
        } else return true
      })
    })
    this.fires.forEach((fire) => {//fuego con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(fire)) {
          fire.dicreaseSmall()
          firePuff(fire)
          return false
        } else return true
      })
    })
    this.fires.forEach((fire) => {
      //fuego con agua
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(fire)) {
          this.player.waters.splice(0, 1)
          this.checkCharger()
          fire.dicrease()
          firePuff(fire)
          return false
        } else return true
      })
    })
    this.player.heats.forEach((heat) => {
      //fuego con fuego
      this.fires.forEach((fire) => {
        heat.collides(fire)
        if (heat.collides(fire)) {
          this.player.heats.splice(0, 1)
          fire.increase()
        }
      })
    })
    this.player.hooks.forEach((hook) => {
      //fuego con hook
      this.fires.forEach((fire) => {
        hook.collides(fire)
        if (hook.collides(fire)) {
          hookCollideWaterFire(fire, hook, this.player)
        }
      })
    })

    // karen....
    this.karens = this.karens.filter((karen) => {
      //karen con player
      if (karen.collides(this.player)) {
        this.line.draw()
        this.line.move()
        if (
          this.line.y < this.player.y - 10 ||
          this.line.y > this.player.y + 180
        ) {
          this.line.y = this.player.y + 25
        }
        if (this.line.check === 1) {
          return false
        }
      }
      return true
    })
    this.karens.forEach((karen) => {
      //karen con discounting
      this.player.discountings = this.player.discountings.filter((disc) => {
        if (disc.collides(karen)) {
          this.player.discountings.splice(0, 1)
          karen.w = 60
          return false
        } else return true
      })
    })
    this.karens.forEach((karen) => {
      //karens con toxics
      this.player.toxics.filter((sand) => {
        if (sand.collides(karen)) {
          this.ctx.font = '20px Arial'
          this.ctx.fillStyle = 'red'
          this.ctx.fillText(`Im going nowhere!`, karen.x - 49, karen.y - 26)
          this.ctx.fillStyle = 'tomato'
          this.ctx.fillText(`Im going nowhere!`, karen.x - 46, karen.y - 24)
          this.ctx.fillStyle = 'white'
          this.ctx.fillText(`Im going nowhere!`, karen.x - 48, karen.y - 25)
          return false
        } else return true
      })
    })
    //Rats..................
    this.rats = this.rats.filter((rat) => {
      //rat con player
      if (rat.collides(this.player)) {
        this.player.hit(0.005)
        this.player.vy = -1
        this.player.vx = -1
        this.ratPoison = 1010
        venom += 1
        this.ratMessage = true
        if (venom >= 5) {
          //cuando el veneno llega hasta 5 acumulaciones, obtiene nueva habilidad en la P
          P = 80
        }
      }
      return true
    })
    this.rats.forEach((rat) => {
      //rat con water
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(rat)) {
          this.player.waters.splice(0, 1)
          rat.lifeleft -= 1
          rat.vx += 1
          this.checkCharger()
          foodAndDiscountDrop(rat, this.foods, this.discounts)
          return false
        } else return true
      })
    })
    this.rats.forEach((rat) => {
      //rat con fire
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(rat)) {
          this.player.heats.splice(0, 1)
          if (rat.lifeleft >= 0.1) rat.lifeleft -= 1
          rat.vx += 1
          this.checkCharger()
          foodAndDiscountDrop(rat, this.foods, this.discounts)
          return false
        } else return true
      })
    })
    this.rats.forEach((rat) => {
      //rat con hook
      this.player.hooks = this.player.hooks.filter((heat) => {
        if (heat.collides(rat)) {
          this.player.hooks.splice(0, 1)
          rat.vx = 0
          rat.cage = true
          hookImpact = true
          if (hookLeveling >= 1) {
            rat.lifeleft -= 1
            foodAndDiscountDrop(rat, this.foods, this.discounts)
          }
          this.checkCharger()
          this.luzOnAudio = new Audio('/assets/audios ad/ratHook.mp3')
          this.luzOnAudio.volume = 0.07
          this.luzOnAudio.play()
          return false
        } else return true
      })
    })
    this.rats.forEach((rat) => {//rat con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(rat)) {
          blast.rocketDetonation = true
          rat.lifeleft -= 5
          foodAndDiscountDrop(rat, this.foods, this.discounts)
          return false
        } else return true
      })
    })

    this.rats.forEach((rat) => { //rat con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(rat)) {
          sand.activated = true
          rat.lifeleft -= sand.damage
          rat.lifeleft -= sand.damage
          rat.vx += 0.02
          foodAndDiscountDrop(rat, this.foods, this.discounts)
          return false
        } else return true
      })
    })
    this.rats.forEach((rat) => {
      // rat con mineReps
      mineria.filter((mineRep) => {
        if (mineRep.collides(rat)) {
          mineRep.activated = true
          rat.lifeleft -= mineRep.damage
          return false
        } else return true
      })
    })
    this.rats.forEach((rat) => {
      //rat con toxics
      this.player.toxics.filter((sand) => {
        if (sand.collides(rat)) {
          rat.lifeleft -= 0.005
          rat.vx += 0.003
          foodAndDiscountDrop(rat, this.foods, this.discounts)
          if (rat.vx >= 0) {
            rat.vx = 0
          }
          this.ctx.font = '20px Arial'
          this.ctx.fillStyle = 'red'
          this.ctx.fillText(`Scared rat noises:`, rat.x - 29, rat.y - 16)
          this.ctx.fillStyle = 'tomato'
          this.ctx.fillText(`Scared rat noises:`, rat.x - 26, rat.y - 14)
          this.ctx.fillStyle = 'white'
          this.ctx.fillText(`Scared rat noises:`, rat.x - 28, rat.y - 15)
          return false
        } else return true
      })
    })

    // goose.........
    this.geese = this.geese.filter((goose) => {
      //goose con player
      if (goose.collides(this.player)) {
        this.player.hit(0.02)
        if (discounting >= 5) {
          discounting -= 5
        }
        return false
      }
      return true
    })

    this.geese.forEach((goose) => {//goose con fire
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(goose)) {
          goose.lifeleft -= 1;
          goose.isDamaged = true;
          foodAndDiscountDrop(goose, this.foods, this.discounts);
          this.player.heats.splice(0, 1);
          creaturePushback(goose, 30, this.player)

          this.checkCharger()
        } else return true
      })
      this.player.waters.filter((water) => {// goose con water
        if (water.collides(goose)) {
          this.player.waters.splice(0, 1)
          goose.lifeleft -= 1;
          goose.isDamaged = true;
          foodAndDiscountDrop(goose, this.foods, this.discounts)
          this.player.heats.splice(0, 1)
          creaturePushback(goose, 30, this.player)

          this.checkCharger()
        } else return true
      })

      this.player.hooks.filter((hook) => {
        // goose con hook
        if (hook.collides(goose)) {
          this.player.hooks.splice(0, 1)
          goose.cage = true
          hookImpact = true
          foodAndDiscountDrop(goose, this.foods, this.discounts)
          if (hookLeveling >= 2) {
            goose.lifeleft -= 1;
            goose.isDamaged = true;
          }
          this.luzOnAudio = new Audio('/assets/audios ad/gooseHook.mp3')
          this.luzOnAudio.volume = 0.07
          this.luzOnAudio.play()
          goose.moveY = 0
          goose.vx = 0
          this.player.heats.splice(0, 1)
          this.checkCharger()
        } else return true
      })
    })
    this.geese.forEach((goose) => {// goose con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(goose)) {
          blast.rocketDetonation = true
          goose.lifeleft -= 0.03;
          goose.isDamaged = true;
          foodAndDiscountDrop(goose, this.foods, this.discounts)
          return false
        } else return true
      })
    })
    this.geese.forEach((goose) => {
      // goose con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(goose)) {
          sand.activated = true
          goose.lifeleft -= sand.damage;
          goose.isDamaged = true;
          return false
        } else return true
      })
    })
    this.geese.forEach((goose) => {
      // goose con mineReps
      mineria.filter((mineRep) => {
        if (mineRep.collides(goose)) {
          mineRep.activated = true
          goose.lifeleft -= mineRep.damage;
          goose.isDamaged = true;
          if (goose.lifeleft === 0) {
          }
          return false
        } else return true
      })
    })
    this.geese.forEach((goose) => {// goose con toxic
      this.player.toxics.filter((tox) => {
        if (tox.collides(goose)) {
          goose.lifeleft -= 0.005
          goose.isDamaged = true;
          if (goose.vx > 0) {
            goose.vx -= 0.0005
          } else if (goose.vx < 0) {
            goose.vx += 0.0005
          }
          if (goose.vy > 0) {
            goose.vy = 0.005
          } else if (goose.vy < 0) {
            goose.vy = 0.005
          }
          this.ctx.font = '20px Arial'
          this.ctx.fillStyle = 'red'
          this.ctx.fillText(`Weird goose noises`, goose.x - 29, goose.y - 16)
          this.ctx.fillStyle = 'tomato'
          this.ctx.fillText(`Weird goose noises`, goose.x - 26, goose.y - 14)
          this.ctx.fillStyle = 'peachpuff'
          this.ctx.fillText(`Weird goose noises`, goose.x - 28, goose.y - 15)
          return false
        } else return true
      })
    })
    // enjaula a todas las ratas y gansos caundo tengas suficientes hoooks y hookleveling superior a 4
    if (
      this.player.cagedAllAnimals === true &&
      hookLeveling >= 4 &&
      this.hookedAllRatsAndGeese &&
      hookCounter >= this.geese.length &&
      hookCounter >= this.rats.length
    ) {
      //todas las ratas y gansos se quedarán atrapados en cajas
      this.geese.forEach((goose) => (goose.cage = true))
      this.geese.forEach((goose) => (goose.vx = 0))
      this.geese.forEach((goose) => (goose.moveY = 0))
      this.rats.forEach((rat) => (rat.cage = true))
      this.rats.forEach((rat) => (rat.vx = 0))
      hookCounter -= this.geese.length
      hookCounter -= this.rats.length
      this.hookedAllRatsAndGeese = false
      setTimeout(() => {
        this.geese.forEach((goose) => (goose.cage = false))
        this.geese.forEach((goose) => (goose.vx = 1.5))
        this.geese.forEach((goose) => (goose.moveY = 1.5))
        this.rats.forEach((rat) => (rat.cage = false))
        this.rats.forEach((rat) => (rat.vx = -3))
        this.player.cagedAllAnimals = false
        this.hookedAllRatsAndGeese = true
      }, 5000)
    }

    function handleCollisions(rats, items) {
      rats.forEach((rat) => {
        items = items.filter((item) => {
          if (item.collides(rat)) {
            items.splice(0, 1)
            return false
          } else return true
        })
      })

      return items
    }

    this.discounts = handleCollisions(this.rats, this.discounts)
    this.foods = handleCollisions(this.rats, this.foods)
    this.carts = handleCollisions(this.rats, this.carts)
    this.discounts = handleCollisions(this.geese, this.discounts)
    this.foods = handleCollisions(this.geese, this.foods)
    this.carts = handleCollisions(this.geese, this.carts)

    //fat..........
    this.fats = this.fats.filter((fat) => {//fat con jugador
      if (fat.collides(this.player)) {
        this.player.vy = 0
        this.player.vx = 0
        this.player.hit(0.005)
        this.player.drawSmash()
        this.player.getRespect(-0.0002)
      }
      return true
    })
    this.fats.forEach((fat) => {//fat con agua
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(fat)) {
          this.player.waters.splice(0, 1)
          this.checkCharger()
          fat.vy -= 0.3;
          fat.isDamaged = true;
          foodAndDiscountDrop(goose, this.foods, this.discounts)
        } else return true
      })
    })
    this.fats.forEach((fat) => {
      //fat con fuego
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(fat)) {
          this.player.heats.splice(0, 1)
          this.checkCharger()
          fat.vy -= 0.3;
          fat.isDamaged = true;
          foodAndDiscountDrop(goose, this.foods, this.discounts)
        } else return true
      })
    })

    this.fats.forEach((fat) => {
      //fat con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(fat)) {
          fat.vy -= 0.04;
          fat.isDamaged = true;
          return false
        } else return true
      })
    })
    this.fats.forEach((fat) => {
      //fat con toxic
      this.player.toxics.filter((tox) => {
        if (tox.collides(fat)) {
          fat.vy -= 0.001;
          fat.isDamaged = true;
          this.ctx.font = '20px Arial'
          this.ctx.fillStyle = 'red'
          this.ctx.fillText(`Can't breath!`, fat.x - 29, fat.y - 16)
          this.ctx.fillStyle = 'tomato'
          this.ctx.fillText(`Can't breath!`, fat.x - 26, fat.y - 14)
          this.ctx.fillStyle = 'white'
          this.ctx.fillText(`Can't breath!`, fat.x - 28, fat.y - 15)
          return false
        } else return true
      })
    })

    this.fats.forEach((fat) => {
      //fat con blasters
      this.player.blasters.filter((blast) => {
        if (blast.collides(fat)) {
          blast.rocketDetonation = true
          fat.vy -= 0.05;
          fat.isDamaged = true;
          foodAndDiscountDrop(goose, this.foods, this.discounts)
          return false
        } else return true
      })
    })
    this.fats.forEach((fat) => {
      //hook con fats
      this.player.hooks.filter((hook) => {
        if (hook.collides(fat)) {
          this.hookShootAudio = new Audio('/assets/audios ad/fatImpact.mp3')
          this.hookShootAudio.volume = 0.07
          this.hookShootAudio.play()
          this.hookShootAudio = new Audio('/assets/audios ad/fatHookImpact.m4a')
          this.hookShootAudio.volume = 0.07
          this.hookShootAudio.play()
          this.player.x = fat.x + 20
          this.player.y = fat.y + 40
          if (hookLeveling >= 2) {
            fat.vy -= 1;
            fat.isDamaged = true;
          }
          hook.dispose = true
          return false
        } else return true
      })
    })
    // koren...
    // koren...
    this.korens = this.korens.filter((koren) => {
      if (koren.collides(this.player)) {
        this.player.hit(0.005)
        this.player.hit(0.005)
      }
      return true
    })
    this.korens.forEach((koren) => {
      //koren con heat
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(koren)) {
          this.player.heats.splice(0, 1)
          timeDamage(koren, this.player);
          koren.isDamaged = true;
          this.checkCharger()
          if (koren.h >= 121 && !koren.truth) {
            koren.truth = true;
          }
        } else return true
      })
    })
    this.korens.forEach((koren) => {
      //koren con hook
      this.player.hooks = this.player.hooks.filter((hook) => {
        if (hook.collides(koren)) {
          this.atraer = new Audio('/assets/audios ad/jaula.mp3')
          this.atraer.volume = 0.07
          if (hookLeveling >= 2) {
            koren.korenEnd += 400;
            koren.isDamaged = true;

          }
          this.atraer.play()
          this.player.hooks.splice(0, 1)
          koren.vNegative = 0
          koren.v = 0
          koren.cage = true
        } else return true
      })
    })
    this.korens.forEach((koren) => {
      //koren con waters
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(koren)) {
          this.player.waters.splice(0, 1)
          timeDamage(koren, this.player);
          koren.isDamaged = true;
          this.checkCharger()
          if (koren.h >= 121 && !koren.truth) {
            koren.truth = true
          }
        } else return true
      })
    })
    this.korens.forEach((koren) => {
      //koren con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(koren)) {
          sand.activated = true;
          koren.h += sand.damage + 1;
          koren.w += sand.damage + 1;
          koren.isDamaged = true;
          if (!sand.activated) {
            timeDamage(koren, this.player)
          }
          charging += 0.1
          if (charging >= 20) {
            M = 77
            charging = 0
          }
          if (koren.h >= 121 && !koren.truth) {
            koren.truth = true
          }
        } else return true
      })
    })
    this.korens.forEach((koren) => {//koren con blasters
      this.player.blasters.filter((blast) => {
        if (blast.collides(koren)) {
          blast.rocketDetonation = true
          timeDamage(koren, this.player)
          charging += 0.1;
          koren.isDamaged = true;
          if (charging >= 20) {
            M = 77
            charging = 0
          }
          if (koren.h >= 121 && !koren.truth) {
            koren.truth = true
          }
        } else return true
      })
    })
    this.korens.forEach((koren) => {
      // koren con mineReps
      mineria.filter((mineRep) => {
        if (mineRep.collides(koren)) {
          mineRep.activated = true
          koren.h += mineRep.damage + 1
          koren.w += mineRep.damage + 1;
          koren.isDamaged = true;
          if (koren.lifeleft === 0) {
          }
          return false
        } else return true
      })
    })
    //babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...babys...
    this.babys = this.babys.filter((baby) => {//baby con player
      if (baby.collides(this.player)) {
        saving(this.saved, this.player, this.customersMessage)
        return false
      }
      return true
    })

    this.babys.forEach((baby) => {//baby con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(baby)) {
          console.log("queeeee")
          baby.x = -100
          blast.rocketDetonation = true;
          dyingCustomer(this.player, this.score, this.perjudiceMessage)
          return false
        } else return true
      })
    })

    this.babys.forEach((baby) => {//baby con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(baby)) {
          baby.x = -100;
          dyingCustomer(this.player, this.score, this.perjudiceMessage)
          return false
        } else return true
      })
    })
    this.babys.forEach((baby) => {//baby con waters
      this.player.waters.filter((wat) => {
        if (wat.collides(baby)) {
          baby.x = -100
          wat.x = -100
          dyingCustomer(this.player, this.score, this.perjudiceMessage)
          return false
        } else return true
      })
    })
    this.babys.forEach((baby) => {//baby con heats
      this.player.heats.filter((heat) => {
        if (heat.collides(baby)) {
          baby.x = -100
          heat.x = -100
          console.log(this.babys)
          dyingCustomer(this.player, this.score, this.perjudiceMessage)
          return false
        } else return true
      })
    })
    if(cactusCanCollide){
      this.cactus.forEach((cactu) => {//baby con cactus
        this.babys = this.babys.filter((baby) => {
          if (baby.collides(cactu)) {
            this.babys.splice(0, 1)
            cactu.bloodOnCactus++;
            dyingCustomer(this.player, this.score, this.perjudiceMessage)
            return false
          } else return true
        })
      })
    }
      
    this.babys.forEach((baby) => {
      //baby con hooks
      this.player.hooks.filter((hook) => {
        if (hook.collides(baby)) {
          this.atraer = new Audio('/assets/audios ad/jaula.mp3')
          this.atraer.volume = 0.07
          this.atraer.play()
          baby.vx = 0
          baby.moveY = 0
          baby.cage = true
          hook.dispose = true
          return false
        } else return true
      })
    })
    this.puddles.forEach((puddle) => {
      //baby con puddle
      this.babys = this.babys.filter((baby) => {
        if (baby.collides(puddle)) {
          this.babys.splice(0, 1)
          puddle.vx = 500
          dyingCustomer(this.player, this.score, this.perjudiceMessage)          
          if (this.score.dead % 1 === 0) {
            distance -= 30
          }
          return false
        } else return true
      })
    })
    this.fires.forEach((fire) => {
      //baby con fire
      this.babys = this.babys.filter((heat) => {
        if (heat.collides(fire)) {
          this.babys.splice(0, 1)
          fire.vx = 500
          dyingCustomer(this.player, this.score, this.perjudiceMessage)          
          return false
        } else return true
      })
    })
    this.babys.forEach((baby) => {
      //baby con toxic
      this.player.toxics.filter((tox) => {
        if (tox.collides(baby)) {
          baby.babyLife -= 0.005
          this.ctx.font = '20px Arial'
          this.ctx.fillStyle = 'red'
          this.ctx.fillText(`Gugu gaga! blah!:`, baby.x - 39, baby.y - 16)
          this.ctx.fillStyle = 'tomato'
          this.ctx.fillText(`Gugu gaga! blah!:`, baby.x - 36, baby.y - 14)
          this.ctx.fillStyle = 'white'
          this.ctx.fillText(`Gugu gaga! blah!:`, baby.x - 38, baby.y - 15)
          if (baby.babyLife <= 1) {
            baby.babyImg.src = '/assets/images/elements/blood.png'
            baby.babyFrame = 1
            baby.vx = 0
            baby.vy = 0
            if (baby.babyLife <= -1) {
          dyingCustomer(this.player, this.score, this.perjudiceMessage)              
              baby.x = 1800
            }
          }
          return false
        } else return true
      })
    })
    //customer...................................................................................................................................................
    this.customers = this.customers.filter((cus) => {//customer con player
      if (cus.collides(this.player)) {
        saving(this.saved, this.player, this.customersMessage)
        return false
      }
      return true
    })
    this.customers.forEach((cust) => {//cust con discounting
      this.player.discountings = this.player.discountings.filter((disc) => {
        if (disc.collides(cust)) {
          this.player.discountings.splice(0, 1)
          saving(this.saved, this.player, this.customersMessage)
          cust.x = 1130
          cust.y = 280
          cust.vx = 19
          cust.say = 'Thanx! Bye!'
          return false
        } else return true
      })
    })
    this.customers.forEach((cus) => { //customer con heat del player
      this.player.heats.filter((heat) => {
        if (heat.collides(cus)) {
          heat.x = -100;
          dyingCustomer(this.player, this.score, this.perjudiceMessage)          
          cus.lifeleft -= 1
          if (cus.dead >= 50) {
            this.atraer = new Audio('/assets/audios ad/dustBite.m4a')
            this.atraer.volume = 0.07
            this.atraer.play()
            this.score.dead += 1
          }
          return true
        } else return true
      })
    })
    this.customers.forEach((cus) => {//customer con water
      this.player.waters.filter((water) => {
        if (water.collides(cus)) {
          water.x = -100;
          dyingCustomer(this.player, this.score, this.perjudiceMessage)          
          cus.lifeleft -= 1
          if (cus.dead >= 50) {
            this.atraer = new Audio('/assets/audios ad/dustBite.m4a')
            this.atraer.volume = 0.07
            this.atraer.play()
          }
          return true
        } else return true
      })
    })
    this.player.blasters.forEach((blast) => {
    this.customers.filter((cus) => { //customer con blaster
        if (cus.collides(blast)) {
          dyingCustomer(this.player, this.score, this.perjudiceMessage)    
          blast.rocketDetonation = true;
          cus.lifeleft -= 1;
          cus.canCollide = false;
          return true
        } else return true
      })
    })
    this.player.sanders.forEach((sand) => {
    this.customers.filter((cus) => {//customer con sanders
        if (cus.collides(sand)) {
          dyingCustomer(this.player, this.score, this.perjudiceMessage)         
          cus.lifeleft -= 1;
          cus.canCollide = false;
          return true
        } else return true
      })
    })

    this.player.shotguns.forEach((shot) =>{
      this.customers.filter((cus) =>{
        if(cus.collides(shot)){
          cus.lifeleft -= 0.334;
          cus.isDamaged = true;
          if(cus.lifeleft<=0){
            dyingCustomer(this.player, this.score, this.perjudiceMessage)         
          }
          creaturePushback(cus, 40, this.player)
        }
      })
    })


    this.puddles.forEach((puddle) => {//customer con puddle
      this.customers = this.customers.filter((cus) => {
        if (cus.collides(puddle)) {
          cus.lifeleft -= 1;
          dyingCustomer(this.player, this.score, this.perjudiceMessage);     
          cus.canCollide = false;    
          if (cus.dead >= 50) {
            this.atraer = new Audio('/assets/audios ad/dustBite.m4a')
            this.atraer.volume = 0.07
            this.atraer.play()
            this.score.dead += 1
          }
          return true
        } else return true
      })
    })
    this.fires.forEach((fire) => {
      //customer con fuego
      this.customers = this.customers.filter((cus) => {
        if (cus.collides(fire)) {
          cus.lifeleft -= 1;
          dyingCustomer(this.player, this.score, this.perjudiceMessage);
          cus.canCollide = false;    
          cus.canCollide = false;    
          if (cus.dead >= 50) {
            this.atraer = new Audio('/assets/audios ad/dustBite.m4a')
            this.atraer.volume = 0.07
            this.atraer.play()
            this.score.dead += 1
          }
          return true
        } else return true
      })
    })
    if(cactusCanCollide){
    this.cactus.forEach((cactu) => {//customer con cactus
      this.customers = this.customers.filter((cus) => {
        if (cus.collides(cactu)) {
          dyingCustomer(this.player, this.score, this.perjudiceMessage)          
          cus.lifeleft -= 1;
          cus.canCollide = false;
          cactu.bloodOnCactus++;
          if (cus.dead >= 50) {
            this.atraer = new Audio('/assets/audios ad/dustBite.m4a')
            this.atraer.volume = 0.07
            this.atraer.play()
            this.score.dead += 1
          }
          return true
        } else return true
      })
    })
    }

    this.customers.forEach((customer) => {
      //customer con toxic
      this.player.toxics.filter((tox) => {
        if (tox.collides(customer)) {
          customer.lifeleft -= 0.005
          customer.vy -= 0.0001
          this.ctx.font = '20px Arial'
          this.ctx.fillStyle = 'red'
          this.ctx.fillText( `Gugu gaga! blah!:`, customer.x - 39, customer.y - 16)
          this.ctx.fillStyle = 'tomato'
          this.ctx.fillText(   `Gugu gaga! blah!:`,   customer.x - 36,   customer.y - 14)
          this.ctx.fillStyle = 'white'
          this.ctx.fillText(   `Gugu gaga! blah!:`,   customer.x - 38,   customer.y - 15 )
          if (customer.lifeleft <= 0.3) {
            baby.babyImg.src = '/assets/images/elements/blood.png'
            customer.customFrame = 1
            customer.vx = 0
            customer.vy = 0
          }
          if (customer.lifeleft <= 0.1 && customer.lifeleft >= 0.09) {
          dyingCustomer(this.player, this.score, this.perjudiceMessage)          
            this.score.dead += 0.5
          }
          return false
        } else return true
      })
    })
    this.customers.forEach((customer) => {
      //customer con hooks
      this.player.hooks.filter((hook) => {
        if (hook.collides(customer)) {
          this.atraer = new Audio('/assets/audios ad/jaula.mp3')
          this.atraer.volume = 0.07
          this.atraer.play()
          customer.vy = 0
          customer.moveX = 0
          customer.cage = true
          hook.dispose = true
          return false
        } else return true
      })
    })
    // boss.........................
     this.bosss.filter((boss) => {
      this.player.hooks = this.player.hooks.filter((hook) => {
        if (hook.collides(boss)) {
          //boss con hook
          this.karenSounds[
            Math.floor(Math.random() * this.karenSounds.length)
          ].play()
          this.player.hooks.splice(0, 1)
          this.atraer = new Audio('/assets/audios ad/jaula.mp3')
          this.atraer.volume = 0.07
          this.atraer.play()
          if (hookLeveling >= 2) {
            boss.lifeleft -= 0.4
          }
          this.checkCharger()
          boss.cage = true
          boss.v = 0
          boss.vNegative = 0
          return false
        } else return true
      })})
    
   this.bosss.forEach((bos) => {
      if (bos.collides(this.player)) {
        this.player.speed -= 0.008;
        if(this.player.speed <= 0){
          this.player.speed = 0.2
        }
        this.player.cooldownBullet += 300
        if(this.player.cooldownBullet >= 6000){
          this.player.cooldownBullet = 6000;
        }
        afterSize -= 0.5;
        bulletSize -= 0.5;
        if(afterSize <= 10 || bulletSize <= 10 ){
        afterSize = 10;
        bulletSize = 10;
        }
        this.bossPerjIs = true
        this.player.hit(0.02)
      }
      return true
    })
    
    this.bosss.forEach((boss) => {
      //boss con agua
      this.player.waters = this.player.waters.filter((water) => {
        if (water.collides(boss)) {
          this.karenSounds[
            Math.floor(Math.random() * this.karenSounds.length)
          ].play()
          this.player.waters.splice(0, 1)
          boss.lifeleft -= 1
          creaturePushback(boss, 20, this.player)
          this.checkCharger()
          this.angryKorenPopup(10)
          this.addKoren()
          this.korenAlert()
          return false
        } else return true
      })
      this.player.heats = this.player.heats.filter((heat) => {
        if (heat.collides(boss)) {
          //boss con fuego
          this.player.heats.splice(0, 1)
          this.karenSounds[
            Math.floor(Math.random() * this.karenSounds.length)
          ].play()
          boss.lifeleft -= heat.damage
          this.checkCharger()
          this.angryKorenPopup(10)
          this.addKoren()
          this.korenAlert()
          return false
        } else return true
      })
    })
    this.bosss.forEach((boss) => {
      //boss con blaster
      this.player.blasters.filter((blast) => {
        if (blast.collides(boss)) {
          blast.rocketDetonation = true
          boss.lifeleft -= 0.1
          this.checkCharger()
          this.angryKorenPopup(190)
          this.addKoren()
          this.korenAlert()
          return false
        } else return true
      })
    })
    this.bosss.forEach((boss) => {
      // boss con mineReps
      mineria.filter((mineRep) => {
        if (mineRep.collides(boss)) {
          mineRep.activated = true
          boss.lifeleft -= mineRep.damage
          this.angryKorenPopup(10)
          this.addKoren()
          this.korenAlert()
          return false
        } else return true
      })
    })
    this.bosss.forEach((boss) => {
      //boss con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(boss)) {
          sand.activated = true
          boss.lifeleft -= sand.damage
          this.angryKorenPopup(190)
          this.addKoren()
          this.korenAlert()
          return false
        } else return true
      })
    })
    // Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..Obstáculos..
    if (addPeople) {
      this.pback.forEach((peop) => {//pback con player
        if (peop.collides(this.player)) {
          collidingWithClients(peop, this.ctx, this.player)
        }
      })
      this.pfront.forEach((peop) => {//pfront con player
        if (peop.collides(this.player)) {
          collidingWithClients(peop, this.ctx, this.player)
        }
      })

      this.pfront.forEach((peop) => {
        //PFront con blaster
        this.player.blasters.filter((blast) => {
          if (blast.collides(peop) && areaDamage) {
            directDamagingClients(peop, 'Hey!', 0.0004, this.ctx, this.player) //
            return false
          } else return true
        })
      })
      this.pback.forEach((peop) => {
        //PBack con blaster
        this.player.blasters.filter((blast) => {
          if (blast.collides(peop) && areaDamage) {
            directDamagingClients(peop, 'Ouch!', 0.0004, this.ctx, this.player) //
            return false
          } else return true
        })
      })
const peopleGroups = [
  { group: this.pfront, message: 'Great!' },
  { group: this.pback,  message: 'Thanx!' }
];

peopleGroups.forEach(({ group, message }) => {
  group.forEach((peop) => {
    this.player.discountings.filter((disc) => {
      if (disc.collides(peop)) {
        directHelpingClients(peop, message, 0.002, this.ctx, this.player);
        return false;
      } else return true;
    });
  });
});

      this.pfront.forEach((peop) => {
        //pfro con sanders
        this.player.sanders.filter((sand) => {
          if (sand.collides(peop)) {
            if (this.player.sandstate === true) {
              stormHealingClients(peop, peop.niceMessage)
            } else {
              directDamagingClients(
                peop,
                'Whats this?!',
                0.0002,
                this.ctx,
                this.player
              ) //
            }
            return false
          } else return true
        })
      })
      this.pback.forEach((peop) => {
        //pBack con sanders
        this.player.sanders.filter((sand) => {
          if (sand.collides(peop)) {
            if (this.player.sandstate === true) {
              stormHealingClients(peop, peop.niceMessage)
            } else {
              directDamagingClients(
                peop,
                'Help!',
                0.0002,
                this.ctx,
                this.player
              ) //
            }
            return false
          } else return true
        })
      })
    }
    if (addWalls) {
      this.bushesover.forEach((wall) => {
        //bushes
        if (wall.collides(this.player)) {
          this.player.vy = 0
          this.player.vx = 0
          if (this.player.y < wall.y) {
            this.player.y = wall.y - this.player.h
            this.vy = wall.y
          }
          if (this.player.y + this.player.h > wall.y + wall.h) {
            this.player.y = wall.y + wall.h
            this.player.vy = 0
          }
          if (this.player.x + this.player.w > wall.x + wall.w) {
            this.player.x = wall.x + wall.w
            this.vx = 0
          }
          if (this.player.x < wall.x) {
            this.player.x = wall.x - this.player.w
            this.vx = wall.x
          }
        }
      })
      this.walls.forEach((wall) => {
        // walls
        if (wall.collides(this.player)) {
          this.player.vx *= 0.7;
          this.player.vy *= 0.7;
        }
      })
    }
    if (this.winTime >= 57500 && addPortal) {
      //esto abarca desde los hooks al jugador
      this.portals.forEach((port) => {
        //hook con portal hooktal
        this.player.hooks.filter((hook) => {
          if (hook.collides(port)) {
            this.portals2.forEach((pro) => {
              //horizontal impact
              if (pro.vx === -1 && hook.vx <= 0) {
                hook.x = pro.x - 30
                hook.y = pro.y
              }
              if (pro.vx === -1 && hook.vx >= 0) {
                hook.x = pro.x + 52
                hook.y = pro.y
              }
              if (pro.vx === 1 && hook.vx <= 0) {
                hook.x = pro.x - 30
                hook.y = pro.y
              }
              if (pro.vx === 1 && hook.vx >= 0) {
                hook.x = pro.x + 52
                hook.y = pro.y
              }
              if (pro.vy === -1 && hook.vy <= 0) {
                hook.x = pro.x
                hook.y = pro.y - 30
              }
              if (pro.vy === -1 && hook.vy >= 0) {
                hook.x = pro.x
                hook.y = pro.y + 52
              }
              if (pro.vy === 1 && hook.vy >= 0) {
                hook.x = pro.x
                hook.y = pro.y + 52
              }
              if (pro.vy === 1 && hook.vy <= 0) {
                hook.x = pro.x
                hook.y = pro.y - 30
              }
            })
            return false
          } else return true
        })
      })
      this.portals2.forEach((port) => {
        //hook con portal
        this.player.hooks.filter((hook) => {
          if (hook.collides(port)) {
            this.portals.forEach((pro) => {
              //horizontal impact
              if (pro.vx === -1 && hook.vx <= 0) {
                hook.x = pro.x - 30
                hook.y = pro.y
              }
              if (pro.vx === -1 && hook.vx >= 0) {
                hook.x = pro.x + 52
                hook.y = pro.y
              }
              if (pro.vx === 1 && hook.vx <= 0) {
                hook.x = pro.x - 30
                hook.y = pro.y
              }
              if (pro.vx === 1 && hook.vx >= 0) {
                hook.x = pro.x + 52
                hook.y = pro.y
              }
              if (pro.vy === -1 && hook.vy <= 0) {
                hook.x = pro.x
                hook.y = pro.y - 30
              }
              if (pro.vy === -1 && hook.vy >= 0) {
                hook.x = pro.x
                hook.y = pro.y + 52
              }
              if (pro.vy === 1 && hook.vy >= 0) {
                hook.x = pro.x
                hook.y = pro.y + 52
              }
              if (pro.vy === 1 && hook.vy <= 0) {
                hook.x = pro.x
                hook.y = pro.y - 30
              }
            })
            return false
          } else return true
        })
      })
      this.portals.forEach((port) => {
        if (port.collides(this.player)) {
          this.portals2.forEach((pro) => {
            if (pro.vx === -1) {
              this.player.x = pro.x + 40
              this.player.y = pro.y
            }
            if (pro.vx === 1) {
              this.player.x = pro.x - 40
              this.player.y = pro.y
            }
            if (pro.vy === -1) {
              this.player.x = pro.x
              this.player.y = pro.y + 40
            }
            if (pro.vy === 1) {
              this.player.x = pro.x
              this.player.y = pro.y - 40
            }
          })
        }
      })
      this.portals2.forEach((port) => {
        if (port.collides(this.player)) {
          this.portals.forEach((pro) => {
            if (pro.vx === -1) {
              this.player.x = pro.x + 40
              this.player.y = pro.y
            }
            if (pro.vx === 1) {
              this.player.x = pro.x - 40
              this.player.y = pro.y
            }
            if (pro.vy === -1) {
              this.player.x = pro.x
              this.player.y = pro.y + 40
            }
            if (pro.vy === 1) {
              this.player.x = pro.x
              this.player.y = pro.y - 40
            }
          })
        }
      })
    }
    if (addCactus && cactusCanCollide) {
      this.cactus.forEach((cact) => {
        if (cact.collides(this.player)) {
          this.player.vx *= 0.8;
          this.player.vy *= 0.8;
          this.player.hit(0.005)
          this.player.drawOuch()
        }
      })
    }
    this.puddles.forEach((puddle) => {
      if (puddle.collides(this.player)) {
        this.player.drawWater()
        this.player.hit(0.005)
        this.player.vy = 0
        this.player.vx = 0
      }
    })
    this.fires.forEach((fire) => {
      if (fire.collides(this.player)) {
        this.player.hit(0.005)
        this.player.drawFire()
        this.player.vy = 0
        this.player.vx = 0
      }
    })
    //carts..............................................................................................................................................
    this.carts = this.carts.filter((cart) => {
      if (cart.collides(this.player)) {
        cartCount += 1;
        setTimeout(() => {
          cartInMall = false; //para que la imagen del helper se quede un rato mas
        }, 1000);
        if(cartCount >= 5){
          setTimeout(() => {
            preparingUpgradeImage = true;
          }, 1000);
          setTimeout(() => {
            cartCount = 0;
            preparingUpgradeImage = false;
            this.triggerRandomUpgrade()
          }, 5000);
        }
        this.getCart = new Audio('/assets/audios ad/bonus.mp3')
        this.getCart.volume = 0.03;
        this.getCart.play()
        let luckyStrike = randomLuck()//para que salga un número aleatorio de la cantidad de munición ganada
        if(destroyerLeveling >= 2){
          rocketCount += 2 + luckyStrike;
        }
        if(hookLeveling >= 1){
          hookCounter += 2 + luckyStrike;
        }
        if(elementalistLeveling >= 2){
          elementalMineCount += 2 + luckyStrike;
        }
        if (solvedTotal >= 35) {
          T = 84;
          this.shielOn = new Audio('/assets/audios ad/shieldActivated.wav')
          this.shielOn.volume = 0.05
          this.shielOn.play()
        }
        this.player.getRespect(0.1)
        return false
      }
      return true
    })

    this.drugs = this.drugs.filter((drug) => {
      //drugs con player
      if (drug.collides(this.player)) {
        // this.shielOn = new Audio("/assets/audios ad/shieldActivated.wav");
        // this.shielOn.volume = 0.05;
        // this.shielOn.play()
        // this.atraer = new Audio("/assets/audios ad/bonus.mp3")
        // this.atraer.volume = 0.03;
        // this.atraer.play();
        fireDrug = true
        waterDrug = true
        // this.player.extraBoostState = true
        // this.player.extraSizeState = true
        // this.player.lesserSizeState = true
        return false
      }
      return true
    })

    // Función para procesar colisiones entre ganchos y elementos comunes
    if (addLamps) {
      this.lamps.forEach((lamp) => {
        //hook con lamps
        this.player.hooks.filter((hook) => {
          if (hook.collides(lamp)) {
            if (lamp.lights === false) {
              lamp.lights = true
              this.luzOnAudio = new Audio('/assets/audios ad/luzOn.mp3')
              this.luzOnAudio.volume = 0.07
              this.luzOnAudio.play()
              lampOn += 1
              if(hookLeveling>= 3){
                money += 100;
                this.player.getRespect(0.4);
              if( lampOn > 11) {
                money += 100; //mas dinero si enciendes muchas lamparas
              }
            }
              if (lampOn === amountOfLamps) {
                publicImage += 1
                lamp.lights = false
              }
              lamp.img.src = '/assets/images/elements/lamp.png'
            }
            this.hookShootAudio = new Audio('/assets/audios ad/impactoHook.mp3')
            this.hookShootAudio.volume = 0.07
            this.hookShootAudio.play()
            this.player.x = lamp.x
            this.player.y = lamp.y
            hook.dispose = true
            return false
          } else return true
        })
      })
    }

    function processCollisions(player, hooks, elements) {
      elements.forEach((element) => {
        player.hooks.filter((hook) => {
          if (hook.collides(element)) {
            const atraer = new Audio('/assets/audio/atraer2.mp3')
            atraer.volume = 0.07
            atraer.play()
            hook.dispose = true
            element.v = 2.4
            element.vNegative = 7.2
            return false
          } else return true
        })
      })
    }
    processCollisions(this.player, this.player.hooks, this.foods)
    processCollisions(this.player, this.player.hooks, this.carts)
    processCollisions(this.player, this.player.hooks, this.discounts)

    // Función para procesar colisiones entre ganchos y elementos de levelup
    function processCollisions(player, hooks, elements, alertId) {
      elements.forEach((element) => {
        player.hooks.filter((hook) => {
          if (hook.collides(element)) {
            const atraer = new Audio('/assets/audio/atraer2.mp3')
            atraer.volume = 0.07
            atraer.play()
            hook.dispose = true
            element.v = 1
            element.vNegative = 7.2
            if (elements.length === 0) {
              const alertElement = document.getElementById(alertId)
              alertElement.style.display = 'none'
            }
            return false
          } else return true
        })
      })
    }
    processCollisions( this.player, this.player.hooks, this.drugs, 'upgrade-alert')
    processCollisions( this.player, this.player.hooks, this.upBullets, 'upBullet-alert')
    processCollisions( this.player, this.player.hooks, this.upgrades, 'upgrade-alert')

    // foods.............................
    this.foods = this.foods.filter((food) => {
      if (food.collides(this.player)) {
        this.atraer = new Audio('/assets/audios ad/bonus.mp3')
        this.atraer.volume = 0.03
        this.atraer.play()
        this.player.heal(2)
        return false
      }
      return true
    })
    // upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...upgrades upbulltes...
    this.upgrades = this.upgrades.filter((up) => {
      if (up.collides(this.player)) {
        this.player.speedBullet += 2
        bulletDistance += 40
        this.player.cooldownBullet -= 300
        if (this.player.cooldownBullet <= 600) {
          this.player.cooldownBullet = 600;
        }
        showPowerupWeapons();
        B = 66
        this.atraer = new Audio('/assets/audios ad/bonus.mp3')
        this.atraer.volume = 0.03
        this.atraer.play()
        this.upgradeMessage = true
        if (this.upgrades.length === 0) {
          const upAlert = document.getElementById('upgrade-alert')
          upAlert.style.display = 'none'
        }
        return false
      }
      return true
    })
    this.upBullets = this.upBullets.filter((up) => {
      if (up.collides(this.player)) {
        afterSize += 20
        bulletSize += 10
        showPowerupBullets();
        B = 66
        this.atraer = new Audio('/assets/audios ad/bonus.mp3')
        this.atraer.volume = 0.03
        this.atraer.play()
        this.upBulletsMessage = true
        if (this.upBullets.length === 0) {
          const upgAlert = document.getElementById('upBullet-alert')
          upgAlert.style.display = 'none'
        }
        return false
      }
      return true
    })

    //discount......................................................
    this.discounts = this.discounts.filter((discount) => {
      if (discount.collides(this.player)) {
        this.line.b -= 0.5
        this.line.a += 0.5
        discounting += 1
        this.atraer = new Audio('/assets/audios ad/bonus.mp3')
        this.atraer.volume = 0.03
        this.atraer.play()
        return false
      }
      return true
    })
    this.player.toxics = this.player.toxics.filter((tox) => {
      if (tox.collides(this.player)) {
        this.player.loseLife(0.001)
        this.ctx.font = '20px Arial'
        this.ctx.fillStyle = 'red'
        this.ctx.fillText(
          'My skin burns!',
          this.player.x - 40,
          this.player.y - 28
        )
        this.ctx.fillStyle = 'red'
        this.ctx.fillText(
          'My skin burns!',
          this.player.x - 36,
          this.player.y - 24
        )
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(
          'My skin burns!',
          this.player.x - 38,
          this.player.y - 26
        )
      }
      return true
    })
    this.player.sanders = this.player.sanders.filter((sand) => {
      //sandheal con player
      if (sand.collides(this.player)) {
        if (this.player.sandstate === true) {
          this.player.heal(0.004)
          this.ctx.font = '20px Arial'
          this.ctx.fillStyle = 'blue'
          this.ctx.fillText('Healing!', this.player.x - 40, this.player.y - 28)
          this.ctx.fillStyle = 'ble'
          this.ctx.fillText('Healing!', this.player.x - 36, this.player.y - 24)
          this.ctx.fillStyle = 'aqua'
          this.ctx.fillText('Healing!', this.player.x - 38, this.player.y - 26)
        }
      }
      return true
    })
    this.player.blasters.forEach((blast) => {
      // con sanders
      this.player.sanders.filter((sand) => {
        if (sand.collides(blast)) {
          this.tick++
          if (this.tick % 45 === 0 && this.player.blasters.length <= 20) {
            this.player.megablaster()
          }
          return false
        } else return true
      })
    })

    // levelups..................
    // hooker
    if (leveler) {
      if (this.levelUps1.collides(this.player)) {
        B = 66
        hookCounter += 5
        this.levelupSound = new Audio('/assets/audios ad/levelupHookSound.mp3')
        this.levelupSound.volume = 0.05
        this.levelupSound.play()
        this.levelMessage1 = true
        hookLeveling += 1
        leveler = false
        this.levelerTick = 0
        if(hookLeveling >= 2){
          G = 71;
        }
      }
      // destroyer
      if (this.levelUps2.collides(this.player)) {
        this.levelupSound = new Audio('/assets/audios ad/reloadMachinegun.mp3')
        this.levelupSound.volume = 0.05;
        this.levelupSound.play();
        this.levelMessage2 = true
        destroyerLeveling += 1;
        if (destroyerLeveling >= 2) {
          machingunCountback = 1300 // aumenta el tiempo de activación de machinegun
          F = 70 //se activa rocketlouncher
          rocketCount += 5;
        }
        if (destroyerLeveling >= 3) {
          H = 72
          moneyForKill = true
        }
        leveler = false
        this.levelerTick = 0
      }
      // elementalist
      if (this.levelUps3.collides(this.player)) {
        elementalistLeveling += 1;
        N = 78;
        L = 76;
        if (elementalistLeveling >= 2) {
          J = 74
          elementalMineCount += 5
        }
        if (elementalistLeveling >= 3) {
          K = 75
          mineCount += 25
        }
        this.levelupSound = new Audio(
          '/assets/audios ad/levelupElementalSound.mp3'
        )
        this.levelupSound.volume = 0.05
        this.levelupSound.play()
        this.levelMessage3 = true
        leveler = false
        this.levelerTick = 0
      }
    }

    // collision end... collision end... collision end... collision end... collision end... collision end... collision end...

    // evento que se dispara al perder toda la vida, morir clientes, perder el respeto y perder hjas de reclamaciones
    if (!this.player.isRespected()) {
      this.gameOver()
      const lose = document.getElementById('loseRespect')
      lose.style.display = 'flex'
    }
    if (forms.length < 1) {
      this.gameOver()
      const lose = document.getElementById('loseClaim')
      lose.style.display = 'flex'
    }
    if (this.score.dead >= 10) {
      this.gameOver()
      const lose = document.getElementById('loseDead')
      lose.style.display = 'flex'
    }
    if (!this.player.isAlive()) {
      this.gameOver()
      const lose = document.getElementById('loseDied')
      lose.style.display = 'flex'
    }
    if (this.healing.collides(this.player) && this.winTime >= 350) {
      this.player.heal(0.004)
      this.iceCurePoison++
      if (this.iceCurePoison >= this.curePoisonTimer) {
        this.ratPoison = 0
        this.iceCurePoison = 0
        const poison = document.getElementById('poisoned')
        poison.style.display = 'none'
      }
    }
  }
  //Colisiones end
  gameOver() {
    this.stop()
    this.karens = []
    this.rats = []
    this.babys = []
    this.customers = []
    this.fats = []
    this.puddles = []
    this.fires = []
    this.geese = []
    this.bosss = []
    this.korens = []
    this.carts = []
    this.foods = []
    this.korens = []
    this.upgrades = []
    this.upBullet = []
    this.dicounts = []
    this.winMus = new Audio('/assets/audios ad/losemusic.mp3')
    this.winMus.volume = 0.1
    this.winMus.play()
    const modal = document.getElementById('modal-overlay')
    modal.style.display = 'flex'
    const reloadBtn = document.querySelector('.neon-butt-reload')
    reloadBtn.style.display = 'flex'
  }
  gameWin() {
    this.stop()
    this.karens = []
    this.rats = []
    this.babys = []
    this.customers = []
    this.fats = []
    this.puddles = []
    this.fires = []
    this.geese = []
    this.bosss = []
    this.korens = []
    this.carts = []
    this.drugs = []
    this.foods = []
    this.korens = []
    this.upgrades = []
    this.upBullet = []
    this.dicounts = []
    const wincon = document.getElementById('win')
    wincon.style.display = 'block'
    this.winMus = new Audio('/assets/audios ad/winmusic.mp3')
    this.winMus.volume = 0.1
    this.winMus.play()
  }
  setListeners() {
    document.addEventListener('keydown', (e) => {
      this.player.keyDown(e.keyCode)
      this.line.keyDown(e.keyCode)
    })
    document.addEventListener('keyup', (e) => {
      this.player.keyUp(e.keyCode)
    })
  }
}
