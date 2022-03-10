class buttStuff {
  constructor() {
    this.body = []
    this.angle = []
    this.BendCoordinates = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].x >= width - 30) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv7Speed;
        this.body[i].y += 0;
        this.angle[i].x = 0;
      }
      if (this.body[i].x <= width - 30 && this.body[i].x > 325) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv8Speed;
        this.body[i].y += 0;
        this.angle[i].x = 0;
      }
      if (this.body[i].x <= 325 && this.body[i].y > 390) {
        this.BendCoordinates[i].x = 325;
        this.BendCoordinates[i].y = 385;



        if (this.angle[i].x < 90) {
          this.angle[i].x += conv8Speed * 180 / (2 * PI * (25));
        } else {
          //fill(255);
          //print(this.body[i].x + " " + this.body[i].y);
          this.BendCoordinates[i].x = 0;
          this.BendCoordinates[i].y = 0;
          this.body[i].x -= 47;
          this.body[i].y = 385;
          //print(this.body[i].y);
        }
      }

      if (this.body[i].x <= 290 && this.body[i].y <= 390 && this.body[i].y >= 240-buttLength) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].y -= conv9Speed;
      }
      if (this.body[i].x <= 290 && this.body[i].y < 240-buttLength && this.body[i].y >= 180) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].y -= conv10Speed;
      }
      if (this.body[i].x <= 300 && this.body[i].y < 200 && this.body[i].x > 225) {
        this.BendCoordinates[i].x = 220;
        this.BendCoordinates[i].y = 200;
        if (this.angle[i].x > 0) {
          this.angle[i].x -= conv10Speed * 180 / (2 * PI * (25));
        } else {
          //fill(255);
          //print(this.body[i].x + " " + this.body[i].y);
          this.BendCoordinates[i].x = 0;
          this.BendCoordinates[i].y = 0;
          this.body[i].x = 220;
          this.body[i].y = 142;
          //print(this.body[i].y);
        }
      }

      if (this.body[i].x <= 220 && this.body[i].y <= 180) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv11Speed;
      }


      if (this.body[i].x < 1) {
        this.body.splice(i, 1);
        this.angle.splice(i, 1);
        this.BendCoordinates.splice(i, 1);
      }
    }


  }
  addProduct() {
    this.body[this.body.length] = createVector(width, 432);
    this.angle[this.angle.length] = createVector(0);
    this.BendCoordinates[this.BendCoordinates.length] = createVector(0, 0);
  }

  show() {

    for (let i = 0; i < this.body.length; i++) {
      push();
      rectMode(CENTER);
      if (this.BendCoordinates[i].y > 0 && this.BendCoordinates[i].x > 0) {
        fill(255);
        if (this.body[i].y < 180 && this.body[i].x > 360) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          rect(0, this.body[i].y - this.BendCoordinates[i].y, buttLength, buttWidth)
        }
        if (this.body[i].y > 330 && this.body[i].x > 380) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          rect(0, this.body[i].x - this.BendCoordinates[i].x, buttLength, buttWidth)
        }
        if (this.body[i].y > 360 && this.body[i].x < 350) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          //print(this.body[i].y - this.BendCoordinates[i].y)
          rect(0, this.body[i].y - this.BendCoordinates[i].y, buttLength, buttWidth)

        }
        if (this.body[i].y < 200 && this.body[i].x < 300) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          //print(this.body[i].y - this.BendCoordinates[i].y)
          rect(0, -this.body[i].x + this.BendCoordinates[i].x, buttLength, buttWidth)

        }
      } else {
        fill(255);
        translate(this.body[i].x, this.body[i].y);
        rotate(this.angle[i].x);

        rect(0, 0, buttLength, buttWidth)
      }
      pop();
    }
  }
}