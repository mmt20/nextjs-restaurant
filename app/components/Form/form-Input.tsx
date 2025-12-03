import { Form } from "react-bootstrap";

type FormInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

const FormInput = ({ label, type = "text", placeholder = "" }: FormInputProps) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label style={{ color: "var(--title-color)" }}>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  );
};

export default FormInput;
