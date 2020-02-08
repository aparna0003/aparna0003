function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let t;
function setup() {
  createCanvas(400, 400);
  t=random(0,225);

}

function draw() {
  background(220);
  let x=50;
  let y=150;
  let w=60;
  let h=60;
  rect(x,y,w,h);
  fill(t);
  // fill(random(1000,75)); 
} 

function mouseClicked(){
t= random(0,255);
}