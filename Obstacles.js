let xPosObstacle = - canvasXpos/2 - 100
let yPosObstacle 
let widthObstacle 
let heightObstacle 

function CreateObstacles(){
    fill("red")
    rect(xPosObstacle , yPosObstacle , widthObstacle , heightObstacle)
    if (x - xPosObstacle > 80 ){
        CallRandom()
    }
}

function Lose(){
    if (xPosObstacle - x < 10 && xPosObstacle - x > 0 ){
        if( yPosObstacle == -200  ){
            if(y < yPosObstacle + heightObstacle ){
                valueAddedOnX = 0
                valueYPlayer = 0
            }
        }
        else{
            if (y > (canvasYpos / 2 - heightObstacle)){
                valueAddedOnX = 0
                valueYPlayer = 0
            }
        }
    }
}