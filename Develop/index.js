// TODO: Include packages needed for this application
const fs = require('fs');
// const { get } = require('https');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// name, location, bio, LinkedIn URL, and GitHub URL
// title project + sections entitled Description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, and Questions
// description, installation instructions, usage information, contribution 
// guidelines, and test instructions
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give us a brief description of your project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions for the project: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage instructions for the project: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'License for the project: // Here we want to prompt a list of options',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Add contributing guidelines for this project here: ',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Testing instructions for the project: ',
        name: 'tests'
    }, 
    {
        type: 'input',
        message: 'List your github username and the URL link to your github profile:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email? ',
        name: 'email'
    }
];

// Prompt user with questions and generate readme
inquirer
    .prompt(questions)
    .then((answers) => {
        // Use answers to write README.md file
        const readmeContent = generateReadme(answers) => {
            const { username, email, title, description, usage, license, dependencies, tests, repoInfo, contribution = answers};
        

        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error('Error writing README.md:', err);
            } else {
                console.log("Yay, a README.md was generated successfully!");
            }
        });
    });
// TODO: Create a function to write README file
function generateReadme(fileName, data, answers) {
    return `# ${answers.title}

## Description

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Add installation instructions here.
## Usage

// Add usage instructions here.

## License

This project is licensed under the [License Name] License. See the [LICENSE](LICENSE) file for details.

## Contributing

// Add contributing guidelines here.

## Tests

Add testing instructions here.

## Questions

For any questions, please contact me:

- GitHub: [username](https://github.com/your-username)
- Email: @example.com
`;
};

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();

// const getHtml = (answers) => {
//     const { username, email, title, description, usage, license, dependencies, tests, repoInfo, contribution } = answers;

//     return `
// <--! readme file here !-->
// `;
// }