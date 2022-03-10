// MAIN CONTROLS
let simulationSpeed = 3;
let meanNorthProductSpeed = 9;
let meanSouthProductSpeed = 9;
let meanButtSpeed = 18;

let addRandom = true;
let indexerMode = true;
//-------------------------------------------------------
//To simulate Current Situation do the following:
//addRandom = true
//indexerMode = false

//To simulate with Indexing do the following:
//addRandom = true
//indexerMode = true

//To simulate with Sequencing do the following:
//addRandom = false
//indexerMode = false
//-------------------------------------------------------


//TURN ON/OFF LINE PRODUCTS
let north_allowed = true;
let south_allowed = true;
let butt_allowed = true;

//CONVEYOR SPEEDS IN FT/MIN
let indexer_speed_multiplier = 1; //multiplies speed of indexer conveyor
let conv1Speed_ftmin = 24;
let conv2Speed_ftmin = 24;
let conv3Speed_ftmin = 120;
let conv4Speed_ftmin = 107;
let conv5Speed_ftmin = 78;
let conv6Speed_ftmin = 68;
let conv7Speed_ftmin = 24;
let conv8Speed_ftmin = 130;
let conv9Speed_ftmin = 130;
let conv10Speed_ftmin = 69;
let conv11Speed_ftmin = 90;
let conv12Speed_ftmin = 75;


//PRODUCT DIMENSIONS IN INCH
let loinLength = 22;
let loinWidth = 6;
let buttLength = 11;
let buttWidth = 5;


let loinDelaySec = 0;
let buttDelay = 13.3;
let northCycle = 0;
let southCycle = 0;
let buttCycle = 0;
let showDetails = false;
let inclusion = false;
let totalWork = 0;
let startWork = 0;
//let delayCounter = 0;
let distance = 0;
let spaceBtProducts = 0;
let frames = 60;
let debugMode = true;
let index_north = 0
let index_south = 0
let index_butt = 0

let index_north_wait = 0;
let previous_index_north = 0;
let index_south_wait = 0;
let previous_index_south = 0;
let index_butt_wait = 0;
let previous_index_butt = 0;

let Index_Product = true
let Sequence_Product = false;
let Current_Situation = false;

function setup() {
  reset();
  Speed_Slider = createSlider(1, 2, 1.5, 0.5);
  Speed_Slider.position(1000, 270)
  var button1 = createButton('Index_Product');
  button1.position(1000, 320);
  var button2 = createButton('Sequence_Product');
  button2.position(1000, 350);
  var button3 = createButton('Current_Condition');
  button3.position(1000, 380);
  button1.mousePressed(changeSim_index);
  button2.mousePressed(changeSim_sequence);
  button3.mousePressed(changeSim_current);
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
  number = m + 2.0 * s * (Math.random() + Math.random() + Math.random() - 1.5);

  return number;

}

