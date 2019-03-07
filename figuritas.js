var thic;
var k;
function preload(){
  thic= loadImage('kefla.png');
}
function setup() {
  k = new Kefla();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  k.mostrar();
  if(keyIsPressed& keyCode == RIGHT_ARROW){
    k.derecha();
  }
   if(keyIsPressed& keyCode == LEFT_ARROW){
    k.izquierda();
  }
   if(keyIsPressed& keyCode == UP_ARROW){
    k.arriba();
  }
   if(keyIsPressed& keyCode == DOWN_ARROW){
    k.abajo();
  }
}
     
