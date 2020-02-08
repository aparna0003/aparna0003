let t,u, v, sum;
function setup() {
  createCanvas(400, 400);
  background(200,90,100);
  sumfinder(0,1);

}


function sumfinder(t,u)
{ 
 
  print(u);
  if(u<100)    // fibnocci series condition
 sumfinder(u,t+u);   // main code for the series
  random(fill(70,60,80));
  // rect(u*10,u,(u+5),100+u);
  ellipse(width/u,height/u,(u*10),(u+50));
  
}