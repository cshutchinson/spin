var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


canvasWidth=500;
canvasHeight=500;

function setSeconds(sec) {
  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.translate(canvasWidth/2, canvasWidth/2);
  for (var x=1; x<=sec; x++){
    ctx.rotate(Math.PI / 30);
  }
  ctx.translate(-canvasWidth/2, -canvasWidth/2);
  ctx.fillStyle = "crimson";
  ctx.fillRect(249, 0, 2, 250);
  // ctx.save();
}

function rotate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.translate(canvasWidth/2, canvasWidth/2);
  ctx.rotate(Math.PI / 30);
  ctx.translate(-canvasWidth/2, -canvasWidth/2);
  ctx.fillStyle = "crimson";
  ctx.fillRect(249, 0, 2, 250);
  // ctx.save();
}
var sec = 58;
setSeconds(sec);
setInterval(rotate, 1000);
