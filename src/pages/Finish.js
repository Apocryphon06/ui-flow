import React from "react";
import "../App.css";
import tick from "../assets/tick.svg";
import Button from "react-bootstrap/Button";

const Finish = () => {
  return (
    <div>
      <img className="tick" src={tick} alt="tick"></img>
      <h1 className="display-6">Congratulations, Hrithik C!</h1>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <center className="justify-text-left">
        <Button variant="secondary" className="btn" type="submit">
          Create Workspace
        </Button>
      </center>
    </div>
  );
};

export default Finish;
