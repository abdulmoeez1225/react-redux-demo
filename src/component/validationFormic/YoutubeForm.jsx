import React from "react";
import { useFormik } from "formik";
import { Form, Button, Container, Alert } from "react-bootstrap";

const initialValues = {
  name: "Abdul Moeez",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)
  ) {
    errors.email = "Invalid Email Format";
  }
  if (!values.channel) {
    errors.channel = "required";
  }
  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("form Errors", formik.errors);
  return (
    <Container className={"mt-5"}>
      <Form onSubmit={formik.handleSubmit}>
        <h1>Youtube Form</h1>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            id="name"
            name="name"
          />
          {formik.errors.name ? (
            <Alert variant={"danger"}>{formik.errors.name}</Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            id="email"
            name="email"
          />
          {formik.errors.email ? (
            <Alert variant={"danger"}>{formik.errors.email}</Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Channel</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.channel}
            type="text"
            id="channel"
            name="channel"
          />
          {formik.errors.channel ? (
            <Alert variant={"danger"}>{formik.errors.channel}</Alert>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default YoutubeForm;
