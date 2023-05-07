import React from "react";

const DeleteBtn = (props) => {
  const id = `delete-${props.ssn}_${props.id}`;
  return (
    <button className="delete-btn" id={id} onClick={props.deleteEmployee}>
      Delete
    </button>
  );
};

export default DeleteBtn;
