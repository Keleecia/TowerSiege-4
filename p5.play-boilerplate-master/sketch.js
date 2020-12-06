const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, engine,world;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(200,200,200,200);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  ground.display();
  drawSprites();
}