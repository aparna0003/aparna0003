let img;
function preload() {
  img=loadImage('milky.jpg');
  
}

function setup() {
 img.resize(0,400);
  createCanvas(img.width, img.height);
  image(img,0,0);
  
  // background(220);
}function draw()
{
  let x= random(0,width);
  let y= random(0, height);
   let col=img.get( x,y);
  noFill();
  strokeWeight(2)
  stroke(col);
rect(x,y,20,20);
}