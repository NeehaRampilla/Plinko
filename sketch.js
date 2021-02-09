const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particle = [];
var plinko = [];
var divisions = [];
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,height,800,20); 
    for(var i=0;i<=width;i=i+80){
      divisions.push(new Divisions(i,750,10,300));

    }
    for(var i=50;i<=width;i=i+50){
      particle.push(new Particle(i,75));
    }
    for(var i=75;i<=width;i=i+50){
      particle.push(new Particle(i,175));
    }
    for(var i=50;i<=width;i=i+50){
      particle.push(new Particle(i,275));
    }
    for(var i=75;i<=width;i=i+50){
      particle.push(new Particle(i,375));
    }

  
}

function draw() {
  background(0,0,0);  
Engine.update(engine);
ground.display();
for(var i = 0;i<particle.length;i++){
  particle[i].display();
}
if(frameCount%60 == 0){
  plinko.push(new Plinko(random(width/2-30,width/2+30),10));
}
for(var i = 0;i<plinko.length;i++){
  plinko[i].display();
}
for(var i = 0;i<divisions.length;i++){
  divisions[i].display();
}
}