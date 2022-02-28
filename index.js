// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Project title?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'Describe what your Project does:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Describe how to use this Project:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What license was used for this application:',
            name: 'license',
            choices: ["MIT", "Apache 2.0", "Eclipse", "GNU GPLv3"],
        },
        {
            type: 'input',
            message: 'Describe how to contribute to this project:',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'How did you test this Project:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your Github username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your Github repo name:',
            name: 'repo',
        },
        {
            type: 'input',
            message: 'How can we contact you (email address):',
            name: 'email',
        },
    ])};

    
// Function to write the README.md file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README has been created")
    })
}

// TODO: Create a function to initialize app
function init() {
    generateFile();
}

// Call the questions function and write the responses to variables
// For the license, determine what the user selected and get the license badge
const generateFile = () => {
    questions()
    .then(response =>  {
        let project = ('Project:', response.project);
        let description = ('Description of Project:', response.description);
        let installation = ('Installation Instructions:', response.installation);
        let usage = ('Usage:', response.usage);
        let license = ('License:', response.license);
        let badgeMD = "";
        switch (license) {
            case 'MIT':
                badgeMD = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                break;
            case 'Apache 2.0':
                badgeMD = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
                break;
            case 'Eclipse':
                badgeMD = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"

                break;
            case 'GNU GPLv3':
                badgeMD = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                break;
        }
        let contributions = ('Contributions:', response.contributions);
        let testInstructions = ('Test Instructions:', response.test);
        let github = ('Github:', response.github);
        let repo = ('Github:', response.repo);
        let email = ('Email:', response.email);   

// Below is the template for the markup file
        const createMarkup = `
<style>
H1{color:Blue !important;}
H2{color:DarkOrange !important;}
H3{color:LightBlue !important;}
p{color:White !important;}
</style>

# ${project}    ${badgeMD}

#### License used
*This project is covered using the ${license} license.*

## Table of Contents
<details>
<summary>"Click to Expand"</summary>

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Test Instructions](#testInstructions)
- [Questions](#questions)
</details>

### Description of Project
${description}

### Installation Instructions
${installation}\n

### Usage
${usage}

### Contributions
${contributions}\n

### Test Instructions
${testInstructions}\n

### Questions
If you have more questions, please see the following:\n
* Github for User: [www.github.com/${github}](https://github.com/${github})\n
* Repo for the Project: [www.github.com/${github}/${repo}](https://github.com/${github}/{repo})\n
* Email: ${email}\n

`;
writeToFile("README.md", createMarkup); 
    })
};

// Function call to initialize app
init();