//var g;
//var h;
var gotas = [];

function setup() {
  createCanvas(400, 400);
  //g = new Gota();
  //h = new Gota();
  for(var i =0; i < 100; i++){
    gotas[i] = new Gota();
  }
}

function draw() {
  background(220);
  for(var i = 0; i<gotas.length; i ++){ 
  gotas[i].mostrar();
  gotas[i].caer();
  if(gotas[i].salir()){
    gotas[i].retornar();
  }
}
}
