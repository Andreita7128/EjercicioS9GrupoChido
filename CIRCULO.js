class Circulo{
    constructor (x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
    
    }
    printCirculo(){
        circle(this.x,this.y,this.r*2);
    }

    click(mouseX, mouseY){
        let result = false
        if(dist(mouseX,mouseY,this.x,this.y)<this.r){
            console.log("click");
            result = true;
        }
        return result;
        }
        
get getX(){
    return this.x;
}
get getY(){
    return this.y;
}

set setX(mouseX){
    this.x = mouseX;
}
set setY(mouseY){
    this.y = mouseY;
}

}