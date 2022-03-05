const Employee = require("./employee");

// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

const engineerQs = [
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
    name: "github",
    message: "What is the team member's GitHub username?",
  },
];

function getEngineerData() {
  inquirer
    .prompt(engineerQs)
    .then((engineerData) => {
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );

      const engineerCard = ` <div class="card col-2">
  <h2 class="card-header card-title">${engineer.getName}</h2>
  <div class="card-body">
    <h4>${engineer.getRole}</h4>
    <p><strong>ID: </strong>${engineer.getId}</p>
    <p>
      <strong>Email:</strong
      ><a href="mailto: ${engineer.getEmail}"> ${engineer.getEmail}</a>
    </p>
    <p><strong>Office Number:</strong> ${engineer.getGithub}</p>
  </div>
</div>`;
      console.log(engineerCard);
    })
    .then(nextEmployee());
}

module.exports = Engineer;
