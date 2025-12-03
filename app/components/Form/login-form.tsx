"use client";
import { Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Form className="container mt-5">
      <FormGroup className="mb-3">
        <FormLabel htmlFor="email" style={{ color: "var(--title-color)" }}>
          Email address
        </FormLabel>
        <FormControl type="email" id="email" placeholder="name@example.com" />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel htmlFor="inputPassword" style={{ color: "var(--title-color)" }}>
          Password
        </FormLabel>
        <FormControl type="password" id="inputPassword" />
      </FormGroup>

      <Button variant="danger" type="submit" style={{ color: "white" }}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
