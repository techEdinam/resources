const fs = require("fs");

//load employees
const loadEmployees = () => {
  const dataBuffer = fs.readFileSync("employees.json");
  if (dataBuffer.length) {
    const data = dataBuffer.toString();

    return JSON.parse(data);
  }
  return [];
};
const saveEmployee = (employees) => {
  const dataJSON = JSON.stringify(employees);
  fs.writeFileSync("employees.json", dataJSON);
};

const addEmployee = (employee) => {
  const employees = loadEmployees(); //if it is empty for the first time, an empty array is returned;
  employees.push(employee);
  saveEmployee(employees);
  console.log("Employee added");
};

const viewEmployees = () => {
  const employees = loadEmployees();
  return employees;
};

const updateEmployee = (updatedEmployee) => {
  const employees = loadEmployees();

  if (!employees.length) {
    return console.log("No employees to update");
  }
  employees.forEach((employee, index) => {
    const oldEmployee = employees[index];
    const {
      firstName,
      lastName,
      dateOfBirth,
      socialSecurity,
      salaryExpectation,
    } = updatedEmployee;
    if (employee.id === updatedEmployee.id) {
      employee.firstName = firstName ? firstName : oldEmployee.firstName;
      employee.lastName = lastName ? lastName : oldEmployee.lastName;
      employee.dateOfBirth = dateOfBirth
        ? dateOfBirth
        : oldEmployee.dateOfBirth;
      employee.socialSecurity = socialSecurity
        ? socialSecurity
        : oldEmployee.socialSecurity;
      employee.salaryExpectation = salaryExpectation
        ? salaryExpectation
        : oldEmployee.salaryExpectation;

      saveEmployee(employees);
    }
  });
};

const searchEmployees = (text) => {
  const employees = loadEmployees();
  const newEmployees = employees.filter((employee) =>
    employee.firstName.includes(text)
  );
  console.log("Employees based on search text: " + text);
  return newEmployees;
};
const deleteEmployee = (id) => {
  const employees = loadEmployees(); //loads the employees from the json file

  if (!employees.length) {
    return console.log("No employee(s) to delete");
  }
  const newEmployees = employees.filter((employee) => employee.id != id);
  console.log("New employee collection", newEmployees);
  saveEmployee(newEmployees);
};
const deleteAllEmployees = () => {
  let employees = loadEmployees();

  if (!employees.length) {
    return console.log("No employees to delete");
  }
  employees = [];
  saveEmployee(employees);
};

module.exports = {
  addEmployee,
  viewEmployees,
  updateEmployee,
  searchEmployees,
  deleteEmployee,
  deleteAllEmployees,
};
