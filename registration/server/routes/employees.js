const express = require("express");
const router = express.Router();
//const employees = require("../Employees");
const employeeFunctions = require("../public/js/employeesUtils");
const uuid = require("uuid");
//get all employees
router.get("/", (req, res) => {
  const employees = employeeFunctions.viewEmployees();
  console.log("This is the one", employees);
  res.json(employees);
});

//create new employee using post
router.post("/create", (req, res) => {
  console.log("request body here:", req.body);
  const {
    firstName,
    lastName,
    dateOfBirth,
    socialSecurity,
    salaryExpectation,
  } = req.body;

  if (!firstName) {
    return res.json({
      error: "Please provide the first name",
    });
  } else if (!lastName) {
    return res.json({
      error: "Please provide the last name",
    });
  } else if (!dateOfBirth) {
    return res.json({
      error: "Please provide the date of birth",
    });
  } else if (!socialSecurity) {
    return res.json({
      error: "Please provide the social security number",
    });
  } else if (!salaryExpectation) {
    return res.json({
      error: "Please provide the salary expectation",
    });
  }

  const employee = {
    id: uuid.v4(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    socialSecurity: req.body.socialSecurity,
    salaryExpectation: req.body.salaryExpectation,
  };
  //employees.push(employee);
  employeeFunctions.addEmployee(employee);
  const employees = employeeFunctions.viewEmployees();
  res.json(employees);
  //res.redirect("/employees");
});

//delete employee using delete method
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  employeeFunctions.deleteEmployee(id);
  res.json(employeeFunctions.viewEmployees());

  /* employees.forEach((employee, index) => {
        if (employee.id === id) {
            employees.splice(index, 1);
            res.json(employees);
            /* res.redirect("/employees");
        }
    }); */
});

//delete all employees using delete method
router.delete("/deleteAll", (req, res) => {
  employeeFunctions.deleteAllEmployees();
  res.json(employeeFunctions.viewEmployees());
  /* res.redirect("/employees"); */
});

//update employee using put method
router.put("/update", (req, res) => {
  const id = req.query.id;
  const {
    firstName,
    lastName,
    dateOfBirth,
    socialSecurity,
    salaryExpectation,
  } = req.query;

  const updatedEmployee = {
    id,
    firstName,
    lastName,
    dateOfBirth,
    socialSecurity,
    salaryExpectation,
  };

  /* employees.forEach((employee, index) => {
        const oldEmployee = employees[index];
        if (employee.id === id) {
            employee.title = title ? title : oldEmployee.title;
            employee.author = author ? author : oldEmployee.author;
            employee.datePublished = datePublished
                ? datePublished
                : oldEmployee.datePublished;
        }
    }); */
  employeeFunctions.updateEmployee(updatedEmployee);
  res.json(employeeFunctions.viewEmployees());
  /* res.redirect("/employees"); */
});

//search employees using post
router.post("/search", (req, res) => {
  const { text } = req.body;
  //const employees = employeeFunctions.viewEmployees();
  text.trim();

  res.json(employeeFunctions.searchEmployees(text));
});
module.exports = router;
