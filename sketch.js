var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var papper; 
var ground; 
var basket; 
var basket1; 
var basket3; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 
	papper = new Paper(400,350,10) 
	ground = new Ground (400,690,800,20) 
	basket = new Basket (300,200,30,40) 
	basket1 = new Basket(400,200,30,50) 
	basket3 = new Basket(350,240,100,10)

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  papper.display(); 
  ground.display() ; 
  basket.display(); 
  basket1.display(); 
  basket3.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(papper.body,papper.body.position,{x:85,y:-85}); 
	}
}


