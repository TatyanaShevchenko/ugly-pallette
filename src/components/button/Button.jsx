import React from "react";
import "./Button.css";

export const Button = ({create}) => {
  return (
    <button className="btn-create" onClick={create}>
      Create something ugly
    </button>
  );
};
