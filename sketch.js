let canvasXpos = 500;
let canvasYpos = 400;
let myCam
let AiLink = "https://teachablemachine.withgoogle.com/models/fi2GILyIr/"

function preload(){
  classifier = ml5.imageClassifier(AiLink + 'model.json')
}

function setup() {
  createCanvas(canvasXpos, canvasYpos , WEBGL);
  myCam = createCamera();
  video = createCapture(VIDEO);
  video.hide();
  printLabel();
  classifyVideo();
  CallRandom();
}

function draw() {
  background(255, 204, 0);
  frameRate(120)
  Movement();
  myCam.move(xposCam, 0 , 0)
  CreateObstacles()
  Lose()
  print(canGoRight)
}

function CallRandom() {
  widthObstacle = random(25, 30);
  heightObstacle = random(200, 320);
  yPosObstacle = random([-200, (canvasYpos / 2 - heightObstacle)]); // When X position and Y position are zero , it is the centre
  xPosObstacle = xPosObstacle + random(500 , 525);
}
