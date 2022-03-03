const Employee = require("./employee");

// in addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'
const inquirer = require("inquirer");

const ManagerQs = {
  type: "input",
  name: "officeNumber",
  message: "What is the manager's office number?",
};

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
