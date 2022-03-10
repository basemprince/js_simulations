newLocationX1 = 0
newLocationY1 = 0

march_movement = 1

yLow1 = 320

lowestPig = 0
class march {
  constructor() {
    this.body = []
    this.position = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      newLocationX1 = random(this.body[i].x - march_movement, this.body[i].x + march_movement)
      newLocationY1 = random(this.body[i].y - march_movement, this.body[i].y + march_movement)
      this.body[i].x = newLocationX1
      this.body[i].y = newLocationY1

      if (this.body[i].y < 720) {
        this.body[i].y += 1
      } else if (this.body[i].x > 630 && this.body[i].y < 820) {
        this.body[i].x -= 1
        
      }
else{
      if (this.body[i].y >= 720 && this.body[i].y < 1020) {

        this.body[i].y += 1
      }

      else if (this.body[i].y >= 1000 && this.body[i].x <= 690) {

        this.body[i].x += 1
      }
      else if (this.body[i].y >= 1000 && this.body[i].x >= 690) {

        loadouts.add(this.body[i].x, this.body[i].y)
        this.body.splice(i, 1);
        this.position.splice(i, 1);
      }
    //  this.position[i] = this.body[i].x + this.body[i].y
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