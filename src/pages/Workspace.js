import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { InputGroup } from "react-bootstrap";
import { useContext } from "react";
import { PathContext } from "../context/PathContext";
import { useDispatch } from "react-redux";
import { setWorkspaceNameAndURL } from "../redux/actions";

const Workspace = () => {
  const dispatch = useDispatch();
  const [workName, setWorkName] = useState("");
  const [workUrl, setWorkUrl] = useState("");
  // eslint-disable-next-line
  const [pname, setPname] = useContext(PathContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="display-6">Let's set up a home for all your work</h1>
      <p>You can always create another workspace later.</p>
      <center className="justify-text-left">
        <div style={{ display: "block", padding: 30 }}>
          <Form>
            <Form.Group>
              <Form.Label className="text-dark">Workspace Name</Form.Label>
              <Form.Control
                onChange={(e) => setWorkName(e.target.value)}
                className="inp text-muted"
                type="text"
                placeholder="cutshort_workspace"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-dark">Workspace URL</Form.Label>
            </Form.Group>
            <InputGroup className="inp">
              <InputGroup.Text id="btnGroupAddon">www.eden.com</InputGroup.Text>
              <Form.Control
                onChange={(e) => setWorkUrl(e.target.value)}
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </InputGroup>
            <br></br>
            <Button
              onClick={() => {
                setPname("/usage");
                dispatch(setWorkspaceNameAndURL(workName, workUrl));
              }}
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

export default Workspace;
