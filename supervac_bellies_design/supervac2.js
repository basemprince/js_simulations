gateTime2 = 0;
var cycleDisplay2 = 0;
var timeStopper2A = true;
var timeStopper2M = true;

class supervac2 {
  constructor() {
    this.storage = []
    this.vacum = []
    this.takeAway = []
  }

  update() {
    if (this.storage.length >= 1) {
      if (this.storage[0].y != 130 + 3 * productWidth) {
        this.storage[0].y += 1;
      }
      if (ceil(this.storage[0].x) != 145 && this.storage[0].x > 145) {
        this.storage[0].x -= 1;
      }
      if (ceil(this.storage[0].x) != 145 && this.storage[0].x < 145) {
        this.storage[0].x += 1;
      }
    }
    if (this.storage.length >= 2) {
      if (this.storage[1].y != 130 + 2 * productWidth) {
        this.storage[1].y += 1;
      }
      if (ceil(this.storage[1].x) != 155 && this.storage[1].x > 155) {
        this.storage[1].x -= 1;
      }
      if (ceil(this.storage[1].x) != 155 && this.storage[1].x < 155) {
        this.storage[1].x += 1;
      }

    }
    if (this.storage.length >= 3) {
      if (this.storage[2].y != 130 + productWidth) {
        this.storage[2].y += 1;
      }
      if (ceil(this.storage[2].x) != 145 && this.storage[2].x > 145) {
        this.storage[2].x -= 1;
      }
      if (ceil(this.storage[2].x) != 145 && this.storage[2].x < 145) {
        this.storage[2].x += 1;
      }
    }
    if (this.storage.length >= 4) {
      if (this.storage[3].y != 130) {
        this.storage[3].y += 1;
      }
      if (ceil(this.storage[3].x) != 155 && this.storage[3].x > 155) {
        this.storage[3].x -= 1;
      }
      if (ceil(this.storage[3].x) != 155 && this.storage[3].x < 155) {
        this.storage[3].x += 1;
      }
    }
    cycleDisplay2 = targetReleseTime2 - timeCount;
    if (cycleDisplay2 < 0) {
      cycleDisplay2 = vacumCycleTime2;
    }
    text(round(cycleDisplay2), 195, 210);
    if (autoMode2) {
      if (this.storage.length > 0) {
        if (this.storage.length >= 4) {
          spaceChecker2 = false;
        }
        if (this.storage[0].x <= 145 && this.storage[0].y >= 130 + 3 * productWidth && this.vacum.length == 0) {
          supervac2cycle += supervac2enter.storage.length;
          supervac2enter.removeProduct();
          spaceChecker2 = true;
        }
      }

      if (this.vacum.length > 0 && this.vacum[0].y >= 130 + 3 * productWidth && this.vacum[0].x <= 145 && timeStopper2A) {
        targetReleseTime2 = timeCount + vacumCycleTime2;
        timeStopper2A = false;
      }

      if (targetReleseTime2 <= timeCount && targetReleseTime2 > 0) {
        supervac2enter.removeProduct2();
        targetReleseTime2 = timeCount + vacumCycleTime2
        timeStopper2A = true;
      }
    }

    if (!autoMode2) {
      if (this.storage.length >= 4) {
        spaceChecker2 = false;
        if (this.storage[3].x <= 155 && this.storage[3].y >= 130 && this.vacum.length == 0) {
          if (gateTime2 > 20) {
            supervac2enter.removeProduct();
            spaceChecker2 = true;
            supervac2cycle += 4;
            gateTime2 = 0;
          }
          gateTime2++;
        }
      }
      if (this.vacum.length >= 4 && this.vacum[3].y >= 130 && this.vacum[3].x <= 155 && timeStopper2M) {
        targetReleseTime2 = timeCount + vacumCycleTime2
        timeStopper2M = false;
      }
      if (targetReleseTime2 <= timeCount && targetReleseTime2 > 0) {
        supervac2enter.removeProduct2();
        targetReleseTime2 = timeCount + vacumCycleTime2
        timeStopper2M = true;
      }

    }
    for (let i = 0; i < this.vacum.length; i++) {
      if (this.vacum[0].y <= 240) {
        this.vacum[i].y += 1;
      } else {
        this.vacum[i].y += 0;
      }
    }
    for (let i = 0; i < this.takeAway.length; i++) {
      if (this.takeAway[i].y <= 270) {
        this.takeAway[i].y += 2;

      } else if (this.takeAway[i].y <= 290) {
        if (i > 0) {
          if (this.takeAway[i - 1].y <= this.takeAway[i].y + productWidth) {

            this.takeAway[i].y += 0.3;
          } else {
            this.takeAway[i].y += 1;
          }
        } else {
          this.takeAway[i].y += 1;
        }
      } else if (this.takeAway[i].x < 1) {
        this.takeAway.splice(i, 1);
      } else {
        this.takeAway[i].y += 0;
        this.takeAway[i].x -= takeAwayConvSpeed;
      }

    }
  }


  addProduct(xx, yy) {
    this.storage[this.storage.length] = createVector(xx, yy);
    return this.storage.length
  }
  removeProduct() {

    this.vacum = this.storage.slice();
    this.storage = [];

  }
  removeProduct2() {
    this.takeAway = this.vacum.slice();
    this.vacum = [];
  }
  show() {
    for (let i = 0; i < this.storage.length; i++) {
      fill(255);
      rect(this.storage[i].x, this.storage[i].y, productLength, productWidth)

    }
    for (let i = 0; i < this.vacum.length; i++) {
      fill(255);
      rect(this.vacum[i].x, this.vacum[i].y, productLength, productWidth)

    }
    for (let i = 0; i < this.takeAway.length; i++) {
      fill(255);
      rect(this.takeAway[i].x, this.takeAway[i].y, productLength, productWidth)
    }
  }

}