// TODO: Include packages needed for this application
const fs = require("fs/promises");
const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project_name",
    message: "What is your projects name? (required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your projects name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "project_description",
    message: "Briefly describe your project",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please add a brief description of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "project_Installation",
    message: "What are the steps required to install your project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions for using your project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide instructions for using your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide your Github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide your email address!");
        return false;
      }
    },
  },
  //enter license input
  {
    type: "list",
    name: "license",
    message: "Pick one:",
    choices: [
      "Apache License 2.0",
      'BSD 3-Clause "New" or "Revised" License',
      'BSD 2-Clause "Simplied" or "FreeBSD" license',
      "GNU General Public License (GPL)",
      "MIT license",
      "Mozilla Public License 2.0",
      "Common Developement and Distribution License",
      "Eclipse Public License Version 2.0",
    ],
  },
  {
    type: "confirm",
    name: "confirmContributors",
    message: "Would you like to list any contributors to your project?",
    default: true,
  },
  {
    type: "input",
    name: "list-contributors",
    message: "Please list any or all contributors.",
    when: ({ confirmContributors }) => {
      if (confirmContributors) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmTesting",
    message: "Would you like to write tests for your project?",
    deafault: true,
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide instructions on how to perform tests.",
    when: ({ confirmTesting }) => {
      if (confirmTesting) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  await fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await prompt(questions);
  const markdown = generateMarkdown(answers);
  await writeToFile("./dist/readme.md", markdown);
  console.log("readme file has been successfully created, good job!");
}

// Function call to initialize app
init();
