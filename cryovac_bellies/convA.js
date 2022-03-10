let clash = 0;
let productACounter = 0;

class convA {
  constructor() {
    this.body = []
    this.cryo = []

  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.cryo.length != 0 && EL3mode) {
        if (this.cryo[this.cryo.length - 1].x > (300 - productLengthA)) {
          this.body[i].x -= cryoSpeed;
          this.body[i].y += 0;
        } else {
          this.body[i].x -= convSpeedA;
          this.body[i].y += 0;
        }
      } else {
        this.body[i].x -= convSpeedA;
        this.body[i].y += 0;
      }
    }
    if (this.body.length != 0) {
      return this.body[0].x
    } else {
      return 99999
    }
  }
  update2() {
    for (let j = 0; j < this.cryo.length; j++) {

      this.cryo[j].x -= cryoSpeed;
      this.cryo[j].y += 0;

      if (this.cryo[j].x >= 238 && this.cryo[j].x <= 250) {
        this.cryo[j].y -= tan(0.876058051) * cryoSpeed;
      }
      if (this.cryo[j].x <= 80) {
        this.cryo.shift();
      }

    }

  }
  addProduct() {
    this.body[this.body.length] = createVector(600, 219);
    return productACounter++;

  }
  removeProduct() {

    this.cryo[this.cryo.length] = createVector(this.body[0].x, this.body[0].y);
    this.body.shift();

  }
  show() {
    if (this.body.length >= 2) {
      if (this.body[this.body.length - 2].x + productLengthA > this.body[this.body.length - 1].x && this.body[this.body.length - 1].x >= 597) {
        this.body.pop();
        clash++;
      }
    }

    for (let i = 0; i < this.body.length; i++) {
      fill(255);
      rect(this.body[i].x, this.body[i].y, productLengthA, 10)

    }
    for (let j = 0; j < this.cryo.length; j++) {
      fill(255);
      rect(this.cryo[j].x, this.cryo[j].y, productLengthA, 10)
    }
    return clash;
  }

}