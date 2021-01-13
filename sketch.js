var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1200,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="brown";
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
}

function draw() {
  background(0);  
   if (hasCollided(bullet,wall)){
     bullet.velocityX=0;
     var damage=0.5* weight*speed* speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor=colour(255,0,0)
    }
    if (damage<10){
      wall.shapeColor=colour(0,255,0)
    }
   }
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x + Lbullet.width;
  wallLeftEdge=Lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}