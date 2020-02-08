function setup() {
  createCanvas(400, 400);
  fill(255,128);
  for(let i=0; i<width;i+=20)
  {
    let n= int(map( i,0, width, 12,3));
    polygon(i, height/2, i/5,n);
}
}

function draw() {
  background(255,5);
}
function mouseClicked()
{
  polygon(mouseX, mouseY, 50,int(random(3,9)));
}
 function polygon(x,y, radius, npoint)
{
  let angle = TWO_PI/ npoint;
  beginShape();
  for(let a=0; a< TWO_PI; a+=angle)
  {
    let sy=y+cos(a)* radius;
    let sx= x+sin(a)* radius;
    vertex(sx,sy);
  }
  endShape(CLOSE); 
}