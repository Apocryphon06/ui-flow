import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { PathContext } from "../context/PathContext";
import { setNameDisplayName } from "../redux/actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [fname, setfname] = useState("");
  const [dname, setdname] = useState("");

  // eslint-disable-next-line
  const [pname, setPname] = useContext(PathContext);
  return (
    <motion.div
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="display-6">Welcome! First things first...</h1>
      <p>You can always change them later.</p>
      
        <div style={{ display: "block", padding: 30 }}>
          <Form>
            <Form.Group>
              <Form.Label className="text-left" style={{textAlign:'left'}}>Full Name</Form.Label>
              <Form.Control
                className="inp text-muted m-auto"
                type="text"
                placeholder="Hrithik"
                onChange={(e)=>setfname(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-left">Display Name</Form.Label>
              <Form.Control
                className="inp text-muted m-auto"
                type="text"
                placeholder="apocryphon06"
                onChange={(e)=>setdname(e.target.value)}
              />
            </Form.Group>
            <br></br>
            <Button
              onClick={() => {
                setPname("/workspace");
                dispatch(setNameDisplayName(fname, dname));
              }}
              variant="secondary"
              className="btn"
              type="submit"
            >
              Create Workspace
            </Button>
          </Form>
        </div>
      
    </motion.div>
  );
};

export default Home;
