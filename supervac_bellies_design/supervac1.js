gateTime1 = 0;
var cycleDisplay1 = 0;
var timeStopper1M = true;
var timeStopper1A = true;

class supervac1 {
  constructor() {
    this.storage = []
    this.vacum = []
    this.takeAway = []
    this.speed = [1, 1, 1, 1]
  }
  update() {
    if (this.storage.length >= 1) {
      if (this.storage[0].y <= 130 + 3 * productWidth) {
        this.storage[0].y += 1;
      }
      if (ceil(this.storage[0].x) != 245 + x && this.storage[0].x > 245 + x) {
        this.storage[0].x -= 1;
      }
      if (ceil(this.storage[0].x) != 245 + x && this.storage[0].x < 245 + x) {
        this.storage[0].x += 1;
      }
    }
    if (this.storage.length >= 2) {
      if (this.storage[1].y <= 130 + 2 * productWidth) {
        this.storage[1].y += 1;
      }
      if (ceil(this.storage[1].x) != 255 + x && this.storage[1].x > 255 + x) {
        this.storage[1].x -= 1;
      }
      if (ceil(this.storage[1].x) != 255 + x && this.storage[1].x < 255 + x) {
        this.storage[1].x += 1;
      }
    }
    if (this.storage.length >= 3) {
      if (this.storage[2].y <= 130 + productWidth) {
        this.storage[2].y += 1;
      }
      if (ceil(this.storage[2].x) != 245 + x && this.storage[2].x > 245 + x) {
        this.storage[2].x -= 1;
      }
      if (ceil(this.storage[2].x) != 245 + x && this.storage[2].x < 245 + x) {
        this.storage[2].x += 1;
      }
    }
    if (this.storage.length >= 4) {
      if (this.storage[3].y <= 130) {
        this.storage[3].y += 1;
      }
      if (ceil(this.storage[3].x) != 255 + x && this.storage[3].x > 255 + x) {
        this.storage[3].x -= 1;
      }
      if (ceil(this.storage[3].x) != 255 + x && this.storage[3].x < 255 + x) {
        this.storage[3].x += 1;
      }
    }
    cycleDisplay1 = targetReleseTime1 - timeCount;
    if (cycleDisplay1 < 0) {
      cycleDisplay1 = vacumCycleTime1;
    }
    text(round(cycleDisplay1), x + 295, 210);
    if (autoMode1) {

      if (this.storage.length > 0) {
        if (this.storage.length >= 4) {
          spaceChecker1 = false;
        }
        if (this.storage[0].x <= 255 + x && this.storage[0].y >= 130 + 3 * productWidth && this.vacum.length == 0) {
          supervac1cycle += supervac1enter.storage.length;
          supervac1enter.removeProduct();
          spaceChecker1 = true;
        }
      }

      if (this.vacum.length > 0 && this.vacum[0].y >= 130 + 3 * productWidth && this.vacum[0].x <= 245 + x && timeStopper1A) {
        targetReleseTime1 = timeCount + vacumCycleTime1;
        timeStopper1A = false;
      }
      if (targetReleseTime1 <= timeCount && targetReleseTime1 > 0) {
        supervac1enter.removeProduct2();
        targetReleseTime1 = timeCount + vacumCycleTime1
        timeStopper1A = true;
      }
    }
    if (!autoMode1) {

      if (this.storage.length >= 4) {
        spaceChecker1 = false;
        if (this.storage[3].x <= 255 + x && this.storage[3].y >= 130 && this.vacum.length == 0) {
          if (gateTime1 > 20) {
            supervac1enter.removeProduct();
            spaceChecker1 = true;
            supervac1cycle += 4;
            gateTime1 = 0;
          }
          gateTime1++;
        }
        if (this.vacum.length >= 4 && this.vacum[3].y >= 130 && this.vacum[3].x <= 255 + x && timeStopper1M) {
          targetReleseTime1 = timeCount + vacumCycleTime1
          timeStopper1M = false;
        }
      }


      if (targetReleseTime1 <= timeCount && targetReleseTime1 > 0) {
        supervac1enter.removeProduct2();
        targetReleseTime1 = timeCount + vacumCycleTime1
        timeStopper1M = true;
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
    this.speed = [1, 1, 1, 1];
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