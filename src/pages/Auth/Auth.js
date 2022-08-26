import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registration, signIn } from "../../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { useStore } from "../../hook/useStore";
import "./style.css";

const Auth = observer(() => {
  const { user } = useStore();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await signIn(login, password);
      } else {
        data = await registration(email, login, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(from, { replace: true });
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container className="auth-container d-flex justify-content-center">
      <Card className="auth-card">
        <h2 className="card-title">{isLogin ? "Sign in" : "Create account"}</h2>
        <Form className="d-flex flex-column">
          {isLogin ? null : (
            <Form.Control
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          <Form.Control
            className="form-input"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Form.Control
            className="form-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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

            <Button
              className="form-btn"
              onClick={click}
              variant={"outline-success"}
            >
              Continue
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
