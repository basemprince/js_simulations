newLocationX2 = 0
newLocationY2 = 0




class back {
  constructor() {
    this.body = []
    this.position = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      newLocationX2 = random(this.body[i].x - march_movement, this.body[i].x + march_movement)
      newLocationY2 = random(this.body[i].y - march_movement, this.body[i].y + march_movement)
      this.body[i].x = newLocationX2
      this.body[i].y = newLocationY2
      if (this.body[i].x > 630&& this.body[i].y > 800) {
        this.body[i].x -= 1
      } else if (this.body[i].y > 140) {
        this.body[i].y -= 1

      }
      else{
        if( this.body[i].x < 730){
        this.body[i].x+= 1
        }
      }

      if(this.body[i].x >=730 ){
        dones.add(this.body[i].x, this.body[i].y)
        this.body.splice(i, 1);
        this.position.splice(i, 1);
      }
      //  this.position[i] = this.body[i].x + this.body[i].y
      
    
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