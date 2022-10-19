import React, { useContext } from "react";
import "../App.css";
import tick from "../assets/tick.svg";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

import { DataContext } from "../context/DataContext";

const Finish = () => {
  const data = useContext(DataContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img className="tick" src={tick} alt="tick"></img>
      <h1 className="display-6">Congratulations, {data}!</h1>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <center className="justify-text-left">
        <Button variant="secondary" className="btn" type="submit">
          Create Workspace
        </Button>
      </center>
    </motion.div>
  );
};

export default Finish;
