import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";

const Workspace = () => {
  return (
    <div>
      <h1 className="display-6">Let's set up a home for all your work</h1>
      <p>You can always create another workspace later.</p>
      <center className="justify-text-left">
        <div style={{ display: "block", padding: 30 }}>
          <Form>
            <Form.Group>
              <Form.Label className="text-dark">Workspace Name</Form.Label>
              <Form.Control
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
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </InputGroup>
            <br></br>
            <Button variant="secondary" className="btn" type="submit">
              Create Workspace
            </Button>
          </Form>
        </div>
      </center>
    </div>
  );
};

export default Workspace;
