class ROMBO{
    constructor (x,y,name) {
        this.x = x;
        this.y = y;        
        this.name = name;
    
    
    }
    printRombo(){
        quad(this.x,this.y,this.x +35,this.y +35,this.x,this.y +75,this.x -35,this.y + 35);
    }

    click(mouseX, mouseY){
        let result = false;
        if(dist(mouseX,mouseY,this.x+20,this.y+20)<75/2){
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