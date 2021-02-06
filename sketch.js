var balloon, background;
   function preload() {
  backgroundImg = loadImage("background.png")
  balloonImage = loadImage("balloon1.png", "balloon2.png", "balloon3.png")

}

function setup() {
  createCanvas(600,450);
  database = firebase.database();
  console.log(database);
  
  balloon = createSprite(110, 350, 20, 20);
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.5;

}

function draw() {
  
  if(keyDown(LEFT_ARROW)) {
    balloon.x = balloon.x - 9;
  }
  else if(keyDown(RIGHT_ARROW)) {
    balloon.x = balloon.x + 9;
  }
  else if(keyDown(UP_ARROW)) {
    balloon.y = balloon.y - 9;
  }
  else if(keyDown(DOWN_ARROW)) {
    balloon.y = balloon.y + 9;
  }
  background(backgroundImg);

  drawSprites();
}