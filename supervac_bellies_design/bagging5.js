var targetReleseTime5 = 0;
var timeStopper5 = true;
var downTime5temp = 0;
var downTimeStopper5 = true;

class bagging5 {
  constructor() {
    this.storage = []
  }
  update() {

    if (this.storage.length == 1) {
      spaceChecker5 = false;
      if (this.storage[0].y <= 100) {
        this.storage[0].y += 1;
      }

      if (this.storage[0].x >= (180 + x + 230) / 2) {
        this.storage[0].x -= 1;
      }
    }
    if (this.storage.length == 0) {
      targetReleseTime5 = timeCount + baggingCycleTime
    }
    if (this.storage.length == 0 && downTimeStopper5) {
      downTime5temp = timeCount;
      downTimeStopper5 = false;
    }
    fill(255);
    text(round(targetReleseTime5 - timeCount), ((180 + x + 230) / 2) + 15, 100);
    if (this.storage.length == 1 && this.storage[0].y >= 100 && this.storage[0].x <= (180 + x + 230) / 2 && timeStopper5) {
      targetReleseTime5 = timeCount + baggingCycleTime
      timeStopper5 = false;
      if (downTime5temp != -999) {
        downTime5temp = timeCount - downTime5temp;
        downTime5 += downTime5temp;
      }
      downTime5temp = -999;
      downTimeStopper5 = true;
    }

    if (supervac1enter.storage.length < supervac2enter.storage.length && targetReleseTime5 <= timeCount && targetReleseTime5 > 0 && this.storage.length == 1 && spaceChecker1) {
      bag5.removeProduct();
      targetReleseTime5 = timeCount + baggingCycleTime
      spaceChecker5 = true;
      timeStopper5 = true;
    }
    if (supervac2enter.storage.length <= supervac1enter.storage.length && targetReleseTime5 <= timeCount && targetReleseTime5 > 0 && this.storage.length == 1 && spaceChecker2) {
      bag5.removeProduct2();
      targetReleseTime5 = timeCount + baggingCycleTime
      spaceChecker5 = true;
      timeStopper5 = true;
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
  removeProduct2() {
    supervac2enter.addProduct(this.storage[0].x, this.storage[0].y);
    this.storage.splice(0, 1);
  }
  show() {
    for (let i = 0; i < this.storage.length; i++) {
      fill(255);
      rect(this.storage[i].x, this.storage[i].y, productLength, productWidth)
    }
  }

}