// Bouncing Circle - a simple p5.js sketch

let x, y;          // circle position
let xSpeed = 5;    // horizontal speed
let ySpeed = 4;    // vertical speed
let diameter = 60; // circle size

function setup() {
  createCanvas(windowWidth, windowHeight);
  // start in the middle of the screen
  x = width / 2;
  y = height / 2;
}

function draw() {
  // pulsate the background: sin() smoothly swings between -1 and 1,
  // so we map that to a value between 0 and 1 to blend two colors
  let pulse = map(sin(frameCount * 0.05), -1, 1, 0, 1);
  let darkColor = color(15, 15, 26);    // dark navy
  let brightColor = color(70, 30, 110); // deep purple
  background(lerpColor(darkColor, brightColor, pulse));

  // move the circle
  x += xSpeed;
  y += ySpeed;

  let r = diameter / 2;

  // bounce off the left and right edges
  if (x > width - r || x < r) {
    xSpeed *= -1;
  }

  // bounce off the top and bottom edges
  if (y > height - r || y < r) {
    ySpeed *= -1;
  }

  // draw the circle
  noStroke();
  fill(255, 100, 150);
  circle(x, y, diameter);
}

// keep the canvas full-screen when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  x = constrain(x, diameter / 2, width - diameter / 2);
  y = constrain(y, diameter / 2, height - diameter / 2);
}
