const inquirer = require('inquirer');
const {Circle, Square, Triangle} =  require('./lib/classes')
const fs = require('fs');


// Function to generate SVG code based on user input
function generateSVG() {
 
  let shapeElement;
  // Create shape element based on the chosen shape and set its position and color
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

  // Return the SVG code as a string
  return svgContainer.svg();
}

// Prompt the user for input using inquirer
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

    let shapeElement;
  // Create shape element based on the chosen shape and set its position and color
  switch ( answers.shape) {
    case 'Circle':
      shapeElement = new Circle(answers.text, answers.textColor,  answers.shapeColor);
      break;
    case 'Triangle':
      shapeElement = new Triangle(answers.text, answers.textColor,  answers.shapeColor);
      break;
    case 'Square':
      shapeElement = new Square(answers.text, answers.textColor,  answers.shapeColor);
      break;
    default:
      break;
  }
 

    // Save SVG code to a file
    fs.writeFile('./dist/logo.svg', shapeElement.render(), err => {
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
