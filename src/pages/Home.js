import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { PathContext } from "../context/PathContext";

const Home = () => {
  // eslint-disable-next-line
  const [pname, setPname] = useContext(PathContext);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      exit={{opacity:0}}
    >
      <h1 className="display-6">Welcome! First things first...</h1>
      <p>You can always change them later.</p>
      <center className="justify-text-left">
        <div style={{ display: "block", padding: 30 }}>
          <Form>
            <Form.Group>
              <Form.Label className="text-left ">Full Name</Form.Label>
              <Form.Control
                className="inp text-muted"
                type="text"
                placeholder="Hrithik"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-left">Display Name</Form.Label>
              <Form.Control
                className="inp text-muted"
                type="text"
                placeholder="apocryphon06"
              />
            </Form.Group>
            <br></br>
            <Button
              onClick={() => setPname("/workspace")}
              variant="secondary"
              className="btn"
              type="submit"
            >
              Create Workspace
            </Button>
          </Form>
        </div>
      </center>
    </motion.div>
  );
};

export default Home;
