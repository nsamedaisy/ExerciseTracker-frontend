import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ExerciseList from "./components/exercisesList";
import EditExercise from "./components/editExercise";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact Component={ExerciseList} />
      <Route path="/edit/:id" exact Component={EditExercise} />
      <Route path="/create" exact Component={CreateExercise} />
      <Route path="/user" exact Component={CreateUser} />
    </Router>
  );
}

export default App;
