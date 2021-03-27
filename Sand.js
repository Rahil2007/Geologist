class Sand{
    constructor(x,y,radius){
        // the properties of the class
        this.radius= radius
        var options = {
            restitution: 0.3,
            friction:5,
            density:1
        }
        this.body = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)
    }    

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        ellipseMode(CENTER);
        angleMode(RADIANS);
        push();
        fill("brown");
        translate(pos.x,pos.y);
        rotate(angle);
        circle(0,0,this.radius);
        pop();
    }

}