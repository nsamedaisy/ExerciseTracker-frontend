import React from "react";
import "./form.css";
import CreateExercise from "../Exercise/createExercise";
import CreateUser from "../User/createUser";

function Form() {
  return (
    <div className="body">
      <h1>Exercise Tracker</h1>
      <div className="wrap">
        <CreateUser />
        <CreateExercise />
      </div>
      <div className="get-users">
        <p className="p1">
          <span>GET user's exercise log: </span>
          GET /api/users/:_id/logs?[from][&to][&limit]
        </p>
        <p>
          <span>[]</span> = optional{" "}
        </p>
        <p>
          <span>from, to</span> = dates(yyyy-mm-dd); <span>limit</span> = number
        </p>
      </div>
    </div>
  );
}

export default Form;
