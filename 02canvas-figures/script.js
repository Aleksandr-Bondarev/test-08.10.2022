const canvasCircle = document.getElementById('canvas-circle');
const ctxCircle = canvasCircle.getContext('2d');

const canvasMain = document.getElementById('canvas-main');
const ctxMain = canvasMain.getContext('2d');

const circle = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: '#41a4f0',
  draw: function () {
    ctxCircle.beginPath();
    ctxCircle.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctxCircle.closePath();
    ctxCircle.fillStyle = this.color;
    ctxCircle.fill();
  },
};

function drawCircle() {
  ctxCircle.clearRect(0, 0, canvasCircle.width, canvasCircle.height);
  circle.draw();
  circle.x += circle.vx;
  circle.y += circle.vy;
  raf = window.requestAnimationFrame(drawCircle);
  if (circle.y + circle.vy > canvasCircle.height || circle.y + circle.vy < 0) {
    circle.vy = -circle.vy;
  }
  if (circle.x + circle.vx > canvasCircle.width || circle.x + circle.vx < 0) {
    circle.vx = -circle.vx;
  }
}

window.onload = () => {
 window.requestAnimationFrame(drawCircle);
}

canvasCircle.addEventListener('mouseout', function (e) {
  raf = window.requestAnimationFrame(drawCircle);
});

canvasCircle.addEventListener('mouseover', function (e) {
  window.cancelAnimationFrame(raf);
});

circle.draw();

//rectangle
ctxMain.fillStyle = '#72c92a';
ctxMain.fillRect(110, 35, 50, 30);

//triangle
ctxMain.fillStyle = "#db3962";
ctxMain.beginPath();
ctxMain.moveTo(45,50);
ctxMain.lineTo(100,75);
ctxMain.lineTo(100,25);
ctxMain.fill();

//square
let x = 50;
ctxMain.fillStyle = "#b629f2";
ctxMain.fillRect(170,35,30,30);
