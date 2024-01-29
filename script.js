function setup(){
  createCanvas(600, 400);
}

function draw(){
  //background(2, 3, 38);
  background(250, 247, 249);
  
  //head
  fill(255, 179, 237);
  stroke(225, 179, 237);
  strokeWeight(1);
  ellipse(420, 200, 100, 85);
  
  //legs-tail
  rect(230,90, 30, 60); //bottom L
  rect(345, 90, 30, 60); //top L
  rect(230, 250, 30,60); //bottom R
  rect(345, 250, 30, 60); //top R
  triangle(250, 180, 180, 195, 250, 215);

  //body
  fill(255, 140, 228);
  stroke(219, 107, 193);
  strokeWeight(3);
  ellipse(300,200,200);
  
  //eyes
  stroke(92, 8, 78);
  strokeWeight(6);
  point(440,180); //left
  point(440, 220); //right

  //shell
  strokeWeight(2);
  stroke(219, 107, 193);
          //heart
  line(320, 200, 340, 180); //top point L
  line(340, 180, 340, 150); //L
  line(340, 150, 320, 130); //L
  line(320, 130, 290, 130); //L
  line(290, 130, 220, 200); //L

  line(320, 200, 340, 220); //top point R
  line(340, 220, 340, 250); //R
  line(340, 250, 320, 270); //R
  line(320, 270, 290, 270); //R
  line(290, 270, 220, 200); //R
  
  

  //width,height, circle size
  //width/2 , height/2 = middle of canvas
  //three points of shape
  //triangle(width/2 - 45, height/2 - 55, width/2 - 50, height/2 - 45);


}