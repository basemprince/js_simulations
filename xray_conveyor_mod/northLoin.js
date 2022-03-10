class northLoin {
  constructor() {
    this.body = []
    this.dimension = []
    this.conv3 = []
    this.conv4 = []
  }


  update() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].x < x + 127 - this.dimension[i].x) {
        this.body[i].x += conv1aSpeed;

      }
      if (this.body[i].x >= x + 127 - this.dimension[i].x && this.body[i].x < 202 - this.dimension[i].x) {
        this.body[i].x += conv2aSpeed;

      }
      if (this.body[i].x >= x + 202 - this.dimension[i].x && this.body[i].x < 247 - this.dimension[i].x) {
        this.body[i].x += conv3aSpeed * conv3aMultiplier;


      }

      if (this.body[i].x >= x + 247 - this.dimension[i].x) {
        this.body[i].x += conv4aSpeed;

      }
      if (this.body[i].x >= x + 202 - this.dimension[i].x && this.body[i].x < 247) {

        this.conv3[i] = true;
      } else {
        this.conv3[i] = false;
      }

      if (this.body[i].x >= x + 247 - this.dimension[i].x && this.body[i].x < 320) {

        this.conv4[i] = true;
      } else {
        this.conv4[i] = false;
      }

      if (this.body[i].x > 360) {
        loinNorth.removeProduct(i);
      }
    }

  }
  addProduct(l, w) {
    this.body[this.body.length] = createVector(x, (height / 2) + (30 / 4));
    this.dimension[this.dimension.length] = createVector(l, w);
    this.conv3[this.conv3.length] = false;
    this.conv4[this.conv4.length] = false
  }
  removeProduct(i) {
    this.body.splice(i, 1);
    this.dimension.splice(i, 1);
    this.conv3.splice(i, 1);
  }

  show() {

    for (let i = 0; i < this.body.length; i++) {
      fill(255);
      rect(this.body[i].x, this.body[i].y, this.dimension[i].x, this.dimension[i].y)
    }
  }
}