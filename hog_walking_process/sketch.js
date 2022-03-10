// MAIN CONTROLS
let simulationSpeed = 2;
let frames =60
let gate1 = 0
let gate2 = 0
let debug = true
let sequenceOfEvents = 0
let counter = 0
function setup() {
  frameRate(frames)
  angleMode(DEGREES);
  bg = loadImage('background.png');

  createCanvas(936, 1118);

  pigs = new pig();
  marchs = new march();
  loadouts = new loadOut();
  backs = new back();
  dones = new done();
  pigs.add()
}


function draw() {

for (let i = 0; i < simulationSpeed; i++) {
counter ++;
  background(bg);

  if (counter ==150){
    sequenceOfEvents ++
    
  }
  if (counter ==400){
    sequenceOfEvents ++
    
  } 
    if (counter ==600){
    sequenceOfEvents ++
    
  } 
  fill(255);
  noStroke()
  rect(650, 95, 20, 69);
  rect(650, 672, 20, 69);


  pigs.update()
  pigs.show()
    marchs.update()
  marchs.show()
  loadouts.update()
  loadouts.show()
  backs.update()
  backs.show()
  dones.update()
  dones.show()
  push()
  stroke(0)
  line(657, 95, 657 - (47.37 * gate1 / 100), 95 + 67 - (19.62 * gate1 / 100))
  if (gate1 < 110 && (sequenceOfEvents == 0||sequenceOfEvents == 6)) {
    gate1++;
  }
    if (gate1 > 0 && sequenceOfEvents == 5) {
    gate1--;
  }
  pop()

  push()
  stroke(0)
 line(657, 672, 657 - (47.37 * gate2 / 100), 672 + 67 - (19.62 * gate2 / 100))
  if (gate2 < 110 && (sequenceOfEvents == 1||sequenceOfEvents == 5)) {
    gate2++;
  }
    if (gate2 > 0 && (sequenceOfEvents == 4||sequenceOfEvents == 6) ) {
    gate2--;
  }
  pop()

push() 

  if(sequenceOfEvents == 2 ||sequenceOfEvents == 3||sequenceOfEvents == 4){
    fill(0,255,0);
    rect(780,305,40,10)
  }
    if(sequenceOfEvents == 5 ||sequenceOfEvents == 6){
    fill(0,255,0);
    rect(780,525,40,10)
  }
  pop()
 
  
  fill(0)
  if (debug) {
    for (let i = 0; i < width; i += 30) {
      text(i, i, height);
      text(i, i, 10);
    }
    for (let i = 0; i < height; i += 30) {
      text(i, 0, i);
    }
  }

}
}