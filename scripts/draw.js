
var x = 0;
var y = 0;
var spacing = 10; // 100 count. for 10, 50 count. So 500 / spacing.
var count = 0;
var maxCount = 500 / spacing;

function setup() {
  console.log('hi');
  createCanvas(500, 500);
  background(0);
}

// Good example of how to do one thing per frame with p5:
function draw() {
  stroke(255);

  // Stop at end:
  if (count < maxCount) {
    // Increase speed by adding loop:
    for (var i=0; i < 5; i++) {
      var percent = count/maxCount;


      if (Math.random() > percent * percent) {
        // rect(x, y, spacing, spacing);
        line(x, y, x+spacing, y+spacing);
      } else {
        line(x, y+spacing, x+spacing, y);
      }

      x = x+spacing;
      if (x > width) {
        count++;
        console.log(count);
        x = 0;
        y = y+spacing;
      }
    }
  }


}
