import { getAuth } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./signUp.css";
const SignUp = () => {
  const { user, setuser, createUser } = useFirebase();
  const auth = getAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSignInForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUser(email, password);
  };
  return (
    <div className="signUp">
      <Form onSubmit={handleSignInForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
        <div>
          {" "}
          Already Regeistered? please <Link to="/signIn">signIn</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
