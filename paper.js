 class BALL {
    constructor(x,y){
 var options={
    isStatic:1,
    restitution:0.8,
    friction:1,
    density:1
     
 }

 
        
 this.body= Bodies.circle(x,y,PI/2,options);
 World.add(myWorld,this.body);
 
    }
 display(){
    var pos = this.body.position;
    
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill(255,0,255)
    circle(0,0,PI,PI);
    strokeWeight(3)
    pop()
}

}