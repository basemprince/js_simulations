separator2 = 120;
addition = 500
class rails2 {
  constructor() {
    this.body = []
    this.color = []
    this.tattoo = []
    this.dimension = []
  }

  addProduct(tattoo, colu) {

      counter2++
      if (hogs2 % hogs_rail == 0 && hogs2 > 0) {

        if (x_1 <= 48) {

          if (x_1 == 9 || x_1 == 28 || x_1 == 29 || x_1 == 48) {
            separator2 -= 30;
          }
        x_1_pusher++;
        x_1 = fill_sequence[x_1_pusher] - 32;
        }
        y_1 = 0
      }


      this.body[this.body.length] = createVector((x_1 * 20) + 50 + separator2, (y_1 * 285/hogs_rail) + 435+addition);
      this.tattoo[this.tattoo.length] = tattoo
      this.color[this.color.length] = createVector(tattoos_colored[colu].x, tattoos_colored[colu].y, tattoos_colored[colu].z);
      this.dimension[this.dimension.length] = 3
      hogs2++;
      y_1--;

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