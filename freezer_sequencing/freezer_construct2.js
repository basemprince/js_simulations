addition = 500
function freezer_construct2(){
   for (let i = 0; i <= 49; i++) {
    if (i == 9 || i == 19 || i == 29 || i == 39 || i == 49) {
      push()

      if (i == 9 || i == 29 || i == 49) {
        strokeWeight(14)
        stroke(0, 0, 255)
        line((i * 20) + separator + 55, 210+addition, (i * 20) + separator + 55, 360+addition)
      }
      strokeWeight(7)
      stroke(0)
      line((i * 20) + separator + 55, 100+addition, (i * 20) + separator + 55, 480+addition)

      pop()
      separator += 30;
    }
    fill(0)
    if (i < 49) {
      line((i * 20) + separator + 50, 150+addition, (i * 20) + separator + 50, 435+addition)
      push()
      textAlign(CENTER)
      text(i + 32, (i * 20) + separator + 50, 147+addition)

      pop()
    }
  }
   separator = 0;
}