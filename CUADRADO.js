class CUADRADO {
constructor (x,y,name,b) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.b = b;
}

printCuadrado(){
    rectMode(CENTER);
    rect(this.x,this.y,this.b,this.b);
    rectMode(CORNER);
}

click(mouseX,mouseY){
    let result = false;
if(dist(mouseX,mouseY,this.x,this.y)<this.b/2){
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