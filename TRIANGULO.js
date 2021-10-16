class TRIANGULO{
    constructor (x,y,name) {
        this.x = x;
        this.y = y;
        this.name = name;
    
    
    }
    printTriangulo(){
        fill(0,0,180);
        triangle(this.x,this.y,this.x -50,this.y + 50,this.x +50,this.y +50);
    }

   /* moverTriangulo(){
        this.x=mouseX
    }*/

}