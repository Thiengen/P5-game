let x = - 180
let y = 0
let canGoRight = false ;
let xposCam = 0
let valueAddedOnX = 10
let valueYPlayer = 10
function Movement(){
  fill('blue');
  circle (x, y, 20)
  
  if (canGoRight == true ){
    x = x + valueAddedOnX
    xposCam = valueAddedOnX
  }
  else  {
    xposCam = 0
  }
  UpDownMovement()
}

function UpDownMovement(){
  if (label == "Open" && (y > - (canvasYpos/2 - 15))){
    canGoRight = true
    y = y - valueYPlayer
    Labeltext.hide();
  }
  else if (label == "Close" && (y < (canvasYpos/2 - 15))){
    canGoRight = true
    y = y + valueYPlayer
    Labeltext.hide();
  }
  else if (label == "Nothing"){
    canGoRight = true
    Labeltext.hide();
  }
}