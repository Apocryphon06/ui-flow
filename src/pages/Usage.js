import React, { useState } from "react";
import "../App.css";
import user from "../assets/user.svg";
import team from "../assets/team.svg";
import { motion } from "framer-motion";
import { useContext } from "react";
import { PathContext } from "../context/PathContext";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { setUsage } from "../redux/actions";

const Usage = () => {
  // eslint-disable-next-line
  const [pname, setPname] = useContext(PathContext);
  const dispatch = useDispatch();
  const [usg, setUsg] = useState();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="display-6">How are you planning to use Eden?</h1>
      <p>We'll streamline your setup experience accordingly.</p>

      <div className="row area">
        <div
          onClick={() => setUsg("self")}
          className="card mycard"
          style={{ width: "160px", margin: "auto" }}
        >
          <div className="card-body">
            <img className="user" src={user} alt="user" />
            <p className="card-text text-inside">
              For myself Write better. Think more clearly. Stay organized.
            </p>
          </div>
        </div>

        <div
          onClick={() => setUsg("team")}
          className="card mycard"
          style={{ width: "160px", margin: "auto" }}
        >
          <div className="card-body">
            <img className="user" src={team} alt="team" />
            <p className="card-text text-inside">
              With my team Wikis, docs, tasks & projects, all in one place.
            </p>
          </div>
        </div>
      </div>

      <br></br>
      <Button
        onClick={() => {
          setPname("/finish");
          dispatch(setUsage(usg));
        }}
        variant="secondary"
        className="btn"
        type="submit"
      >
        Create Workspace
      </Button>
    </motion.div>
  );
};

export default Usage;
