class Pipe1{
    constructor(x,y,width,height){
       this.body=Bodies.rectangle(x,y,width,height);
       this.width=width;
       this.height=height;
       World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.image, 0, 0, this.width, this.height);
        pop();
    }
}