var targetReleseTime1b = 0;
var timeStopper1b = true;
var downTime2temp = 0;
var downTimeStopper2 = true;

class bagging2 {
  constructor() {
    this.storage = []
  }
  update() {

    if (this.storage.length == 1) {
      spaceChecker1b = false;
      if (this.storage[0].y <= 100) {
        this.storage[0].y += 1;
      }

      if (this.storage[0].x >= 230 + x) {
        this.storage[0].x -= 1;
      }
    }
    if (this.storage.length == 0) {
      targetReleseTime1b = timeCount + baggingCycleTime
    }
    if (this.storage.length == 0 && downTimeStopper2) {
      downTime2temp = timeCount;
      downTimeStopper2 = false;
    }
    text(round(targetReleseTime1b - timeCount), x + 245, 100);
    if (this.storage.length == 1 && this.storage[0].y >= 100 && this.storage[0].x <= 230 + x && timeStopper1b) {
      targetReleseTime1b = timeCount + baggingCycleTime
      timeStopper1b = false;
      if (downTime2temp != -999) {
        downTime2temp = timeCount - downTime2temp;
        downTime2 += downTime2temp;
      }
      downTime2temp = -999;
      downTimeStopper2 = true;
    }

    if (targetReleseTime1b <= timeCount && targetReleseTime1b > 0 && this.storage.length == 1 && spaceChecker1) {
      bag2.removeProduct();
      targetReleseTime1b = timeCount + baggingCycleTime
      spaceChecker1b = true;
      timeStopper1b = true;
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