xLow_load = 650
xHigh_load = 710
yLow_load = 1010
yHigh_load = 1050
newLocationX_load =0
newLocationY_load = 0
group1 = 10

class loadOut {
  constructor() {
    this.body = []
    this.position = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      if(backs.body.length==0){
        group1=10
      }
      newLocationX_load = random(this.body[i].x - movement, this.body[i].x + movement)
      newLocationY_load = random(this.body[i].y - movement, this.body[i].y + movement)
      if (newLocationX_load > xLow_load && newLocationX_load < xHigh_load) {
        this.body[i].x = newLocationX_load
      }
      if (newLocationY_load > yLow_load && newLocationY_load < yHigh_load) {
        this.body[i].y = newLocationY_load
      }
      
      if((sequenceOfEvents ==4 ||sequenceOfEvents ==6) && group1 >0){
  backs.add(this.body[i].x, this.body[i].y)
        this.body.splice(i, 1);
        this.position.splice(i, 1);
        group1--;
}
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