const Employee = require("./employee");

// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'
const inquirer = requires("inquirer");

const engineerQs = {
  type: "input",
  name: "github",
  message: "What is the team member's GitHub username?",
};

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {}
  getRole() {
    console.log("Engineer");
  }
}

module.exports = Engineer;
