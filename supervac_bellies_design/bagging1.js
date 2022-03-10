var targetReleseTime1a = 0;
var timeStopper1a = true;
var downTime1temp = 0;
var downTimeStopper1 = true;

class bagging1 {
  constructor() {
    this.storage = []
  }
  update() {


    if (this.storage.length == 1) {
      spaceChecker1a = false;
      if (this.storage[0].y <= 100) {
        this.storage[0].y += 1;
      }

      if (this.storage[0].x >= 265 + x) {
        this.storage[0].x -= 1;
      }
    }
    if (this.storage.length == 0) {
      targetReleseTime1a = timeCount + baggingCycleTime
    }
    if (this.storage.length == 0 && downTimeStopper1) {
      downTime1temp = timeCount;
      downTimeStopper1 = false;
    }
    text(round(targetReleseTime1a - timeCount), x + 295, 100);
    if (this.storage.length == 1 && this.storage[0].y >= 100 && this.storage[0].x <= 265 + x && timeStopper1a) {
      targetReleseTime1a = timeCount + baggingCycleTime
      timeStopper1a = false;
      if (downTime1temp != -999) {
        downTime1temp = timeCount - downTime1temp;
        downTime1 += downTime1temp;
      }
      downTime1temp = -999;
      downTimeStopper1 = true;
    }
    if (targetReleseTime1a <= timeCount && targetReleseTime1a > 0 && this.storage.length == 1 && spaceChecker1) {
      bag1.removeProduct();
      targetReleseTime1a = timeCount + baggingCycleTime
      spaceChecker1a = true;
      timeStopper1a = true;
    }
  }

  addProduct(xx, yy) {
    this.storage[this.storage.length] = createVector(xx, yy);
    return this.storage.length
  }
  removeProduct() {
    supervac1enter.addProduct(this.storage[0].x, this.storage[0].y);
    this.storage.splice(0, 1);
  }
  show() {
    for (let i = 0; i < this.storage.length; i++) {
      fill(255);
      rect(this.storage[i].x, this.storage[i].y, productLength, productWidth)
    }
  }

}