function reset() {
  frameRate(frames)
  angleMode(DEGREES);
  bg = loadImage('background.jpg');

  createCanvas(1235, 492);

  previousSecond = 0;
  previousSecond1 = 0;
  loinNorth = new northLoin();
  loinSouth = new southLoin();
  Butt = new buttStuff();
  Worker = new alignment();
  Manual = new manual();
  Indexer = new indexer();
  timeCount = 0;
  timeCountNorthConv = 60 / meanNorthProductSpeed;
  timeCountSouthConv = 60 / meanNorthProductSpeed;
  timeCountButtConv = 60 / meanButtSpeed;
  cycleCount = 0;
  cycleTimeRatio = 0;
  finalNorthProductSpeed = 60 / meanNorthProductSpeed;
  finalSouthProductSpeed = 60 / meanSouthProductSpeed;
  finalButtSpeed = 60 / meanButtSpeed;
  productCount = 0;
  productCountTotal = 0
  productCountHelper = 0;
  productCountHelper1 = 0;
  cycleCountTrial = 0;
  speedRatioTrial = 0
  x_block = 750
  y_block = 180
  conv1SpeedSave = conv1Speed_ftmin * 12 / (60 * frameRate());
  conv2SpeedSave = conv2Speed_ftmin * 12 / (60 * frameRate());
  conv3SpeedSave = conv3Speed_ftmin * 12 / (60 * frameRate());
  conv4SpeedSave = conv4Speed_ftmin * 12 / (60 * frameRate());
  conv5SpeedSave = conv5Speed_ftmin * 12 / (60 * frameRate());
  conv6SpeedSave = conv6Speed_ftmin * 12 / (60 * frameRate());
  conv7SpeedSave = conv7Speed_ftmin * 12 / (60 * frameRate());
  conv8SpeedSave = conv8Speed_ftmin * 12 / (60 * frameRate());
  conv9SpeedSave = conv9Speed_ftmin * 12 / (60 * frameRate());
  conv10SpeedSave = conv10Speed_ftmin * 12 / (60 * frameRate());
  conv11SpeedSave = conv11Speed_ftmin * 12 / (60 * frameRate());
  conv12SpeedSave = conv12Speed_ftmin * 12 / (60 * frameRate());
}

function changeSim_index() {
  addRandom = true
  indexerMode = true
}

function changeSim_sequence() {
  if (addRandom || indexerMode) {
    reset()
  }
  addRandom = false
  indexerMode = false
}

function changeSim_current() {
  addRandom = true
  indexerMode = false
}

