import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Container, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Context } from "../../../index";
import Dropdown from "react-bootstrap/Dropdown";
import "./style.css";

const CreateProductModal = ({ show, onHide }) => {
  const { category, brand } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", infoId: Date.now() }]);
  };

  const removeInfo = (id) => {
    setInfo(info.filter((i) => i.infoId !== id));
  };

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container className="dropdown-container d-flex justify-content-start">
            <Dropdown className="dropdown">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="outline-dark"
              >
                Select category
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                {category.categories.map((item) => {
                  return (
                    <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="dropdown">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="outline-dark"
              >
                Select brand
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                {brand.brands.map((item) => {
                  return (
                    <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
          <Form.Group className="form-container" controlId="formBasicEmail">
            <Form.Label className="form-label">Product name</Form.Label>
            <Form.Control placeholder="product name" />
          </Form.Group>
          <Form.Group className="form-container" controlId="formBasicEmail">
            <Form.Label className="form-label">Product price</Form.Label>
            <Form.Control placeholder="product price" type="nubmer" />
          </Form.Group>
          <Form.Group className="form-container" controlId="formBasicEmail">
            <Form.Label className="form-label">Product image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button
            className="property-btn"
            variant="outline-dark"
            onClick={addInfo}
          >
            add new property
          </Button>
          {info.map((item) => {
            return (
              <Row className="property-row" key={item.infoId}>
                <Col md={4}>
                  <Form.Control placeholder="add property title" />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder="add property description" />
                </Col>
                <Col md={4}>
                  <Button
                    variant={"outline-danger"}
                    onClick={() => removeInfo(item.infoId)}
                  >
                    Delete property
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProductModal;
