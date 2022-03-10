MoveAvail = false;
class bins {
  constructor() {
    this.body = []
    this.previous = []
  }

  update() {

    if (blockCount == 30 && this.body.length > 0) {
    //  if (prod.body.length==0&& delay>500) {
      if (delay>1500) {
        currentProduct = this.body[0][2]
        bin.removeProduct();
        //binAcc--;
        delay = 0;
        blockCount = 0;

      } else {
        delay++;
      }

    }
    if (MoveAvail) {
      if (this.body.length > 0) {
        if (this.body[0][1] > 100 && this.body[0][1] < 160 && this.body[0][0] <= 400) {
          this.body[0][1] -= 1;
        }
        if (this.body[0][1] < 99 && this.body[0][0] <= 400) {
          this.body[0][1] += 1;
        }
        if (this.body[0][1] <= 100 && this.body[0][1] >= 98 && this.body[0][0] <= 450) {
          this.body[0][0] += 1;
        }
        //print(this.body[0][1]  + " " + this.body[0][0]);
        if (this.body[0][1] >= 95 && this.body[0][1] < 190 && this.body[0][0] >= 450) {
          this.body[0][1] += 1;
        }
        if (this.body[0][1] >= 190 && this.body[0][0] >= 450) {
          MoveAvail = false;
          binLocations[this.body[0][4]][2] = 0;
          binLocations[0][2] = 1;
        }
      }
    }
  }
  show() {

    for (let i = 0; i < this.body.length; i++) {
      fill(255);
      rect(this.body[i][0], this.body[i][1], 48, 44);
      fill(0);
      push();
      textSize(11);
      //textAlign(CENTER);
      text(this.body[i][2], this.body[i][0] + (48 / 6), this.body[i][1] + (44 / 3));
      pop();
    }

  }

  addProduct(productName, timeArrive,cycleTime1) {
    if (binLocations[0][2] == 0 && binAcc == 0) {
      binLocations[0][2] = 1;
      this.body[this.body.length] = [binLocations[0][0], binLocations[0][1], productName, timeArrive, 0,cycleTime1]
    } else {
      for (let i = 1; i <= binLocations.length - 1; i++) {
        if (binLocations[i][2] == 0) {
          binLocations[i][2] = 1;
          this.body[this.body.length] = [binLocations[i][0], binLocations[i][1], productName, timeArrive, i,cycleTime1]
          //console.log(this.body);
          i = binLocations.length;
        }

      }
    }
    this.body.sort(function(a, b) {
      return a[3] - b[3];
    });



  }
  removeProduct() {
    if (this.body.length > 0) {
      binLocations[this.body[0][4]][2] = 0;
      this.body.splice(0, 1);
      MoveAvail = true;
    }
  }
}