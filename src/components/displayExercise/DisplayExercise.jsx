import React from "react";
import "./displayExercise.css";

function DisplayExercise() {
  const newData = JSON.parse(localStorage.getItem("Exercise Added"));
  return <div>{JSON.stringify(newData)}</div>;
}

export default DisplayExercise;
