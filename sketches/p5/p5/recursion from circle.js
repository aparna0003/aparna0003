function setup() {
  createCanvas(600, 600);
  fill(120,70 ,120,70);// the colour filter is fiven with an opacity of 70
  stroke(20);
  drawSq(width/2, height/2, 500);
}

function drawSq(x0, y0, side) 
{
  if (side >= 3) {
    // fill(8,120,90);
    ellipse(x0, y0, side, side); //made the circles
    /* the cicles are interconnected by keeping a pattern of cicles                overlapping at y-axis*/
    drawSq(x0 - side / 3, y0 - side / 4, side / 3);  //upper left
    drawSq(x0 + side / 3, y0 - side / 4, side / 3);  //upper right
    drawSq(x0 - side / 3, y0 + side / 4, side / 3);  //lower left
    drawSq(x0 + side / 3, y0 + side / 4, side / 3);  //lower right
    drawSq(x0 - side / 3, y0 ,           side / 3);  //left 
    drawSq(x0 + side / 3, y0 ,           side / 3);  //right
    drawSq(x0,            y0 - side / 4, side / 3);  //top
    drawSq(x0,            y0 + side / 4, side / 3);  //bottom
    // drawSq(x0,            y0,            side / 3);  //centre kept off
    
  }
}