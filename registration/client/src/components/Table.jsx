import { React, useEffect } from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  useEffect(() => {}, [props]);
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Social Security Number</th>
          <th>Salary Expectation</th>
          <th>Employee ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="tableBody">
        {props.employees.map((employee, index) => (
          <TableRow
            key={index}
            employee={employee}
            deleteEmployee={props.deleteEmployee}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
