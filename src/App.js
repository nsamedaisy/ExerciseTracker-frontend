import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css"
import Form from "./components/form/form";
import DisplayExercise from "./components/displayExercise/DisplayExercise";
import DisplayUser from "./components/displayUSer/DisplayUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Form} />
        <Route path="/users/add" exact Component={DisplayUser} />
        <Route
          path="/exercises/add"
          exact
          Component={DisplayExercise}
        />
      </Routes>
    </Router>
  );
}

export default App;
