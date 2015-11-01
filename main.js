var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvasWidth=500;
canvasHeight=500;

function setSeconds(sec) {
  ctx.save();
  ctx.translate(canvasWidth/2, canvasWidth/2);
  for (var x=1; x<=sec; x++){
    ctx.rotate(Math.PI / 30);
  }
  ctx.translate(-canvasWidth/2, -canvasWidth/2);
  ctx.fillStyle = "crimson";
  ctx.fillRect(249, 0, 2, 250);
  ctx.restore();
}

function setMinutes(min) {
  ctx.save();
  ctx.translate(canvasWidth/2, canvasWidth/2);
  for (var x=1; x<=min; x++){
    ctx.rotate(Math.PI / 30);
  }
  ctx.translate(-canvasWidth/2, -canvasWidth/2);
  ctx.fillStyle = "blue";
  ctx.fillRect(248, 25, 4, 225);
  ctx.restore();
}

function setHours(hrs) {
  ctx.save();
  ctx.translate(canvasWidth/2, canvasWidth/2);
  for (var x=1; x<=hrs; x++){
    ctx.rotate(Math.PI / 6);
  }
  ctx.translate(-canvasWidth/2, -canvasWidth/2);
  ctx.fillStyle = "blue";
  ctx.fillRect(248, 75, 4, 175);
  ctx.restore();
}

function draw() {
  var current = new Date();
  var sec = current.getSeconds();
  var min = current.getMinutes();
  var hrs = current.getHours();
  if (hrs > 12) {
      hrs -= 12;
  } else if (hrs === 0) {
     hrs = 12;
  }

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  setSeconds(sec);
  setMinutes(min);
  setHours(hrs);
}

setInterval(draw, 500);
