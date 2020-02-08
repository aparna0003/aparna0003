let r,c;

function setup() {
  createCanvas(400, 400);
  let r = 150;

}

function draw() {
  r = mouseX;

  noStroke();
  fill(0);
  for (let t = 0; t < 360; t=t+2) {
    d = radians(t);
    let x = width / 2 + r * sin(d) + random(0,15);
    let y = height / 2 + r* cos(d) + random(0,15);
 //   ellipse(x, y,random(0,10),random(0,10));
     ellipse(x, y,random(0,10),random(0,10));
      if(r==width)
  {
    background(c);
  


}
  }
    // for (let t = 0; t < 360; t=t+2) {
    // d = radians(t);
    // let x = width/2 - r * sin(d) + random(0,10);
    // let y = height/2  - r* cos(d) + random(0,10);
    // ellipse(x, y,random(0,10),random(0,10));
    // } 
 
}