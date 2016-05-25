var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

var keys = [];

document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

var ball = new Image();
ball.src = 'http://tjmaxxlandred.github.io/Images/Ball.png';

var court = new Image();
court.src = 'http://tjmaxxlandred.github.io/Images/court.jpg';

var img = new Image();
img.src = 'http://tjmaxxlandred.github.io/Images/The.man.png';

//coordinates of ball
var x = 260
var y = 120

//movement of ball
var vY = -3
var gravity = .1

//coordinates of Zlatan
var zX = 170
var vX = 0

//determines angle in which ball bounces
var random

var score = 0

//distance of bounce
var D = 2

function draw() {

  ctx.drawImage(court, 0, 0, 750, 450);
  ctx.drawImage(img, zX, 190, 250, 450);
  ctx.drawImage(ball, x, y, 75, 75);

//vertical movement. gravity creates bounce
  vY += gravity
  y += vY

//check for if the ball hits Zlatan's head
  if (y >= 120 && y <= 140 && x >= (zX + 58) && x <= (zX + 130)) {
    
//bounces off head if between zX's
//if D increases, so does vX
    vY = -3.5
    score += 1
    random = Math.random()
    if (random >= .5) {
      vX = -(Math.random() * D)
      D += .2
    } else {
      vX = Math.random() * D
      D += .2
    }
  }
  
  //horizontal movement of balllllll
  x += vX
  if (x >= 675 || x <= 0) {
    vX = -vX
  }

  if (keys[37]) { //left arrow
    zX -= 10
  }

  if (keys[39]) { //right arrow
    zX += 10
  }

  ctx.font = "30px times";
  ctx.fillStyle = "purple"
  ctx.fillRect(0, 30, canvas.width, 30)
  ctx.fillStyle = "Gold"
  ctx.fillText(score, 420, 55)
  ctx.fillText("Score:", 320, 55)

  if (y >= 400) {
    y = 120
    vY = -3
    x = Math.random() * 675
    score = 0
    D = 2
  }
  
  //if Zlatan reaches end, he spawns back on other side
  if(zX >= canvas.width){
    zX = -269
  }
  
  if(zX <= -270){
    zX = canvas.width - 1
  }
  
  requestAnimationFrame(draw)
}
requestAnimationFrame(draw)
