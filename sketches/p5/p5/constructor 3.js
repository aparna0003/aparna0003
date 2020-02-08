let thesePpl=[], a;

function setup() {
  // createCanvas(400, 400);
  //  person = new Student();
  // p1 = new Student();
  // p2 = new Student();
  for(let i=0; i<200; i++)
  {
    thesePpl[i]=new Student(i);
  }
    
  // person.display();
  // p1.display();
  // p2.display();
  

}

function draw() {
  background(220);
  for(let i=0; i<thesePpl.length - 1; i++)
  {
    thesePpl[i].display();
  }
  // let r= int(random( 0,thesePpl.length - 1));
  // thesePpl[r].display();
 


}
class Student {
  constructor(a,i) {
    this.name = "Alphabet";
    this.address = a;
    this.number = int(random((-100,100)));

  }
  display() {
    print("name:", this.name);
    print("adress:", this.address);
    print("Roll No.:", this.number);
  }
}