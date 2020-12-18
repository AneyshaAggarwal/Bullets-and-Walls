var wall, bullet;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50, 200, 50, 10);
  wall= createSprite(1200, 200, thickness, height/2);

  wall.shapeColor= color(80,80,80)
  bullet.shapeColor= color("white")

  speed= random(223, 321)
  weight= random(30, 52)
  thickness= random(22, 83)

  bullet.velocityX= speed;
  bullet.collide(wall);
}

function draw() {
  background("skyblue");  

  if( wall.x - bullet.x < wall.width/2 + bullet.width/2)
  {
   bullet.velocityX= 0;
   var damage= 0.5 * bulletWeight * bulletSpeed * bulletSpeed / 
   bullet.thickness * bullet.thickness * bullet.thickness;

   if(damage<10)
   {
    bullet.shapeColor= color("lightgreen")
   }
   if(damage>10)
   {
    wall.shapeColor= color("red")
   }

  }


  drawSprites();
}