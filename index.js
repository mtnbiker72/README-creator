// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'Project description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage Information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contribution Guidelines:',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Tests:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email',
        },
    ])
    .then((response) => {
        let project = ('Project:', response.project);
        let description = ('Description of Project:', response.description);
        let installation = ('Installation Instructions:', response.installation);
        let usage = ('Usage:', response.usage);
        let license = ('License:', response.license);
        let contributions = ('Contributions:', response.contributions);
        let testInstructions = ('Test Instructions:', response.test);
        let github = ('Github:', response.github);
        let email = ('Email:', response.email);

const markup = `
# ${project}

*${description}*

## Table of Contents
<details>

<summary>"Click to Expand"</summary>

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Test Instructions](#testInstructions)
6. [Questions](#questions)

### Installation
${installation}\n
### Usage
${usage}\n
### License
${license}
### Contributions
${contributions}\n
### Test Instructions
${testInstructions}\n
### Questions
www.github.com/${github}\n
${email}\n

        `;

        fs.writeFile("README.md", (markup), (err)  =>
                err ? console.log(err) : console.log("Success")
            );
          });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
