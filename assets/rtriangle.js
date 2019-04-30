// code from https://codepen.io/jonnorstrom/pen/VKkrbr

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

var canvas = document.getElementById("triangles");
canvas.width = document.documentElement.offsetWidth
canvas.height = document.documentElement.offsetHeight

var ctx = canvas.getContext("2d");
ctx.lineWidth = convertRemToPixels(0.2);
ctx.fillStyle = "#fafafa";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var colors = ['rgba(214, 144, 239, 0.2)', 'rgba(119, 197, 219, 0.2)', 'rgba(254, 74, 73, 0.2)', 'rgba(42, 183, 202, 0.2)', 'rgba(254, 215, 104, 0.2)', 'rgba(0, 91, 150, 0.2)']

// will make a feasable amount of triangles to fit the screen
var amount = randomInt(2, 10);

for (var i = 0; i < amount; i++) {
  makeTriangle(colors[randomInt(0, colors.length - 1)], colors[randomInt(0, colors.length - 1)]);
}

function makeTriangle(fillColor, borderColor) {
  console.log(fillColor);
  console.log(borderColor);
  var coordinates = getStart();
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
  ctx.beginPath();
  drawLines(coordinates);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function getStart() {
  startArray = {};
  startArray.x = Math.floor((Math.random() * canvas.width) + 1);
  startArray.y = Math.floor((Math.random() * canvas.height) + 1);
  return startArray
}

function drawLines(coordinates) {
  ctx.moveTo(coordinates.x, coordinates.y);
  ctx.lineTo(coordinates.x + randomInt(-500, 400), coordinates.y + randomInt(-400, 500));
  ctx.lineTo(coordinates.x + randomInt(-500, 400), coordinates.y + randomInt(-400, 500));
  ctx.lineTo(coordinates.x, coordinates.y);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.style.background = "url(" + canvas.toDataURL() + ")";