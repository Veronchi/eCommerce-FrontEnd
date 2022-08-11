import React from "react";
import { Button, Container } from "react-bootstrap";
import "./style.css"

const Admin = () => {
  console.log(111)
  return (
    <Container className="admin-container d-flex flex-column">
      <Button className="add-btn" variant={"outline-dark"}>Add cotegory</Button>
      <Button className="add-btn" variant={"outline-dark"}>Add brand</Button>
      <Button className="add-btn" variant={"outline-dark"}>Add product</Button>
    </Container>
  );
};

export default Admin;
