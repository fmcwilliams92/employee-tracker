const inquirer = require('inquirer');
const consoleTable = require('console.table');

function questions() {
  inquirer.prompt([
    {
      name: 'options',
      type: 'list',
      choices: [

        {name: 'View all Departments',
        value:"VIEW_ALL_DEPARTMENTS"
      },
        {'View all Roles'},
        {'View all Employees'},
        {'Add a Department'},
        {'Add a Role'},
        {'Ann an Employee'},
        {'Update an Employee Role'},
        {'Exit'}
      ]
    }
  ])
  .then((res) => {
    console.log(res);
  });
}

questions();