class ROMBO{
    constructor (x,y,name) {
        this.x = x;
        this.y = y;        
        this.name = name;
    
    
    }
    printRombo(){
        fill(0,0,180);
        quad(this.x,this.y,this.x +35,this.y +35,this.x,this.y +75,this.x -35,this.y + 35);
    }

}