let simulationSpeed = 3;

let meanNorthProductSpeed = 60 / 9;
let meanSouthProductSpeed = 60 / 9;
let meanButtSpeed = 60 / 18;

let conv1Speed = 0.12;
let conv2Speed = 0.12;
let conv3Speed = 0.46;
let conv4Speed = 0.46 * 1.0257;
let conv5Speed = conv3Speed;
let conv6Speed = 0.46;
let conv7Speed = 0.12;
let conv8Speed = 0.46;
let conv9Speed = conv8Speed;
let conv10Speed = 0.23;
let conv11Speed = 0.255;

let loinLength = 22;
let loinWidth = 6;
let buttLength = 11;
let buttWidth = 5;
let addRandom = false;
let firstButt = false;
let loinDelay = 70;
let loinDelaySec = 4.8;
let buttDelay = 0;
let northCycle = 0;
let southCycle = 0;
let buttCycle = 0;

let delayCounter = 0;

function setup() {

  angleMode(DEGREES);
  createCanvas(950, 500);
  background(0);
  loinNorth = new northLoin();
  loinSouth = new southLoin();
  Butt = new buttStuff();

  timeCount = 0;
  timeCountNorthConv = meanNorthProductSpeed;
  timeCountSouthConv = meanNorthProductSpeed;
  timeCountButtConv = meanButtSpeed;
  cycleCount = 0;
  cycleTimeRatio = 0;

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
    text('simulation Speed: \n' + simulationSpeed + 'X', 350, 90);
    pop();
    text("1", width - 50, 25);
    text("2", width - 50, 120);
    text("3", width - 290, 25);
    text("4", width - 290, 120);
    text("5", width - 510, 120);
    text("6", width - 430, 300);
    text("7", width - 20, 410);
    text("8", width - 290, 410);
    text("9", width - 700, 300);
    text("10", width - 710, 200);
    text("11", width - 850, 120);
    timeCount = millis() * simulationSpeed / 1000;
    cycleTimeRatio = cycleCount / timeCount;
    if (delayCounter < loinDelay + 20) {
      delayCounter++;
    }
    if (delayCounter < buttDelay + 20) {
      delayCounter++;
    }
    //text('speed of main conv: ' + round(mainConvSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 400, 55);
    //text('speed of takeAway conv: ' + round(takeAwayConvSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 100, 320);

    fill(0);
    text('time in sec: ' + round(timeCount) + ' sec |' + ' time in hr: ' + nfc(timeCount / 3600, 1) + ' hrs', 30, 50);



    if (addRandom) {
      currentNorthSpeed = averageRandom(meanNorthProductSpeed, 1);
    }


    //     if (timeCountNorthConv <= timeCount) {
    //       loinNorth.addProduct();
    //       northCycle++;
    //       timeCountNorthConv = timeCount + currentNorthSpeed;
    //       cycleTimeCalcNorth = currentNorthSpeed;
    //     }
    //     if (timeCountSouthConv <= timeCount) {
    //       loinSouth.addProduct();
    //       southCycle++;
    //       timeCountSouthConv = timeCount + currentSouthSpeed;
    //       cycleTimeCalcSouth = currentSouthSpeed;
    //     }
    //     if (loinSouth.body.length > 0) {
    //       //print(loinSouth.body[0].x);
    //       if (firstButt == true && loinSouth.body[0].x <= (830 + 32)) {
    //         Butt.addProduct();
    //         buttCycle++;
    //         timeCountButtConv = timeCount + currentButtSpeed;
    //         cycleTimeCalcButt = currentButtSpeed;
    //         firstButt = false;
    //       }
    //     }
    //     if (timeCountButtConv <= timeCount && firstButt == false) {
    //       Butt.addProduct();
    //       buttCycle++;
    //       timeCountButtConv = timeCount + currentButtSpeed;
    //       cycleTimeCalcButt = currentButtSpeed;

    //     }

    if (nfc(timeCount % meanButtSpeed, 1) == 0.1 && timeCountButtConv <= timeCount) {
      Butt.addProduct();
      timeCountButtConv = timeCount + 2;
    }

    if (nfc((timeCount + loinDelaySec) % meanNorthProductSpeed, 1) == 0.1 && timeCountNorthConv <= timeCount) {
      loinNorth.addProduct();
      timeCountNorthConv = timeCount + 2;
    }
    if (nfc((timeCount + loinDelaySec) % meanSouthProductSpeed, 1) == 0.1 && timeCountSouthConv <= timeCount) {
      loinSouth.addProduct();
      timeCountSouthConv = timeCount + 2;
    }

    text('conv1: ' + round(conv1Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 150);
    text('conv2 : ' + round(conv2Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 165);
    text('conv3: ' + round(conv3Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 180);
    text('conv4: ' + round(conv4Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 195);
    text('conv5: ' + round(conv5Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 210);
    text('conv6 : ' + round(conv6Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 225);
    text('conv7: ' + round(conv7Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 240);
    text('conv8: ' + round(conv8Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 255);
    text('conv9: ' + round(conv9Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 270);
    text('conv10: ' + round(conv10Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 285);
    text('conv11: ' + round(conv11Speed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 570, 300);


    x = 301;
    fill(0);
    rect(width - 121, 30, 121, 30);
    rect(width - 121, 76, 121, 30);
    rect(width - 132 - x, 30, 308, 30);
    rect(width - 102 - x, 76, 278, 30);

    beginShape();
    line(width - 135 - x, 30, width - 135 - x, 60);
    noFill();
    arc(width - 135 - x, 92, 123, 123, 180, -180 / 2);
    arc(width - 135 - x, 91, 62, 62, 180, -180 / 2);
    line(width - 196 - x, 92, width - 167 - x, 92);
    endShape(CLOSE);

    beginShape();
    line(width - 105 - x, 76, width - 105 - x, 76 + 30);
    noFill();
    arc(width - 105 - x, 92 + 46, 123, 123, 180, -180 / 2);
    arc(width - 105 - x, 91 + 46, 62, 62, 180, -180 / 2);
    line(width - 167 - x, 92 + 46, width - 138 - x, 92 + 46);
    endShape();

    rect(width - 196 - x, 94, 30, 130);
    fill(0);
    rect(width - 166 - x, 94 + 46, 30, 215);


    beginShape();
    line(width - 167 - x, 94 + 46 + 217, width - 166 - x + 30, 94 + 46 + 217);
    noFill();
    arc(width - 167 - x - 39, 92 + 46 + 220, 141, 118, 0, 180 / 2);
    arc(width - 167 - x - 39, 92 + 46 + 220, 141 - 61, 118 - 58, 0, 180 / 2);
    line(width - 166 - x - 42, 417 - 30, width - 166 - x - 42, 76 + 341);
    endShape();


    strokeWeight(3);
    line(width - 196 - x, 222 - 60, width - 166 - x, 222);
    line(width - 579, 76 + 341, width - 579 + 60, 76 + 341 - 29);
    strokeWeight(1);

    rect(width - 579, 76 + 341 - 30, 68, 30);
    fill(0);
    rect(width - 32, 76 + 341, 32, 30);
    rect(width - 614, 76 + 341, 614 - 36, 30);

    beginShape();
    line(width - 167 - x - 220, 94 + 46 + 217 + 30, width - 166 - x - 220 + 30, 94 + 46 + 217 + 30);
    noFill();
    arc(width - 167 - x - 150, 92 + 46 + 220 + 30, 141, 118, 180 / 2, 180);
    arc(width - 167 - x - 150, 92 + 46 + 220 + 30, 141 - 64, 118 - 58, 180 / 2, 180);
    line(width - 166 - x - 42 - 108, 417 - 30 + 30, width - 166 - x - 42 - 108, 76 + 341 + 30);
    endShape();
    fill(0);
    rect(width - 387 - x, 94 + 46 + 245, 30, -194);

    noFill();
    strokeWeight(30);
    arc(width - 167 - x - 253, 92 + 46 + 49, 141 - 45, 118 - 28, -180 / 2, 0);
    strokeWeight(1);
    fill(0);
    rect(width - 387 - x - 40, 76 + 20 + 30, -210, 30);

    loinNorth.update();
    loinSouth.update();
    Butt.update();
    loinNorth.show();
    loinSouth.show();
    Butt.show();
    for (let i = 0; i < width; i += 30) {
      text(i, i, height);
      text(i, i, 10);
    }
    for (let i = 0; i < height; i += 30) {
      text(i, 0, i);
    }
  }
}