const express = require("express");
const app = express();
const employeeFunctions = require("./public/js/employeesUtils");
const uuid = require("uuid");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//get all employees
app.get("/", (req, res) => {
  const employees = employeeFunctions.viewEmployees();

  return res.json(employees);
});

app.post("/create", (req, res) => {
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

  employeeFunctions.addEmployee(employee);
  const employees = employeeFunctions.viewEmployees();
  res.json(employee);
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  employeeFunctions.deleteEmployee(id);
  res.json(employeeFunctions.viewEmployees());
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
