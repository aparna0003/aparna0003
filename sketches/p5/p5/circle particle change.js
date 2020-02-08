let r, c;

function setup() {
  createCanvas(800, 800);
  let r = 150;
  // c = 255;

}

function draw() {
  r = mouseX;

  noStroke();
  fill(0);

  let c = (random(0, 255), random(0, 255), random(0, 255));

  for (let t = 0; t < 360; t = t + 2) {
    d = radians(t);
    let x = width / 2 + r * sin(d) + random(0, 15);
    let y = height / 2 + r * cos(d) + random(0, 15);
    //   ellipse(x, y,random(0,10),random(0,10));
    ellipse(x, y, random(0, 10), random(0, 1));
    if (mouseX == 400) {
      background(c);



    }
  }
  // for (let t = 0; t < 360; t=t+2) {
  // d = radians(t);
  // let x = width/2 - r * sin(d) + random(0,10);
  // let y = height/2  - r* cos(d) + random(0,10);
  // ellipse(x, y,random(0,10),random(0,10));
  // } 
  // c=random((0,255),(0,255),(0,255));
  // if(r==width)
  // {
  //   background(c);




}