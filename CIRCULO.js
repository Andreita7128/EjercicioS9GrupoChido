class CIRCULO{
    constructor (x,y,name,r) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.r = r;
    
    }
    printCirculo(){
        fill(0,180,0);
        circle(this.x,this.y,this.r);
    }

}