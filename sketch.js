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


function setup() {
  createCanvas(500, 600);
cuadrado = new CUADRADO(75,75,"cuadrado",50,50);
triangulo = new TRIANGULO (375,75,355,125,400,125,"triangulo");
circulo = new CIRCULO (125,375,"circulo",50);
rombo = new ROMBO (375,325,340,375,375,425,410,375,"rombo");

cuadradom = new CUADRADO (25,525,"cuadradomovible",20,20)
triangulom = new TRIANGULO (125,525,100,575,150,575,"triangulomovible");
circulom = new CIRCULO (350,550,20,"circulomovible")
rombom = new ROMBO (450,525,425,550,450,575,475,550,"rombomovible");

}

function draw() {
  background(10);

  stroke(250);
  strokeWeight(3);
  line(250,0,250,500);
  line(0,250,500,250);
  line(0,500,500,500);

  cuadrado.printCuadrado();
  triangulo.printTriangulo();
  circulo.printCirculo();
  rombo.printRombo();

  cuadradom.printCuadrado();
  triangulom.printTriangulo();
  circulom.printCirculo();
  rombom.printRombo();

}
