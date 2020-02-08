let posx=[];   //x= rcos t
let posy=[];  // y= rsin t
let r ,t;

function setup() {
  r=100;
  createCanvas(400, 400);
  for(let i=0; i<360; i++)
  {
    posx[i]=r*cos(radians(i));
    posy[i]=r*sin(radians(i));
  }
}

function draw() {
  
  background(220);
  
  noStroke();
  fill(52,60,100);
  for( let i= 0; i<360;i++)
  {
    r=mouseX;
    posx[i]=r*cos(radians(i));
    posy[i]=r*sin(radians(i));
    fill(52,60,73);
    ellipse(posx[i]+r, posy[i]+r,5,5);
  }
  
}