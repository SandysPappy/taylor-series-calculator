// 801x801 pixels
graph = document.getElementById('graph');
ctx = graph.getContext('2d');

// props for the x and y axes
axes = {
  center: {
    x: graph.width / 2,
    y: graph.height / 2,
  },

  // with and height of dashed lines in pixels
  dash_w: 5,
  dash_h: 2,

  // space between dashes
  gap: 2,

  // maps one unit in the x or y axes to their respective pixel scales
  // typically want these to be the same scalar
  base_x: 2,
  base_y: 2,
};

// list of terms built
builtExpression = [];

// makes terms look nicer IMO
function createTerm(coefficient, power) {
  return { coeff: coefficient, pow: power };
}

function drawAxes() {
  drawXAxis();
  drawYAxis();
}

function drawYAxis() {
  // move about Y axis
  for (let i = 0; i < graph.height; i = i + axes.dash_w + axes.gap) {
    // draw dash
    ctx.beginPath();
    ctx.rect(axes.center.x, i, axes.dash_h, axes.dash_w);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.closePath();
  }
}

function drawXAxis() {
  // move about x axis
  for (let i = 0; i < graph.width; i = i + axes.dash_w + axes.gap) {
    // draw dash
    ctx.beginPath();
    ctx.rect(i, axes.center.y, axes.dash_w, axes.dash_h);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.closePath();
  }
}

// takes in a string representing a valid polynomial
// and returns the derivative of the polynomial
function getPolynomialDerivative() {}

// takes in a polynomial and returns the vaild version of the
function drawPolynomial() {}

drawAxes();
