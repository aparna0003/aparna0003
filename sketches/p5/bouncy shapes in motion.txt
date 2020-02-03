let c;
let arr = [];          //array for objects

function setup()
{
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {  //create 20 objects 
    arr[i] = new Particle();    //and add them to array
   
  }
   c=random(0,255);// the colour is given as random but will be fixed for                         each run
  
}


function draw() {
  background(250);
  fill(c,50,120);//
  stroke(255);

  for (let i = 0; i < arr.length; i++) {
    arr[i].update();          //update and display constructors are called
    arr[i].display();         
  }
}

class Particle {
  constructor() {
    this.posX = random(0, width/2);
    this.posY = random(0, height/2);
    this.velX = random(1, 0);
    this.velY = random();
    this.accX = 0.0;
    this.accY = 0.1;
    this.size = random(4, 15);
  }

  update()
  {
    this.posX += this.velX;
    this.posY += this.velY;

    this.velX += this.accX;
    this.velY += this.accY;

    //check for canvas width
    if (this.posX < 0 || this.posX > width) 
    {
      this.velX = -this.velX;
       ellipse(this.posX, this.posY, this.size*10, this.size*10);
    }
    
    // checkes for the height
    if (this.posY < 0 || this.posY > height) 
    {
      this.velY = -this.velY;
       rect(this.posX, this.posY, this.size*10, this.size*20);
    }
  }

  display() // display constructor
  {
    stroke(50);
    strokeWeight(1);
   /* when this constructor is called to the main function the process done       in the update constructor is displayed on the screen*/
  }
}