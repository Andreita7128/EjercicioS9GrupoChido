// figuras quietas
let cuadrado;
let triangulo;
let circulo;
let rombo;


// figuras movibles (m = movimiento)
let cuadradom;
let triangulom;
let circulom;
let rombom;

let c; //para el color

let select;
let colorc; //color cuadrado
let colorr; //color rombo
let colort; //color triangulo
let coloro; //color circulo


function setup() {
  createCanvas(500, 600);
cuadrado = new CUADRADO(125,125,"cuadrado",50);
triangulo = new TRIANGULO (375,100,"triangulo");
circulo = new CIRCULO (125,375,"circulo",30);
rombo = new ROMBO (375,340,"rombo");

cuadradom = new CUADRADO (100,550,"cuadradomovible",50)
triangulom = new TRIANGULO (200,525,"triangulomovible");
circulom = new CIRCULO (300,550,"circulomovible",30)
rombom = new ROMBO (400,515,"rombomovible");

c = 180;

select = null;
colorc = 3;
colorr = 3;
colort = 3;
coloro = 3;

}

function draw() {
  background(10);

  // cambio de color figura cuadrado 0 = incorrecto - 1 = correcto 
    switch(colorc){
      case 0:
        noStroke();
        fill(180,0,0);
        rectMode(CENTER);
        rect(125,125,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
      case 1:
        noStroke();
        fill(0,180,0);
        rectMode(CENTER);
        rect(125,125,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
      default:
        noStroke();
        noFill();
        rectMode(CENTER);
        rect(125,125,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
    }
    //cambio de color figura triangulo 0 = incorrecto - 1 = correcto 
    switch(colort){
      case 0:
        noStroke();
        fill(180,0,0);
        rectMode(CENTER);
        rect(375,125,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
      case 1:
        noStroke();
        fill(0,180,0);
        rectMode(CENTER);
        rect(375,125,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
      default:
        noStroke();
        noFill();
        rectMode(CENTER);
        rect(125,125,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
    }
    //cambio de color figura circulo 0 = incorrecto - 1 = correcto 
    switch(coloro){
      case 0:
        noStroke();
        fill(180,0,0);
        rectMode(CENTER);
        rect(125,375,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
      case 1:
        noStroke();
        fill(0,180,0);
        rectMode(CENTER);
        rect(125,375,250,250)
        rectMode(CORNER);
        stroke(1);
          break;
      default:
        noStroke();
        noFill();
        rectMode(CENTER);
        rect(125,125,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
    }
    //cambio de color figura rombo 0 = incorrecto - 1 = correcto 
    switch(colorr){
      case 0:
        noStroke();
        fill(180,0,0);
        rectMode(CENTER);
        rect(375,375,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
      case 1:
        noStroke();
        fill(0,180,0);
        rectMode(CENTER);
        rect(375,375,250,250)
        rectMode(CORNER);
        stroke(1);
         break;
      default:
        noStroke();
        noFill();
        rectMode(CENTER);
        rect(125,125,250,250)
        rectMode(CORNER);
        stroke(1);
        break;
    }
   
  

  //estructura - división
  stroke(250);
  strokeWeight(3);
  line(250,0,250,500);
  line(0,250,500,250);
  line(0,500,500,500);

  //pintar figuras quietas
  noFill();
  cuadrado.printCuadrado();
  triangulo.printTriangulo();
  circulo.printCirculo();
  rombo.printRombo();

  //pintar figuras movibles
  fill(c,c,0);
  cuadradom.printCuadrado();
  fill(0,0,c);
  triangulom.printTriangulo();
  fill(0,c,c);
  circulom.printCirculo();
  fill(100,0,c);
  rombom.printRombo();
  

}
function mousePressed(){
  //invocación para mover
  if(cuadradom.click(mouseX,mouseY)){
    select = cuadradom;
  }
  if(rombom.click(mouseX,mouseY)){
    select = rombom;
  }
  if(circulom.click(mouseX,mouseY)){
    select = circulom;
  }
  if(triangulom.click(mouseX,mouseY)){
    select = triangulom;
  }

}

function mouseDragged(){
  if(select == cuadradom){
  cuadradom.setX = mouseX;
  cuadradom.setY = mouseY;
}
if(select == rombom){
  rombom.setX = mouseX;
  rombom.setY = mouseY;
}
if(select == circulom){
  circulom.setX = mouseX;
  circulom.setY = mouseY;
}
if(select == triangulom){
  triangulom.setX = mouseX;
  triangulom.setY = mouseY;
}

}

function mouseReleased(){
  select = null;
  // sector 1 donde esta el cuadrado
  if(dist(cuadradom.getX,cuadradom.getY,cuadrado.getX,cuadrado.getY)<50/2){
    colorc = 1;
  }else if(dist(triangulom.getX,triangulom.getY,cuadrado.getX,cuadrado.getY)<50/2){
    colorc = 0;
  }else if(dist(rombom.getX,rombom.getY,cuadrado.getX,cuadrado.getY)<100/2){
    colorc = 0;
  }else if(dist(circulom.getX,circulom.getY,cuadrado.getX,cuadrado.getY)<50/2){
    colorc = 0;
  }else{
    colorc = 2;
  }

  // sector 2 donde está el triangulo
  if(dist(triangulom.getX,triangulom.getY,triangulo.getX,triangulo.getY)<50/2){
    colort = 1;
  }else if(dist(rombom.getX,rombom.getY,triangulo.getX,triangulo.getY)<50/2){
    colort = 0;
  }else if(dist(circulom.getX,circulom.getY,triangulo.getX,triangulo.getY)<100/2){
    colort = 0;
  }else if(dist(cuadradom.getX,cuadradom.getY,triangulo.getX,triangulo.getY)<100/2){
    colort = 0;
  }else {
    colort = 2;
  }
  
  // sector 3 donde está el circulo
  if(dist(circulom.getX,circulom.getY,circulo.getX,circulo.getY)<50/2){
    coloro = 1;
  }else if(dist(rombom.getX,rombom.getY,circulo.getX,circulo.getY)<100/2){
    coloro = 0;
  }else if(dist(cuadradom.getX,cuadradom.getY,circulo.getX,circulo.getY)<50/2){
    coloro = 0;
  }else if(dist(triangulom.getX,triangulom.getY,circulo.getX,circulo.getY)<100/2){
    coloro = 0;
  }else{
    coloro = 2;
  }


  
  // sector 4 donde está el rombo
  if(dist(rombom.getX,rombom.getY,rombo.getX,rombo.getY)<50/2){
    colorr = 1;
  }else if(dist(cuadradom.getX,cuadradom.getY,rombo.getX,rombo.getY)<100/2){
    colorr = 0;
  }else if(dist(triangulom.getX,triangulom.getY,rombo.getX,rombo.getY)<50/2){
    colorr = 0;
  }else if(dist(circulom.getX,circulom.getY,rombo.getX,rombo.getY)<100/2){
    colorr = 0;
  }else{
    colorr = 3;
  }
  
}
  


