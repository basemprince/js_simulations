let prod;
let trimConSpeed = 0.05;
let first = true;
let blockLength = 12;
let simulationSpeed = 30;
let cycleCount = 0;
let blockCount = 1;
// let productList = ['Trim\n#2','Belly\nFlank','Sirloin\nBnin\na','Sirloin\nBnin\nb', 'Neck\nBones\na','Neck\nBones\nb','Trim4\nShld\na','Trim4\nShld\nb','Tibia','Aitch','Trim4\nButt','Trim1','Membr\nHam','Trim3\na','Trim3\nb','Trim#3\nFLCR\na','Membrane\nTender','Trim#3\nFLCR\nb','Sirloin\nBone']
// let productArrivalTime = [27.0498732,55.41125541,57.3939557,60.3939557,46.70807453,49.70807453,107.5630252,110.5630252,67.51879699,70.51879699,182.8571429,211.6402116,230.8802309,282.1869489,285.1869489,415.5844156,466.4723032,470.4723032]

let productList = ['Trim\n#2', 'Neck\nBones\na', 'Neck\nBones\nb', 'Belly\nFlank', 'Sirloin\nBnin\na', 'Sirloin\nBnin\nb', 'Tibia', 'Aitch', 'Trim4\nShld\na', 'Trim4\nShld\nb', 'Trim4\nButt', 'Sirloin\nBone', 'Trim1', 'Membr\nHam', 'Trim3\na', 'Trim3\nb', 'Trim#3\nFLCR\na', 'Trim#3\nFLCR\nb', 'Membrane\nTender']
let productArrivalTime = [27.0498732, 46.70807453, 49.70807453, 55.41125541, 57.3939557, 60.3939557, 67.51879699, 70.51879699, 107.5630252, 110.5630252, 182.8571429, 200, 211.6402116, 230.8802309, 282.1869489, 285.1869489, 410, 412, 415.5844156]
let cycleTime = [4.25, 2.170833333, 2.170833333, 4.565166667, 4.799833333, 4.799833333, 3.625, 3.625, 3.598, 3.598, 3.2125, 2.25, 2.240333333, 4.9445, 5.72, 5.72, 6.911666667, 6.911666667, 2.8985];
let productionSequence = [];
let binAcc = 0;
let maxBinAcc = 0;
let binLocations = [];
let checker = false;
binLocations.length = 16;
let delay = 0;
let stopMode = true;
let averageEating = 0.028;
let kgPerPixel = 2.43506;
let removalSpeed = 0.002;
let kgPerCycle = kgPerPixel * removalSpeed;
let requiredCycles = averageEating / kgPerCycle;
let compensator = 1;
let timeDisplayed = 0;
let total = 0;
let currentProduct = '';
function setup() {
  createCanvas(600, 400);
  prod = new product();
  bin = new bins();
  operator = new operators();
  for (let i = 0; i <= productList.length - 1; i++) {
    for (let j = 1; j <= 18; j++) {
      if (productArrivalTime[i] * j < 455) {
        productionSequence[productionSequence.length] = [productArrivalTime[i] * j, productList[i], 0, cycleTime[i]];

      }
    }
  }
  productionSequence.sort(function(a, b) {
    return a[0] - b[0];
  });
  let j = 0;
  binLocations[0] = [450, 190, 0, 999999]
  for (let i = 1; i <= binLocations.length - 1; i++) {
    binLocations[i] = [370 + j, 150, 0, 999999]
    //rect(binLocations[i][0],binLocations[i][1],48,44);
    i++;
    binLocations[i] = [370 + j, 50, 0, 999999]
    //rect(binLocations[i][0],binLocations[i][1],48,44);

    j -= 50;
  }
  //console.log(productionSequence);

}

function draw() {

  cycleCount++;
  for (let i = 0; i < simulationSpeed; i++) {
    background(220);
    push()
    textSize(20);
    textAlign(CENTER);
    fill(0);
    text('simulation Speed: \n' + simulationSpeed + 'X', 520, 20);
    pop();
    timeCount = (millis() * simulationSpeed / 1000);
    cycleTimeRatio = cycleCount / timeCount;
    compensator = requiredCycles / cycleTimeRatio
    //text(cycleTimeRatio, 100,100);
    fill(0);
    text('time in sec: ' + round(timeCount) + ' sec |' + ' time in min: ' + nfc(timeCount / 60, 1) + ' min |' + ' time in hr: ' + nfc(timeCount / 3600, 1) + ' hrs', 10, 10);


    rect(50, (height * 2 / 3) - (30 / 2), 360, 30)
    rect(55 + 360, (height * 2 / 3) - (50 / 2), 100, 50);
    for (let i = 0; i <= 4; i++) {
      rect((i * 70) + 50, (height * 2 / 3) + (30 / 2) + 5, 24, 24);
      rect((i * 70) + 80, (height * 2 / 3) - 30 - 15, 24, 24);
    }
    if (first) {
      prod.addProduct();
      first = false;
    }
    prod.update();
    prod.show();
    bin.update();
    bin.show();
    fill(0);
    text('speed of main conv: ' + round(trimConSpeed * cycleCount * 60 * simulationSpeed / (timeCount * 12)) + ' ft/min', 10, 25);

    for (let i = 0; i <= productionSequence.length - 1; i++) {
      if (productionSequence[i][0] <= (timeCount / 60)) {
        if (productionSequence[i][2] == 0) {
          checker = true;
        }
        productionSequence[i][2] = 1;
        if (checker) {
          bin.addProduct(productionSequence[i][1], productionSequence[i][0], productionSequence[i][3]);
          checker = false;
          //binAcc++;
        }
      }
    }
    binAcc = bin.body.length;
    if (binAcc > maxBinAcc) {
      maxBinAcc = binAcc;
    }
    //print( "      "+bin.body.length)
    for(let i =0; i< operator.body.length; i++){
      total += operator.body[i]
    }
    //print(total);
    text('Bin Accumulation: ' + binAcc, 10, 40);
    text('Max Bin Accumulation so far: ' + maxBinAcc, 10, 55);
    text('Time taken to process current bin: ' + round(timeDisplayed) + ' seconds | ' + nfc(timeDisplayed / 60, 1) + ' minutes', 200, 350)
        text('Bins processed: ' + binsProcessed, 200, 365)
    for (let i = 0; i < operator.body.length; i++) {
      text('Operator ' + (i + 1) + ": " + round(operator.body[i]) + " | % from total = "+ nfc(operator.body[i]*100/total,1) + " %" , 12, (i * 15) + 80);
    }
    total = 0;
  }
}