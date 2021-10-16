class CUADRADO {
constructor (x,y,name,b) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.b = b;
}

printCuadrado(){
    fill(180,0,0);
    rectMode(CENTER);
    rect(this.x,this.y,this.b,this.b);
    rectMode(CORNER);
}
}