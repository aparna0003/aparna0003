let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  background(51);
}

function draw() {
  stroke(255, 100);
  strokeWeight(2);
 // let x=0;
  noStroke();
  fill(150,170,90,70);
  ellipse(x, y,10,10);
  stroke(1);
  dx=x;
  dy=y;
  
  let r = int(random(0,12));
  print(r);
  switch (r) {
    case 1:
      x=x+2+10;
      y=y+3+10;
      break;
    case 2:
      x=x+3+10;
      y=y+2+10;
      
      break;
    case 3:
      x=x+4+10;
      y=y+0;
      break;
    case 4:
      y=y-12;
      x=x+13;
      // break;
    case 5:
      x=x+12;
      y=y-13
      break;
    case 6:
      y=y-14;
      x=x+0;
      break;
    case 7:
      y=y-13;
      x=x-12;
      break;
    case 8:
      x=x-13;
      y=y-12;
      break;
    case 9:
      y =y+0;
      x=x-14;
      break;
    case 10:
      y=y+12;
      x=x-13;
      break;
    case 11:
      x=x-12;
      y=y+13
      break;
    case 12:
      y=y+14;
      x=x+0;
      break;
  }

     line(dx,dy,x,y);
     print(x," ",y);
  if((x,y)==(dx,dy))
   stop();
  

}
