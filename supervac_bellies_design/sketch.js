let simulationSpeed = 3;
let meanProductSpeed = 60 / 18;
let mainConvSpeed = 0.18;
let takeAwayConvSpeed = 0.5;
let productLength = 25;
let productWidth = 12;
let addRandom = false;
let autoMode1 = false;
let autoMode2 = false;
let bagger5mode = true;
let vacumCycleTime1 = 25;
let vacumCycleTime2 = 25;
let baggingCycleTime = 13;

let supervac1enter;
let supervac2enter;
let targetReleseTime1 = 0;
let targetReleseTime2 = 0;
let missed = 0;
let belleycycle = 0;
let supervac1cycle = 0;
let supervac2cycle = 0;
let bag1;
let bag2;
let bag3;
let bag4;
let bag5;
let downTime = 0;
let downTime1 = 0;
let downTime2 = 0;
let downTime3 = 0;
let downTime4 = 0;
let downTime5 = 0;

function setup() {
  createCanvas(600, 400);
  background(0);
  mainLine = new MainConv();
  supervac1enter = new supervac1();
  supervac2enter = new supervac2();
  bag1 = new bagging1();
  bag2 = new bagging2();
  bag3 = new bagging3();
  bag4 = new bagging4();
  bag5 = new bagging5();
  spaceChecker1 = true;
  spaceChecker2 = true;
  spaceChecker1a = true;
  spaceChecker1b = true;
  spaceChecker2a = true;
  spaceChecker2b = true;
  spaceChecker5 = true;
  timeCount = 0;
  timeCountMainConv = meanProductSpeed;
  cycleTimeCalc = 0;
  cycleCount = 0;
  cycleTimeRatio = 0;
  if (bagger5mode) {
    x = 40;
  } else {
    x = 0;
  }
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
  background(220);
  for (let i = 0; i < simulationSpeed; i++) {
    timeCount = millis() * simulationSpeed / 1000;
    cycleTimeRatio = cycleCount / timeCount;

    text('speed of main conv: ' + round(mainConvSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 400, 55);
    text('speed of takeAway conv: ' + round(takeAwayConvSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 100, 320);

    fill(0);
    text('time in sec: ' + round(timeCount) + ' sec |' + ' time in hr: ' + nfc(timeCount / 3600, 1) + ' hrs', 10, 10);

    currentProductSpeed = meanProductSpeed;
    if (addRandom) {
      currentProductSpeed = averageRandom(meanProductSpeed, 1);
    }


    if (timeCountMainConv <= timeCount) {
      mainLine.addProduct();
      belleycycle++;
      timeCountMainConv = timeCount + currentProductSpeed;
      cycleTimeCalc = currentProductSpeed;
    }

    fill(0);
    rect(0, 63, width, 20);
    rect(x + 230, 88, 10, 20);
    rect(x + 280, 88, 10, 20);
    rect(130, 88, 10, 20);
    rect(180, 88, 10, 20);
    rect(140, 124, 45, 145);
    rect(x + 240, 124, 45, 145);
    rect(x + 230, 196.5, 60, 61);
    rect(130, 196.5, 60, 61);
    rect(0, 288, x + 300, 20);
    fill(255);


    text("1", x + 280, 98);
    text("2", x + 230, 98);
    text("3", 180, 98);
    text("4", 130, 98);


    mainLine.update();
    supervac1enter.update();
    supervac2enter.update();
    bag1.update();
    bag2.update();
    bag3.update();
    bag4.update();

    supervac1enter.show();
    supervac2enter.show();
    bag1.show();
    bag2.show();
    bag3.show();
    bag4.show();
    mainLine.show();
    fill(0);
    if (bagger5mode) {
      rect((180 + x + 230) / 2, 88, 10, 20);
      fill(255);
      text("5", (180 + x + 230) / 2, 98);
      fill(0);
      text(" dt 5: " + nfc(downTime5, 0) + " sec, " + nfc(downTime5 * 100 / timeCount, 0) + " %", 400, 160);
      bag5.update();
      bag5.show();
    }
    fill(0);
    text(" belley drop cycle time: " + nfc(cycleTimeCalc, 1) + " sec", 400, 250);
    text(" MainLine speed: " + nfc(belleycycle * 60 / timeCount, 1) + " p/min", 400, 265);
    text(" supervac1 speed: " + nfc(supervac1cycle * 60 / timeCount, 1) + " p/min", 400, 295);
    text(" supervac2 speed: " + nfc(supervac2cycle * 60 / timeCount, 1) + " p/min", 400, 310);
    text(" supervac system total: " + nfc((supervac1cycle + supervac2cycle) * 60 / timeCount, 1) + " p/min", 400, 280);
    text('missed: ' + missed + ' products', 10, 20);
    text('missed/m: ' + nfc(missed * 60 / timeCount, 1) + ' p/min', 10, 30);
    text(" dt 1: " + nfc(downTime1, 0) + " sec, " + nfc(downTime1 * 100 / timeCount, 0) + " %", 400, 120);
    text(" dt 2: " + nfc(downTime2, 0) + " sec, " + nfc(downTime2 * 100 / timeCount, 0) + " %", 400, 130);
    text(" dt 3: " + nfc(downTime3, 0) + " sec, " + nfc(downTime3 * 100 / timeCount, 0) + " %", 400, 140);
    text(" dt 4: " + nfc(downTime4, 0) + " sec, " + nfc(downTime4 * 100 / timeCount, 0) + " %", 400, 150);

  }
}