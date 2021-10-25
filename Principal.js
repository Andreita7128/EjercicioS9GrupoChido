let cuadrado; // figuras quietas
let triangulo;
let circulo;
let rombo;
let cuadradom; // figuras movibles (m = movimiento)
let triangulom;
let circulom;
let rombom;
let c; //color figuras movibles
let select;
let colorc; //color cuadrado
let colorr; //color rombo
let colort; //color triangulo
let coloro; //color circulo

function setup() {
  createCanvas(500, 600);
  cuadrado = new Cuadrado(125, 125, 50);
  triangulo = new Triangulo(375, 100);
  circulo = new Circulo(125, 375, 30);
  rombo = new Rombo(375, 340);
  cuadradom = new Cuadrado(100, 550, 50)
  triangulom = new Triangulo(200, 525);
  circulom = new Circulo(300, 550, 30)
  rombom = new Rombo(400, 515);
  c = 180;
  select = null;
  colorc = 0;
  colorr = 0;
  colort = 0;
  coloro = 0;
}

function draw() {
  background(10);
//sector del cuadrado
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if(colorc > 1){ 
        stroke(c,0,0);
        strokeWeight(3);
        noFill();
      }else if(colorc === 1){
        stroke(0,c,0);
        strokeWeight(3);
        noFill();
      }
      noFill();
      strokeWeight(3);
      rectMode(CENTER);
      rect(125,125,247,247)
    }
  }
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if(colort > 1){ 
        stroke(c,0,0);
        strokeWeight(3);
        noFill();
      }else if(colort === 1){
        stroke(0,c,0);
        strokeWeight(3);
        noFill();
      }
      noFill();
      strokeWeight(3);
      rectMode(CENTER);
      rect(375,125,247,247)
      strokeWeight(3);
      stroke(255);
    }
  }
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if(coloro > 1){ 
        stroke(c,0,0);
        strokeWeight(3);
        noFill();
      }else if(coloro === 1){
        stroke(0,c,0);
        strokeWeight(3);
        noFill();
      }
      noFill();
      strokeWeight(3);
      rectMode(CENTER);
      rect(125,375,247,247)
      strokeWeight(3);
      stroke(255);
    }
  }
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if(colorr > 1){ 
        stroke(c,0,0);
        strokeWeight(3);
        noFill();
      }else if(colorr === 1){
        stroke(0,c,0);
        strokeWeight(3);
        noFill();
      }
      noFill();
      strokeWeight(3);
      rectMode(CENTER);
      rect(375,375,247,247)
      strokeWeight(3);
    }
  }
  noFill();
  stroke(250);
  cuadrado.printCuadrado();
  triangulo.printTriangulo();
  circulo.printCirculo();
  rombo.printRombo();
  fill(c, c, 0);
  cuadradom.printCuadrado();
  fill(0, 0, c);
  triangulom.printTriangulo();
  fill(0, c, c);
  circulom.printCirculo();
  fill(100, 0, c);
  rombom.printRombo();
}

function mousePressed() {
  //invocación para mover
  if (cuadradom.click(mouseX, mouseY)) {
    select = cuadradom;
  }
  if (rombom.click(mouseX, mouseY)) {
    select = rombom;
  }
  if (circulom.click(mouseX, mouseY)) {
    select = circulom;
  }
  if (triangulom.click(mouseX, mouseY)) {
    select = triangulom;
  }

}

function mouseDragged() {
  if (select == cuadradom) {
    cuadradom.setX = mouseX;
    cuadradom.setY = mouseY;
  }
  if (select == rombom) {
    rombom.setX = mouseX;
    rombom.setY = mouseY;
  }
  if (select == circulom) {
    circulom.setX = mouseX;
    circulom.setY = mouseY;
  }
  if (select == triangulom) {
    triangulom.setX = mouseX;
    triangulom.setY = mouseY;
  }
}

function mouseReleased() {
  select = null;
  if (dist(cuadradom.getX, cuadradom.getY, cuadrado.getX, cuadrado.getY) < 25) {
    colorc = 1;
  } else if (dist(triangulom.getX, triangulom.getY, cuadrado.getX, cuadrado.getY) < 50) {
    colorc = 2;
  } else if (dist(rombom.getX, rombom.getY, cuadrado.getX, cuadrado.getY) < 50) {
    colorc = 2;
  } else if (dist(circulom.getX, circulom.getY, cuadrado.getX, cuadrado.getY) < 25) {
    colorc = 2;
  } else {
    colorc = 0;
  }

  if (dist(triangulom.getX, triangulom.getY, triangulo.getX, triangulo.getY) < 25) {
    colort = 1;
  } else if (dist(rombom.getX, rombom.getY, triangulo.getX, triangulo.getY) < 25) {
    colort = 2;
  } else if (dist(circulom.getX, circulom.getY, triangulo.getX, triangulo.getY) < 50) {
    colort = 2;
  } else if (dist(cuadradom.getX, cuadradom.getY, triangulo.getX, triangulo.getY) < 50) {
    colort = 2;
  } else {
    colort = 0;
  }

  if (dist(circulom.getX, circulom.getY, circulo.getX, circulo.getY) < 25) {
    coloro = 1;
  } else if (dist(rombom.getX, rombom.getY, circulo.getX, circulo.getY) < 50) {
    coloro = 2;
  } else if (dist(cuadradom.getX, cuadradom.getY, circulo.getX, circulo.getY) < 25) {
    coloro = 2;
  } else if (dist(triangulom.getX, triangulom.getY, circulo.getX, circulo.getY) < 50) {
    coloro = 2;
  } else {
    coloro = 0;
  }

  if (dist(rombom.getX, rombom.getY, rombo.getX, rombo.getY) < 25) {
    colorr = 1;
  } else if (dist(cuadradom.getX, cuadradom.getY, rombo.getX, rombo.getY) < 50) {
    colorr = 2;
  } else if (dist(triangulom.getX, triangulom.getY, rombo.getX, rombo.getY) < 25) {
    colorr = 2;
  } else if (dist(circulom.getX, circulom.getY, rombo.getX, rombo.getY) < 50) {
    colorr = 2;
  } else {
    colorr = 0;
  }
}