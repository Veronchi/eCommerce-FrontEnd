import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hook/useStore";
import "./style.css";

const NavBar = observer(() => {
  const { user } = useStore();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="title" to={SHOP_ROUTE}>
          Shop
        </Link>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Link
              className="nav-link"
              to={ADMIN_ROUTE}
            >
              Admin
            </Link>
            <Link
              className="nav-link"
              to={LOGIN_ROUTE}
            >
              Exit
            </Link>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Link
              className="nav-link"
              to={REGISTRATION_ROUTE}
            >
              Sign up
            </Link>
            <Link
              className="nav-link"
              onClick={() => user.setIsAuth(true)}
              to={SHOP_ROUTE}
            >
              Sign in
            </Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
