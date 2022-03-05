//IMPORTS
const Employee = require("./employee");

//class constructor for engineers
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  //this overrides employee getRole()
  getRole() {
    return "Engineer";
  }
}

//EXPORTS
module.exports = Engineer;
