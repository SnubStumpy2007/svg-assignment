# svg-assignment
SVG Generator - Node.js
This is a SVG (Scalable Vector Graphics) generator written in Node.js, utilizing object-oriented programming principles. With this module, you can dynamically create SVG files programmatically, making it easier to generate complex and customizable vector graphics.

Features
Generate SVG files using JavaScript code
Support for various SVG elements, such as rectangles, circles, lines, text, etc.
Specify attributes like color, size, position, and style for each SVG element
Group elements together to create complex shapes
Export the generated SVG to a file or retrieve it as a string
Installation
To use the SVG Generator module in your Node.js project, you need to install it using npm:

bash
Copy code
npm install svg-generator
Usage
First, require the svg-generator module in your Node.js application:

javascript
Copy code
const { SVG, Rectangle, Circle, Line, Text, Group } = require('svg-generator');
Creating an SVG
To create an SVG object, you can use the SVG class:

javascript
Copy code
const svg = new SVG({ width: 500, height: 300 });
Adding Elements
You can add various SVG elements to the SVG object, such as rectangles, circles, lines, text, etc. Each element has its own class, like Rectangle, Circle, Line, Text, and Group. Here's an example of adding a rectangle and a circle to the SVG:

javascript
Copy code
const rectangle = new Rectangle({
  x: 50,
  y: 50,
  width: 200,
  height: 100,
  fill: 'blue',
});

const circle = new Circle({
  cx: 150,
  cy: 200,
  r: 50,
  fill: 'red',
});

svg.addElement(rectangle);
svg.addElement(circle);
Grouping Elements
You can group multiple elements together using the Group class. This allows you to create more complex shapes and apply transformations to multiple elements simultaneously:

javascript
Copy code
const group = new Group();
group.addElement(rectangle);
group.addElement(circle);
svg.addElement(group);
Exporting SVG
To export the generated SVG as a file, use the exportToFile method:

javascript
Copy code
svg.exportToFile('output.svg');
To retrieve the SVG as a string, use the exportToString method:

javascript
Copy code
const svgString = svg.exportToString();
console.log(svgString);
Examples
Here's an example that generates an SVG with a rectangle, a circle, and a line:

javascript
Copy code
const { SVG, Rectangle, Circle, Line } = require('svg-generator');

const svg = new SVG({ width: 500, height: 300 });

const rectangle = new Rectangle({
  x: 50,
  y: 50,
  width: 200,
  height: 100,
  fill: 'blue',
});

const circle = new Circle({
  cx: 150,
  cy: 200,
  r: 50,
  fill: 'red',
});

const line = new Line({
  x1: 0,
  y1: 0,
  x2: 500,
  y2: 300,
  stroke: 'black',
  'stroke-width': 2,
});

svg.addElement(rectangle);
svg.addElement(circle);
svg.addElement(line);

svg.exportToFile('output.svg');
License
This SVG Generator module is licensed under the MIT License.
# sources
https://www.youtube.com/watch?v=GJYMcLus3v0
https://www.youtube.com/watch?v=zh9CsKqEhOM
https://github.com/L10N37/OOP-SVG-Logo-Maker
https://github.com/rmessett15/SVG-Logo-Maker
https://svgjs.dev/docs/3.0/
https://www.rdocumentation.org/packages/omsvg/versions/0.1.0/topics/SVG
https://nodejs.org/api/fs.html#promises-api