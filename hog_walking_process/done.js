xLow_done = 660
xHigh_done = 810
yLow_done = 100
yHigh_done = 390
newLocationX_done =0
newLocationY_done = 0
check1=true
class done {
  constructor() {
    this.body = []
    this.position = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      newLocationX_done = random(this.body[i].x - movement, this.body[i].x + movement)
      newLocationY_done = random(this.body[i].y - movement, this.body[i].y + movement)
      if (newLocationX_done > xLow_done && newLocationX_done < xHigh_done) {
        this.body[i].x = newLocationX_done
      }
      if (newLocationY_done > yLow_done && newLocationY_done < yHigh_done) {
        this.body[i].y = newLocationY_done
      }
      

    }
if(this.body.length == 49&& check1 == true){
  sequenceOfEvents++
  check1=false
}

  }
  add(x, y) {

    this.body[this.body.length] = createVector(x, y);
    this.position[this.position.length] = this.body[this.body.length - 1].x + this.body[this.body.length - 1].y
  


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