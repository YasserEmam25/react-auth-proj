/* eslint-disable no-unused-expressions */
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function SignIn() {
  const handleGoogleCallback = (res) => {
    console.log(res.credential);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "301251479688-i0fmqo22ibc04ef8ohqjfj0j2gf0alfv.apps.googleusercontent.com",
      callback: handleGoogleCallback,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      shape: "rectangular",
    });
  }, []);

  return (
    <div className="SignIn">
      {/* <Form className="form d-flex  p-2">
        <h1>SignIn</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
      <div id="signInDiv"></div>
    </div>
  );
}

export default SignIn;
