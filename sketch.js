let img;

function preload(){
   // load our image
   img = loadImage("data/22.png");
}

function setup() {
  // put setup code here
  createCanvas(1280, 800);
  img.resize(width, height);
}

function draw() {
  // put drawing code here
  background(50); 

  let tilesX = mouseX/5;
  let tilesY = tilesX;
  let tileW = width/tilesX;
  let tileH = height/tilesY; 

  noStroke();
  ellipseMode(CORNER);
  
  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {

      let pX = int(x*tileW);
      let pY = int(y*tileH);

      let c = img.get(pX, pY);
      let b = brightness(c);

      let s = map(b, 0, 255, 0, 1);

      fill('#f1f1f1');

      ellipse(x*tileW, y*tileH, tileW*s, tileH*s);
    }
  }
}