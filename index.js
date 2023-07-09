const SVG = require('svg.js');
const inquirer = require('inquirer');
const fs = require('fs');

// function generateSVG(text, textColor, shape, shapeColor) {
//   const svg = SVG(document.documentElement);
// }

// initialize SVG.js
var draw = SVG().addTo('body')

// draw pink square
draw.rect(100, 100).move(100, 50).fill('#f06')

// Temporarly commented out.  
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'text',
//       message: 'Enter up to three characters:',
//       validate: (input) => input.length <= 3,
//     },
//     {
//       type: 'input',
//       name: 'textColor',
//       message: 'Enter the text color (hexadecimal, i.e.#CD5C5C) or keyword',
//       },
//     {
//       type: 'list',
//       name: 'shape',
//       message: 'Choose a shape:',
//       choices: ['Circle', 'Triangle', 'Square'],
//     },
//     {
//       type: 'input',
//       name: 'shapeColor',
//       message: 'Enter the shape color (hexadecimal or keyword):',
//     },
// ])
// .then(answers => {
//     const svgCode = generateSVG(
//         answers.text,
//         answers.textColor,
//         answers.shape,
//         answers.shapeColor
//     )
// })