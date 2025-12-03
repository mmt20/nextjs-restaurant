"use client";
import SingupForm from "@/components/Form/signup-form";
import { Col, Row } from "react-bootstrap";
const SingUp = () => {
  return (
    <Row className="container mt-5">
      <Col md={{ span: 5, offset: 6 }}>
        <h1 style={{ color: "var(--btn-color)" }}>SingUp Page</h1>
        <SingupForm />
      </Col>
    </Row>
  );
};

export default SingUp;
