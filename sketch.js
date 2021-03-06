const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particle = [];
var plinko = [];
var divisions = [];
var plinkos, score=0, count=0, gameState="start";

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
 textSize(35);
 text("score: "+score,20,40);
 fill (255);
 text(" 500 ",5,550);
 text(" 500 ",160,550);
 text(" 500 ",80,550);
 text(" 500 ",240,550);
 text(" 100 ",320,550);
 text(" 100 ",400,550);
 text(" 100 ",480,550);
 text(" 200 ",560,550);
 text(" 200 ",640,550);
 text(" 200 ",720,550);
Engine.update(engine);
ground.display();
if(gameState == "end"){
  textSize (100);
  text ("game over",150,250);

}
for(var i = 0;i<particle.length;i++){
  particle[i].display();
}

for(var i = 0;i<divisions.length;i++){
  divisions[i].display();
}
 if (plinkos != null){
   plinkos.display();
   if (plinkos.body.position.y>760){
     if(plinkos.body.position.x<300){
       score+=500;
       plinkos=null; 
     }
     if(plinkos.body.position.x>301 && plinkos.body.position.x <600){
      score+=100;
      plinkos=null; 
    } 
    if(plinkos.body.position.x>601 && plinkos.body.position.x <900){
      score+=500;
      plinkos=null; 
    }
     if (count>= 5){
       gameState="end";
     }
   }
   
 }
}
function mouseReleased(){
  if(gameState!="end"){
    count++;
    plinkos= new Plinko(mouseX,10)
  }
}