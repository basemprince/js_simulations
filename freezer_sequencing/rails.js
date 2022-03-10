separator1 = 120;
class rails {
  constructor() {
    this.body = []
    this.color = []
    this.tattoo = []
    this.dimension = []
  }

  addProduct(tattoo, colu) {

    counter++

    if (hogs % hogs_rail == 0 && hogs > 0) {

      if (x_ <= 48) {

        if (x_ == 9 || x_ == 28 || x_ == 29 || x_ == 48) {
          separator1 -= 30;
        }

        x_pusher++;
        x_ = fill_sequence[x_pusher] - 32;

      }
      y_ = 0
    }
    //     try{
    //     if (this.tattoo[this.tattoo.length-1] == tattoo){
    //       this.dimension[this.dimension.length-1] +=2;
    //       this.color[this.color.length-1] = (255,255,3);
    //     }
    //     }catch(error){}

    this.body[this.body.length] = createVector((x_ * 20) + 50 + separator1, (y_ * 285 / hogs_rail) + 435);
    this.tattoo[this.tattoo.length] = tattoo
    this.color[this.color.length] = createVector(tattoos_colored[colu].x, tattoos_colored[colu].y, tattoos_colored[colu].z);
    this.dimension[this.dimension.length] = 3
    hogs++;
    y_--;

  }
  show() {


    for (let i = 0; i < this.body.length; i++) {
      push();
      rectMode(CENTER);
      noStroke()
      fill(this.color[i].x, this.color[i].y, this.color[i].z);
      translate(this.body[i].x, this.body[i].y);
      rect(0, 0, 10, this.dimension[i])
      if (showDetails) {
        try {
          text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, -1)
        } catch (error) {}
      }
      pop();
    }
  }
}