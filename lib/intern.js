//IMPORTS
const Employee = require("./employee");

//class constructor for interns
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  //this overrides employee getRole()
  getRole() {
    return "Intern";
  }
}

//EXPORTS
module.exports = Intern;
