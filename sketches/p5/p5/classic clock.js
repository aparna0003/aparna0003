function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255,6);
  translate(200,200);
  rotate(-90);
  
  let hr= hour();
  let min=minute();
  let sec= second();
  
  fill(230);             // digital clock 
  // noStroke();
 // text( hr+':'+min+':'+sec,200,200);   // digital clock text
  
  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  
  let end1= map(sec,0,60,0,360);  // circular second
 // arc(0,0,300,300,0,end1);
  
  stroke(70,30,70);    // circular minute
  let end2= map(min,0,60,0,360);
 // arc(0,0,280,280,0,end2);
  
  stroke(90,10,100);     // circular hour
  let end3= map(hr%12,0,12,0,360);
 // arc(0,0,260,260,0,end3);
  
  
  push();             //second hand
  rotate(end1);
  stroke(70,30,70);
  line(0,0,100,0);
  pop();
  
   push();            //minute hand
  rotate(end2);
  stroke(120,1,70);
  line(0,0,75,0);
  pop();
  
   push();             // hour hand
  rotate(end3);
  stroke(255,100,150);
  line(0,0,50,0);
  pop();
}