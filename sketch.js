let img;
let imgW, imgH;

function preload() {
  img = loadImage("./image.jpg");
  img.loadPixels();
}

function setup() {
  console.log(img.height, img.width);
  canvas = createCanvas(img.width, img.height);
}

function draw() {
  fill(255);
  lineBlob();
}

function lineBlob() {
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix);
  //ellipse(x, y, 20, 20);
  for (let i = 0; i < 10; i++) {
    stroke(pix, 128);
    line(
      x + random(-10, 10),
      y + random(-10, 10),
      x + random(-10, 10),
      y + random(-10, 10)
    );
  }
}
