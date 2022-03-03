//class for each team category

//inquirer for each class? -> prompts on each class page in a function

//main function on index.js and import class prompts from relevant page

//so the main function for running the app will be on index.js

//on each class page there will be a class and a "helper" function

//tests fit in alongside...

//not sure where src file fits into this

//TEMPLATE LITERALS
//Skeleton on index.js
//add a card for each employee using separate functions
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the team member's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team member's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team member's email address?",
  },
];

const managerQs = {
  type: "input",
  name: "officeNumber",
  message: "What is the manager's office number?",
};

const engineerQs = {
  type: "input",
  name: "github",
  message: "What is the team member's GitHub username?",
};

const internQs = {
  type: "input",
  name: "school",
  message: "What school does this team member go to?",
};
