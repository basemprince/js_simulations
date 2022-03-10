let cryoPlateCount = 0;
class cryoplate {

  constructor() {
    var xs = 100;
    var ys = 205;
    var space = 60;
    this.body = [createVector(200, 205), createVector(149, 205), createVector(98, 205), createVector(46, 205), createVector(30, 240), createVector(81, 240), createVector(132, 240), createVector(184, 240)];
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].y <= 205 && this.body[i].x > 30) {
        if (this.body[i].y < 205) {
          this.body[i].x += 205 - this.body[i].y;
          this.body[i].y = 205;
        }
        this.body[i].y += 0;
        this.body[i].x -= cryoSpeed;
      }
      if (this.body[i].x <= 30 && this.body[i].y < 240) {
        if (this.body[i].x < 30) {
          this.body[i].y += 30 - this.body[i].x;
          this.body[i].x = 30;
        }
        this.body[i].y += cryoSpeed;
        this.body[i].x += 0;
      }
      if (this.body[i].y >= 240 && this.body[i].x < 200) {
        if (this.body[i].y > 240) {
          this.body[i].x += this.body[i].y - 240;
          this.body[i].y = 240;
        }
        this.body[i].y += 0;
        this.body[i].x += cryoSpeed;
      }
      if (this.body[i].x >= 200 && this.body[i].y > 205) {
        if (this.body[i].x > 200) {
          this.body[i].y += this.body[i].x - 200;
          this.body[i].x = 200;
        }
        this.body[i].y -= cryoSpeed;
        this.body[i].x += 0;
      }
    }
  }


  show() {
    var counter = 0;
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].x <= 171 && this.body[i].x >= 170 && this.body[i].y < 230) {
        fill(100, 30, 30);
        counter++;
      } else {
        fill(255, 50, 30);
      }
      noStroke();
      rect(this.body[i].x, this.body[i].y, 10, 10)
    }

    if (counter > 0) {
      return true;
    } else {
      return false;
    }
  }

}