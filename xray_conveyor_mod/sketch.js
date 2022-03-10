let simulationSpeed = 2;

let meanNorthProductSpeed = 60 / 35;


let conv1aSpeed = 0.555;
let conv2aSpeed = 0.334;
let conv3aSpeed = 0.517;
let conv4aSpeed = 0.19;

let conv1bSpeed = 0.555;
let conv2bSpeed = 0.334;
let conv3bSpeed = 0.517;
let conv4bSpeed = 0.19;
let conv5bSpeed = 0.577;
let x = 0;

let conv3aMultiplier = 1;
let conv3bMultiplier = 1;

let loinLength = 22;
let loinWidth = 6;
let buttLength = 11;
let buttWidth = 5;
let productLength = 12;
let productWidth = 12;
let addRandom = false;

let bagger5mode = false;
let vacumCycleTime1 = 25;
let vacumCycleTime2 = 25;
let baggingCycleTime = 13;

let supervac1enter;
let supervac2enter;
let targetReleseTime1 = 0;
let targetReleseTime2 = 0;
let missed = 0;
let northCycle = 0;
let southCycle = 0;
let buttCycle = 0;
let supervac1cycle = 0;
let supervac2cycle = 0;

let conv3b = 0;
let conv3a = 0;
let conv3aAc = 0;
let conv3bAc = 0;

let conv4b = 0;
let conv4a = 0;
let conv4aAc = 0;
let conv4bAc = 0;


function setup() {


  createCanvas(600, 500);
  background(0);
  loinNorth = new northLoin();
  southSide = new south();

  timeCount = 0;
  timeCountNorthConv = meanNorthProductSpeed;


  cycleTimeCalc = 0;
  cycleCount = 0;
  cycleTimeRatio = 0;

}


function averageRandom(m, s) {
  var number = 0;
  var minimum = productLength / (mainConvSpeed * cycleCount * simulationSpeed / (timeCount))

  number = m + 2.0 * s * (Math.random() + Math.random() + Math.random() - 1.5);
  if (number < minimum) {
    return minimum;
  } else {
    return number;
  }
}


