class TRIANGULO{
    constructor (x,y,name) {
        this.x = x;
        this.y = y;
        this.name = name;
    
    
    }
    printTriangulo(){
        triangle(this.x,this.y,this.x -50,this.y + 50,this.x +50,this.y +50);
    }

    click(){
        if(dist(mouseX,mouseY,this.x+25,this.y+25)<50/2){
            console.log("click");
        }
        }

}