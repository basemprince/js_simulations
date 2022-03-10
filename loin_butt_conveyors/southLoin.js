class southLoin {
  constructor() {
    this.body = []
    this.angle = []
    this.BendCoordinates = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].x >= 830) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv2Speed;
        this.body[i].y += 0;
      }
      if (this.body[i].x > 540 && this.body[i].x <= 830) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv4Speed;
        this.body[i].y += 0;

      }

      if (this.body[i].x <= 510 + 30 && this.body[i].x >= 470 + 30 && this.body[i].y < 120 + 46) {

        this.BendCoordinates[i].x = 510 + 30;
        this.BendCoordinates[i].y = 90 + 45;
        if (this.angle[i].x > -90) {
          this.angle[i].x -= conv4Speed * 180 / (2 * PI * (90 - 65));
        } else {
          this.body[i].x = this.body[i].x - (90 - 45);
          this.body[i].y = this.body[i].y + (90 - 45);
        }
      }
      if (this.body[i].x <= 470 + 30 && this.body[i].y >= 120 && this.body[i].y <= 170 + 46 && this.body[i].x > 400 + 30) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= 0;
        this.body[i].y += conv4Speed;

      }
      if (this.body[i].x <= 470 + 30 && this.body[i].y >= 170 + 46 && this.body[i].y <= 360 && this.body[i].x > 400 + 30) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= 0;
        this.body[i].y += conv6Speed;

      }
      if (this.body[i].y >= 350 && this.body[i].y < 390 && this.body[i].x > 400) {
        this.BendCoordinates[i].x = 445;
        this.BendCoordinates[i].y = 350;
        if (this.angle[i].x < 0) {
          this.angle[i].x += conv6Speed * 180 / (2 * PI * (25));
        } else {
          this.body[i].x = this.BendCoordinates[i].x;
          this.body[i].y = 400;
        }
      }
      if (this.body[i].y >= 380 && this.body[i].x >= 430) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv6Speed;
      }
      if (this.body[i].y >= 380 && this.body[i].y <= 420 && this.body[i].x >= 350 && this.body[i].x < 430) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        if (this.angle[i].x >= -28) {
          this.angle[i].x -= 0.3;
        }

        this.body[i].x -= conv6Speed / 1.070606758;
        this.body[i].y += conv6Speed / 2.8;
      }

      if (this.body[i].y > 420 && this.body[i].x > 300) {

        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;

        if (this.angle[i].x < 0) {
          this.angle[i].x += 0.5;
        }
        if (this.body[i].y < 425) {
          this.body[i].y += conv8Speed / 2;
        }
        this.body[i].x -= conv8Speed;
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
          this.body[i].x -= 15;
          this.body[i].y = 385;
          //print(this.body[i].y);
        }
      }
      if (this.body[i].x <= 290 && this.body[i].y <= 390 && this.body[i].y >= 240-loinLength) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].y -= conv9Speed;
      }
      if (this.body[i].x <= 290 && this.body[i].y < 240-loinLength && this.body[i].y >= 180) {
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
          this.body[i].y = 135;
          //print(this.body[i].y);
        }
      }

      if (this.body[i].x <= 220 && this.body[i].y <= 180) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv11Speed;
      }

      if (this.body[i].x < 1 || this.body[i].y > 500) {
        this.body.splice(i, 1);
        this.angle.splice(i, 1);
        this.BendCoordinates.splice(i, 1);
      }
    }


  }
  addProduct() {
    this.body[this.body.length] = createVector(width, 90);
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
          rect(0, this.body[i].y - this.BendCoordinates[i].y, loinLength, loinWidth)
        }
        if (this.body[i].y > 330 && this.body[i].x > 380) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          rect(0, this.body[i].x - this.BendCoordinates[i].x, loinLength, loinWidth)
        }
        if (this.body[i].y > 360 && this.body[i].x < 350) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          //print(this.body[i].y - this.BendCoordinates[i].y)
          rect(0, this.body[i].y - this.BendCoordinates[i].y, loinLength, loinWidth)

        }
        if (this.body[i].y < 200 && this.body[i].x < 300) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          //print(this.body[i].y - this.BendCoordinates[i].y)
          rect(0, -this.body[i].x + this.BendCoordinates[i].x, loinLength, loinWidth)

        }
      } else {
        fill(255);
        translate(this.body[i].x, this.body[i].y);
        rotate(this.angle[i].x);

        rect(0, 0, loinLength, loinWidth)
      }
      pop();
    }
  }
}