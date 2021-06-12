-- create the database
DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

-- create tables
CREATE TABLE Department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE Role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);

CREATE TABLE Employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
);