
let x = 0;
let y = 0;
const spacing = 10; // 100 count. for 10, 50 count. So 500 / spacing.
let count = 0;
const maxCount = 500 / spacing;

let probSlider;

function setup() {
  // console.log('hi');
  createCanvas(500, 500);
  // background(0);
  probSlider = createSlider(0, 1, 0.1, 0.1); // 3rd arg is starting value, 4th is stepping point
  drawTen(0.5);
}

function drawTen(prob) {
  background(0);
  stroke(255);
  for (let i=0; i < maxCount; i++) {
    for (let j=0; j < maxCount; j++) {
      if (Math.random() > prob) {
        line(i * spacing, j * spacing, (i + 1) * spacing, (j + 1) * spacing);
      } else {
        line(i * spacing, (j + 1) * spacing, (i + 1) * spacing, j * spacing);
      }
    }
  }
}

function draw() {
  // console.log(probSlider.value());
  const prob = probSlider.value();
  drawTen(prob);

}
