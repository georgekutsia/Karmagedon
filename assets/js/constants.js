let UP = 38;
let DOWN = 40;
let LEFT = 37;
let RIGHT = 39;
let SPACE = 32;
// let SPACE = 32;
let N = 78; // sandstorm
let M = 77; //77  megablaster
let ALT = 16; // jump
let Z = 90; //fire
let X = 88; // water
let C = 0; // fire machinegun
let V = 0; // water machinegun
let B = 0;//66  // shotgun 
let Q = 81;  // dodge left
let E = 69; // dodge right
let R = 0; //82  discount
let T = 0 //84   time shield
let P = 0; //80  venom
let J = 0 //74   time bombs
let F = 0 //70   rockets
let G = 0 //71    teleport to hook
let H = 1  //72   
let K = 0 // 75
const A = 65;
const W = 87;
const S = 83;
const D = 68;

let hookCounter = 0
let discounting = 0;
let charging = 0;

let money = 10000
let elementalMineCount = 0 //por unidad
let rocketCount = 0 //multiplo de 2.5 por alguna razón
let mineCount = 0 //multiplo de 5

let leveler = false //para subir de nivel
let hookTransporter = false//para que al pulsar la g teleporte a la posicion del hook
let hookBoost = false// para los beneficios de subir nivel el hook
let hookLeveling = 0; //para mejorar el hook a medida que sube de nivel
let destroyerLeveling = 0; //para mejorar la rama de destroyer
let elementalistLeveling = 0; //para mejorar la rama de destroyer

let areaDamage = true // para el daño de area de los megablasters y sanders y cosas así
let machinegunBoost = false// para activar las ametralladoras
let elementBoost = false //para activar la arena que te sigue
let extraLife = 1
let leveling = true
let shotgunShots = 0 //las balas de la escopeta
let extraShotgun = false  //al comprar la bala especial
let extraShot = 0 //al adquirir cartucho adicional, puedes disparar 3 veces
let thirdShotRange = 0;
let thirdShot = false //
let extraMine =  false //minas replicantes
let extraAreaDamage =  false //minas replicantes
let mineria = []
let fireDrug = false
let waterDrug = false
let hookImpact = false //al impactar el hook, disparas otro
let extraHooker = false //que se pueda comprar
let machingunCountback = 850;
let machingunRestoreCountback = 500;
let moneyForKill = false; //destroyerLeveling 3 y consigues dinero al matar bichos
let lifeTotal = 10;
let recharging = 10;
let recharginState = false;
let shotgunUpgrading = 0; //mejorar el shotgun para que haga mas daño o lo que sea
let shotgunUpgradingState = false; //mejorar el shotgun para que haga mas daño o lo que sea
let shotgunDamage = 0;
let shotgunRange = 0;

let playerBasicDamage = 0;
let playerDoubleDamage = 1;


let distance = 60;
let bulletDistance = 150;
let bulletDistanceExtra = 0;
let bulletSizeExtra = 50;
let auraDistance = 150;
let afterSize = 60
let bulletSize = 20
let chargingTrue = false
let venom = 5
let lampOn = 0
let publicImageLeveling = 0;
let publicImageLevelup = false;
let publicImage = 0;
let chance = 0 //afecta a luck
let instinct = 0;
let afterSpin = false;

//  para añadir o quitar cosas del juego

let addPeople = true;
let addCactus = false;
let addLamps = false;
let addGeese = false;
let addWalls = false;
let addRat = false;
let addFat = false;
let addBaby = false;
let addCustomer = false;
let addBoss = false;
let addPortal = false;
  


let showPlayerWeaponStats = true;
let showPlayerJoBStats = false;
let showPlayerPhysicalStats = false;
let training = false;
// secret code
let Y = 0 //89
let U = 0 //85
let I = 0 //73
let O = 0 //79
