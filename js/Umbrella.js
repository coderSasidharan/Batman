class Umbrella{
    constructor(x,y){
        var options = {
            friction: 0.01,
            isStatic:true
        }
        this.r  = 58;
        this.umbrella = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("batmanbegins/walking_1.png")
        World.add(world, this.umbrella);
    }
    display(){
        imageMode(CENTER);
      // ellipseMode(RADIUS);

       //ellipse(this.umbrella.position.x,this.umbrella.position.y,this.r,this.r);

        scale(0.3)
        image(this.image,600,1000)
    }
}