## SVG Shape Generator
This is a Node.js application that generates SVG code based on user input. It allows the user to choose a shape (circle, triangle, or square), enter text (up to three characters), specify text color and shape color, and saves the generated SVG code to a file.

# Prerequisites
Before running this application, make sure you have the following prerequisites installed:

Node.js
NPM (Node Package Manager)

# Installation
Clone this repository to your local machine.

Open a terminal and navigate to the project's directory.

Run the following command to install the required dependencies:
npm install

# Usage
To run the SVG Shape Generator, follow these steps:
1. Open a terminal and navigate to the project's directory.
2. Run the following command:
node index.js


You will be prompted to enter the following information:
Text: Enter up to three characters for the text to be displayed in the shape.
Text Color: Enter the color of the text using hexadecimal codes or a keyword.
Shape: Choose a shape from the provided list (circle, triangle, or square).
Shape Color: Enter the color of the shape using hexadecimal codes or a keyword.
After providing the input, the application will generate the SVG code based on the user's choices and save it to a file named logo.svg in the dist directory.

# Customization
You can customize the application by modifying the code in index.js:

Add or remove shapes by extending the functionality of the Circle, Square, and Triangle classes in the lib/classes.js file.
Adjust the input prompts or validation rules using the inquirer library in the index.js file.
Change the output file path and name by modifying the fs.writeFile function in the index.js file.
License
This project is licensed under the MIT License. Feel free to use and modify the code for your own purposes.

And the following sources.
https://www.youtube.com/watch?v=GJYMcLus3v0
https://www.youtube.com/watch?v=zh9CsKqEhOM
https://github.com/L10N37/OOP-SVG-Logo-Maker
https://github.com/rmessett15/SVG-Logo-Maker
https://svgjs.dev/docs/3.0/
https://www.rdocumentation.org/packages/omsvg/versions/0.1.0/topics/SVG
https://nodejs.org/api/fs.html#promises-api
https://www.w3schools.com/js/js_switch.asp
https://www.npmjs.com/package/svgdom
Tutor Jose Lopez


# Contact
If you have any questions or inquiries, please contact Nick Stypinski at joshua192007@gmail.com.