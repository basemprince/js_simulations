class rollers {
  constructor() {
    this.body = []
    this.convA = []
    this.speedA = []
    this.cryo = []
  }

  update() {
    for (let i = 0; i < this.body.length; i++) {
      //print(this.speedA[0]);       
      this.body[i].x -= this.speedA[i];
      this.body[i].y += 0;
      this.speedA[i] *= rollersSpeedDegredation;
      if (this.body.length >= (i + 2)) {
        // print("i: " + i+ " " +round(this.body[i].x), "i+1 " + " " + round(this.body[i+1].x));
        if ((this.body[i].x + productLengthA*1.1) >= this.body[i + 1].x) {
          //print('what');
          //this.speedA[i] = this.speedA[i + 1] * 0.95;


            this.speedA[i + 1] = this.speedA[i]
        }

        //         try {
        //          if(this.body[i-1].x !=0 && this.body[i].x==0){
        //            this.speedA[i]+=0.5;
        //          }
        // }
        // catch(error) {
        //   //console.error(error);



      }
      if (this.speedA[i] == 0 ) {
        this.speedA[i] += 1;
      }
      try{
      if (this.body[0].x <= 375|| this.convA[this.convA.length-1].x+ productLengthA >= this.body[i].x) {
        this.speedA[0] = 0;
      }
      }
      catch(error){}
    }
    if (this.body.length != 0) {
      return this.body[0].x
    } else {
      return 99999
    }
  }

  addProduct() {
    this.speedA[this.body.length] = convSpeedA;
    this.body[this.body.length] = createVector(600+productLengthA, 219);
    return productACounter++;

  }
  removeProduct() {

    this.convA[this.convA.length] = createVector(this.body[0].x, this.body[0].y);
    this.body.shift();
    this.speedA.shift();
    //this.speedA[0]=1;

  }
  removeProduct2() {

    this.cryo[this.cryo.length] = createVector(this.convA[0].x, this.convA[0].y);
    this.convA.shift();

  }
  update2() {
    for (let j = 0; j < this.convA.length; j++) {
      if (this.convA[j].x >= 370 && this.convA[j].x <= 390) {
      this.convA[j].x -= cryoSpeed*0.7;
      this.convA[j].y += 0;
      }
      else{
      this.convA[j].x -= cryoSpeed;
      this.convA[j].y += 0;
      }
    }
    if (this.convA.length != 0) {
      return this.convA[0].x
    } else {
      return 99999
    }
  }
  update3() {
    for (let j = 0; j < this.cryo.length; j++) {

      this.cryo[j].x -= cryoSpeed;
      this.cryo[j].y += 0;

      if (this.cryo[j].x >= 238 && this.cryo[j].x <= 250) {
        this.cryo[j].y -= tan(0.876058051) * cryoSpeed;
      }
      if (this.cryo[j].x <= 80) {
        this.cryo.shift();
      }

    }
    if (this.convA.length != 0) {
      return this.convA[0].x
    } else {
      return 99999
    }
  }
  show() {
    if (this.body.length >= 2) {
      if (this.body[this.body.length - 2].x + productLengthA > this.body[this.body.length - 1].x && this.body[this.body.length - 1].x >= 600+(productLengthA)) {
        this.body.pop();
        clash++;
      }
    }

    for (let i = 0; i < this.body.length; i++) {
      fill(255);
      rect(this.body[i].x, this.body[i].y, productLengthA, 10)

    }
    for (let j = 0; j < this.convA.length; j++) {
      fill(255);
      rect(this.convA[j].x, this.convA[j].y, productLengthA, 10)
    }
    for (let k = 0; k < this.cryo.length; k++) {
      fill(255);
      rect(this.cryo[k].x, this.cryo[k].y, productLengthA, 10)
    }
    return clash;
  }

}