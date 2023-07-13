const inquirer = require('inquirer');
const SVG = require('svg.js');

const fs = require('fs');
const path = require('path');

function generateSVG(text, textColor, shape, shapeColor) {
  const svg = SVG(document.documentElement);
}

// initialize SVG.js
var draw = SVG().addTo('body')

// draw pink square
draw.rect(100, 100).move(100, 50).fill('#f06')


inquirer
    .prompt([
        {
            type: input,
            name: 'text',
            message: 'Enter Text (up to three characters)',
            validate: input => input.length <= 3,
        },
        {
            type: input,
            name: 'textColor',
            message: 'Enter your choice of color using hexidecimal codes or a keyword',
        },
        {
            type: input,
            name: 'shape',
            message: 'Choose a shape from the list',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: input,
            name: 'shapeColor',
            message: 'Enter the shape color (hexadecimal or keyword',
        },
    ])
.then(answers => {
    const svgCode = generageSVG(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
    );

    // Save SVG code to file
    fs.writeFile('logo.svg', svgCode, err => {
        if (err) {
            console.log('Error saving file', err)
        } else {
            console.log('Success.')
        }
    })
})
.catch(err => {
    console.log('Error saving', err)
})
