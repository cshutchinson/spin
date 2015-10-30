var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


function draw() {
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function rotate() {

  canvasWidth=800;
  canvasHeight=300;

  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Move registration point to the center of the canvas
  ctx.translate(canvasWidth/2, canvasWidth/2);

  // Rotate 1 degree
  ctx.rotate(Math.PI / 180);

  // Move registration point back to the top left corner of canvas
  ctx.translate(-canvasWidth/2, -canvasWidth/2);

  ctx.fillStyle = "red";
  ctx.fillRect(canvasWidth/4, canvasWidth/4, canvasWidth/2, canvasHeight/4);
  ctx.fillStyle = "blue";
  ctx.fillRect(canvasWidth/4, canvasWidth/2, canvasWidth/2, canvasHeight/4);

}

draw();
setInterval(rotate, 1)
