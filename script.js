function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(176, 228, 247);
  // add your drawing code here ...
  stroke(50,50);
  //width,height, circle size
  //width/2 , height/2 = middle of canvas
  ellipse(150,150,50);
  //three points of shape
  triangle(width/2 - 45, height/2 - 55, width/2 - 50, height/2 - 45);


}