const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var game_engine, game_world, ground,ball;

function setup() {
  createCanvas(1200,600);
  game_engine =  Engine.create();
  game_world = game_engine.world;

  ground = new Ground(600,580,1200,20);
  box=new Box(600,300,100,50);
  box2=new Box(550,200,50,50);

}
function draw() {
  background(255,255,0); 
  Engine.update(game_engine); 
  ground.display();
  box.display();
  box2.display();

  drawSprites();
}