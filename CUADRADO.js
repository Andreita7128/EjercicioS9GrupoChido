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

click(){
if(dist(mouseX,mouseY,this.x,this.y)<this.b/2){
    console.log("click");
}
}

}