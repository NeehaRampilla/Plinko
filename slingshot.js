class Slingshot{
    constructor(body1,point2){
        var opition= {
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04,
        }
    this.sling=Constraint.create(opition);
    World.add (world, this.sling);
    this.pointB=point2
            }
    display(){
        if (this.sling.bodyA){
            var point1 = this.sling.bodyA.position;
            var point2 = this.pointB;
            push ();
            strokeWeight(4);
            line (point1.x, point1.y, point2.x, point2.y);
            pop ();
        
        }
        
    }
   fly(){
       this.sling.bodyA=null;

   }
}