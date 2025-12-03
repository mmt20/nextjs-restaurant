"use client";
import { Button, Form } from "react-bootstrap";
import FormInput from "./form-Input";

const SingupForm = () => {
  return (
    <Form className="container mt-5">
      <FormInput label="First Name" type="text" />
      <FormInput label="Last Name" type="text" />
      <FormInput label="Email" type="email" />
      <FormInput label="Password" type="password" />
      <FormInput label="Confirm Password" type="password" />

      <Button variant="danger" type="submit" style={{ color: "white" }}>
        SingUp
      </Button>
    </Form>
  );
};

export default SingupForm;
