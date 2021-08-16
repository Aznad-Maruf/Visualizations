var inc = .01; // noise
// var inc = .02; // sin
var xOff = 0;
var start = 0;
function setup() {
  createCanvas(600, 400);
  frameRate();
  strokeWeight(2);
  // noLoop();
  console.log('test');

  setTimeout(()=> {
    saveCanvas('PerlinNoise');
  }, 1000);
}

function draw() {
  background(100, 200, 240);
  // seed ++;
  // noiseSeed(seed);
  xOff = start;
  
  beginShape();
  for(var i = 0; i<width-20; i+=1){
    stroke(255);
    noFill();
    // fill(255);
    // noStroke();
    console.log(xOff);
    
    // ------------- Sin Wave -----------
    // var y = height/2 + sin(xOff)*height/3;
    
    //  ----------- Sin wave with noise -----------
    // var y = height/4 + sin(xOff)*height/4;
    // y += noise(xOff)*200;
    
    // 1D Continious perlin noise
    var y = noise(xOff)*height;

    // Random
    // var y = random(width);
    vertex(i, y);
    xOff += inc;
  }
  endShape();
  start += inc;
}
