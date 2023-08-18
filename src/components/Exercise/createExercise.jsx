import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./exercise.css";

// const userURL = process.env.REACT_AP_USER_URL;
const exerciseUrl = process.env.REACT_APP_EXERCISE_URL;

function CreateExercise() {
  const [userId, setUserId] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let newData = null;
    const newExercise = {
      userId,
      description,
      duration,
      date,
    };

    axios
      .post(exerciseUrl, newExercise)
      .then((res) => {
        newData = res.data;
        // localStorage.setItem("Exercise Added", JSON.stringify(newData));
        console.log(newData, "New exercise created with user");
        window.open(`http://localhost:2020/exercises/${userId}`, "_blank");
      })
      .catch((err) => {
        console.log(err, "An error occured");
      });
    // navigate(`./exercises/add`);
  };

  return (
    <div className="exercise-form">
      <h2>Add Exercises</h2>
      <h3>POST /api/users/:_id/exercises</h3>
      <div className="form-group">
        <input
          type="text"
          className=""
          placeholder="UserID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          required
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Duration (mins.)"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className=""
          placeholder="Date (yyy-mm-dd)"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>

      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CreateExercise;
