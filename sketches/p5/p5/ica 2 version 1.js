let photo, maskImage, fingerprint,pic;
let video;
let button;

  

  function preload()
  {
  // pic = loadImage('image(video,0,0)');
  fingerprint = loadImage('fingerprint 3.png');
  // photo.resize(200,200);
   fingerprint.resize(200,200);
}

function takesnap()
{  
   photo=image(video,0,0); 
  // photo.resize(200,200);
 // ellipse(5,10,10,10)
}


function setup() 
{  
  createCanvas(500, 500);
  background(51);
  video= createCapture(VIDEO);
  video.size(500,500);
  fill(120,70,30);
  button = createButton('SNAP');
  button.mousePressed(takesnap);

 // photo.mask(fingerprint);
 // fingerprint.mask(photo);
  image(fingerprint , 0, 0);
 // photo.mask(maskImage);
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
