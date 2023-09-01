// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the instructions for installation',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter information about usage',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter names of contributors',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'List some tests done on this project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: [
      'MIT',
      'GNU General Public License v3.0',
      'Apache License 2.0',
    ],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];


// License badge URLs
const licenseBadges = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)',
  'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'Apache License 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md file created!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const licenseBadge = licenseBadges[answers.license] || '';

    const readmeData = `
# ${answers.title}

${licenseBadge}  <!-- Added license badge -->

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)  

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For additional questions, reach out to [${answers.githubUsername}](https://github.com/${answers.githubUsername}).
You can also contact me via email at ${answers.email}.
`;
    writeToFile('README.md', readmeData);
  });
}

// Function call to initialize app
init();