function draw() {
  const indexer_speed_multiplier = Speed_Slider.value();

  if (addRandom) {
    productTotal = averageRandom((meanNorthProductSpeed + meanSouthProductSpeed + meanButtSpeed), 4);
    // if(productTotal > meanNorthProductSpeed + meanSouthProductSpeed + meanButtSpeed){
    //   productTotal = meanNorthProductSpeed + meanSouthProductSpeed + meanButtSpeed
    // }
    finalButtSpeed = (productTotal * (1 / 2))
    finalNorthProductSpeed = (productTotal * (1 / 4))
    finalSouthProductSpeed = (productTotal * (1 / 4))
    finalNorthProductSpeed = 60 / finalNorthProductSpeed
    finalSouthProductSpeed = 60 / finalSouthProductSpeed
    finalButtSpeed = 60 / finalButtSpeed

  }

  cycleCount++;
  background(bg);
  for (let i = 0; i < simulationSpeed; i++) {
    cycleCountTrial++;
    timeCount = millis() * simulationSpeed / 1000;
    currentSecond = simulationSpeed * floor(millis() / 1000)
    conv1Speed = conv1Speed_ftmin * 12 / (60 * frameRate());
    conv2Speed = conv2Speed_ftmin * 12 / (60 * frameRate());
    conv3Speed = conv3Speed_ftmin * 12 / (60 * frameRate());
    conv4Speed = conv4Speed_ftmin * 12 / (60 * frameRate());
    conv5Speed = conv5Speed_ftmin * 12 / (60 * frameRate());
    conv6Speed = conv6Speed_ftmin * 12 / (60 * frameRate());
    conv7Speed = conv7Speed_ftmin * 12 / (60 * frameRate());
    conv8Speed = conv8Speed_ftmin * 12 / (60 * frameRate());
    conv9Speed = conv9Speed_ftmin * 12 / (60 * frameRate());
    conv10Speed = conv10Speed_ftmin * 12 / (60 * frameRate());
    conv11Speed = conv11Speed_ftmin * 12 / (60 * frameRate());
    conv12Speed = conv12Speed_ftmin * 12 / (60 * frameRate());
    conv_index_north = conv5Speed * indexer_speed_multiplier;
    conv_index_south = conv6Speed * indexer_speed_multiplier;
    conv_index_butt = conv10Speed * indexer_speed_multiplier;

    if (currentSecond > (previousSecond + 5)) {
      spaceBtProducts = (distance - totalInches) / (productTotal - 1)
      speedRatioTrial = 5 / cycleCountTrial
      previousSecond = currentSecond
      cycleCountTrial = 0
      conv1SpeedSave = conv1Speed
      conv2SpeedSave = conv2Speed
      conv3SpeedSave = conv3Speed
      conv4SpeedSave = conv4Speed
      conv5SpeedSave = conv5Speed
      conv6SpeedSave = conv6Speed
      conv7SpeedSave = conv7Speed
      conv8SpeedSave = conv8Speed
      conv9SpeedSave = conv9Speed
      conv10SpeedSave = conv10Speed
      conv11SpeedSave = conv11Speed
      conv12SpeedSave = conv12Speed
    }
    //print(currentSecond)
    if (currentSecond >= (previousSecond1 + 20.0)) {
      // print("heck")
      productCountHelper1 = productCount * 1.0 / (currentSecond - previousSecond1);
      productCount = 0;
      previousSecond1 = currentSecond
    }


    // print(speedRatioTrial)

    cycleTimeRatio = cycleCount / timeCount;

    // if (delayCounter < loinDelay + 20) {
    //   delayCounter++;
    // }
    // if (delayCounter < buttDelay + 20) {
    //   delayCounter++;
    // }
    //text('speed of main conv: ' + round(mainConvSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 400, 55);
    //text('speed of takeAway conv: ' + round(takeAwayConvSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 100, 320);



    productTotal = 60 * ((1.0 / finalNorthProductSpeed) + (1.0 / finalSouthProductSpeed) + (1.0 / finalButtSpeed));
    totalInches = productTotal * (loinLength + buttLength) / 2;

    fill(255);

    //print(finalNorthProductSpeed)
    // print(spaceBtProducts_north);
    // if (loinNorth.body.length == 0) {
    //   loinNorth.addProduct();
    // }
    // //print(spaceBtProducts_north)
    // try {
    //   if (round(width - loinNorth.body[loinNorth.body.length - 1].x, 1) >= round(spaceBtProducts_north, 1)) {
    //     loinNorth.addProduct();
    //     timeCountSouthConv = timeCount + 4;
    //     productCount++;
    //   }
    // } catch (error) {}


    // print(spaceBtProducts_north);

    // if (Butt.body.length == 0) {
    //   Butt.addProduct();
    // }
    //print(spaceBtProducts_north)
    // try {
    //   if (round(width - Butt.body[Butt.body.length - 1].x, 1) >= round(spaceBtProducts_butt, 1)) {
    //     Butt.addProduct();
    //     timeCountSouthConv = timeCount + 4;
    //     productCount++;
    //   }
    // } catch (error) {}


    // if (addRandom) {
    //   currentNorthSpeed = averageRandom(meanNorthProductSpeed, 1);
    // }

    if (addRandom) {
      if (timeCountNorthConv <= timeCount) {
        loinNorth.addProduct();
        productCount++;
        productCountTotal++;
        timeCountNorthConv = timeCount + finalNorthProductSpeed;
        cycleTimeCalcNorth = finalNorthProductSpeed;
      }
      if (timeCountSouthConv <= timeCount) {
        loinSouth.addProduct();
        productCount++;
        productCountTotal++;
        timeCountSouthConv = timeCount + finalSouthProductSpeed;
        cycleTimeCalcSouth = finalSouthProductSpeed;
      }
      if (timeCountButtConv <= timeCount) {
        Butt.addProduct();
        productCount++;
        productCountTotal++;
        timeCountButtConv = timeCount + finalButtSpeed;
        cycleTimeCalcButt = finalButtSpeed;
      }
    }
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



    if (!addRandom) {
      if (nfc(timeCount % finalButtSpeed, 1) <= 0.1 && timeCountButtConv <= timeCount && butt_allowed) {
        Butt.addProduct();
        timeCountButtConv = timeCount + 2;
        productCount++;
        productCountTotal++;
      }

      if (nfc(timeCount % finalNorthProductSpeed, 1) <= 0.1 && timeCountNorthConv <= timeCount && north_allowed) {
        loinNorth.addProduct();
        timeCountNorthConv = timeCount + 2;
        productCount++;
        productCountTotal++;
      }
      if (nfc(timeCount % finalSouthProductSpeed, 1) <= 0.1 && timeCountSouthConv <= timeCount && south_allowed) {
        loinSouth.addProduct();
        timeCountSouthConv = timeCount + 2;
        productCount++;
        productCountTotal++;
      }
    }
    distance = conv12Speed * cycleCount * 60 * simulationSpeed / (timeCount)



    loinNorth.update();
    loinSouth.update();
    Butt.update();
    Indexer.update();
    loinNorth.show();
    loinSouth.show();
    Butt.show();
    Indexer.show();


  }
  index_north = 0;
  index_south = 0;
  index_butt = 0;
  indexer_counter = 0;
  for (let i = 0; i < Indexer.index.length; i++) {
    if (Indexer.index[i] == false && Indexer.type[i] == "North") {
      index_north++
    }
    if (Indexer.index[i] == false && Indexer.type[i] == "South") {
      index_south++
    }
    if (Indexer.index[i] == false && Indexer.type[i] == "Butt") {
      index_butt++
    }
    if (Indexer.counter[i] == true) {
      indexer_counter++
    }
  }

  push()
  if (index_north == 0) {
    fill(0, 255, 0)
    previous_index_north = timeCount;
    index_north_wait = 0;
  } else {
    fill(255, 0, 0)
    index_north_wait = timeCount - previous_index_north;
  }
  ellipse(340, 135, 10, 10)
  pop()

  push()
  if (index_south == 0) {
    fill(0, 255, 0)
    previous_index_south = timeCount;
    index_south_wait = 0;
  } else {
    fill(255, 0, 0)
    index_south_wait = timeCount - previous_index_south;
  }
  ellipse(340, 158.7, 10, 10)
  pop()

  push()
  if (index_butt == 0) {
    fill(0, 255, 0)
    previous_index_butt = timeCount;
    index_butt_wait = 0;
  } else {
    fill(255, 0, 0)
    index_butt_wait = timeCount - previous_index_butt;
  }
  ellipse(340, 182.4, 10, 10)
  pop()

  push()
  noFill()
  stroke(255)

  rect(width - 165, 44, 250, 23.7) //#1
  rect(width - 165, 114, 250, 23.7) //#2
  rect(width - 41, 456, 41, 23.7) //#7

  rect(340, 135, 60, 24) //north index
  rect(340, 159, 60, 22.4) // south index
  rect(340, 179, 60, 24) //butt index
  rect(990, 210, 155, 200)
  pop()
  push()
  textSize(28);
  fill(255, 255, 0)
  if (addRandom == true && indexerMode == false) {
    text('Current Condition', 30, 280);
  }
  if (addRandom == false && indexerMode == false) {
    text('Product Sequenced on Main Tables', 30, 280);
  }
  if (addRandom == true && indexerMode == true) {
    text('Product Indexed', 30, 280);
  }

  fill(255);
  text('Simulation Speed: ', 30, 320);
  fill(255, 0, 0);
  text('CONTROLS', 990, 200);
  fill(255, 255, 0);
  text(simulationSpeed + 'X', 265, 320);
  pop();

  push()
  textSize(20);
  text("North wait: " + nfc(index_north_wait, 1) + " Seconds", 250, 40);
  text("south wait: " + nfc(index_south_wait, 1) + " Seconds", 250, 60);
  text("Butt wait  : " + nfc(index_butt_wait, 1) + " Seconds", 250, 80);
  text("1", width - 50, 35);
  text("2", width - 50, 105);
  text("3", width - 290, 35);
  text("4", width - 290, 105);
  text("5", width - 850, 125);
  text("6", width - 680, 180);
  text("7", width - 25, 445);
  text("8", width - 290, 445);
  text("9", width - 690, 360);
  text("10", width - 760, 250);
  text("11", width - 940, 125);
  text("12", width - 1050, 200);

  text('conv1: ' + conv1Speed_ftmin + ' ft/min', x_block, y_block);
  text('conv2 : ' + conv2Speed_ftmin + ' ft/min', x_block, y_block + 20);
  text('conv3: ' + conv3Speed_ftmin + ' ft/min', x_block, y_block + 40);
  text('conv4: ' + conv4Speed_ftmin + ' ft/min', x_block, y_block + 60);
  text('conv5: ' + conv5Speed_ftmin + ' ft/min', x_block, y_block + 80);
  text('conv6 : ' + conv6Speed_ftmin + ' ft/min', x_block, y_block + 100);
  text('conv7: ' + conv7Speed_ftmin + ' ft/min', x_block, y_block + 120);
  text('conv8: ' + conv8Speed_ftmin + ' ft/min', x_block, y_block + 140);
  text('conv9: ' + conv9Speed_ftmin + ' ft/min', x_block, y_block + 160);
  text('conv10: ' + conv10Speed_ftmin + ' ft/min', x_block, y_block + 180);
  text('conv11: ' + conv11Speed_ftmin + ' ft/min', x_block, y_block + 200);
  text('conv12: ' + conv12Speed_ftmin + ' ft/min', x_block, y_block + 220);

  text('Time in sec: ' + round(timeCount) + ' sec |' + ' time in hr: ' + nfc(timeCount / 3600, 1) + ' hrs', 30, 360);

  text("products on indexer: " + indexer_counter, 200, 230);
  // text('conv1: ' + round(conv1SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block);
  // text('conv2 : ' + round(conv2SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 20);
  // text('conv3: ' + round(conv3SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 40);
  // text('conv4: ' + round(conv4SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 60);
  // text('conv5: ' + round(conv5SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 80);
  // text('conv6 : ' + round(conv6SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 100);
  // text('conv7: ' + round(conv7SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 120);
  // text('conv8: ' + round(conv8SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 140);
  // text('conv9: ' + round(conv9SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 160);
  // text('conv10: ' + round(conv10SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 180);
  // text('conv11: ' + round(conv11SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 200);
  // text('conv12: ' + round(conv12SpeedSave * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', x_block, y_block + 220);
  // text('Time in sec: ' + round(timeCount) + ' sec |' + ' time in hr: ' + nfc(timeCount / 3600, 1) + ' hrs', 30, 360);
  text('Product feed rate: ' + nfc(60 * productCountHelper1, 1) + ' Products/Min | ' + round(nfc(60 * productCountHelper1, 1) * 60 / 4) + ' Hogs/Hr', 30, 380);
  text("Space between products at the end: " + nfc(spaceBtProducts, 1) + " inches", 30, 400);
  text("Plant Speed Total: " + round(nfc(60 * productCountTotal / timeCount, 1) * 60 / 4) + " Hogs/Hr", 30, 420);
  // text("Product count: " + nfc(60 * productCountHelper1, 1) + " p/m", 30, 420);
  // textAlign(CENTER)
  text('Indexer speed \nmultiplier:', Speed_Slider.x + 5, Speed_Slider.y - Speed_Slider.height - 15);
  fill(255, 255, 0);
  text(indexer_speed_multiplier + 'X', Speed_Slider.x + 30 + (Speed_Slider.width / 2), Speed_Slider.y + Speed_Slider.height - 20);
  pop()


  if (debugMode) {
    for (let i = 0; i < width; i += 30) {
      text(i, i, height);
      text(i, i, 10);
    }
    for (let i = 0; i < height; i += 30) {
      text(i, 0, i);
    }
  }
}