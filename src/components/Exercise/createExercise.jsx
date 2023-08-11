import React from "react";

function createExercise() {
  return (
    <div className="right">
      <form className="exercise-form">
        <h2>Add Exercises</h2>
        <h3>POST /api/users/:_id/exercises</h3>
        <div className="form-group">
          <input type="text" className="" placeholder=":_id" />
        </div>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            placeholder="description* "
            // value={}
            // onChange={}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="duration* (mins.)"
            // value={}
            // onChange={}
          />
        </div>
        <div className="form-group">
          <input type="text" className="" placeholder="date (yyy-mm-dd)" />
          {/* <div>
            selected={}
            onChange={}
        </div> */}
        </div>

        <div className="form-group">
          <input
            placeholder="submit"
            type="submit"
            // value="Create Exercise Log"
            className="btn"
          />
        </div>
      </form>
    </div>
  );
}

export default createExercise;
