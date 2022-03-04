const Employee = require("./employee");
const inquirer = require("inquirer");
const nextEmployee = require("../index");

// in addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager📋";
  }
}

const managerQs = [
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
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

function GetManagerData() {
  inquirer
    .prompt(managerQs)
    .then((managerData) => {
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );

      const managerCard = ` <div class="card col-2">
  <h2 class="card-header card-title">${manager.getName}</h2>
  <div class="card-body">
    <h4>${manager.getRole}</h4>
    <p><strong>ID: </strong>${manager.getId}</p>
    <p>
      <strong>Email:</strong
      ><a href="mailto: ${manager.getEmail}"> ${manager.getEmail}</a>
    </p>
    <p><strong>Office Number:</strong> ${manager.getOfficeNumber}</p>
  </div>
</div>`;
      console.log(managerCard);
    })
    .then(nextEmployee());
}

module.exports = { Manager, managerQs, GetManagerData };
