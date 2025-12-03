"use client";
import { Button, Form } from "react-bootstrap";
import FormInput from "./form-Input";

const LoginForm = () => {
  return (
    <Form className="container mt-5">
      <FormInput label="Email" type="email" placeholder="name@example.com" />
      <FormInput label="Password" type="password" />

      <Button variant="danger" type="submit" style={{ color: "white" }}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
