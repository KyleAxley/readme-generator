// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project_name",
        message: "What is your projects name? (required)",
        validate: (nameInput) => {
            if(nameInput) {
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
        message: "Please briefly describe your project",
        validate: (nameInput) => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please add a bried description of your project.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "project_description",
        message: "Please briefly describe your project",
        validate: (nameInput) => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please add a bried description of your project.");
                return false;
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
