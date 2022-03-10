class MainConv {
  constructor() {
    this.body = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {

      this.body[i].x -= mainConvSpeed;
      this.body[i].y += 0;


      if (this.body[i].x > 260 + x && this.body[i].x < 265 + x && spaceChecker1a) {
        bag1.addProduct(this.body[i].x, this.body[i].y);
        this.body.splice(i, 1);
      }
      if (this.body[i].x > 250 + x && this.body[i].x < 255 + x && spaceChecker1b) {
        bag2.addProduct(this.body[i].x, this.body[i].y);
        this.body.splice(i, 1);
      }

      if (this.body[i].x > 160 && this.body[i].x < 165 && spaceChecker2a) {
        bag3.addProduct(this.body[i].x, this.body[i].y);
        this.body.splice(i, 1);
      }
      if (this.body[i].x > 140 && this.body[i].x < 145 && spaceChecker2b) {
        bag4.addProduct(this.body[i].x, this.body[i].y);
        this.body.splice(i, 1);
      }

      if (this.body[i].x > (180 + x + 230) / 2 && this.body[i].x < ((180 + x + 230) / 2) + 5 && spaceChecker5 && bagger5mode) {
        bag5.addProduct(this.body[i].x, this.body[i].y);
        this.body.splice(i, 1);
      }

      if (this.body[i].x < 1) {
        this.body.splice(i, 1);
        missed++;
      }
    }


  }
  addProduct() {
    this.body[this.body.length] = createVector(600, 67);
  }

  show() {


    for (let i = 0; i < this.body.length; i++) {
      fill(255);
      rect(this.body[i].x, this.body[i].y, productLength, productWidth)

    }
  }
}