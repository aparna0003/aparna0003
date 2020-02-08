let p1;
function setup() {
  createCanvas(400, 400);
  p1= new particle();
  p2=new particle();
  
}

function draw() {
  background(220,10);
  p1.display();
  p1.update();
    p2.display();
  p2.update();
}
class particle
{
  constructor()
  {
   
    this.posX=random(0,width);
    this.posY= random(0,height);
    this.velX=random(3);
    this.velY=random(2);
    this.accX=0;
    this.accY=0;
    
  }
  update()
  {
    this.posX+= this.velX;
    this.posY += this.velY;
    
    if(this.posX>width|| this.posX<0)
    {
         this.velX= -this.velX;
    }
    
    if( this.posX<0)
    {
         this.vel=-this.velX;
    }
    if(this.posY<0)
    {
      this.posY= height;
    } 
    if( this.posY>height)
    {
      this.posY= 0;
    }
    //update velocity with acceloration
    this.velX+=this.accX;
    this.velY+=this.accY;
  }
  display()
  {
    fill(56,180,10);
    ellipse(this.posX, this.posY,10,10);
    fill(170,63,95);
    textSize(30);
    text("hello", this.posX, this.posY);
     fill(170,153,95);
    textSize(30);
    text("bye", this.posX+50, this.posY+55);
  }
  
  }