class Plinko {
constructor(x,y,radius){
    var options={
        'restitution': 0.1,
        'friction':1.0,
        'density':0.45
}
this.body = Bodies.circle(x,y,radius);

this.r = r;
World.add(world, this.body);
}
 
    
    
   

       display(){                     
            var pos = this.body.position;
         
            push();
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
            
            fill("white");
            ellipse(pos.x,pos.y,this.radius);
            pop();
        
        
        }
}
       
