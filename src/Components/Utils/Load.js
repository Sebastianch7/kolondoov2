import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Load() {
  return (
    <Row>
      <Col xs={12} className="text-center">
        <img className="img-fluid load" src="/img/Loader_Kolondoo.png" alt="loader"/>
      </Col>
    </Row>
  );
}
