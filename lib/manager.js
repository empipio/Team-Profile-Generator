//IMPORTS
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  //this overrides employee getRole()
  getRole() {
    return "Manager";
  }
}

//EXPORTS
module.exports = Manager;
