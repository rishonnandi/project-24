
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	
    
    ground = new Ground(600,height,1200,20);
	paperObject=new Paper(200,600,30);
	leftbox=createSprite(width-90,620,20,120);
	leftbox.shapeColor="red";
	bottomBox=createSprite(width-160,680,200,20);
	bottomBox.shapeColor="red";
	rightBox=createSprite(width-240,610,20,120);
	rightBox.shapeColor="red";

}


function draw() {

  background(0);
  Engine.update(engine);
  ground.display();
  paperObject.display();
  drawSprites();
  
 
 }
 
  function keyPressed(){
     if(keyDown===UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-27});

     }


       }


