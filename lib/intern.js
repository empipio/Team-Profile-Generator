const Employee = require("./employee");

// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern 🎓";
  }
}

const internQs = [
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
    name: "school",
    message: "What school does this team member go to?",
  },
];

function getInternData() {
  inquirer
    .prompt(internQs)
    .then((internData) => {
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );

      const internCard = ` <div class="card col-2">
  <h2 class="card-header card-title">${intern.getName}</h2>
  <div class="card-body">
    <h4>${intern.getRole}</h4>
    <p><strong>ID: </strong>${intern.getId}</p>
    <p>
      <strong>Email:</strong
      ><a href="mailto: ${intern.getEmail}"> ${intern.getEmail}</a>
    </p>
    <p><strong>Office Number:</strong> ${intern.getSchool}</p>
  </div>
</div>`;
      console.log(internCard);
    })
    .then(nextEmployee());
}

module.exports = { Intern, internQs, getInternData };
