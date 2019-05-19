let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

var x= canvas.width/2;
var y= canvas.height-30;
var dx=2;
var dy=-2;
var ballRadius = 10;
var paddleHeight= 10;
var paddleWidth=75;
var paddleX=(canvas.width-paddleWidth)/2;
var obstacleHeight= 5;
var obstacleWidth=100;
var obtacleX=(canvas.width-obstacleWidth)/2;


var paddleDx =7;
var score=0;

var rightPress;
var leftPress;
var brick1;
var brick2;
var brick3;
var brick4;
var brick5;


function keyDownHandler(event){
  if(event.keyCode==39){
    rightPress=true;
  }else if(event.keyCode==37){
    leftPress=true;
  }
}
function keyUpHandler(event){
  if(event.keyCode==39){
    rightPress=false;
  }else if(event.keyCode==37){
    leftPress=false;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler,false);

function collisionDetection() {
  }

function drawBall(){
  context.beginPath();
  context.arc(x,y ,ballRadius, 0, Math.PI*2);
  context.fillStyle="#17e8da";
  context.fill()
  context.closePath();
}

function drawPaddle(){
  context.beginPath();
  context.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  context.fillStyle="#00a89d";
  context.fill()
  context.closePath();
}

function drawObstacle(){
  context.beginPath();
  context.fillStyle='#000';
  context.fillRect(obtacleX, (canvas.height-obstacleHeight)/2 , obstacleWidth, obstacleHeight);
  context.fill();
  context.closePath();
  
}


function drawBrick(){
  
  context.beginPath();
  context.fillStyle='#f00';
  context.fillRect(50, 50, 80 ,20);
  context.fill();
  context.closePath();
  
  context.beginPath();
  context.fillStyle='#00f';
  context.fillRect(160, 50, 80 ,20);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle='#0f0';
  context.fillRect(270, 50, 80 ,20);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle='#800080';
  context.fillRect(107, 85, 80 ,20);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle='#ff0';
  context.fillRect(214, 85, 80 ,20);
  context.fill();
  context.closePath();
}
function drawScore() {
  context.font = "16px Arial";
  context.fillStyle = "#0095DD";
  context.fillText("Score: "+score, 8, 20);
}

function draw(){
  
  context.clearRect(0,0,canvas.width, canvas.height);
  drawBall();
  //collisionDetection();
  drawPaddle();
  drawBrick();
  drawScore();
  drawObstacle();

  if(x+ dx > canvas.width- ballRadius|| x + dx < ballRadius){
    dx= -dx;
  }
  if(y+ dy < ballRadius || (y + dy > canvas.height - paddleHeight -ballRadius && x + dx > paddleX && x + dx < paddleX + paddleWidth)){
    dy= -dy;
  }else if(y+dy > canvas.height){
    alert("GAME OVER!");
    location.reload();
  }

  
  
  
  if(rightPress && (paddleX + paddleWidth)< canvas.width){
    paddleX += paddleDx;
  }else if(leftPress && paddleX> 0){
    paddleX -= paddleDx;
  }

  x += dx;
  y += dy;

  requestAnimationFrame(draw);

}
requestAnimationFrame(draw);