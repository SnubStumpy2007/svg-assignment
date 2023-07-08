const SVG = require('svg.js');
const inquirer = require('inquirer');


var draw = SVG().addTo('#drawing')
rect = draw.rect(100, 100).fill('f06')