
function setup() {
  createCanvas(1920, 1080);
  background(61);
  setTimeout(()=>{
    saveCanvas('triangle', 'png');
  }, 10000);
}

function drawCircle(x, y, d){
  if(d<1) return;
  let r = random(255), g = random(255), b = random(255);
  // noFill();
  fill(r, g, b, 140)
  stroke(255);
  // noStroke();
  ellipse(x, y, d);
  drawCircle(x+d/2, y, d/2);
  drawCircle(x-d/2, y, d/2);
  drawCircle(x, y+d/2, d/2);
  // drawCircle(x, y-d/2, d/2);
}

function draw() {
  
  drawCircle(width/2, height/2-100, 450);
  noLoop();
}