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
ball.src = 'http://clipartsign.com/upload/2015/12/02/soccer-ball-clip-art-sports-3.png';

var court = new Image();
court.src = 'http://dtfjihky7xwic.cloudfront.net/sites/default/files/styles/article_image/public/Sports/lakers-staples-center.jpg?itok=63E3xD2B';

var img = new Image();
img.src = 'http://i.imgur.com/bh1VImJ.png';

var x = 260
var y = 120
var vY = -3
var gravity = .1
var zX = 170
var vX = 0
var random
var score = 0
var D = 2

function draw() {

  ctx.drawImage(court, 0, 0, 750, 450);
  ctx.drawImage(img, zX, 190, 250, 450);
  //ctx.drawImage(ball, x, y, 75, 75);

  vY += gravity
  y += vY

  if (y >= 120 && y <= 140 && x >= (zX + 58) && x <= (zX + 130)) {
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
  
  if(zX >= canvas.width){
    zX = -269
  }
  
  if(zX <= -270){
    zX = canvas.width - 1
  }
  
  requestAnimationFrame(draw)
}
requestAnimationFrame(draw)