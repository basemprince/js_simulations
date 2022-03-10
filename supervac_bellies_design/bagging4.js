var targetReleseTime2b = 0;
var timeStopper2b = true;
var downTime4temp = 0;
var downTimeStopper4 = true;

class bagging4 {
  constructor() {
    this.storage = []
  }
  update() {

    if (this.storage.length == 1) {
      spaceChecker2b = false;
      if (this.storage[0].y <= 100) {
        this.storage[0].y += 1;
      }

      if (this.storage[0].x >= 130) {
        this.storage[0].x -= 1;
      }
    }
    text(round(targetReleseTime2b - timeCount), 145, 100);
    if (this.storage.length == 1 && this.storage[0].y >= 100 && this.storage[0].x <= 130 && timeStopper2b) {
      targetReleseTime2b = timeCount + baggingCycleTime
      timeStopper2b = false;
      if (downTime4temp != -999) {
        downTime4temp = timeCount - downTime4temp;
        downTime4 += downTime4temp;
      }
      downTime4temp = -999;
      downTimeStopper4 = true;
    }
    if (this.storage.length == 0) {
      targetReleseTime2b = timeCount + baggingCycleTime
    }
    if (this.storage.length == 0 && downTimeStopper4) {
      downTime4temp = timeCount;
      downTimeStopper4 = false;
    }
    if (targetReleseTime2b <= timeCount && targetReleseTime2b > 0 && this.storage.length == 1 && spaceChecker2) {
      bag4.removeProduct();
      targetReleseTime2b = timeCount + baggingCycleTime
      spaceChecker2b = true;
      timeStopper2b = true;
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