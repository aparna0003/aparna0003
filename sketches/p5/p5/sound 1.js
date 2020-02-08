let bump,st;
function setup() {
  soundFormats("wav");
  bump=loadSound("ring.wav");
  
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function mouseClicked()
{
  if(bump.isPlaying())
  {
  bump.stop();
  }
  else
  bump.play();
}