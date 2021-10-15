let cuadrado;
let triangulo;
let circulo;
let rombo;

function setup() {
  createCanvas(500, 500);
cuadrado = new CUADRADO(75,75,"cuadrado",50,50);
triangulo = new TRIANGULO (375,75,355,125,400,125,"triangulo");
circulo = new CIRCULO (125,375,"circulo",50);
rombo = new ROMBO (375,325,340,375,375,425,410,375,"rombo");


}

function draw() {
  background(10);

  stroke(250);
  strokeWeight(3);
  line(250,0,250,500);
  line(0,250,500,250);

  cuadrado.printCuadrado();
  triangulo.printTriangulo();
  circulo.printCirculo();
  rombo.printRombo();

}
