const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./db');

function questions() {
  inquirer.prompt([
    {
      name: 'options',
      type: 'list',
      choices: [
        {
          name: 'View all Departments',
          value:"VIEW_ALL_DEPARTMENTS"
        },
        {
          name: 'View all Roles',
          value: 'VIEW_ALL_ROLES'
        },
        {
          name: 'View all Employees',
          value: 'VIEW_ALL_EMPLOYEES'
        },
        {
          name: 'Add a Department',
          value: 'ADD_A_DEPARTMENT'
        },
        {
          name: 'Add a Role',
          value: 'ADD_A_ROLE'
        },
        {
          name: 'Add an Employee',
          value: 'ADD_AN_EMPLOYEE'
        },
        {
          name: 'Update an Employee Role',
          value: 'UPDATE_AN_EMPLOYEE'
        },
        {
          name: 'Exit',
          value: 'EXIT'
        }
      ]
    }
  ])
  .catch(err) {
    
  }
  .then((res) => {
    console.log(res);
  });
}

// view employees by manager

// view employees by department

// update employee manager

// delete department, roles and employees

// view the utilized budget of the department, aka the combines salaries

questions();