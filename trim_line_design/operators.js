var constrictor = 100
class operators {
  constructor() {
    this.body = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.bodyRenew = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  addProduct(operatorN, side, i) {
    if (side == "s") {
      if (operatorN == 0 ) {
        this.body[0] += removalSpeed;
        this.bodyRenew[0] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((0 * 70) + 80, (height * 2 / 3) - 30 - 15, 24, 5);
      }
      if (operatorN == 1 && this.bodyRenew[2] <= constrictor) {
        this.body[2] += removalSpeed;
        this.bodyRenew[2] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((1 * 70) + 80, (height * 2 / 3) - 30 - 15, 24, 5);
      }
      if (operatorN == 2 && this.bodyRenew[4] <= constrictor) {
        this.body[4] += removalSpeed;
        this.bodyRenew[4] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((2 * 70) + 80, (height * 2 / 3) - 30 - 15, 24, 5);        
      }
      if (operatorN == 3 && this.bodyRenew[6] <= constrictor) {
        this.body[6] += removalSpeed;
        this.bodyRenew[6] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((3 * 70) + 80, (height * 2 / 3) - 30 - 15, 24, 5);        
      }
      if (operatorN == 4 && this.bodyRenew[8] <= constrictor) {
        this.body[8] += removalSpeed;
        this.bodyRenew[8] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((4 * 70) + 80, (height * 2 / 3) - 30 - 15, 24, 5);
      }
    }
    if (side == "n") {
      if (operatorN == 0 ) {
        this.body[1] += removalSpeed;
        this.bodyRenew[1] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((0 * 70) + 49, (height * 2 / 3) + (30 / 2) + 5 + 20, 24, 5);
      }
      if (operatorN == 1 && this.bodyRenew[3] <= constrictor) {
        this.body[3] += removalSpeed;
        this.bodyRenew[3] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((1 * 70) + 49, (height * 2 / 3) + (30 / 2) + 5 + 20, 24, 5);
      }
      if (operatorN == 2 && this.bodyRenew[5] <= constrictor) {
        this.body[5] += removalSpeed;
        this.bodyRenew[5] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((2 * 70) + 49, (height * 2 / 3) + (30 / 2) + 5 + 20, 24, 5);
      }
      if (operatorN == 3 && this.bodyRenew[7] <= constrictor) {
        this.body[7] += removalSpeed;
        this.bodyRenew[7] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((3 * 70) + 49, (height * 2 / 3) + (30 / 2) + 5 + 20, 24, 5);
      }
      if (operatorN == 4 && this.bodyRenew[9] <= constrictor) {
        this.body[9] += removalSpeed;
        this.bodyRenew[9] += removalSpeed;
        prod.boxing[i].x += removalSpeed;
        fill(255, 40, 10);
        rect((4 * 70) + 49, (height * 2 / 3) + (30 / 2) + 5 + 20, 24, 5);
      }
    }

  }
  reset() {
    this.bodyRenew = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}