import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
const LoginForm = ({ onSubmit }) => {
    const [order, setOrder] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  return (
    <Form onSubmit={onSubmit}>

<Form.Group controlId="formBasicEmail">
        <Form.Label>Order No </Form.Label>
        <Form.Control
          type="order no"
          placeholder="Enter order no"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Garden address </Form.Label>
        <Form.Control
          type="address"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
<Form.Group controlId="formBasicPassword">
        <Form.Label>Enter Gardening Area</Form.Label>
        <Form.Control
          type="Area"
          placeholder="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Garden Images</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          
         
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Work description </Form.Label>
        <Form.Control
          type="work description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
         
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Submit
      </Button>
    </Form>
  );
};
export default function Quote() {
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
      >
        <Button className="btn btn-success text-white cd-5" onClick={handleShow}>
          quote 
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
        
      </Modal>
    </>
  );
}