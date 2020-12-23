var bullet;
var speed;
var thickness;
var wall;
var damage;

function setup() {

  createCanvas(1550,750);
  bullet=createSprite(200, 375, 30, 30);
  wall=createSprite(1400,375,thickness,height/2);
  speed=random(233,233);
  bullet.velocityX=speed;
 thickness=random(70,40);
 weight=random(32,32);
  bullet.shapeColor="blue";
  wall.shapeColor="blue";

}

function draw() {
  background(0);  
  
  fill ("red");
  textSize(30);
  text("damage TEST",575,100);

  if(wall.x-bullet.x < bullet.width/2 + wall.width/2)
  {
    bullet.velocityX=0;
    damage=0.5 *thickness*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {
       background("red");
       fill ("green");
       textSize(30);
       text("VERY BAD WALL",575,100);
       
       text("DO NOT USE THIS WALL",580,200);
    }

    if(damage<10)
    {
       background("green");
       fill ("yellow");
       textSize(30);
       text("GOOD",575,100);
       
       text("VERY GOOD WALL",580,200);
    }
  }

  drawSprites();
}