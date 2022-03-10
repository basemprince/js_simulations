let xx_fix = 45;
k_north = 0
transition_north = true
class northLoin {
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
      if (this.body[i].x >= 1070) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv1Speed;
        this.body[i].y += 0;
      }

      if (this.body[i].x >= 555 && this.body[i].x <= 1070 ) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv3Speed;
        this.body[i].y += 0;

      }
      //first bend
      if (this.body[i].x < 555 && this.body[i].x >= 510 && this.body[i].y < 60) {

        this.BendCoordinates[i].x = 555;
        this.BendCoordinates[i].y = 105;
        if (this.angle[i].x > -82) {
          this.angle[i].x -= conv5Speed * 180 / (2 * PI * (90 - 65));
        } else {

          this.body[i].x = this.body[i].x - 48;
          this.body[i].y = this.body[i].y + 0.01;
        }
      }
      //second bend
      if (this.body[i].y > 56 && this.body[i].y < 150 && this.body[i].x > 500) {
        this.BendCoordinates[i].x = 448;
        this.BendCoordinates[i].y = 91;

        if (this.angle[i].x < 0) {
          this.angle[i].x += conv5Speed * 180 / (2 * PI * (90 - 65));
        } else {
          this.body[i].x = 448.5;
          this.body[i].y = 148.9;
        }
      }
      if (this.body[i].x <= 450 && this.body[i].y <= 150 && this.body[i].x >= 405-(loinLength/2) && !this.loin_pile[i]) {

        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv5Speed;
      }

      //is indexer conveyor available
      k_north = last_object(Indexer.type, Indexer.type.length, "North")
      try {
        if (Indexer.body[k_north].x + loinLength >= this.body[i].x) {
          transition_north = false
        
      } else {
        transition_north = true
      }
    }
    catch(error){transition_north=true}
    
      //indexer conveyor
      if (this.body[i].x < 405-(loinLength/2) && this.body[i].y <= 150 && this.body[i].x >= 320 && !this.loin_pile[i] && transition_north) {
        Indexer.addProduct(this.body[i].x, this.body[i].y, loinLength, loinWidth, "North")
        this.body.splice(i, 1);
        this.angle.splice(i, 1);
        this.BendCoordinates.splice(i, 1);


      }


    }
  }
  addProduct() {
    this.body[this.body.length] = createVector(width, 56);
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
        //first bend
        if (this.body[i].x <= 555 && this.body[i].x >= 510 && this.body[i].y <= 56) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          rect(0, this.body[i].y - this.BendCoordinates[i].y, loinLength, loinWidth)
          if (showDetails) {
            try {
              text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, this.body[i].y - this.BendCoordinates[i].y)
            } catch (error) {}
          }
        }
        //second bend
        if (this.body[i].y > 56 && this.body[i].y < 150 && this.body[i].x > 420) {
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

            text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, -1)
          } catch (error) {}
        }
      }
      pop();
    }
  }
}