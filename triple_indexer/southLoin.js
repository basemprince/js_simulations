k_south = 0
transition_south = true
class southLoin {
  constructor() {
    this.body = []
    this.angle = []
    this.BendCoordinates = []
    this.loin_pile = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      this.loin_pile[0] = false;
      try {
        if (this.body[i].x - loinLength <= this.body[i - 1].x) {
          this.loin_pile[i] = true;
        } else {
          this.loin_pile[i] = false;
        }
      } catch (error) {}
      if (this.body[i].x >= 1070 && !this.loin_pile[i]) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv2Speed;
        this.body[i].y += 0;
      }
      if (this.body[i].x >= 570 && this.body[i].x <= 1070) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv4Speed;
        this.body[i].y += 0;

      }

      //first bend
      if (this.body[i].y >= 120 && this.body[i].y <= 126 && this.body[i].x >= 510 && this.body[i].x < 570) {

        this.BendCoordinates[i].x = 570;
        this.BendCoordinates[i].y = 160;
        if (this.angle[i].x > -66) {
          this.angle[i].x -= conv4Speed * 180 / (2 * PI * (90 - 65));
        } else {

          this.body[i].x = this.body[i].x - 27;
          this.body[i].y = this.body[i].y + 0.01;
          //print(this.body[i].x)
        }

      }

      //second bend
      if (this.body[i].y > 126 && this.body[i].x > 510) {

        this.BendCoordinates[i].x = 503;
        this.BendCoordinates[i].y = 130;

        if (this.angle[i].x < 0) {

          this.angle[i].x += conv4Speed * 180 / (2 * PI * (90 - 65));
        } else {
          this.body[i].x = 504;
          this.body[i].y = 170;
        }
      }

      if (this.body[i].y >= 165 && this.body[i].x >= 380 && !this.loin_pile[i]) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv6Speed;
      }

      //is indexer conveyor available
      k_south = last_object(Indexer.type, Indexer.type.length, "South")
      try {
        if (Indexer.body[k_south].x + loinLength >= this.body[i].x) {
          transition_south = false
        
      } else {
        transition_south = true
      }
    }
    catch(error){transition_south=true}
      //indexer conveyor
      if (this.body[i].x < 405-(loinLength/2) && this.body[i].x >= 320 && !this.loin_pile[i] && transition_south) {

        Indexer.addProduct(this.body[i].x, this.body[i].y, loinLength, loinWidth, "South")
        this.body.splice(i, 1);
        this.angle.splice(i, 1);
        this.BendCoordinates.splice(i, 1);

      }

    }


  }
  addProduct() {
    this.body[this.body.length] = createVector(width, 126);
    this.angle[this.angle.length] = createVector(0);
    this.BendCoordinates[this.BendCoordinates.length] = createVector(0, 0);
    this.loin_pile[this.loin_pile.length] = false;
  }

  show() {


    for (let i = 0; i < this.body.length; i++) {
      push();
      rectMode(CENTER);
      if (this.BendCoordinates[i].y > 0 && this.BendCoordinates[i].x > 0) {
        fill(255);

        if (this.body[i].y >= 120 && this.body[i].y <= 126 && this.body[i].x >= 510 && this.body[i].x < 570) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          rect(0, this.body[i].y - this.BendCoordinates[i].y, loinLength, loinWidth)
          if (showDetails) {
            try {
              text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, this.body[i].y - this.BendCoordinates[i].y)
            } catch (error) {}
          }
        }
        if (this.body[i].y > 126 && this.body[i].x > 510) {

          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          rect(0, this.body[i].x - this.BendCoordinates[i].x, loinLength, loinWidth)
          if (showDetails) {
            try {
              text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, this.body[i].x - this.BendCoordinates[i].x)
            } catch (error) {}
          }
        }
      } else {
        fill(255);
        translate(this.body[i].x, this.body[i].y);
        rotate(this.angle[i].x);

        rect(0, 0, loinLength, loinWidth)
        if (showDetails) {
          try {
            text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, 0)
          } catch (error) {}
        }
      }
      pop();
    }
  }
}