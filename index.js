const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const SVG = require('./lib/svg');
const fs = require('fs');


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
        let shapeChoice;
        switch (answers.shape) {
            case "circle":
                shapeChoice = new Circle()
                break;
            case "triangle":
                shapeChoice = new Triangle()
                break;
            case "square":
                shapeChoice = new Square()
                break;
        }
        shapeChoice.setColor(answers.shapeColor)
        const finalLogo = new SVG()
        finalLogo.setShape(shapeChoice)
        finalLogo.setText(answers.characters, answers.textColor)
        fs.writeFile('myLogo.svg', finalLogo.render(), (err) => {
            err ? console.error(err) : console.log('your super cool logo has been generated')
        })

    })