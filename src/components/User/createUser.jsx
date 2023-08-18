import React, { useState } from "react";
import axios from "axios";
import "./user.css";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = null;

    axios
      .post("http://localhost:2020/users/add", { username })
      .then((res) => {
        newData = res.data;
        localStorage.setItem("Exercise User", JSON.stringify(newData));
        console.log("my newData", newData);

        console.log("Responded", res);
        navigate("./users/add");
      })
      .catch((error) => {
        console.log("error occured on post", error);
      });
  };

  return (
    <div className="user-form">
      <h2>Create a New User</h2>
      <h3>POST /api/users</h3>
      <input
        type="text"
        className="form-group"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CreateUser;
