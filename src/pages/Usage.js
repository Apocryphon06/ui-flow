import React from "react";
import "../App.css";
import user from "../assets/user.svg";
import team from "../assets/team.svg";

import Button from "react-bootstrap/Button";

const Usage = () => {
  return (
    <div>
      <h1 className="display-6">How are you planning to use Eden?</h1>
      <p>We'll streamline your setup experience accordingly.</p>

      <div className="row area">
        <div className="card mycard" style={{ width: "160px", margin: "auto" }}>
          <div className="card-body">
            <img className="user" src={user} alt="user" />
            <p className="card-text text-inside">
              For myself Write better. Think more clearly. Stay organized.
            </p>
          </div>
        </div>

        <div className="card mycard" style={{ width: "160px", margin: "auto" }}>
          <div className="card-body">
            <img className="user" src={team} alt="team" />
            <p className="card-text text-inside">
              With my team Wikis, docs, tasks & projects, all in one place.
            </p>
          </div>
        </div>
      </div>

      <br></br>
      <Button variant="secondary" className="btn" type="submit">
        Create Workspace
      </Button>
    </div>
  );
};

export default Usage;
