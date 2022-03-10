space = 9
class indexer {
  constructor() {
    this.body = []
    this.angle = []
    this.dimension = []
    this.type = []
    this.index = []
    this.counter = []
  }
  update() {
    for (let i = 0; i < this.body.length; i++) {
       if (this.body[i].x >= 320) {
        this.counter[i] = true;
      } else {
        this.counter[i] = false;
      }
    
      //index checker
      if (this.body[i].x <= 358 && this.body[i].x >= 340) {
        this.index[i] = false;
      } else {
        this.index[i] = true;
      }

      if (this.type[i] == "North") {
        //stopper
        if (this.body[i].x > 350 && this.body[i].x <= 352 && indexerMode) {
          try {
            // print(this.body[i].x - this.body[i - 1].x + this.dimension[i - 1].x)
            if ((this.body[i].x - this.body[i - 1].x - this.dimension[i - 1].x) < space) {
              conv_index_north = 0;
            }

          } catch (error) {}
        }
        if (this.body[i].x < 442 - (loinLength / 2) && this.body[i].y <= 150 && this.body[i].x >= 350) {
           if(indexerMode){
          this.body[i].x -= conv_index_north
          }
          else{
            this.body[i].x -=conv5Speed
          }
        }

        if (this.body[i].x < 350 && this.body[i].x >= 320) {
          this.body[i].x -= conv5Speed;
        }
        //merge
        if (this.body[i].y >= 80 && this.body[i].y < 180 && this.body[i].x >= 260 && this.body[i].x < 320) {
          if (this.angle[i].x >= -20) {
            this.angle[i].x -= 0.3;
          }
          this.body[i].x -= conv11Speed / 1.000005519;
          this.body[i].y += conv11Speed / 3.1;
        }


        if (this.body[i].y < 210 && this.body[i].x < 260) {
          if (this.angle[i].x < 0) {
            this.angle[i].x += 0.5;
          }
          if (this.body[i].x > 230) {
            this.body[i].x -= conv12Speed / 1.000005519;
          } else {
            this.body[i].x -= conv12Speed;
          }
        }

      }
      if (this.type[i] == "South") {
        if (this.body[i].x > 350 && this.body[i].x <= 352 && indexerMode) {
          try {
            // print(this.body[i].x - this.body[i - 1].x - this.dimension[i - 1].x)
            if ((this.body[i].x - this.body[i - 1].x - this.dimension[i - 1].x) < space) {
              conv_index_south = 0;
            }
          } catch (error) {}
        }

        if (this.body[i].x < 442 - (loinLength / 2) && this.body[i].x >= 350) {
           if(indexerMode){
          this.body[i].x -= conv_index_south
          }
          else{
            this.body[i].x -=conv6Speed
          }
        }
        if (this.body[i].x < 350 && this.body[i].x >= 320) {
          this.body[i].x -= conv6Speed;
        }
        if (this.body[i].x < 320 && this.body[i].x >= 260) {

          this.body[i].x -= conv11Speed;
        }
        if (this.body[i].x < 260) {

          this.body[i].x -= conv12Speed;
        }
      }

      if (this.type[i] == "Butt") {
        if (this.body[i].x >= 344 && this.body[i].x <= 346 && indexerMode) {
          try {
            if ((this.body[i].x - this.body[i - 1].x - this.dimension[i - 1].x) < space) {
              conv_index_butt = 0;

            }
          } catch (error) {}
        }
       
        if (this.body[i].x < (442 - (buttLength / 2)) && this.body[i].x >= 344) {
         // print(this.body[0].x)
          if(indexerMode){
          this.body[i].x -= conv_index_butt
          }
          else{
            this.body[i].x -=conv10Speed
          }
        }
        if (this.body[i].x < 344 && this.body[i].x >= 320) {
          this.body[i].x -= conv11Speed
        }
        if (this.body[i].y >= 160 && this.body[i].y <= 210 && this.body[i].x >= 260 && this.body[i].x < 320) {

          if (this.angle[i].x <= 11) {
            this.angle[i].x += 0.3;
          }

          this.body[i].x -= conv11Speed / 1.000005519;
          this.body[i].y -= conv11Speed / 3.1;
        }

        if (this.body[i].y < 210 && this.body[i].x < 260) {


          if (this.angle[i].x > 0) {
            this.angle[i].x -= 0.5;
          }
          if (this.body[i].x > 230) {
            //this.body[i].y -= conv12Speed / 3.1;
            this.body[i].x -= conv12Speed / 1.000005519;
          } else {
            this.body[i].x -= conv12Speed;
          }
        }

      }
      if (this.body[i].x < 1) {
        this.body.splice(i, 1);
        this.angle.splice(i, 1);
        this.dimension.splice(i, 1);
        this.type.splice(i, 1);
        this.index.splice(i, 1);
        this.counter.splice(i,1);
      }

    }

  }

  addProduct(x, y, length, width, type) {
    this.body[this.body.length] = createVector(x, y);
    this.angle[this.angle.length] = createVector(0);
    this.dimension[this.dimension.length] = createVector(length, width)
    this.type[this.type.length] = type;
    this.index[this.index.length] = true;
    this.counter[this.counter.length]= false;
  }
  show() {


    for (let i = 0; i < this.body.length; i++) {
      push();
      rectMode(CENTER);

      fill(255);
      translate(this.body[i].x, this.body[i].y);
      rotate(this.angle[i].x);

      rect(0, 0, this.dimension[i].x, this.dimension[i].y)
      if (showDetails) {
        try {

          text(nfc(this.body[i].x - this.body[i - 1].x, 1), 0, -1)
        } catch (error) {}
      }

      pop();
    }
  }

}