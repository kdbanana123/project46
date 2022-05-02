var track, hurdle, man, trackImg, hurdleImg,manImg, hurdleGroup;
function preload(){
  hurdleImg = loadImage("assets/hurdle.png");
  trackImg = loadImage("assets/track.jpeg");
  manImg = loadAnimation("assets/man1.png", "assets/man2.png");
}
function setup() {
  createCanvas(800,400);
  track= createSprite(400, 200, 50, 50);
  track.addImage("track",trackImg);
  track.scale= 1.3;
  man = createSprite (600,300);
  man.addAnimation("man_running", manImg);
  man.scale = 0.2;
  hurdleGroup = new Group ()
}

function draw() {
  background(255,255,255);  
  track.velocityX = -3;
if (track.x < 0){
  track.x = track.width/2
}
if(keyDown(LEFT_ARROW)){
  man.x = man.x -5;
}
if(keyDown(RIGHT_ARROW)){
  man.x = man.x +5;
}
if(keyDown(UP_ARROW)){
  man.y = man.y -5;
}
if(keyDown(DOWN_ARROW)){
  man.y = man.y +5;
}
spawnHurdles();
drawSprites();
}
function spawnHurdles(){
  if(frameCount % 120 === 0){
    var hurdle = createSprite(300,400,600,350);
    hurdle.y= Math.round(random(10,690));
    hurdle.addImage(hurdleImg);
    hurdle.scale =0.2;
    hurdle.velocity = -3;
   hurdleGroup.add(hurdle);
  }
} 