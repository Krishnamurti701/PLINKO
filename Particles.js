class Plinko {
    constructor(x,y,radius){
        var options={
            'restitution': 0.1,
            'friction':1.0,
            'density':0.45
    }
    this.body = Bodies.circle(x,y,this.radius,options);
    this.color =color(random(0,255), random (0,255), random(0,255));
    this.radius = radius;
    World.add(world, this.body);
    }
     
        
        
       
    
           display(){                     
                var pos = this.body.position;
                var angle = this.body.angle;
                push();
                translate(pos.x,pos.y);
                ellipseMode(RADIUS);
                noStroke();
                fill("this.color");
                ellipse(0,0,this.radius);
                pop();
            
            
            }
    }
           
    