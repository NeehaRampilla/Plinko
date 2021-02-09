class Particle{
    constructor(x,y){
       var options = {
           restitution:0.4,
           isStatic:true
       }
       
       this.body = Bodies.circle(x, y, 10,options);
       this.color ="blue";
       this.r = 10;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}