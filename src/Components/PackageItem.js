import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";

const PackageItem = ({ package, onDelete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>{package.name}</Col>
            <Col md={{ span: 4, offset: 2 }}>{package.price}</Col>
          </Row>
        </Card.Title>
        <Card.Text>{package.duration}</Card.Text>
        <Card.Text>{package.validity}</Card.Text>
        <Card.Text>{package.description}</Card.Text>
        <Row>
          <Col md={3}>
            <Link to={`/edit/${package._id}`}>
              <Button>Edit</Button>
            </Link>
          </Col>
          <Col md={3}>
            <Button onClick={() => onDelete(package._id)}>Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PackageItem;
