let photo, maskImage;
function preload() {
 // background(220);
  photo = loadImage('profile.jpeg');
  maskImage = loadImage('fingerprint.png');
  print("loaded");
  photo.resize(400,0);
  maskImage.resize(400,0);
}

function setup() {
 // background(220);
  createCanvas(800,800);
  photo.mask(maskImage);
  image(photo, 0, 0);
}