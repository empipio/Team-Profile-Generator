const Employee = require("./employee");

// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'
const inquirer = require("inquirer");

const internQs = {
  type: "input",
  name: "school",
  message: "What school does this team member go to?",
};

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {}
  getRole() {
    console.log("Intern");
  }
}

module.exports = Intern;
