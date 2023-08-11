import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import CreateExercise from "./components/Exercise/createExercise";
import CreateUser from "./components/User/createUser";

function App() {
  return (
    <div style={{display: 'flex',  margin: "5%"}}>
      <Router>
      <CreateUser />
      <CreateExercise />
      {/* <Routes>
        <Route>
          <R/
oute path="/" exact Component={CreateExercise} />
        <Route path="/" exact Component={CreateUser} />
        </Route>
      </Routes> */}
    </Router>
    </div>
    
  );
}

export default App;
