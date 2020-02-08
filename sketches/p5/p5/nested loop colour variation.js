function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  for(let j=0;j<height; j+=5)
  {
     for(let i=0;i<height; i+=5)
     {
       let r= map(i,0,width,0,20);
       let q= map(j,0,height,0,360);
       fill(q,100,100);
       ellipse(i,j,r,r);
     }
  }
}

function draw()
{
 // background(220);
}