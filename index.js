const inquirer = require('inquirer');
const { createSVGWindow } = require('svgdom');
const window = createSVGWindow();
const SVG = require('svg.js')(window);

const fs = require('fs');
const path = require('path');

function generateSVG(text, textColor, shape, shapeColor) {
  const svgContainer = SVG(window.document.documentElement);
  const svg = svgContainer.size(300, 200);

  const textElement = svg.text(text).move(50, 100);
  textElement.fill(textColor);

  let shapeElement;
  switch (shape) {
    case 'Circle':
      shapeElement = svg.circle(100);
      break;
    case 'Triangle':
      shapeElement = svg.polygon('0,100 50,0 100,100');
      break;
    case 'Square':
      shapeElement = svg.rect(100, 100);
      break;
    default:
      break;
  }
  shapeElement.move(150, 50).fill(shapeColor);

  return svgContainer.svg();
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter Text (up to three characters)',
      validate: input => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter your choice of color using hexadecimal codes or a keyword',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape from the list',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (hexadecimal or keyword)',
    },
  ])
  .then(answers => {
    const svgCode = generateSVG(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );

    fs.writeFile('logo.svg', svgCode, err => {
      if (err) {
        console.log('Error saving file', err);
      } else {
        console.log('Success.');
      }
    });
  })
  .catch(err => {
    console.log('Error saving', err);
  });
