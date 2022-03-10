class alignment {
  constructor() {
    this.body = []
    this.angle = []
    this.dimension = []


  }

  update() {
    for (let i = 0; i < this.body.length; i++) {

      if (this.body[i].z) {
        if (this.body[i].y >= 80 && this.body[i].y < 130 && this.body[i].x > 150 && this.body[i].x < 210) {


          if (this.angle[i].x >= -28) {
            this.angle[i].x -= 0.4;
          }
          try {
            if (this.body[i].x - this.body[i - 1].x - this.dimension[i - 1].x > nfc(spaceBtProducts,1) && this.body[i].x > 100) {
              this.body[i].x -= conv5Speed / 1.1;
              this.body[i].y += conv5Speed / 2.40039;
              totalWork += (conv5Speed / 1.1) + (conv5Speed / 2.40039);

            }
          } catch (error) {}
          this.body[i].x -= conv5Speed / 1.1;
          this.body[i].y += conv5Speed / 2.40039;
        }

        if (this.body[i].y >= 130 && this.body[i].x <= 160) {

          if (this.angle[i].x < 0) {
            this.angle[i].x += 0.5;
          }
          if (this.body[i].y < 135) {
            this.body[i].y += conv12Speed / 2;
            this.body[i].x -= conv12Speed / 1.154700538;
          } else {
            if (this.angle[i].x < 0) {
              this.angle[i].x += 0.5;
            }
            if (this.body[i].y < 120) {

              this.body[i].y += conv12Speed / 2;
              this.body[i].x -= conv12Speed / 1.154700538;

            } else {
              this.body[i].x -= conv12Speed;
            }
            if (this.body[i].y <= 140 && this.body[i].y >= 120) {
              this.body[i].y += 0.3;
            }

            try {
              if (this.body[i].x - this.body[i - 1].x - this.dimension[i - 1].x > nfc(spaceBtProducts,1) && this.body[i].x > 120) {
                this.body[i].x -= 0.2;
                totalWork += 0.2;
              }
              // print(this.body[i].x - this.body[i - 1].x -  this.dimension[i - 1].x);
              if (this.body[i].x - this.body[i - 1].x - this.dimension[i].x < nfc(spaceBtProducts,1) && this.body[i].x > 120) {
                this.body[i].x += conv12Speed;
                totalWork += conv12Speed;
              }
            } catch (error) {}


            if (this.body[i].x < 1) {
              this.body.splice(i, 1);
              this.angle.splice(i, 1);
              this.dimension.splice(i, 1);
            }

          }
          //this.body[i].x -= conv12Speed
        }
      } else {
        if (this.angle[i].x < 0) {
          this.angle[i].x += 0.5;
        }
        if (this.body[i].y < 120) {
          this.body[i].y += conv12Speed / 2;
          this.body[i].x -= conv12Speed / 1.154700538;
        } else {
          this.body[i].x -= conv12Speed;
        }
        if (this.body[i].y <= 140 && this.body[i].y >= 120) {
          this.body[i].y += 0.3;
        }

        try {
          if (this.body[i].x - this.body[i - 1].x - this.dimension[i - 1].x > nfc(spaceBtProducts,1) && this.body[i].x > 100) {
            this.body[i].x -= 0.1;
            totalWork += 0.1;
          }

          // print(this.body[i].x - this.body[i - 1].x -  this.dimension[i - 1].x);
          if (this.body[i].x - this.body[i - 1].x - this.dimension[i].x < nfc(spaceBtProducts,1) && this.body[i].x > 100) {
            this.body[i].x += conv12Speed / 2;
            totalWork += conv12Speed / 2;
          }
          // if(this.body[i-1].z ){
          //   this.body[i].x -= 0.1;
          // }
        } catch (error) {}


        if (this.body[i].x < 1) {
          this.body.splice(i, 1);
          this.angle.splice(i, 1);
          this.dimension.splice(i, 1);
        }

      }
    }
  }

  addProduct(x, y, angle, length, width, north) {

    this.body[this.body.length] = createVector(x, y, north);
    this.angle[this.angle.length] = createVector(angle);
    this.dimension[this.dimension.length] = createVector(length, width);

  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      push();
      rectMode(CENTER);
      fill(255);
      translate(this.body[i].x, this.body[i].y);
      rotate(this.angle[i].x);
      rect(0, 0, this.dimension[i].x, this.dimension[i].y);
      if (showDetails) {
        try {
          text(i, 0, 0)
        } catch (error) {}
      }
      pop();
    }
  }
}