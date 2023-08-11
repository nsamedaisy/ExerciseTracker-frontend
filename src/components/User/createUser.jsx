import React from "react";

function createUser() {

  return (
    <div className="left">
      <h1>Exercise Tracker</h1>
      <form action="" className="user-form">
        <h2 className="form-group">Create a New User</h2>
        <h3>POST /api/users</h3>
        <input type="text" className="form-group" placeholder="username" />
        <input
            placeholder="submit"
            type="submit"
            // value="Create Exercise Log"
            className="btn"
          />
      </form>

      <div className="get-users">
        <p>
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

export default createUser;
