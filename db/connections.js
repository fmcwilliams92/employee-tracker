const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root', // process.env.DB_USER,
  password: 'Bootcamp123!!', // process.env.DB_PW,
  database: 'employee_tracker', // process.env.DB_NAME
});

connection.connect(err => {
  if (err) throw err;
});

module.exports = connection;