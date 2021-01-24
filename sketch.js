const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var divisions = [];
var plinko = [];
var divisionHeight = 300;

function setup() {
 engine = Engine.create();
 world = engine.world;
  createCanvas(480,800);

for(var j =0; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j =15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}


}

if(frameCount%60 === 0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
  
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  

  for(var j =0; j<particles.length; j++){
    particles[j].display();
  }
  
  for(var k =0; k<divisions.length; k++){
    divisions[k].display();
    
  drawSprites();
}