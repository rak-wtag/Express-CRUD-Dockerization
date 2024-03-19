const db = require('../db')

module.exports.getAllEmployees = async () => {
    const [data] = await db.query("SELECT * FROM employees")
    return data;
}

module.exports.getAllEmployeeById = async (id) => {
    const [data] = await db.query("SELECT * FROM employees WHERE id = ?",[id])
    return data;
}

module.exports.deleteEmployee = async (id) => {
    const [{affectedRows}] = await db.query("DELETE FROM employees WHERE id = ?",[id])
    return affectedRows;
}

module.exports.insertEmployee = async (employeeData) => {
    const {name, employee_code, salary} = employeeData;
    const [result] = await db.query("INSERT INTO employees (name, employee_code, salary) VALUES (?, ?, ?)", [name, employee_code, salary]);
    return result.insertId;
};

module.exports.updateEmployeeById = async (id, employeeData) => {
    const {name, employee_code, salary} = employeeData;
    const [{affectedRows}] = await db.query("UPDATE employees SET name = ?, employee_code = ? , salary = ? WHERE id = ?", [name, employee_code, salary, id]);
    return affectedRows;
};
