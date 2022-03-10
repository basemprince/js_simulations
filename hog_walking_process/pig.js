newLocationX = 0
newLocationY = 0
xLow = 660
xHigh = 810
yLow = 95
yHigh = 740
movement = 1
movement1 = 1.5

yLow1 = 320
check = true;
check2 = true;
lowestPig = 0
groups = 10
class pig {
  constructor() {
    this.body = []
    this.position = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      lowestPig = 0;
      this.position[i] = this.body[i].x * this.body[i].y
      if (sequenceOfEvents == 0) {
        newLocationX = random(this.body[i].x - movement, this.body[i].x + movement)
        newLocationY = random(this.body[i].y - movement, this.body[i].y + movement)
        if (newLocationX > xLow && newLocationX < xHigh) {
          this.body[i].x = newLocationX
        }
        if (newLocationY > yLow && newLocationY < yHigh) {
          this.body[i].y = newLocationY
        }
      }

      if (sequenceOfEvents == 1 || sequenceOfEvents == 2) {
        if (this.body[i].y < 320) {
          newLocationY = random(this.body[i].y + movement1, this.body[i].y + movement1)
          this.body[i].y = newLocationY
        } else {
          newLocationY = random(this.body[i].y - movement1, this.body[i].y + movement1)
        }

        newLocationX = random(this.body[i].x - movement1, this.body[i].x + movement1)

        if (newLocationX > xLow && newLocationX < xHigh) {
          this.body[i].x = newLocationX
        }
        if (newLocationY > yLow1 && newLocationY < yHigh) {
          this.body[i].y = newLocationY
        }

      }

      if (sequenceOfEvents == 3 || sequenceOfEvents == 4) {

        for (let j = 0; j < this.body.length; j++) {
          if (this.position[j] > this.position[lowestPig]) {
            lowestPig = j
          }

        }

        if (this.body[i].y < 320) {
          newLocationY = random(this.body[i].y + movement1, this.body[i].y + movement1)
          this.body[i].y = newLocationY
        } else {
          newLocationY = random(this.body[i].y - movement1, this.body[i].y + movement1)
        }

        newLocationX = random(this.body[i].x - movement1, this.body[i].x + movement1)

        if (newLocationX > xLow && newLocationX < xHigh) {
          this.body[i].x = newLocationX
        }
        if (newLocationY > yLow1 && newLocationY < yHigh) {
          this.body[i].y = newLocationY
        }
      }
      if (sequenceOfEvents == 5 || sequenceOfEvents == 6) {
        if (this.body[i].y < 540) {
          newLocationY = random(this.body[i].y + movement1, this.body[i].y + movement1)
          this.body[i].y = newLocationY
        } else {
          newLocationY = random(this.body[i].y - movement1, this.body[i].y + movement1)
        }

        newLocationX = random(this.body[i].x - movement1, this.body[i].x + movement1)

        if (newLocationX > xLow && newLocationX < xHigh) {
          this.body[i].x = newLocationX
        }
        if (newLocationY > yLow1 && newLocationY < yHigh) {
          this.body[i].y = newLocationY
        }

      }

    }

    if (sequenceOfEvents == 3) {

      if (groups == 0 && marchs.body.length == 0 && loadouts.body.length != 0 && loadouts.body.length <= 49) {
        groups = 10

      }
      if (loadouts.body.length == 49 && check) {
        sequenceOfEvents++
        check = false
      }
      if (groups > 0) {

        marchs.add(this.body[lowestPig].x, this.body[lowestPig].y)
        this.body.splice(lowestPig, 1);
        this.position.splice(lowestPig, 1);
        groups--;
      }

    }

    if (sequenceOfEvents == 5) {
      if (check2 == true) {
        check2 = false
        group1 = 10
        groups = 10
        check = true
      }
      if (groups == 0 && marchs.body.length == 0 && loadouts.body.length != 0 && loadouts.body.length <= 49) {
        groups = 10

      }
    if (loadouts.body.length == 49 && check) {
        sequenceOfEvents++
        check = false
      check2=true
      }
      if (groups > 0) {

        marchs.add(this.body[lowestPig].x, this.body[lowestPig].y)
        this.body.splice(lowestPig, 1);
        this.position.splice(lowestPig, 1);
        groups--;
      }

    }


  }
  add() {
    for (let i = 0; i <= 250; i++) {
      this.body[this.body.length] = createVector(random(xLow, xHigh), random(yLow, yHigh));
      this.position[this.position.length] = this.body[this.body.length - 1].x * this.body[this.body.length - 1].y

    }

  }
  show() {

    for (let i = 0; i < this.body.length; i++) {
      push();
      stroke(0);
      fill(255, 192, 203)
      rectMode(CENTER)
      rect(this.body[i].x, this.body[i].y, 15, 10)
      pop()
    }
  }


}