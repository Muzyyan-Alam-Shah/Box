class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic:true //JSON- Javascript object Notation
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(game_world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}
