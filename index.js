const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const SVG = require('./lib/svg')


inquirer.prompt(
    [
        {
            type: 'input',
            name: 'characters',
            message: 'What text should go inside of the SVG (at most 3 characters)?',
            validate: function (answer) {
                if (answer.length > 3) {
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color should the text be (must be a valid color or a hexadecimal)?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape should the logo be?',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'what color should the SVG be?'
        }
    ]
)
    .then((answers) => {
        console.log(answers);

    })