import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import { Button, Container, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useStore } from "../../../hook/useStore";
import {
  createProduct,
  fetchBrand,
  fetchCategory,
} from "../../../http/productAPI";
import "./style.css";

const CreateProductModal = observer(({ show, onHide }) => {
  const { category, brand } = useStore();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchCategory().then((data) => category.setCategories(data));
    fetchBrand().then((data) => brand.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", infoId: Date.now() }]);
  };

  const removeInfo = (id) => {
    setInfo(info.filter((i) => i.infoId !== id));
  };

  const changeInfo = (key, value, infoId) => {
    setInfo(
      info.map((i) => (i.infoId === infoId ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", brand.selectedBrand.id);
    formData.append("categoryId", category.selectedCategory.id);
    formData.append("info", JSON.stringify(info));

    createProduct(formData).then((data) => onHide());
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
                {category.selectedCategory.name || "Select category"}
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                {category.categories.map((item) => {
                  return (
                    <Dropdown.Item
                      onClick={() => category.setSelectedCategory(item)}
                      key={item.id}
                    >
                      {item.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="dropdown">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="outline-dark"
              >
                {brand.selectedBrand.name || "Select brand"}
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                {brand.brands.map((item) => {
                  return (
                    <Dropdown.Item
                      onClick={() => brand.setSelectedBrand(item)}
                      key={item.id}
                    >
                      {item.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
          <Form.Group className="form-container" controlId="formBasicEmail">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="product name"
            />
          </Form.Group>
          <Form.Group className="form-container" controlId="formBasicEmail">
            <Form.Label>Product price</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="product price"
              type="nubmer"
            />
          </Form.Group>
          <Form.Group className="form-container" controlId="formFile">
            <Form.Label>Product image</Form.Label>
            <Form.Control type="file" onChange={selectFile} />
          </Form.Group>
          <Button
            className="property-btn"
            variant="outline-dark"
            onClick={addInfo}
          >
            add new property
          </Button>
          {info.map(({ infoId, title, description }) => {
            return (
              <Row className="property-row" key={infoId}>
                <Col md={4}>
                  <Form.Control
                    value={title}
                    onChange={(e) =>
                      changeInfo("title", e.target.value, infoId)
                    }
                    placeholder="add property title"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    value={description}
                    onChange={(e) =>
                      changeInfo("description", e.target.value, infoId)
                    }
                    placeholder="add property description"
                  />
                </Col>
                <Col md={4}>
                  <Button
                    variant={"outline-danger"}
                    onClick={() => removeInfo(infoId)}
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
        <Button variant="outline-success" onClick={addProduct}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProductModal;
