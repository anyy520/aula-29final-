const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
 
  canvas = createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);
// 4. No arquivo sketch.js , crie o objeto cannonball e exiba o objeto cannon (canhão)
  cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  background(189);

  image(backgroundImg, 0, 0, width, height);

   Engine.update(engine);
  

   cannon.display();
   tower.display();
  //  4
   cannonBall.display();
 
}
// 5. Adicione a função para pressionar a tecla Down_Arrow.
function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    cannonBall.shoot()
  }
}

