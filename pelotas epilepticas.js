var p;

function setup() {
  createCanvas(400, 400);
  p1 = new Ball();
  p2 = new Ball();
}

function draw() {
  background(220);
  for(var i =0; i < 100; i++){
    Ball[i] = new Ball();
  p1.mostrar();
  p1.moverX();
  p1.moverY();

  if (p1.salirX()) {
    p1.botarX();
    fill(0,55,16);
  }
  
  if (p1.salirY()) {
    p1.botarY();
    fill(0,75,86);
  }
  p2.mostrar();
  p2.moverX();
  p2.moverY();

  if (p2.salirX()) {
    p2.botarX();
    fill(10,45,200);
  }
  if (p2.salirY()) {
    p2.botarY();
    fill(15,36,7);
  }
}
}

class Ball {
  constructor() {
    this.x = random(0, 400);
    this.y = random(0, 400);
    this.tam = 50;
    this.velx = 3;
    this.vely = 3;
  }
  mostrar() {
    ellipse(this.x, this.y, this.tam, this.tam);
  }

  moverX() {
    this.x = this.x + this.velx;
  }

  salirX() {
    var res;
    if (this.x < 25 || this.x > 375) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
  botarX() {
    this.velx = this.velx * -1;
  }
  moverY() {
    this.y = this.y + this.vely;
  }

  salirY() {
    var res;
    if (this.y < 25 || this.y > 375) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
  botarY() {
    this.vely = this.vely * -1;
  }
}
