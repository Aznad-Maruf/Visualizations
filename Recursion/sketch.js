var zoom = 5, r = 0, g = 0, b = 0;
function setup() {
  createCanvas(1200, 800);
  frameRate(5);
  setTimeout(()=>{
    saveCanvas();
  }, 2000);
  // saveCanvas()
}

function draw() {
  background(61);

  stroke(255);
  noFill();
  drawCircle(width/2, height/2-100, 300*zoom);
  noLoop();
  zoom+=.1;
}

function drawCircle(x, y, d) {
  r = random(0, 255)%255; g = random(0, 255)%255; b = random(0, 255)%255;
  // stroke(r, g, b, 100);
  fill(r+9, g+2, b+1, 200);
  strokeWeight(1)
  ellipse(x, y, d);
  //  d = d*random(min(d*10/300, 1), 1);
  //  d = d*random(0.85, 1);
  if(d>2){
    drawCircle(x+d/2, y, d*.6);
    drawCircle(x-d/2, y, d*.6);
    drawCircle(x, y+d/2, d*.6);
    // drawCircle(x, y-d/2, d*.4);
  }
}
