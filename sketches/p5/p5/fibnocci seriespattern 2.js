let t,u, v, sum;
function setup() {
  createCanvas(500, 500);
  background(30);
  sumfinder(0,1);

}


function sumfinder(t,u) // value for t and u is passed
{ 
 
  print(u);
  if(u<100)    // fibnocci series condition
 sumfinder(u,t+u);   // main code for the series
  random(fill(20*u,t+60,80)); //for the colour gradient
  ellipse(width/t,height/t,(u*40+50),(u+80)); //a hirarchy of ellipses are made
  
}