//DON'T FORGET TESTS FFS

//TEMPLATE LITERALS
//Skeleton on index.js
//add a card for each employee using separate functions
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
        Engineer.getEngineerData();
      } else if (answer == "intern") {
        Intern.getInternData();
      } else {
        renderEmployees();
      }
    });
}

function renderEmployees() {
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
        ${managerCard}
        ${engineerCard}
        ${internCard}
      </div>
    </body>
  </html>
  `,
    (err) => (err ? console.log(err) : console.log("Success!"))
  );
}

async function init() {
  Manager.GetManagerData();
}

init();

module.exports = nextEmployee;
