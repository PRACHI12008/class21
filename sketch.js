var bullet,speed,weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400)
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor = color(80,80,80);
bullet.shapeColor = color("white");

}

function draw() {
  background(0); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed * speed/22500;
         if(damage=3.68) {
           bullet.shapeColor=color(32,223,70);
        }
        if(damage=12.43) {
          bullet.shapeColor=color(32,223,40);
        }
    }

  drawSprites();
}