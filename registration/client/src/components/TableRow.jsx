import { React, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";

const TableRow = (props) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    socialSecurity,
    salaryExpectation,
    id,
  } = props.employee;

  useEffect(() => {}, [props]);

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{dateOfBirth}</td>
      <td>{socialSecurity}</td>
      <td>{salaryExpectation}</td>
      <td>{id}</td>
      <td>
        <DeleteBtn
          id={id}
          deleteEmployee={props.deleteEmployee}
          ssn={socialSecurity}
        />
      </td>
    </tr>
  );
};

export default TableRow;
