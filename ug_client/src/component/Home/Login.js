import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Quote from "../Buttons/Quote";
import { NavLink } from "react-bootstrap";
const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
<Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group>
      <NavLink className="nav-link" to="/">
      <Button variant="primary" type="submit" block>
        Login
      </Button>
      </NavLink>
    </Form>
  );
};
export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
return (
  <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      ><Button className="btn btn-success text-white cd-10 md-10" onClick={handleShow}>
          Click   Here   For   Login 
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
         <Quote/>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}