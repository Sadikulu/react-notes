import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const PersonCard = ({ image, name, age }) => {
  return (
    <Card>
      <Row>
        <Col md={2}>
          <Card.Img src={require(`./images/${image}`)} />
        </Col>
        <Col md={10}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{age}</Card.Subtitle>
        </Col>
      </Row>
    </Card>
  );
};

export default PersonCard;
