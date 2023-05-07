import "./App.css";
import { useState, useEffect, useRef } from "react";
import Table from "./components/Table";
import { fetchData } from "./utils/helpers";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const url = "http://localhost:4000/";
  const [employees, setEmployees] = useState([]);
  const [erroMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    loadAllEmployees();
  }, []);

  async function loadAllEmployees() {
    const data = await fetchData(url, {});
    setEmployees(data);
  }

  //ref variables
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dobRef = useRef();
  const socialSecurityRef = useRef();
  const salaryExpectationRef = useRef();

  async function addEmployee(event) {
    event.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const dateOfBirth = dobRef.current.value;
    const socialSecurity = socialSecurityRef.current.value;
    const salaryExpectation = salaryExpectationRef.current.value;
    /* const employee = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      dateOfBirth: dobRef.current.value,
      socialSecurity: socialSecurityRef.current.value,
      salaryExpectation: salaryExpectationRef.current.value,
    }; */

    //add employee to the file on the backend
    /* const completeUrl =
      url +
      "create?firstName=" +
      encodeURIComponent(firstName) +
      "&lastName=" +
      encodeURIComponent(lastName) +
      "&dateOfBirth=" +
      encodeURIComponent(dateOfBirth) +
      "&socialSecurity=" +
      encodeURIComponent(socialSecurity) +
      "&salaryExpectation=" +
      encodeURIComponent(salaryExpectation); */
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      socialSecurity,
      salaryExpectation,
    };
    const data = await fetchData(url + "create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(employee),
    });

    if (data.error) {
      setErrorMessage(data.error);
      setShowErrorMessage(true);
      setTimeout(function () {
        setErrorMessage("");
        setShowErrorMessage(false);
      }, 3000);
    } else {
      setErrorMessage("");
      setShowErrorMessage(false);
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      dobRef.current.value = "";
      socialSecurityRef.current.value = "";
      salaryExpectationRef.current.value = "";

      setEmployees((prev) => {
        const newList = [...prev, data];
        return newList;
      });
    }
  }
  async function deleteEmployee(event) {
    event.preventDefault();

    let id = event.target.id;

    id = id.split("_")[1];
    console.log(id);
    const data = await fetchData(`${url}delete/${id}`, { method: "DELETE" });
    setEmployees(data);
  }

  return (
    <div className="container">
      <h1>Register Employees</h1>
      <form id="form">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" ref={firstNameRef} />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" ref={lastNameRef} />

        <label htmlFor="dob">Date of Birth:</label>
        <input type="text" id="dob" name="dob" ref={dobRef} />

        <label htmlFor="socialSecurity">Social Security Number:</label>
        <input
          type="text"
          id="socialSecurity"
          name="socialSecurity"
          ref={socialSecurityRef}
        />

        <label htmlFor="salaryExpectation">Salary Expectation:</label>
        <input
          type="text"
          id="salaryExpectation"
          name="salaryExpectation"
          placeholder="Your salary expectation should be in digits......"
          ref={salaryExpectationRef}
        />
        {showErrorMessage && <ErrorMessage errorMessage={erroMessage} />}
        <button id="addEmployee" onClick={addEmployee}>
          Add
        </button>
      </form>
      <Table employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
};

export default App;
