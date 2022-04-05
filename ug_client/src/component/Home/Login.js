import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const multiuser = (e) => {
    if (email === "admin" && password === "admin") {
      window.open("http://localhost:3002/admin/dashboard"); }
    else if (email === "user" && password === "user") {
      window.open("http://localhost:3000/ReceiveQuote");
    }
    else {
      <h6> not valid</h6>
    }
}
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group>
<<<<<<< Updated upstream
      <NavLink className="nav-link" to="/ReceiveQuote">
        <Button variant="primary" type="submit" block>
          Login
        </Button>
        </NavLink>
     
=======
      {/* <NavLink className="nav-link" to="/ReceiveQuote"> */}
      <Button onClick={multiuser} variant="primary" type="submit" block>
        Login
      </Button>
      {/* </NavLink> */}
>>>>>>> Stashed changes
    </Form>
  );
};
export default Login