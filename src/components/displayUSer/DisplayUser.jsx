import React from "react";
import "./display.css";

function DisplayUser() {
  const newData = JSON.parse(localStorage.getItem("Exercise User"));
  return <div>{JSON.stringify(newData)}</div>;
}

export default DisplayUser;
