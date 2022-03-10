space = true;
pacer = 0;
pacer2 = 0;
stopAll = false;
blockTimeCounter = 0;
timeSave = 0
timeSave2 = 0
timeSave3 = 0
blockCounterAdd = 0;
blockCounterRemove = 0;
release = 0;
alternate = 1;
alternate2 = 1;
binsProcessed = 0;
class product {
  constructor() {
    this.body = []
    this.boxing = []

  }

  update() {

    try {
      if (this.body[this.body.length - 1].x < 55 + 360 - blockLength && blockCount < 30) {

        this.addProduct();

        blockCount++;
       // print(blockCount)
      }
    } catch (error) {
      if (this.body.length == 0 && blockCount == 0) {

        this.addProduct();
        //timeCountSave = timeCount;
        blockCount++;
        space = true;
      }
    }


    for (let i = 0; i < this.body.length; i++) {
      if (i > 0) {

        if (this.body[i].x < (this.body[i - 1].x + blockLength - this.boxing[i - 1].x)) {
          space = false;
        } else {
          space = true;
        }
      }
      if (stopMode && this.body[0].x <= 50) {
        stopAll = true;
      } else {
        stopAll = false
      }
      if (this.body[i].x >= 50 && space && !stopAll) {

        this.body[i].x -= trimConSpeed;
      }
      for (let j = 0; j <= 4; j++) {
        try {
          if (this.body[i].x >= (j * 70) + 80 && this.body[i].x <= (j * 70) + 80 + 24) {


            operator.addProduct(j, "s", i)
            //fill(255, 40, 10);
            // rect((j * 70) + 80, (height * 2 / 3) - 30 - 15, 24, 5);
            //print(this.boxing[0].x);
            if (this.boxing[i].x >= blockLength) {
              prod.removeProduct(i);
              i--;
            }
          }
          if (this.body[i].x >= (j * 70) + 49 && this.body[i].x <= (j * 70) + 50 + 24) {


            operator.addProduct(j, "n", i)
            //fill(255, 40, 10);
            //rect((j * 70) + 49, (height * 2 / 3) + (30 / 2) + 5 + 20, 24, 5);
            if (this.boxing[i].x >= blockLength) {
              prod.removeProduct(i);
              i--;
            }
          }
        } catch (error) {}
      }
    }
  }
  addProduct() {
    this.body[this.body.length] = createVector(55 + 360, (height * 2 / 3) - (30 / 2));
    this.boxing[this.boxing.length] = createVector(0);

    if (blockCounterAdd % 30 == 0) {
      if (alternate % 2 == 0) {
        timeSave2 = timeCount;
      } else if (alternate % 3 == 0) {
        timeSave3 = timeCount;
      } else {
        timeSave = timeCount;
      }
      alternate++;
    }
    //print(timeSave + " " + timeSave2)

    blockCounterAdd++;
    //print(timeSave)
    //this.timeCountSave[this.timeCountSave.length] = timeCount;
  }
  removeProduct(i) {
    this.body.splice(i, 1);
    this.boxing.splice(i, 1);

    blockCounterRemove++;

    // if (blockTimeCounter > 30) {
    //   blockTimeCounter = 1;
    //   timeDisplayed = 0;
    // } else {
    //   //print(blockTimeCounter)
    //   timeDisplayed += timeCount - this.timeCountSave[i];
    //   this.timeCountSave.splice(i, 1);
    //   blockTimeCounter++;
    // }


    if (blockCounterRemove % 30 == 0) {
      //print(blockCounterRemove)
      if (alternate2 % 2 == 0) {
        timeDisplayed = timeCount - timeSave2
        operator.reset();
      } else if (alternate2 % 3 == 0) {
        timeDisplayed = timeCount - timeSave3
        operator.reset();
      } else {
        timeDisplayed = timeCount - timeSave
        operator.reset();
      }
      alternate2++;
      binsProcessed++;
    }
  }
  show() {
    for (let i = 0; i < this.body.length; i++) {

      fill(255);
      rect(this.body[i].x, this.body[i].y, blockLength - this.boxing[i].x, 30)
      push()
      fill(0);
      textSize(8);
      text(i+1, this.body[i].x, this.body[i].y+10);
      pop();
    }
  }
}