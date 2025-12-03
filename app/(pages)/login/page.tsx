import LoginForm from "@/app/components/Form/login-form";
import { Col, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Row className="container mt-5">
      <Col md={{ span: 5, offset: 6 }}>
        <h1 style={{ color: "var(--btn-color)" }}>Login Page</h1>
        <LoginForm />
      </Col>
    </Row>
  );
};

export default Login;
