import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import "./style.css";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container className="auth-container d-flex justify-content-center">
      <Card className="auth-card">
        <h2 className="card-title">{isLogin ? "Sign in" : "Create account"}</h2>
        <Form className="d-flex flex-column">
          {isLogin ? null : (
            <Form.Control className="form-input" placeholder="Email" />
          )}
          <Form.Control className="form-input" placeholder="Login" />
          <Form.Control className="form-input" placeholder="Password" />
          <div className="btn-container">
            {isLogin ? (
              <Link className="form-link" to={REGISTRATION_ROUTE}>
                Create account
              </Link>
            ) : (
              <Link className="form-link" to={LOGIN_ROUTE}>
                Sign in
              </Link>
            )}

            <Button className="form-btn" variant={"outline-success"}>
              Continue
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
