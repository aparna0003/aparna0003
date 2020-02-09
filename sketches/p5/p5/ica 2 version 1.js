let photo, maskImage, fingerprint,pic;
let video;
let button;

  

  function preload()
  {
  // pic = loadImage('image(video,0,0)');
  maskImage = loadImage('finger print 1.png');
 // pic.resize(100,0);
 // maskImage.resize(100,0);
}

function takesnap()
{  
   photo=image(video,0,0);
  // ellipse(5,10,10,10)
}


function setup() 
{  
  createCanvas(200, 200);
  background(51);
  video= createCapture(VIDEO);
  video.size(200,200);
  fill(120,70,30);
  button = createButton('SNAP');
  button.mousePressed(takesnap);

  photo.mask(maskImage);
  image(maskImage, 0, 0);
}

  
// function takesnap()
// {
//   image(video,0,0);
//   ellipse(5,10,10,10)
  
// }

function draw() 
{
  background(0,2);
}
