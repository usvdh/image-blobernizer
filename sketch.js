let img;
let imgW, imgH;

function preload() {
  img = loadImage('./image.jpg')
  img.loadPixels()
}

function setup() {
  // canvas = createCanvas(700, 400);
  // canvas.drop(gotFile);
  console.log(img.height, img.width)
  canvas = createCanvas(img.width, img.height)
  // resizeCanvas(imgW, imgH)
}

function draw() {
  //background(0);
  
  //
  // if (img) {
  //   imgUpdate();
  // }
  //debug
   fill(255);
  // text(imgW + ", " + imgH, 10, 10);

  // if (img.width === img.height) {
  //   imgW = 400;
  //   imgH = 400;
  // } else if (img.width > img.height) {
  //   imgW = 400;
  //   imgH = (400 / img.width) * img.height;
  // } else if (img.width < img.height) {
  //   imgH = 400;
  //   imgW = (400 / img.height) * img.width;
  // }
  //imgUpdate();

  //console.log(img);

  //img.resize(imgW, imgH);
  ;
  lineBlob()
}

async function gotFile(file) {
  if (file.type === "image") {
    img = await loadImage(file.data); //.hide();
    img.loadPixels();

    console.log(img.canvas.height);
  } else {
    alert("You can only upload pictures.");
  }
  //createP("Uploaded");
}

function imgUpdate() {
  image(img, 0, 0);
  if (img.width === img.height) {
    imgW = 400;
    imgH = 400;
  } else if (img.width > img.height) {
    imgW = 400;
    imgH = (400 / img.width) * img.height;
  } else if (img.width < img.height) {
    imgH = 400;
    imgW = (400 / img.height) * img.width;
  }
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
