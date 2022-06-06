import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./signIn.css";

const SignIn = () => {
  const { user, setuser, createSignIn, signInWithGoogle } = useFirebase();
  const emailRef = useRef();
  const passwordRef = useRef();
  //gogle

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createSignIn(email, password);
  };

  return (
    <div className="signIn">
      <div onClick={signInWithGoogle} className="googleSingIn text-center">
        {" "}
        sign in with google{" "}
      </div>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <div>
          {" "}
          Not Regeistered? please <Link to="/signUp">signUp</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
