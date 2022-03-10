// MAIN CONTROLS
let date = "2019-04-22"
let table;
let separator = 0;
let hogs_rail = 128;
let simulation_iterations = 150

let debugMode = false
let showDetails = false
let hogs = 0;
let hogs2 = 0;
let tattoo_array = []
let tattoo_array_shuffle = []
let tattoos_colored = []
let held_rail = []
let capacity = hogs_rail * 49
let counter = 0;
let counter2 = 0;
let randomList = []
let randomAdd = 0
let color_brightness = 255
let percent_acc = 0
let total_percent_acc = 0;
let iteration_percent_acc = 0;
let iteration_total_per = 0;
let acc_array = []
let separator3 = 120;
let hogs_per_15min = 10;
let production_speed_hr = 540
let production_speed_m = production_speed_hr / 60
let fill_sequence = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 32, 33, 34, 35, 36, 37, 38, 39, 40]
let y_ = 0;
let y_1 = 0;
let x_ = fill_sequence[0] - 32;
let x_1 = fill_sequence[0] - 32;
let x_pusher = 0;
let x_1_pusher = 0;
let input_list = []

function setup() {
  frameRate(frames)
  angleMode(DEGREES);
  cycleCount = 0;
  rail = new rails();
  rail2 = new rails2();
  createCanvas(1180, 1020);
  freezer_construct();
  freezer_construct2();
//   for(i=0;i<49;i++){
//    input_list[input_list.length]= createInput('128');
//   input32.position(30, 45);
// }
  column1 = table.getColumn('tattoo');
  column2 = table.getColumn('count');
  column3 = table.getColumn('date');



  input = createInput('128');
  input.position(570, 45);
  input1 = createInput('10');
  input1.position(570, 65);
  button = createButton('run simulation');
  button.position(input.x + input.width, 55);
  simulation()
  button.mousePressed(simulation);

}

const distinct = (value, index, self) => {
  return self.indexOf(value) === index;
}

function preload() {
  table = loadTable('sequence_1.csv', 'csv', 'header');
}

function simulation() {

  background(210);

  push()
  fill(0)
  text("hogs per rail", 500, 60)
  text("hogs held per 15 min", 455, 78)
  pop()
  freezer_construct();
  freezer_construct2();

  if (Number.isInteger(parseInt(input.value()))) {
    hogs_rail = input.value();
    capacity = hogs_rail * 49
  }
  if (Number.isInteger(parseInt(input1.value()))) {
    hogs_per_15min = input1.value();
  }
  for (let r = 0; r < column1.length; r++) {
    if (column3[r] == date) {
      for (let c = 0; c < column2[r]; c++) {
        if (tattoo_array.length <= capacity) {
          tattoo_array[tattoo_array.length] = column1[r]
        }
      }
    }
  }

  tattoo_array_shuffle = tattoo_array.slice()

  for (i = 0; i < tattoo_array.length; i++) {
    if (i >= randomAdd || i == 0) {
      randomAdd += (15 * production_speed_m);
      for (j = 0; j < hogs_per_15min; j++) {
        randomList[randomList.length] = round(random(randomAdd - (15 * production_speed_m), randomAdd))
      }
    }
  }

  randomList.sort((a, b) => a - b)
  for (let i = 0; i < randomList.length; i++) {
    //how long in held rail
    randomList[i] = createVector(randomList[i], round(random((12 * production_speed_m), (45 * production_speed_m))))
  }

  for (let i = 0; i < randomList.length; i++) {
    array_move(tattoo_array_shuffle, randomList[i].x, randomList[i].y + randomList[i].x)
  }


  distinct_tattoo = tattoo_array.filter(distinct)

  for (let i = 0; i < distinct_tattoo.length; i++) {
    tattoos_colored[tattoos_colored.length] = createVector(random(color_brightness), random(color_brightness), random(color_brightness))
  }

  for (let j = 0; j < tattoo_array.length; j++) {
    if (counter >= capacity) {
      break
    }
    index = distinct_tattoo.indexOf(tattoo_array[j])
    index2 = distinct_tattoo.indexOf(tattoo_array_shuffle[j])
    if (index2 == -1) {
      index2 = 0
    }
    rail.addProduct(tattoo_array[j], index)
    rail2.addProduct(tattoo_array_shuffle[j], index2)
  }
  for (let j = 0; j < tattoo_array.length; j++) {
    if (j % hogs_rail == 0 && j > 0) {
      acc_array[acc_array.length] = (100 * percent_acc / hogs_rail).toFixed(0)
      percent_acc = 0
    }
    if (tattoo_array[j] == tattoo_array_shuffle[j]) {
      percent_acc++
      total_percent_acc++;
    }
  }

  average = sum_av(acc_array)
  total_percent_acc = total_percent_acc * 100 / rail.body.length;

  push()
  textSize(20);
  text('New Freezer Capacity at ' + hogs_rail + ' Hogs per rail:', 30, 30);
  text('Data from: ', 30, 55);
  text('Hogs Held every 15 mins: ', 30, 560);
  fill(200, 0, 255);
  text(rail.body.length + ' Hogs', 420, 30);
  text(date, 130, 55);
  text(hogs_per_15min + ' Hogs', 265, 560);
  textSize(26);
  fill(200, 0, 15);
  text('New Freezer [before held rails] ', 30, 85);
  text('New Freezer [after held rails] ', 30, 530);
  pop();
    push()
  textSize(20);
    textStyle(BOLD)
      text('ZONE 11', 95, 120);
          text('ZONE 12', 310, 120);
          text('ZONE 13', 530, 120);
          text('ZONE 14', 760, 120);
          text('ZONE 15', 980, 120);
    pop()
  acc_seq = fill_sequence[0] - 32
  for (i = 0; i < fill_sequence.length; i++) {
    if (acc_seq == 9 || acc_seq == 28 || acc_seq == 29 || acc_seq == 48) {
      separator3 -= 30;
    }
    acc_seq = fill_sequence[i] - 32
    push()
    fill(0, 0, 200)
    textSize(11)
    textAlign(CENTER)
    text(acc_array[i] + '\n%', (acc_seq * 20) + 50 + separator3, 950);
    pop()

  }
  push()
  textSize(20)
  textAlign(CENTER)
  text('Rail Accuracy: ' + (average).toFixed(1) + ' %', width / 2, 540);
  text('Total Accuracy: ' + (total_percent_acc).toFixed(1) + ' %', width / 2, 570);

  pop()
  if (debugMode) {
    for (let i = 0; i < width; i += 30) {
      text(i, i, height);
      text(i, i, 10);
    }
    for (let i = 0; i < height; i += 30) {
      text(i, width - 20, i)
      text(i, 0, i);
    }
  }
  
  rail.show()
  rail2.show()
  separator1 = 120
  separator2 = 120
  separator3 = 120
  y_ = 0;
  x_ = fill_sequence[0] - 32;
  x_pusher = 0;
  x_1 = fill_sequence[0] - 32;
  x_1_pusher = 0;
  y_1 = 0;
  percent_acc = 0;
  rail = new rails();
  rail2 = new rails2();
  hogs = 0;
  hogs2 = 0;
  tattoo_array = []
  tattoo_array_shuffle = []
  tattoos_colored = []
  held_rail = []
  counter = 0;
  counter2 = 0;
  randomList = []
  randomAdd = 0
  percent_acc = 0
  total_percent_acc = 0
  acc_array = []
}