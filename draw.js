
var x=0;
var y = 0;
var spacing = 10;

function setup() {
  console.log('hi');
  createCanvas(500, 500);
  background(0);
}

function draw() {
  stroke(255);
  // var forward = line(x, y, x + spacing, y + spacing);
  // var backward = line(x, y + spacing, x + spacing, y);
  // var char = Math.random() > 0.5 ? forward : backward;
  //


  // Increase speed by adding loop:
  for (var i=0; i < 3; i++) {
    if (Math.random() > 0.7) {
      // rect(x, y, spacing, spacing);
      line(x, y, x+spacing, y+spacing);
    } else {
      line(x, y+spacing, x+spacing, y);
    }

    x = x+spacing;
    if (x > width) {
      x = 0;
      y = y+spacing;
    }
  }

}
