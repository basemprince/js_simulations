let buttCounter = 0;

k_butt = 0
transition_butt = true

class buttStuff {
  constructor() {
    this.body = []
    this.angle = []
    this.angle1 = []
    this.BendCoordinates = []
    this.butt_pile = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
            this.butt_pile[0] = false;
      try {
        if (this.body[i].x - buttLength <= this.body[i - 1].x ) {
          this.butt_pile[i] = true;

          
        } else {
          this.butt_pile[i] = false;
        }
      } catch (error) {}
      if (this.body[i].x >= width - 35) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv7Speed;
        this.body[i].y += 0;
        //this.angle[i].x = 0;
      }
      if (this.body[i].x <= width - 35 && this.body[i].x > 575) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv8Speed;
        this.body[i].y += 0;
        //this.angle[i].x = 0;
      }
      if (this.body[i].x <= 575 && this.body[i].y > 427) {
        this.BendCoordinates[i].x = 575;
        this.BendCoordinates[i].y = 419;


        if (this.angle[i].x < this.angle[i].x + this.angle1[i]) {
          this.angle[i].x += conv8Speed * 180 / (2 * PI * (27));
          this.angle1[i] -= conv8Speed * 180 / (2 * PI * (27));

        } else {
          //fill(255);
          //print(this.body[i].x + " " + this.body[i].y);
          this.BendCoordinates[i].x = 0;
          this.BendCoordinates[i].y = 0;
          this.body[i].x -= 50;
          this.body[i].y = 419;
          //print(this.body[i].y);
        }
      }

      if (this.body[i].x <= 535 && this.body[i].y <= 427 && this.body[i].y >= 317 - buttLength) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].y -= conv9Speed;
      }
      if (this.body[i].x <= 535 && this.body[i].y < 317 - buttLength && this.body[i].y >= 252) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].y -= conv10Speed;
      }
      if (this.body[i].x <= 545 && this.body[i].y < 252 && this.body[i].x > 470) {
        this.BendCoordinates[i].x = 465;
        this.BendCoordinates[i].y = 252;
        if (this.angle[i].x > 0) {
          this.angle[i].x -= conv10Speed * 180 / (2 * PI * (23));
        } else {
          //fill(255);
          //print(this.body[i].x + " " + this.body[i].y);
          this.BendCoordinates[i].x = 0;
          this.BendCoordinates[i].y = 0;
          this.body[i].x = 465;
          this.body[i].y = 192;
          //print(this.body[i].y);
        }
      }

      if (this.body[i].x <= 465 && this.body[i].y <= 217 && this.body[i].x >= 405-(buttLength/2)&& !this.butt_pile[i]) {
        this.BendCoordinates[i].x = 0;
        this.BendCoordinates[i].y = 0;
        this.body[i].x -= conv10Speed;
      }
            //is indexer conveyor available
      k_butt = last_object(Indexer.type, Indexer.type.length, "Butt")

      try {
        if (Indexer.body[k_butt].x + buttLength >= this.body[i].x) {
          transition_butt = false
        } else {
          transition_butt = true
          
        }
      }
    
    catch(error){transition_butt=true}
      //indexer conveyor
      if (this.body[i].x < 405-(buttLength/2) && this.body[i].x >= 320&& !this.butt_pile[i]&& transition_butt) {

        Indexer.addProduct(this.body[i].x, this.body[i].y, buttLength, buttWidth, "Butt")
        this.body.splice(i, 1);
        this.angle.splice(i, 1);
        this.BendCoordinates.splice(i, 1);
        this.angle1.splice(i, 1);
        this.butt_pile.splice(i,1);
      }

    }


  }
  addProduct() {
    buttCounter++;
    // if (nfc(buttCounter / 10, 1) <= inclusionRate) {
    //   inclusion = true;
    // } else {
    //   inclusion = false;
    // }
    if (buttCounter >= 10) {
      buttCounter = 0;
    }
    this.body[this.body.length] = createVector(width, 469, inclusion);
    this.angle[this.angle.length] = createVector(random(0));
    this.angle1[this.angle1.length] = 90;
    this.BendCoordinates[this.BendCoordinates.length] = createVector(0, 0);

    this.butt_pile[this.butt_pile.length] = false;
  }

  show() {

    for (let i = 0; i < this.body.length; i++) {
      push();
      rectMode(CENTER);
      if (this.BendCoordinates[i].y > 0 && this.BendCoordinates[i].x > 0) {
        fill(255);


        //first bend
        if (this.body[i].y > 397 && this.body[i].x < 595) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          //print(this.body[i].y - this.BendCoordinates[i].y)
          rect(0, this.body[i].y - this.BendCoordinates[i].y, buttLength, buttWidth);
          if (showDetails) {
            try {
              text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, this.body[i].y - this.BendCoordinates[i].y)
            } catch (error) {}
          }
        }
        //second bend
        if (this.body[i].y < 252 && this.body[i].x < 545) {
          translate(this.BendCoordinates[i].x, this.BendCoordinates[i].y);
          rotate(this.angle[i].x);
          //print(this.body[i].y - this.BendCoordinates[i].y)
          rect(0, -this.body[i].x + this.BendCoordinates[i].x, buttLength, buttWidth);
          if (showDetails) {
            try {
              text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, -this.body[i].x + this.BendCoordinates[i].x)
            } catch (error) {}
          }
        }
      } else {
        fill(255);
        translate(this.body[i].x, this.body[i].y);
        rotate(this.angle[i].x);

        rect(0, 0, buttLength, buttWidth);
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