class Paper{
    constructor(x,y){
      var options ={
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body=Bodies.circle(x,y,10,options);
      this.radius=70
      this.image=loadImage("paper.png")
      World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        var angle=this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius,this.radius)
      
    }

}
