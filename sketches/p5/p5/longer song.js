let bump,st;
function preload()
{
  soundFormats("mp3");
  bump=loadSound("Ae.mp3");
  
 
}
function setup() {
 
  
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let r= random(0,song.length-1);
  song.jump(r,2);
}
function keyPressed()
{
  if(key=="a")
    bump.play();
  if(key=="s")
     bump.stop();
   if(key=="d")
   {
     if
    bump.reverseBuffer();
     bump.play();
   }
  
     
}
    
function mouseClicked()
{
  // if(bump.isPlaying())
  // {
  // bump.stop();
  // }
  // else
  bump.play();
}