var rect1, rect2;

function setup() 
{
  createCanvas(800,400);
 rect1 =  createSprite(400, 200, 50, 50);
 rect2 = createSprite(100,200, 80, 80)
 rect1.shapeColor="yellow";
 rect2.shapeColor="green";
 rect1.debug=true;
 rect2.debug=true;
}

function draw() 
{
  background(0,0,255);  
  rect2.x=World.mouseX;
  rect2.y=World.mouseY;
  if(rect2.x - rect1.x < rect2.width/2 + rect1.width/2 && rect1.x - rect2.x < rect2.width/2 + rect1.width/2)
  {
    rect1.shapeColor="red";
    rect2.shapeColor="red";
  }
  else
  {
    rect1.shapeColor = "yellow";
    rect2.shapeColor = 'yellow';
  }
  if(rect2.y - rect1.y < rect2.height/2 + rect1.height/2 && rect1.y - rect2.y < rect2.height/2 + rect1.height/2) 
  {
    rect1.shapeColor="red";
    rect2.shapeColor="red";
  }
  else
  {
    rect1.shapeColor = "yellow";
    rect2.shapeColor = 'yellow';
  }
  drawSprites();
}