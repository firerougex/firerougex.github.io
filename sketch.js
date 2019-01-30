function setup() {
  createCanvas(400, 400);
	ellipseMode(CENTER);
	x = 60 - second();
	y = 60 - minute();
	z = 60 - 2.5*hour();
	// 2.5 to scale 24 to 60
	// The circles represent the time as seen from the top of an
	// hourglass
	noStroke();
	// Desert Sand
	c = color('#edc9af')
}

function draw() {
  background(255);
	fill(c);
	ellipse(280, 100, x, x);
	ellipse(180, 100, y, y);
	ellipse(80, 100, z, z);
	x = 60 - second();
	y = 60 - minute();
	z = 60 - 2.5*hour();
}
