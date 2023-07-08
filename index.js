const SVG = require('svg.js');
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (hexadecimal, i.e.#CD5C5C) or keyword (refer to coloursArray.js)):',
      validate: (input) => {
        // check if the input is a valid CSS color name
        const isColorName = coloursArray.includes(input.toLowerCase());
        // check if the input is a valid hex color code
        const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
        return isColorName || isHexCode;
      },
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (hexadecimal or keyword):',
      validate: (input) => {
        // check if the input is a valid CSS color name
        const isColorName = coloursArray.includes(input.toLowerCase());
        // check if the input is a valid hex color code
        const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
        return isColorName || isHexCode;
      },
    },
])
.then(answers => {
    const svgCode = generateSVG(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
    )
})