class CIRCULO{
    constructor (x,y,name,r) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.r = r;
    
    }
    printCirculo(){
        circle(this.x,this.y,this.r*2);
    }

    click(){
        if(dist(mouseX,mouseY,this.x,this.y)<this.r){
            console.log("click");
        }
        }

}