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


function setup() {
  createCanvas(500, 600);
cuadrado = new CUADRADO(125,125,"cuadrado",50);
triangulo = new TRIANGULO (375,100,"triangulo");
circulo = new CIRCULO (125,375,"circulo",30);
rombo = new ROMBO (375,325,340,375,375,425,410,375,"rombo");

cuadradom = new CUADRADO (100,550,"cuadradomovible",50)
triangulom = new TRIANGULO (200,525,"triangulomovible");
circulom = new CIRCULO (300,550,"circulomovible",25)
rombom = new ROMBO (400,515,"rombomovible");

c = 180;

}

function draw() {
  background(10);

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
  cuadradom.click();
  rombom.click();
  circulom.click();
  triangulom.click();

}

function mouseDragged(){
  
}
