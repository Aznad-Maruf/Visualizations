var x0Off = 0;
function setup() {
	createCanvas(400, 400);
	frameRate(60);
	background(50, 40, 30);
	// noLoop();
}

function draw() {
	// background(50, 40, 30);
    fill(255, 255, 25);
    noStroke();
	var y = 200;//noise(yOff)*400;
	noiseSeed(1);
    circle(noise(x0Off)*width, noise(x0Off+3)*width, 5);
	fill(255, 25, 25);
	noiseSeed(20);
	circle(noise(x0Off+1)*width, noise(x0Off+4)*width, 5);
	fill(25, 25, 25);
	noiseSeed(30);
	circle(noise(x0Off+2)*width,noise(x0Off+5)*width, 5);

	fill(0, 200, 200);
	circle(random(width),random(width), 1);
	x0Off += 0.01;
}
