import React from "react";
import user from "../assets/user.svg";

const MyCard = () => {
  return (
    <div className="card" style={{ width: "200px", margin: "auto" }}>
      <div className="card-body">
        <img src={user} alt="user" />
        <p className="card-text ">
          For myself Write better. Think more clearly. Stay organized.
        </p>
      </div>
    </div>
  );
};

export default MyCard;
