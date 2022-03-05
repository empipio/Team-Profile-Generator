//IMPORTS
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");

//empty array in which to store employee info
const employees = [];

//question arrays for the different roles
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

//called after the details of each employee are collected: check whether want to add another
//if all employees added, proceed to generation of html page
function nextEmployee() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "nextEmployee",
        message: "do you wish to add another employee?",
        choices: ["engineer", "intern", "no, I'm finished"],
      },
    ])
    .then((answer) => {
      console.log(nextEmployee);
      if (answer.nextEmployee == "engineer") {
        askEngineerQuestions();
      } else if (answer.nextEmployee == "intern") {
        askInternQuestions();
      } else {
        renderEmployees();
      }
    });
}

function renderEmployees() {
  console.log(employees);
  const employeeCards = employees.map((employee) => {
    const role = employee.getRole();
    if (role === "Manager") {
      return ` <div class="card col-2">
      <h2 class="card-header card-title">${employee.name}</h2>
      <div class="card-body">
    <h4>${role}📋</h4>
        <p><strong>ID: </strong>${employee.id}</p>
        <p>
          <strong>Email:</strong
          ><a href="mailto: ${employee.email}"> ${employee.email}</a>
        </p>
        <p><strong>Office Number:</strong> ${employee.officeNumber}</p>
      </div>
    </div>`;
    } else if (role === "Engineer") {
      return ` <div class="card col-2">
      <h2 class="card-header card-title">${employee.name}</h2>
      <div class="card-body">
        <h4>${role}🔧</h4>
        <p><strong>ID: </strong>${employee.id}</p>
        <p>
          <strong>Email:</strong
          ><a href="mailto: ${employee.email}"> ${employee.email}</a>
        </p>
        <p><strong>Office Number:</strong> ${employee.github}</p>
      </div>`;
    } else {
      return ` <div class="card col-2">
      <h2 class="card-header card-title">${employee.name}</h2>
      <div class="card-body">
        <h4>${role}🎓</h4>
        <p><strong>ID: </strong>${employee.id}</p>
        <p>
          <strong>Email:</strong
          ><a href="mailto: ${employee.email}"> ${employee.email}</a>
        </p>
        <p><strong>Office Number:</strong> ${employee.school}</p>
      </div>
    </div>`;
    }
  });
  fs.writeFile(
    "dist/index.html",
    `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="styles.css" />
      <title>Meet Our Team</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid custom-jumbotron">
        <div class="container">
          <h1 class="display-4" id="title-text">Meet Our Team</h1>
        </div>
      </div>
      <div class="row results col-12">
       ${employeeCards.join("")}
      </div>
    </body>
  </html>
  `,
    (err) => (err ? console.log(err) : console.log("Success!"))
  );
}

//questions asked via command line; info stored in employees array and rendered to html once info from all employees collected
function askManagerQuestions() {
  inquirer.prompt(managerQs).then((managerData) => {
    const manager = new Manager(
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.officeNumber
    );
    employees.push(manager);

    nextEmployee();
  });
}

function askEngineerQuestions() {
  inquirer.prompt(engineerQs).then((engineerData) => {
    const engineer = new Engineer(
      engineerData.name,
      engineerData.id,
      engineerData.email,
      engineerData.github
    );
    employees.push(engineer);

    nextEmployee();
  });
}

function askInternQuestions() {
  inquirer.prompt(internQs).then((internData) => {
    const intern = new Intern(
      internData.name,
      internData.id,
      internData.email,
      internData.school
    );
    employees.push(intern);

    nextEmployee();
  });
}

function init() {
  askManagerQuestions();
}

//initialises app
init();
