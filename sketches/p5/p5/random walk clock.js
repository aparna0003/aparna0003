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
  ellipse(x, y,2,2);
  let r = int(random(1,12));
  print(r);
  switch (r) {
    case 1:
      x=x+2;
      y=y+3;
      break;
    case 2:
      x=x+3;
      y=y+2;
      
      break;
    case 3:
      x=x+4;
      y=y+0;
      break;
    case 4:
      y=y-2;
      x=x+3;
      break;
    case 5:
      x=x+2;
      y=y-3
      break;
    case 6:
      y=y-4;
      x=x+0;
      break;
    case 7:
      y=y-3;
      x=x-2;
      break;
    case 8:
      x=x-3;
      y=y-2;
      break;
    case 9:
      y =y+0;
      x=x-4;
      break;
    case 10:
      y=y+2;
      x=x-3;
      break;
    case 11:
      x=x-2;
      y=y+3
      break;
    case 12:
      y = y + 4;
      x=x+0;
      break;
  }
     print(x," ",y);

}