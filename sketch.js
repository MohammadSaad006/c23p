
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine,myWorld
var paper
var dastbin
function preload()
{
	
}

function setup() {
	myEngine= Engine.create();
	myWorld= myEngine.World;
	createCanvas(1200, 400);

   paper = new Paper(200,200)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  
 
}