function draw() {


  cycleCount++;

  for (let i = 0; i < simulationSpeed; i++) {
    background(220);
    push()
    textSize(20);
    textAlign(CENTER);
    fill(0);
    text('simulation Speed: ' + simulationSpeed + 'X', 350, 90);
    text('main line speed: ' + (1 / meanNorthProductSpeed) * 60 + ' p/min', 350, 120);
    pop();

    timeCount = millis() * simulationSpeed / 1000;
    cycleTimeRatio = cycleCount / timeCount;

    //text('speed of main conv: ' + round(mainConvSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 400, 55);
    //text('speed of takeAway conv: ' + round(takeAwayConvSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 100, 320);

    fill(0);
    text('time in sec: ' + round(timeCount) + ' sec |' + ' time in hr: ' + nfc(timeCount / 3600, 1) + ' hrs', 30, 50);

    currentNorthSpeed = meanNorthProductSpeed;


    text('conv1: ' + round(conv1aSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 150);
    text('conv2 : ' + round(conv2aSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 165);
    fill(255, 30, 33);
    text('conv3: ' + round(conv3aSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 180);
    text('conv3: ' + round(conv3bSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 390);

    fill(0);
    text('conv4: ' + round(conv4aSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 195);

    text('conv1: ' + round(conv1bSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 360);
    text('conv2 : ' + round(conv2bSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 375);
    text('conv4: ' + round(conv4bSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 420);
    fill(34, 30, 230);
    text('conv5: ' + round(conv5bSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 120, 405);

    fill(0);
    if (addRandom) {
      currentNorthSpeed = averageRandom(meanNorthProductSpeed, 1);
    }

    randomSignal = Math.floor(Math.random() * 2) + 1;
    //print(randomSignal);
    if (randomSignal == 1) {
      productLength = loinLength
      productWidth = loinWidth
    }
    if (randomSignal == 2) {
      productLength = buttLength;
      ProdcutWidth = buttWidth;
    }
    if (timeCountNorthConv <= timeCount) {
      loinNorth.addProduct(productLength, productWidth);
      southSide.addProduct(productLength, productWidth);
      northCycle++;
      timeCountNorthConv = timeCount + currentNorthSpeed;
      cycleTimeCalcNorth = currentNorthSpeed;
    }

    for (let i = 0; i < loinNorth.conv3.length; i++) {
      if (loinNorth.conv3[i] == true) {
        conv3a++;
      }
    }
    for (let i = 0; i < southSide.conv3.length; i++) {
      if (southSide.conv3[i] == true) {
        conv3b++;
      }
    }
    fill(255, 30, 33);
    text('# of prod on conv3: ' + conv3a, 110, 240);
    text('# of prod on conv3: ' + conv3b, 110, 300);
    fill(0);
    if (conv3a > 1 && conv3a <= 3) {
      conv3aMultiplier = 1.3 / conv3a
    } else {
      conv3aMultipler = 1
    }
    if (conv3b > 11 && conv3b <= 3) {
      conv3bMultiplier = 1 / conv3b
    } else {
      conv3bMultipler = 1
    }
    conv3aAc += conv3a;
    conv3bAc += conv3b;
    conv3a = 0;
    conv3b = 0;


    for (let i = 0; i < loinNorth.conv4.length; i++) {
      if (loinNorth.conv4[i] == true) {
        conv4a++;
      }
    }
    for (let i = 0; i < southSide.conv4.length; i++) {
      if (southSide.conv4[i] == true) {
        conv4b++;
      }
    }

    text('# of prod on conv4: ' + conv4a, 250, 240);
    text('# of prod on conv4: ' + conv4b, 250, 300);

    conv4aAc += conv4a;
    conv4bAc += conv4b;
    conv4a = 0;
    conv4b = 0;




    //text('prod total accumulation: ' + conv3aAc, 420, 240);
    fill(255, 30, 33);
    text('ave #prod accumulation-conv3: ' + nfc(conv3aAc / (cycleCount * simulationSpeed), 1), 400, 255);
    //text('prod total accumulation: ' + conv3bAc, 420, 300);
    text('ave #prod accumulation-conv3: ' + nfc(conv3bAc / (cycleCount * simulationSpeed), 1), 400, 315);
    text('prod accumulation improvment-conv3: ' + round(((conv3aAc - conv3bAc) / conv3aAc) * 100) + ' %', 300, 420);
    fill(0);
    text('ave #prod accumulation diff-conv4: ' + nfc((conv4bAc - conv4aAc) / (cycleCount * simulationSpeed), 1), 300, 435);

    text('ave #prod accumulation-conv4: ' + nfc(conv4aAc / (cycleCount * simulationSpeed), 2), 400, 270);
    //text('prod total accumulation: ' + conv3bAc, 420, 300);
    text('ave #prod accumulation-conv4: ' + nfc(conv4bAc / (cycleCount * simulationSpeed), 2), 400, 330);

    rect(x, height / 2, 124, 30)
    rect(x + 127, height / 2, 72, 30)
    fill(255, 30, 33);
    rect(x + 202, height / 2, 42, 30)
    fill(0);
    rect(x + 247, height / 2, 78.5, 30)

    rect(x, height / 2 + 60, 124, 30)
    rect(x + 127, height / 2 + 60, 72, 30)
    fill(255, 30, 33);
    rect(x + 202, height / 2 + 60, 42, 30)
    fill(34, 30, 230);

    rect(x + 247, height / 2 + 60, 28, 30)
    fill(0);
    rect(x + 278, height / 2 + 60, 78.5, 30)
    loinNorth.update();
    loinNorth.show();
    southSide.update();
    southSide.show();
    fill(0);
    for (let i = 0; i < width; i += 30) {
      text(i, i, height);
      text(i, i, 10);
    }
    for (let i = 0; i < height; i += 30) {
      text(i, 0, i);
    }
  }
}