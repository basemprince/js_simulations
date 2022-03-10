class south {
  constructor() {
    this.body = []
    this.dimension = []
    this.conv3 = []
    this.conv4 = []
  }

  // rect(x, height / 2+60, 124, 30)
  // rect(x + 127, height / 2+60, 72, 30)
  //         fill(255,30,33);
  // rect(x + 202, height / 2+60, 42, 30)
  //        fill(0);
  // rect(x + 247, height / 2 +60, 28, 30)
  // rect(x + 278, height / 2+60, 78.5, 30)
  update() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].x < x + 127 - this.dimension[i].x) {
        this.body[i].x += conv1bSpeed;

      }
      if (this.body[i].x >= x + 127 - this.dimension[i].x && this.body[i].x < 202 - this.dimension[i].x) {
        this.body[i].x += conv2bSpeed;

      }
      if (this.body[i].x >= x + 202 - this.dimension[i].x && this.body[i].x < 247 - this.dimension[i].x) {
        this.body[i].x += conv3bSpeed* conv3bMultiplier;
        this.conv3[i] = true;
      }
      if (this.body[i].x >= x + 247 - this.dimension[i].x && this.body[i].x < 278 - this.dimension[i].x) {
        this.body[i].x += conv5bSpeed;

      }
      if (this.body[i].x >= x + 278 - this.dimension[i].x) {
        this.body[i].x += conv4bSpeed;

      }

      if (this.body[i].x >= x + 202 - this.dimension[i].x && this.body[i].x < 247) {

        this.conv3[i] = true;
      } else {
        this.conv3[i] = false;
      }
      

      if (this.body[i].x >= x + 278 - this.dimension[i].x && this.body[i].x < 351) {

        this.conv4[i] = true;
      } else {
        this.conv4[i] = false;
      }      
      
      if (this.body[i].x > 360) {
        southSide.removeProduct(i);
      }
    }


  }
  addProduct(l, w) {
    this.body[this.body.length] = createVector(x, (height / 2) + (30 / 4) + 60);
    this.dimension[this.dimension.length] = createVector(l, w);
    this.conv3[this.conv3.length] = false;
    this.conv4[this.conv4.length] =false
  }
  removeProduct(i) {
    this.body.splice(i, 1);
    this.dimension.splice(i, 1);
  }

  show() {

    for (let i = 0; i < this.body.length; i++) {
      fill(255);
      rect(this.body[i].x, this.body[i].y, this.dimension[i].x, this.dimension[i].y)
    }
  }
}