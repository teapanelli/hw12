//ATTN: NO UNDO/DELETE! SORRY 

//colors
var black
var white
var grey1
var red1
var yellow1
var green1
var cyan1
var blue1
var magenta1
var purple1
var brown
var orange

//brush business
var brush
var strokeSize = 1

var r = 0,
  g = 0,
  b = 0; //color

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  //pen
  if (mouseIsPressed) {
    var brush =
      stroke(r, g, b);
    strokeWeight(strokeSize);
    line(pmouseX, pmouseY, mouseX, mouseY)
  }

  //backdrop setup
  noStroke(); //beige
  fill(236, 233, 216);
  rect(0, 0, 60, 400);
  rect(0, 20, 600, 30);
  rect(0, 360, 600, 60);
  rect(350, 0, 50, 400)

  noStroke();
  fill(0, 92, 255);
  rect(0, 0, 600, 30);

  noStroke();
  fill(255, 40, 10);
  rect(575, 5, 20, 20);

  //colors
  noStroke();
  fill(0);
  var black = square(5, 50, 20);

  noStroke();
  fill(255);
  var white = square(30, 50, 20)

  noStroke();
  fill(150);
  var grey1 = square(5, 75, 20)

  noStroke();
  fill(255, 20, 50)
  var red1 = square(30, 75, 20)

  noStroke();
  fill(255, 255, 50)
  var yellow1 = square(5, 100, 20)

  noStroke();
  fill(0, 200, 0);
  var green1 = square(30, 100, 20)

  noStroke();
  fill(0, 200, 220)
  var cyan1 = square(5, 125, 20)

  noStroke();
  fill(0, 0, 255)
  var blue1 = square(30, 125, 20)

  noStroke();
  fill(255, 20, 200)
  var magenta1 = square(5, 150, 20)

  noStroke();
  fill(130, 0, 200)
  var purple1 = square(30, 150, 20)

  noStroke();
  fill(125, 65, 10)
  var brown1 = square(5, 175, 20)

  noStroke();
  fill(255, 126, 64)
  var orange1 = square(30, 175, 20);

  fill(r, g, b)
  circle(28, 215, 25)

  //brush color
  if (mouseIsPressed) {
    var x = mouseX,
      y = mouseY;

    // left column color select
    if (x > 5 && x < 25) {
      if (y > 50 && y < 70) {
        r = 0;
        g = 0;
        b = 0; //black
      } else if (y > 75 && y < 95) {
        r = 150;
        g = 150;
        b = 150; //grey
      } else if (y > 100 && y < 120) {
        r = 255;
        g = 255;
        b = 50; //yellow
      } else if (y > 125 && y < 145) {
        r = 0;
        g = 200;
        b = 220; //cyan
      } else if (y > 150 && y < 170) {
        r = 255;
        g = 20;
        b = 200; //magenta
      } else if (y > 175 && y < 195) {
        r = 125;
        g = 65;
        b = 10; //brown
      }
    }

    // right column color select
    if (x > 30 && x < 60) {
      if (y > 50 && y < 70) {
        r = 255;
        g = 255;
        b = 255; //white
      } else if (y > 75 && y < 95) {
        r = 255;
        g = 20;
        b = 50; //red
      } else if (y > 100 && y < 120) {
        r = 0;
        g = 200;
        b = 0; //green
      } else if (y > 125 && y < 145) {
        r = 0;
        g = 0;
        b = 255; //blue
      } else if (y > 150 && y < 170) {
        r = 130;
        g = 0;
        b = 200; //purple
      } else if (y > 175 && y < 195) {
        r = 255;
        g = 126;
        b = 65; //orange
      }
    }
  }
}
function keyPressed() { //key commands
  if (keyCode === UP_ARROW) {
    strokeSize += 5;
  }

  if (keyCode === DOWN_ARROW) {
    strokeSize -= 5;
  }
  
  if (keyCode === LEFT_ARROW){
    strokeCap (ROUND);
  }
  
  if(keyCode === RIGHT_ARROW){
    strokeCap (PROJECT);
  }
}
