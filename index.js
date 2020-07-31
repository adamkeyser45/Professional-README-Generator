const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your Github Username?',
        validate: gitHubNameInput => {
            if (gitHubNameInput) {
                return true;
            } else {
                console.log('Please enter your Github Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please write a short description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please write a short description of how to use your project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe how to use your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['MIT', 'Mozilla', 'The Unlicense', 'Apache', 'GNU General' ]
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please type in a command to install the dependencies!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please type in a command to run tests!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userInfo',
        message: 'What does the user need to know about using the repo?',
        validate: userInfoInput => {
            if (userInfoInput) {
                return true;
            } else {
                console.log('Please explain what a user should know about your repo!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributeInfo',
        message: 'What does the user need to know about contributing to the repo?',
        validate: contributeInfoInput => {
            if (contributeInfoInput) {
                return true;
            } else {
                console.log('Please explain what a user should know about contributing!');
                return false;
            }
        }
    }    
];

// function to write README file
const writeToFile = data => {
    fs.writeFile('./newREADME.md', data, err => {
        if (err) throw err;
        console.log('Your README has been created! Be sure to check it out!');
    });
};

// function to initialize program
const init = () => {
    console.log('Welcome to the README Generator! Follow the prompts to make your README. All questions are required.')
    return inquirer.prompt(questions);
};

// function call to initialize program
init()
    .then(userAnswers => {
        return generateMarkdown(userAnswers);
    })
    .then(completeTemplate => {
        return writeToFile(completeTemplate);
    })
    .catch(err => {
        console.log(err);
    });
