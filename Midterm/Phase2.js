function setup() {
  createCanvas(100, 100);
  noStroke();
}

function draw(){
  background(240); 
  let c = color('#2f3699');
  fill(c);
  rect(0, 2, 100, 8);
  rect(0, 13, 8, 75);
  rect(0, 13, 75, 8);
  rect(68, 13, 8, 55);
  rect(46, 60, 30, 8);
  rect(46, 38, 8, 30);
  rect(24, 38, 30, 8);
  rect(24, 38, 8, 50);
  rect(24, 80, 77, 8);
  rect(0, 91, 100, 8);
}