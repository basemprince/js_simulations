let meanFlowvacSpeed = 60 / 20;
let meanManualProductSpeed = 60 / 10;
let LineA = true;
let LineB = true;
let cryoSpeed = 0.48;
let convSpeedA = cryoSpeed;
let rollersSpeedDegredation = 1.005;
let convSpeedB = cryoSpeed;
let EL3mode = true;
let productLengthA = 40;
let productLengthB = 25;
let addRandom = true;
let simulationSpeed = 3;

let productA;
let rollersA;
let productB;
let cryoplates;

function setup() {
  createCanvas(600, 400);
  productA = new convA();
  rollersA = new rollers();
  productB = new convB();
  cryoplates = new cryoplate();
  proAx = 0;
  proAxx = 0;
  proBx = 0;
  checkerA = true;
  checkerB = true;
  counterA = 0;
  counterAA = 0;
  counterB = 0;
  counterBB = 0;
  cryoReady = false;
  timeCount = 0;
  timeCountA = meanFlowvacSpeed;
  timeCountB = meanManualProductSpeed;
  stop = true;
  oldStop = true;
  ClashA = 0;
  productFlowvacCounter = 0;
  productCryoCounter = 0;
  productConvACounter = 0;
  cryoPlateCount = 0;
  averageFlowvacSpeed = 0;
  cryofeedspeed = 0;
  cryospeed = 0;
  cryoefficency = 0;
  cycleCount = 0;
  cycleTimeRatio = 0;
  currentFlowCylce = 0;
}

//function keyPressed() {
//  if (keyCode === LEFT_ARROW) {
//    productA.addProduct();
//  }
//  if (keyCode === RIGHT_ARROW) {
//    productB.addProduct();
//  }
//}
function averageRandom(m, s) {
  var number=0;
  number = m + 2.0 * s * (Math.random() + Math.random() + Math.random() - 1.5);
  if (number < 1.7){
    return 1.7;
  }
  else{
  return number;
  }
}


function draw() {
  cycleCount++;
  background(220);
  for (let i = 0; i < simulationSpeed; i++) {
    timeCount = millis() * simulationSpeed / 1000;
    cycleTimeRatio = cycleCount / timeCount;
    //print(cycleTimeRatio);
    fill(0);
    text('time: ' + round(timeCount) + ' seconds', 10, 10);
    flowvacSpeed = meanFlowvacSpeed;
    manualProductSpeed = meanManualProductSpeed;
    if (addRandom) {
      flowvacSpeed = averageRandom(meanFlowvacSpeed, 1);
      manualProductSpeed = averageRandom(meanManualProductSpeed, 1);
    }

    if (timeCountA <= timeCount && LineA) {
      productFlowvacCounter = rollersA.addProduct();
      timeCountA = timeCount + flowvacSpeed;
      currentFlowCylce = flowvacSpeed;
    }
    if (timeCountB <= timeCount && timeCount > 5 && LineB) {
      productB.addProduct();
      timeCountB = timeCount + manualProductSpeed;
    }
    x = 90;
    y = -40;
    fill(0);
    rect(x + 200, y + 250, 100, 25);
    for (let i = 0; i < 14; i++) {
      rect(x + 305 + (15 * i), y + 250, 10, 25);
    }
    beginShape();
    vertex(x + 200, y + 220);
    vertex(x + 200, y + 245);
    vertex(x + 300, y + 245);
    vertex(x + 350, y + 150);
    vertex(x + 500, y + 150);
    vertex(x + 500, y + 125);
    vertex(x + 330, y + 125);
    vertex(x + 280, y + 220);
    endShape();
    ellipse(x, y + 270, 120, 120);

    cryoplates.update();
    cryoReadyOld = cryoReady;
    cryoReady = cryoplates.show();
    if (cryoReady != cryoReadyOld) {
      cryoPlateCount++;
      //print(cryoPlateCount);
    }
    fill(0);
    rect(x + 100, y + 220, 95, 55);

    //rollersA.update2();
    proAx = rollersA.update();
    //print(proAx);
    if (proAx <= 390 && checkerA) {
      rollersA.removeProduct();
    }

    rollersA.update3();
    if (checkerA) {
      proAxx = rollersA.update2();

      if (proAxx <= 299) {
        checkerA = false;
      }
      //print (checkerA);
      //print(cryoReady);
    }
    if (!checkerA) {

      counterA++;
      //print(counterA);
      if (cryoReady && stop || counterAA != 0) {
        if (!checkerB || counterAA != 0) {
          counterAA++;
          if (counterAA > (60 / cryoSpeed) / cycleTimeRatio) {
            counterAA = 0;
            counterA = 0;
            rollersA.removeProduct2();
            productCryoCounter++;
            productConvACounter++;
            checkerA = true;
          }
        } else {
          rollersA.removeProduct2();
          productCryoCounter++;
          productConvACounter++;
          counterA = 0;
          counterAA = 0;
          checkerA = true;
        }
      }

    }

    productB.update2();
    if (checkerB) {
      proBx = productB.update();
      //print (proAx);
      if (proBx <= 300) {
        checkerB = false;
      }
    }
    if (!checkerB) {
      counterB++;
      //print(counter);
      if (cryoReady && !stop || counterBB != 0) {
        if (!checkerA || counterBB != 0) {
          counterBB++;
          //print(counterBB);
          if (counterBB > (60 / cryoSpeed) / cycleTimeRatio) {
            counterBB = 0;
            counterB = 0;
            productB.removeProduct();
            productCryoCounter++;
            checkerB = true;
          }
        } else {
          productB.removeProduct();
          counterBB = 0;
          counterB = 0;
          productCryoCounter++;
          checkerB = true;
        }
      }
      //proAx = productA.update();			
    }
    //print(counterA);
    //print(counterB);
    if (counterA + 30 >= counterB) {
      stop = true;
    } else {
      stop = false;
    }

    //print(stop);

    clashA = rollersA.show();

    fill(0);
    text("Clash counter A: " + clashA, 10, 20);
    productB.show();
    fill(0);
    if (productFlowvacCounter != 0) {
      averageFlowvacSpeed = productFlowvacCounter * 60 / timeCount;
    }
    if (productCryoCounter != 0) {
      cryofeedspeed = productCryoCounter * 60 / timeCount;
    }
    if (cryoPlateCount != 0) {
      cryospeed = cryoPlateCount * 30 / timeCount;
    }
    if (productConvACounter != 0) {
      text("Conveyor A speed: " + (nfc(productConvACounter * 60 / timeCount, 1)) + " products/min", 10, 60);
    }
    text("flowvac speed: " + (nfc(averageFlowvacSpeed, 1)) + " products/min", 10, 30);
    text("cryovac feed speed: " + (nfc(cryofeedspeed, 1)) + " products/min", 10, 40);
    text("Cryovac plate speed: " + (nfc(cryospeed, 1)) + " products/min", 10, 50);
    text("Cryo efficency: " + nfc(100 * cryofeedspeed / cryospeed, 1) + " %", 10, 70);
    text("cycle time: " + nfc(currentFlowCylce, 1) + " sec", 400, 250);

  }
}