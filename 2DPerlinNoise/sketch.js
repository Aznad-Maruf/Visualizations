function setup() {
  createCanvas(600, 400);
  noLoop();
  // frameRate(1);
  pixelDensity(1);
  noiseDetail(8);
}

function calculateR(x, y){
  return (x + y * width) * 4;
}

function draw() {
  background(65);
  loadPixels();
  var xOff = 0;
  var yOff = 100000;
  var inc = .01; // Change this to modify intensity of blurryness

  for(var y = 0; y<height; y++){
    xOff = 0;
    for(var x = 0; x<width; x++){
      let r = calculateR(x, y);
      let g = r+1, b = r+2, alpha = r+3;

      let rando = noise(xOff, yOff) * 255;
      xOff += inc;
      // yOff += 0.01;
      noiseSeed(0);
      pixels[r] = noise(xOff, yOff) * 255;
      noiseSeed(2000);
      pixels[g] = noise(xOff, yOff) * 255;
      noiseSeed(10000);
      // pixels[b] = noise(xOff, yOff) * 255;
      pixels[b] = 0;
      
      pixels[r+3] = 255;
    }
    yOff += inc;\
  }

  updatePixels();
}
