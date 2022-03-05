//DON'T FORGET TESTS FFS

//TEMPLATE LITERALS
//Skeleton on index.js
//add a card for each employee using separate functions
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");

//inquirer prompt->questions, managerQ
//use answers to construct a new manager
//produce manager card
//append to row in html file

//ask if want to add another team member y/n
//if yes, move to engineer/intern, if no then produce page

//inquirer questions, engineerQ
//use answers to construct a new engineer

//ask again if want to add another team member y/n

//once finished, html page produced
const employees = [];
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

function nextEmployee() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "next employee",
        message: "do you wish to add another employee?",
        choices: ["engineer", "intern", "no, I'm finished"],
      },
    ])
    .then((answer) => {
      if (answer == "engineer") {
        askEngineerQuestions();
      } else if (answer == "intern") {
        askInternQuestions();
      } else {
        renderEmployees();
      }
    });
}

function renderEmployees() {
  //get employees[]
  //map over each employee and return card
  //append to html file
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
    "index.html",
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

function askManagerQuestions() {
  inquirer.prompt(managerQs).then((managerData) => {
    const manager = new Manager(
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.officeNumber
    );
    employees.push(manager);

    //       const managerCard = ` <div class="card col-2">
    //   <h2 class="card-header card-title">${manager.getName}</h2>
    //   <div class="card-body">
    //     <h4>${manager.getRole}</h4>
    //     <p><strong>ID: </strong>${manager.getId}</p>
    //     <p>
    //       <strong>Email:</strong
    //       ><a href="mailto: ${manager.getEmail}"> ${manager.getEmail}</a>
    //     </p>
    //     <p><strong>Office Number:</strong> ${manager.getOfficeNumber}</p>
    //   </div>
    // </div>`;
    //       console.log(managerCard);
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

    //     const engineerCard = ` <div class="card col-2">
    // <h2 class="card-header card-title">${engineer.getName}</h2>
    // <div class="card-body">
    //   <h4>${engineer.getRole}</h4>
    //   <p><strong>ID: </strong>${engineer.getId}</p>
    //   <p>
    //     <strong>Email:</strong
    //     ><a href="mailto: ${engineer.getEmail}"> ${engineer.getEmail}</a>
    //   </p>
    //   <p><strong>Office Number:</strong> ${engineer.getGithub}</p>
    // </div>
    // </div>`;
    //       console.log(engineerCard);
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

    //       const internCard = ` <div class="card col-2">
    //   <h2 class="card-header card-title">${intern.getName}</h2>
    //   <div class="card-body">
    //     <h4>${intern.getRole}</h4>
    //     <p><strong>ID: </strong>${intern.getId}</p>
    //     <p>
    //       <strong>Email:</strong
    //       ><a href="mailto: ${intern.getEmail}"> ${intern.getEmail}</a>
    //     </p>
    //     <p><strong>Office Number:</strong> ${intern.getSchool}</p>
    //   </div>
    // </div>`;
    //       console.log(internCard);
    nextEmployee();
  });
}

function init() {
  askManagerQuestions();
}

init();

//module.exports = nextEmployee;
