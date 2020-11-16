import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const LoginScreen = ({ location, history }) => {
  const redirect = location.search ? location.search.split("=")[1] : "/";
  return (
    <>
      <FormContainer>
        <h1>Sign In</h1>
        <Form>
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

          <Button className="col-12" type="submit" variant="primary">
            Sign In
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            New Customer?
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
