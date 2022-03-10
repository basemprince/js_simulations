class manual {
  constructor() {
    this.body = []
    this.angle = []
    this.dimension = []

  }
  update() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].y >= 110) {
        this.body[i].y -= conv12Speed*2;
        this.body[i].x += conv12Speed;
        totalWork+=(conv12Speed*2);
      }
      this.body[i].x -= conv12Speed;
    
      if (this.body[i].x < 80) {
        this.body.splice(i, 1);
        this.angle.splice(i, 1);
        this.dimension.splice(i, 1);
      }}
  }

  addProduct(x, y, angle, length, width) {
    this.body[this.body.length] = createVector(x, y);
    this.angle[this.angle.length] = createVector(angle);
    this.dimension[this.dimension.length] = createVector(length, width);
  }
  show() {
    for (let i = 0; i < this.body.length; i++) {
      push();
      rectMode(CENTER);
      fill(255);
      rect(this.body[i].x, this.body[i].y, this.dimension[i].x, this.dimension[i].y);
      if (showDetails) {
        try {
          text(i, this.body[i].x, this.body[i].y)
        } catch (error) {}
      }
      pop();
    }
  }
}