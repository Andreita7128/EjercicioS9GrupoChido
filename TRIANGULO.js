class Triangulo{
    constructor (x,y) {
        this.x = x;
        this.y = y;    
    }
    printTriangulo(){
        triangle(this.x,this.y,this.x -50,this.y + 50,this.x +50,this.y +50);
    }

    click(mouseX, mouseY){
        let result = false;
        if(dist(mouseX,mouseY,this.x+25,this.y+25)<50/2){
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