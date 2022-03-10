var targetReleseTime2a = 0;
var timeStopper2a = true;
var downTime3temp = 0;
var downTimeStopper3 = true;


class bagging3 {
  constructor() {
    this.storage = []
  }
  update() {

    if (this.storage.length == 1) {
      spaceChecker2a = false;
      if (this.storage[0].y <= 100) {
        this.storage[0].y += 1;
      }

      if (this.storage[0].x >= 175) {
        this.storage[0].x -= 1;
      }
    }
    if (this.storage.length == 0) {
      targetReleseTime2a = timeCount + baggingCycleTime
    }
    if (this.storage.length == 0 && downTimeStopper3) {
      downTime3temp = timeCount;
      downTimeStopper3 = false;
    }
    text(round(targetReleseTime2a - timeCount), 195, 100);
    if (this.storage.length == 1 && this.storage[0].y >= 100 && this.storage[0].x <= 175 && timeStopper2a) {
      targetReleseTime2a = timeCount + baggingCycleTime
      timeStopper2a = false;
      if (downTime3temp != -999) {
        downTime3temp = timeCount - downTime3temp;
        downTime3 += downTime3temp;
      }
      downTime3temp = -999;
      downTimeStopper3 = true;
    }

    if (targetReleseTime2a <= timeCount && targetReleseTime2a > 0 && this.storage.length == 1 && spaceChecker2) {
      bag3.removeProduct();
      targetReleseTime2a = timeCount + baggingCycleTime
      spaceChecker2a = true;
      timeStopper2a = true;
    }
  }

  addProduct(xx, yy) {
    this.storage[this.storage.length] = createVector(xx, yy);
    return this.storage.length
  }
  removeProduct() {
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