let arr= [];          //array for objects

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {  //create 5 objects 
    arr[i] = new Particle();    //and add them to array
  }
  ;
}

function draw() {
  background(250, 10);
  fill(0);
  stroke(255);

  for (let i = 0; i < arr.length; i++) {
    arr[i].update();          //update and display for
    arr[i].display();         //every obj in array
  }
}

class Particle {
  constructor() {
    this.posX = random(0, width);
    this.posY = random(0, height);
    this.velX = random(1, 2);
    this.velY = random();
    this.accX = 0.0;
    this.accY = 0.0
    this.size = random(1, 50);
  }

  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    this.velX += this.accX;
    this.velY += this.accY;

    //check for canvas edges and bounce
    if (this.posX < 0 || this.posX > height) {
      this.velX = -this.velX;
    }

    if (this.posY <100 || this.posY > height) {
      this.velY = -this.velY;
    }
  }

  display() {

    //display ellipse
    stroke(25);
    strokeWeight(6);
    triangle(this.posX, this.posY, this.size, this.size);
    rect(this.posX, this.posY, this.size, this.size);
    ellipse(this.posX+50, this.posY+50, this.size, this.size);

  }

}