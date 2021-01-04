var helicopterIMG, helicopterSprite, packageSprite,packageIMG, sky, skyImg, ground2,ground2Img;
var packageBody,ground;
var basket,basketImg;
var invisibleGround, invisibleGround2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
    skyImg=loadImage("sky.png");
	ground2Img=loadImage("ground.png");
	basketImg=loadImage("bas.png");
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);

	sky=createSprite(width/2, 336, 10,10);
	sky.addImage(skyImg);
	sky.scale=2;
	
	ground2=createSprite(width/2, 737, 10,10);
	ground2.addImage(ground2Img);
	ground2.scale=2.3;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=(255);
	groundSprite.visible = false;

	basket=createSprite(width/2, 674);
	basket.addImage(basketImg);
	basket.scale=0.9;

	invisibleGround=createSprite(327, height-120, 10,100);
	invisibleGround.shapeColor=("red");
	invisibleGround.rotation = -25;
	invisibleGround.visible = false;

	invisibleGround2=createSprite(473, height-120, 10,100);
	invisibleGround2.shapeColor=("red");
	invisibleGround2.rotation = 25;
	invisibleGround2.visible = false;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5, {restitution:0.7});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 200, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.collide(invisibleGround);
  packageSprite.collide(invisibleGround2);

  if  (keyDown("RIGHT_ARROW")){
  helicopterSprite.velocityX = 4;
  translation = {x: +4, y:0} 
  Matter.Body.translate(packageBody, translation);

  }

  if  (keyWentUp("RIGHT_ARROW")){
	helicopterSprite.velocityX = 0;
  }

  if  (keyDown("LEFT_ARROW")){
	helicopterSprite.velocityX = -4;
	translation = {x:- 4, y:0} 
    Matter.Body.translate(packageBody, translation);
  }
  
  if  (keyWentUp("LEFT_ARROW")){
	helicopterSprite.velocityX = 0;
  }
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
 
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	 console.log("down")
	Matter.Body.setStatic(packageBody, false);
	   
	
  }
}



