class Stone{
    constructor(x,y,width,height){
        // the properties of the class
        this.width = width;
        this.height = height;
        var options = {
            restitution:0.5,
            density:3,
            friction:3
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        rectMode(CENTER)
        angleMode(RADIANS)
        push();
        fill("black")
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.width,this.height)
        pop();
    }
}