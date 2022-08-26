import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";

function MyForm() {
  return (
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
  );
}

export default MyForm;
