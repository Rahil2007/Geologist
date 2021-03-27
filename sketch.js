const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var iron;
var hammer;
var rubber;
var sand1,sand2,sand3,sand4;
var stone;



function preload()
{
	
}

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plane= new Plane(400,695,800,10)
	iron = new Iron(200,350,100,60);
	hammer = new Hammer(400,350,130,50);
	rubber = new Rubber(200,350,60);
	stone = new Stone(300,350,80,50);
	sand1 = new Sand(270,350,20);
	sand2 = new Sand(500,350,20);
	sand3 = new Sand(250,350,20);
	sand4 = new Sand(600,350,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  drawSprites();
 
  plane.display();
  iron.display();
  hammer.display();
  rubber.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();


}



