
const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var wall1, wall2, wall3, ground;

function setup() {
	createCanvas(1200, 400);

	wall1 = createSprite(900,390,200,10);
	wall1.shapeColor = "white";

	wall2 = createSprite(805,335,10,100);
	wall2.shapeColor = "white";

	wall3 = createSprite(995,335,10,100);
	wall3.shapeColor = "white";

	engine = Engine.create();
	world = engine.world;

	var wall1_options = {
		isStatic : true
	  }
	  wall1 = Bodies.rectangle(1000,360,200,20,wall1_options);
	  World.add(world,wall1);

	  var wall2_options = {
		isStatic : true
	  }
	  wall2 = Bodies.rectangle(200,380,20,100,wall2_options);
	  World.add(world,wall2);

	  var wall3_options = {
		isStatic : true
	  }
	  wall3 = Bodies.rectangle(250,380,20,100,wall3_options);
	  World.add(world,wall3);

	paper = new Paper(100,200,50);
	ground = new Ground(320,height,1800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 85, y : -85});
	}
}
