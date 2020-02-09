let video;
let button;
function takesnap()
{
  image(video,0,0);
  ellipse(5,10,10,10)
}

function setup() {
  createCanvas(200, 200);
  background(51);
  video= createCapture(VIDEO);
  video.size(200,200);
  fill(120,70,30);
  button = createButton('SNAP');
  button.mousePressed(takesnap);
  // ellipse(5,10,10,10)
}
// function takesnap()
// {
//   image(video,0,0);
//   ellipse(5,10,10,10)
// }

function draw() {
  //background(220);
}