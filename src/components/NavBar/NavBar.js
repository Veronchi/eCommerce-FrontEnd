import React, { useContext } from "react";
import { Context } from "../..";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import "./style.css";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="title" to={SHOP_ROUTE}>
          Shop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button className="nav-btn" variant={"outline-light"}>
              Admin
            </Button>
            <Button className="nav-btn" variant={"outline-light"}>
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button className="nav-btn" variant={"outline-light"}>
              Sign up
            </Button>
            <Button className="nav-btn" variant={"outline-light"} onClick={() => user.setIsAuth(true)}>
              Sign in
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
