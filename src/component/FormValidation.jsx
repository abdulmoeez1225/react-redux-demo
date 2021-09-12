import React from "react";
import * as yup from "yup";

import { Form, Button, Container } from "react-bootstrap";
// import "bootstrap/dist/js/bootstrap.js";
import { userSchema } from "../Validations/UserValidation";

const FormValidation = () => {
  const createUser = async (event) => {
    event.preventDefault();

    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };

    // const isValid = await userSchema.isValid(formData);
    // userSchema.validate(formData).catch(function (e) {
    //   throw e;
    // });
    // console.log(isValid);
  };

  return (
    <Container className={"mt-5"}>
      <Form onSubmit={createUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="password123" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormValidation;
