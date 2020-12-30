
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(800, 700);
	rectMode (CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	 dustBin1 = new dustBin(640,650,200,20);
	 dustBin2 = new dustBin(540,620,20,100);
	 dustBin3 = new dustBin(740,620,20,100);
	 
	paper1 = new paper(30, 730, 10);


	 

	 var options={
		 isStatic:false,
		 restitution:0.3,
		 friction:0.5,
		 density:1.2
	 }

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

    dustBin1.display();
 	dustBin2.display();
	dustBin3.display();
	
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	   
	 }
	}
