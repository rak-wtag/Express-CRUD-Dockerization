CREATE DATABASE IF NOT EXISTS employeeDB;
USE employeeDB;

CREATE TABLE IF NOT EXISTS employees (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `employee_code` varchar(45) DEFAULT NULL,
  `salary` int DEFAULT NULL,
  PRIMARY KEY (`id`)
)AUTO_INCREMENT=0;

INSERT INTO employees (id, name, employee_code, salary) VALUES 
(1, 'Samantha Mackenzie', 'EMP97', 80000),
(2, 'Layla Benn', 'EMP91', 92000),
(3, 'Luis Alberto', 'EMP99', 84000),
(4, 'Rishaan', 'EMP70', 85000),
(5, 'Luis Alberto', 'EMP99', 84000),
(6, 'Rishaan', 'EMP70', 85000),
(7, 'Samantha Mackenzie', 'EMP97', 80000),
(8, 'Layla Benn', 'EMP91', 92000),
(9, 'Luis Alberto', 'EMP99', 84000),
(10, 'Rishaan', 'EMP70', 85000),
(11, 'Samantha Mackenzie', 'EMP97', 80000),
(12, 'Layla Benn', 'EMP91', 92000),
(13, 'Luis Alberto', 'EMP99', 84000),
(14, 'Rishaan', 'EMP70', 85000),
(15, 'Samantha Mackenzie', 'EMP97', 80000),
(16, 'Layla Benn', 'EMP91', 92000),
(17, 'Luis Alberto', 'EMP99', 84000),
(18, 'Rishaan', 'EMP70', 85000);
