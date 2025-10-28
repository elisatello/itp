function setup() {
  createCanvas(400, 400);
  noStroke(); 
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
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
  pop();
}

let grid = prompt("Enter grid size (e.g., 4 for a 4x4 grid):", "4");

function draw() {
  background(240);
  let tileSize = width / grid;
  let s = tileSize / 100; 
  
  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      drawObject(x, y, s);
    }
  }
}