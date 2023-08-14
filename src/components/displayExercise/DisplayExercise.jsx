import React from "react";
import "./displayExercise.css";

function DisplayExercise() {
  const newData = JSON.parse(localStorage.getItem("Add Exercise"));
  return <div>{JSON.stringify(newData)}</div>;
}

export default DisplayExercise;
