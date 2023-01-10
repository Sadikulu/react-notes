import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./product";
import products from "./products.json";

const ProductList = () => {
  return (
    <Container>
      <Row className="g-5">
        {products.map((product) => (
          <Col key={product.id} md={4} lg={3} xl={2}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
