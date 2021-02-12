var hr;
var min;
var sec;
var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800,400);

  hr = hour();
  min = minute();
  sec = second();

  
  
}

function draw() {
  background(255,255,255); 
  
  push(); 
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(600,200,100,0);
  pop();

  push(); 
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(500,100,100,0);
  pop();

  push(); 
  rotate(secAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(400,300,100,0);
  pop();

  translate(hr,min,sec)
  angleMode(DEGREES);
  hrAngle = map(hr, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);
  
  

  drawSprites();
}