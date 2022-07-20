// TODO: Include packages needed for this application
const fs = require("fs");
const { prompt } = require("inquirer");

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
        console.log(
          "Please provide installation instructions!"
        );
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
        console.log(
          "Please provide instructions for using your project."
        );
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  const answers = await prompt(questions);
}

// Function call to initialize app
init();
