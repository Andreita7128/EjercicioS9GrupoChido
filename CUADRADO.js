class CUADRADO {
constructor (x,y,name,b,alto) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.b = 50;
    this.alto = 50;
}

printCuadrado(){
    fill(180,0,0);
    rect(this.x,this.y,this.b,this.alto);
}
}