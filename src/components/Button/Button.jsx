import React from "react";
import "./Button.css";

const Button = ({ value, func }) => {
  return (
    <>
      <button className="defaultButton" onClick={func}>
        {value}
      </button>
    </>
  );
};

export default Button;
