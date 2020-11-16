import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const RegisterScreen = ({ location, history }) => {
  const redirect = location.search ? location.search.split("=")[1] : "/";
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name"></Form.Control>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone"></Form.Control>
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Region</Form.Label>
          <Form.Control type="text" placeholder="Enter region"></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
          ></Form.Control>
        </Form.Group>

        <Button className="col-12" type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account?
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
