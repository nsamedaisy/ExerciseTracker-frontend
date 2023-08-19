import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css"
import Form from "./components/form/form";
import DisplayUser from "./components/displayUSer/DisplayUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Form} />
        <Route path="/users/add" exact Component={DisplayUser} />
      </Routes>
    </Router>
  );
}

export default App;
