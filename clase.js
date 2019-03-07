class Kefla {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  derecha() {
    this.x++;
  }
  izquierda() {
    this.x--;
  }
  arriba() {
    this.y--;
  }
  abajo() {
    this.y++;
  }
  mostrar() {
    imageMode(CENTER);
    image(thic, this.x, this.y, 190, 190);
  }
}
