function setup() {
  createCanvas(400, 400);
  s=new snake();
}

function draw() {
  background(0);
  s.update();
  s.show();
}
function snake()
{
  this.x=0;
  this.y=0;
  this.accX=1;
  this.accY=0;
  this.update= function()
  {
    this.x= this.x+this.accX;
    this.y= this.y+ this.accY;
  }
  this.show= function()
  {
    fill(255);
    rect(this.x, this.y, 10,10);