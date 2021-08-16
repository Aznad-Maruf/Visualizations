let x=0, y=0, nextX = 0, nextY=0, r, px, py, zoom = 0.01;

function setup() {
  createCanvas(1920, 1080);
  background(20);
  // setTimeout(()=>{
  //   saveCanvas('fern.png');
  // }, 15000);
}
// ƒ1	0	    0	    0	    0.16	0	0	    0.01	Stem
// ƒ2	0.85	0.04	−0.04	0.85	0	1.60	0.85	Successively smaller leaflets
// ƒ3	0.20	−0.26	0.23	0.22	0	1.60	0.07	Largest left-hand leaflet
// ƒ4	−0.15	0.28	0.26	0.24	0	0.44	0.07	Largest right-hand leaflet




function drawPoint(){
  stroke(150, 0, 0);
  strokeWeight(2);
  // console.log(x, y);
  // range −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983.
  // range −3 < x < 5 and 0.8 ≤ y < 10.5
  // px = map(x, 0, 2, 0, 800);
  // py = map(y, 5.8, 8.5, 800, 0);
  px = map(x, -4, 4, 0, 800);
  py = map(y, 0.8, 10.5, height, 0);
  stroke('#C5B59F');
  point(px, py);
  stroke(0, 100, 0);
  point(px+500, py);
  stroke('#565656');
  point(px+1000, py);
}

function nextPoint(){
  r = random(1);
  
  if(r<0.01){
    nextX = 0;
    nextY = 0.16 * y;
  }
  else if(r<0.86){
    nextX = 0.85 * x + 0.04*y;
    nextY = -0.04 * x + 0.85*y + 1.60;
  }
  else if(r<0.93){
    nextX = 0.20 * x + -0.26*y;
    nextY = 0.23 * x + 0.22*y + 1.60;
  }
  else{
    nextX = -0.15 * x + 0.28*y;
    nextY = 0.23 * x + 0.22*y + 1.60;
  }

  x = nextX;
  y = nextY;


}

function draw() {
  // background(20);
  // zoom += 0.05;
  for(let i = 0; i<=10; i++){
    nextPoint();

    drawPoint();
  }
  
}