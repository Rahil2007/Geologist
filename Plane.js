class Plane{
    constructor(x,y,width,height){
      this.width=width;
      this.height=height;
  
      var options = {
          isStatic : true,
          restitution : 0.2
      }
      this.body=Bodies.rectangle(x,y,this.width,this.height,options)
      World.add(world,this.body)
      console.log(this.body)
    } 
  
    display(){
      fill("brown")
      var pos=this.body.position  
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height);
    }
    
  }