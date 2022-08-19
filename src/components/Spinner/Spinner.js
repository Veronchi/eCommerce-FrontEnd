import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

export const Spinner = () => {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
