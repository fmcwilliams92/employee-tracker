-- dont need to add the ID as the system will auto increment
INSERT INTO Departments (name)
VALUES ('Engineering'), ('Sales'), ('Financing'), ('Legal');

INSERT INTO Roles (title, salary, department_id)
VALUES 
      ('Software Engineer', 120000.00, 1),
      ('Sales Manager', 80000.00, 2),
      ('Financing Specialist', 90000.00, 3),
      ('Legal Council', 100000.00, 4);

INSERT INTO Employees (first_name, last_name, role_id, manager_id)
VALUES 
      ('Fred', 'McWilliams', 1, null),
      ('Julian', 'Villarreal', 4, 1),
      ('Chris', 'Wolfe', 4, 2);