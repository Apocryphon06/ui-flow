import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  return (
    <div>
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
            <Button variant="secondary" className="btn" type="submit">
              Create Workspace
            </Button>
          </Form>
        </div>
      </center>
    </div>
  );
};

export default Home;
